import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'
import { callApiSaveCourse } from '@/functions/callApi'
export default function Slide_class_fillter({ listClassFillter }: any) {
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
		slidesToShow: 3, // Số slide hiển thị cùng một lúc
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
	const count_item = Object.keys(listClassFillter).length

	const customStyle = {
		display: count_item < 4 ? 'flex' : '',
		// Thêm các thuộc tính style khác nếu cần
	}
	const router = useRouter()

	// hàm lưu lớp
	const SaveCourse = async (e: any) => {
		try {
			const res = await callApiSaveCourse({
				pft_id: e,
			})
			window.location.reload()
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
			{count_item > 0 && (
				<div className="content-three has-clip ">
					<div className="nd-ct b-nd-ct ">
						<div className="ct-tow-h ">
							<h2>Lớp học đang tìm gia sư</h2>
						</div>
						<div className="next" style={{ zIndex: 1 }}></div>
						<div className="slider-gs" style={customStyle}>
							{count_item > 4 ? (
								<div className="dl_tc">
									<Slider {...settings}>
										{listClassFillter?.map((item: any, index: any) => {
											return (
												<div className="tc-ct" id="id_ph" data-id={4419} key={index}>
													<div className="tc">
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
															<p className="ct-ic-tow" data-toggle="modal" data-target="#dngsModal">
																Lưu tin
															</p>
														</div>
														<p className="ct-ct-p">{item.alias}</p>
														<div className="ct-bt">
															<p className="ct-bt-co">Mã lớp:{item.id_lop}</p>
															<p className="ct-bt-pr">{item.phi_nhan_lop} VNĐ/Buổi </p>
														</div>
													</div>
												</div>
											)
										})}
									</Slider>
								</div>
							) : (
								listClassFillter?.map((item: any, index: any) => {
									return (
										<div className="tc-ct" id="id_ph" data-id={4419} key={index}>
											<div className="tc">
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
													<p className="ct-ic-tow" data-toggle="modal" data-target="#dngsModal">
														Lưu tin
													</p>
												</div>
												<p className="ct-ct-p">{item.alias}</p>
												<div className="ct-bt">
													<p className="ct-bt-co">Mã lớp:{item.id_lop}</p>
													<p className="ct-bt-pr">{item.phi_nhan_lop} VNĐ/Buổi </p>
												</div>
											</div>
										</div>
									)
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
