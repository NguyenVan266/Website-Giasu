import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'
import { Input } from 'antd'
import Cookies from 'js-cookie'
import Modal_moi_day from '@/components/common/modal_moi_day'
import Modal_dang_nhap from '@/components/common/modal_dang_nhap'
export default function SlideGs({ listGs }: any) {
	const [showModal, setShowModal] = useState(false)
	const [showModalLogin, setShowModalLogin] = useState(false)
	const [thongTinGiaSu, setThongTinGiaSu] = useState({})
	const handleClickModal = async (thongTin: any) => {
		const isCookieExists = Cookies.get('token_base365') !== undefined
		console.log(isCookieExists)

		if (isCookieExists) {
			await setThongTinGiaSu(thongTin)
			setShowModal(true)
		} else {
			setShowModalLogin(true)
		}
	}
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
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
	}
	const router = useRouter()
	return (
		<>
			<div className="gs-cnt-tow b-gs-cnt-tow">
				<h2 className="gs-tt-h2">Gia sư tương tự</h2>

				<div className="gs-sld">
					<Slider {...settings}>
						{listGs?.map((item: any, key: number) => {
							return (
								<div className="sl-gs" key={key}>
									<div className="hov">
										<img
											className="lazyload"
											src={item.ugs_avatar ? item.ugs_avatar : '/gia-su/img/add.png'}
											alt="gia su"
										/>
										<div className="gt b_gt">
											<h3>
												<a onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}>
													{item.ugs_name}
												</a>
											</h3>
											<div className="sl-gt">
												<p>
													{item.ct_name}
													<span>|</span>
													{item.as_name}
												</p>
											</div>
											<p className="gt-pri">
												<span>
													{item.ugs_unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ
												</span>
											</p>
											{/* hover */}
											<div className="tt-lh gs__lienquan">
												<h4>
													<a
														onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}
														tabIndex={0}
													>
														{item.ugs_name}
													</a>
												</h4>
												<div className="lh">
													<div className="mar-one mb-2">
														<p>{item.as_name}</p>
													</div>
													<div className="mar-three mb-2">
														<p>{item.experience} năm</p>
													</div>
													<div className="mar-four mb-2">
														<p>Lịch dạy</p>
													</div>
												</div>
												<div className="day">
													<div className="row h_chon_ngay_dh">
														<Input
															type="button"
															className="col-md col-xl col-12 "
															defaultValue="Sáng"
														/>
														<Input
															type="button"
															className="col-md col-xl col-12 "
															defaultValue="Chiều"
														/>
														<Input
															type="button"
															className="col-md col-xl col-12 "
															defaultValue="Tối"
														/>
													</div>
													<div className="wrapper-dh">
														<div className="container container_dh">
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st2 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T2</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st3 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T3</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st4 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T4</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st5 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T5</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st6 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T6</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.st7 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T7</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.scn === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">CN</div>
																</div>
															</label>
														</div>
														<div className="container container_dh">
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct2 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T2</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct3 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T3</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct4 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T4</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct5 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T5</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct6 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T6</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ct7 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T7</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.ccn === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">CN</div>
																</div>
															</label>
														</div>
														<div className="container container_dh">
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt2 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T2</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt3 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T3</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt4 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T4</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt5 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T5</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt6 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T6</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tt7 === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">T7</div>
																</div>
															</label>
															<label className="option_item">
																<div
																	className={`option_inner instagram ${
																		item.tcn === 1 && 'active_cal'
																	}`}
																>
																	<div className="name">CN</div>
																</div>
															</label>
														</div>
													</div>
												</div>
												<div className="tt-ad">
													<p>{item.ugs_about_us}</p>
												</div>
											</div>
										</div>
									</div>
									<button
										className="bt-dn"
										data-toggle="modal"
										data-target="#dnsModal"
										onClick={() =>
											handleClickModal({
												ugs_name: item.ugs_name,
												ugs_avatar: item.ugs_avatar,
												ugs_id: item.ugs_id,
											})
										}
									>
										Mời dạy
									</button>
								</div>
							)
						})}
					</Slider>
				</div>

				<Modal_moi_day
					thongTinGiaSu={thongTinGiaSu}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
				<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} />
			</div>
		</>
	)
}
