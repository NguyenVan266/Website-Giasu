import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'
import { callApiSaveCourse, callApiDS_Lop_DaLuu, callApideleteSaveClass } from '@/functions/callApi'
import { Image } from 'antd'

export default function Slide_class({ listClass }: any) {
	const sliderRef = useRef<Slider | null>(null)
	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customNextArrow} onClick={onClick} />
	}
	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customPrevArrow} onClick={onClick} />
	}
	interface MyComponentProps {
		subject: []
	}
	const [json, SetJson] = useState<MyComponentProps>({
		subject: [],
	})
	useEffect(() => {
		const fetchData = async () => {
			type Response = any
			const response: Response = await fetch('data/data.json')
			const datajson = await response.json()
			SetJson(datajson)
		}
		fetchData()
	}, [])
	const settings = {
		dots: false, // Hiển thị các điểm đại diện cho từng slide
		infinite: true, // Cho phép tua vô hạn qua các slide
		slidesToShow: 4, // Số slide hiển thị cùng một lúc
		slidesToScroll: 1, // Số slide được chuyển khi người dùng tua
		speed: 500, // Tốc độ chuyển slide (milliseconds)
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// Add more breakpoints as needed
		],
	}
	const count_item = Object.keys(listClass).length
	const customStyle = {
		display: count_item < 4 ? 'flex' : '',
		// Thêm các thuộc tính style khác nếu cần
	}
	const router = useRouter()

	// hàm lưu lớp
	const [type, setType] = useState(0)
	const [idLop, setIdLop] = useState('')
	const [dsLopDaLuu, setdsLopDaLuu] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDS_Lop_DaLuu({})
				setdsLopDaLuu(response.data)
				const data = dsLopDaLuu.find((item: any) => item.pft_id === idLop)
				if (data) {
					setType(1)
				} else {
					setType(0)
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	useEffect(() => {
		const updateApi = async () => {
			try {
				if (type === 0) {
					const res = await callApiSaveCourse({
						pft_id: idLop,
					})
					// Gửi yêu cầu cập nhật thành công
					console.log('Lưu lớp thành công')
				} else if (type === 1) {
					const res = await callApideleteSaveClass({
						id: idLop,
					})
					// Gửi yêu cầu cập nhật thành công
					console.log('Xóa lớp thành công')
				}
			} catch (err) {
				console.log(err)
			}
		}
		updateApi()
	}, [type])

	const changeSave = (id: any) => {
		setIdLop(id)
		if (type === 0) {
			setType(1) // Cập nhật giá trị type thành 1
		} else if (type === 1) {
			setType(0) // Cập nhật giá trị type thành 0
		}
	}

	return (
		<>
			{count_item > 0 && (
				<div className="content-three has-clip ">
					<div className="nd-ct b-nd-ct " style={{ margin: '150px' }}>
						<div className="ct-tow-h">
							<h2>Các lớp học liên quan</h2>
						</div>
						<div className="next" style={{ zIndex: 1 }}></div>
						<div className="slider-gs" style={customStyle}>
							{count_item > 4 ? (
								<div className="dl_tc">
									<Slider {...settings}>
										{listClass?.map((item: any, index: number) => {
											return (
												<div className="tc-ct" id="id_gs" data-id={4419} key={index}>
													<div className="tc" id="pft_id" data-id={493}>
														<a onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.id_lop}`)}>
															<img
																className=" ls-is-cached lazyloaded"
																src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
																data-src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
																alt="Phụ Huynh Test1"
															/>
														</a>
														<h4>
															<a
																onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.id_lop}`)}
															>
																{item.title}
															</a>
														</h4>
														<div className="ct-ic">
															<p className="ct-ic-one">{item.city}</p>
															<p
																className="ct-ic-tow"
																data-toggle="modal"
																data-target="#dngsModal"
																onClick={() => changeSave(item.id_lop)}
															>
																{type === 0 && 'lưu tin'}
																{type === 1 && 'đã lưu tin'}
															</p>
														</div>
														<p className="ct-ct-p">{item.alias}</p>
														<div className="ct-bt">
															<p className="ct-bt-co">Mã lớp:{item.id_lop} </p>
															<p className="ct-bt-pr css_price">{item.phi_nhan_lop} VNĐ/Buổi </p>
														</div>
													</div>
												</div>
											)
										})}
									</Slider>
								</div>
							) : (
								listClass?.map((item: any, index: any) => {
									;<div className="tc-ct" id="id_gs" data-id={4419} key={index}>
										<div className="tc" id="pft_id" data-id={493}>
											<a onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.id_lop}`)}>
												<img
													className=" ls-is-cached lazyloaded"
													src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
													data-src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
													alt="Phụ Huynh Test1"
												/>
											</a>
											<h4>
												<a href="/tim-gia-su-lop-9-c493.html">{item.title}</a>
											</h4>
											<div className="ct-ic">
												<p className="ct-ic-one">{item.city}</p>
												<p
													className="ct-ic-tow"
													data-toggle="modal"
													data-target="#dngsModal"
													onClick={() => changeSave(item.id_lop)}
												>
													{type === 0 && ' lưu tin'}
													{type === 1 && 'Đã lưu tin'}
												</p>
											</div>
											<p className="ct-ct-p">{item.alias}</p>
											<div className="ct-bt">
												<p className="ct-bt-co">Mã lớp:{item.id_lop} </p>
												<p className="ct-bt-pr css_price">{item.phi_nhan_lop} VNĐ/Buổi </p>
											</div>
										</div>
									</div>
								})
							)}
						</div>
						<div className="pre" style={{ zIndex: 1 }}></div>
					</div>
				</div>
			)}
		</>
	)
}
