import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { salary_class_tutor, mapSubject } from '@/functions/functions'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Modal_moi_day from './modal_moi_day'
import Modal_dang_nhap from './modal_dang_nhap'
import { Input } from 'antd'
export default function Slide_giasu({ day_tainha }: any) {
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
	const count_item = day_tainha ? Object.keys(day_tainha).length : 0;
	const customStyle = {
		display: count_item < 4 ? 'flex' : '',
		// Thêm các thuộc tính style khác nếu cần
	}
	const router = useRouter()
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

	return (
		<>
			{count_item > 0 && (
				<div className="content-three has-clip">
					<div className="nd-ct b-nd-ct">
						<div className="ct-tow-h">
							<h2>Gia sư dạy kèm tại nhà</h2>
							<div className="p-ct-nd">
								<p>Trở thành một phần của chúng tôi</p>
							</div>
							<div className="p-ct-ad">
								<p>
									<a onClick={() => router.push('/tim-kiem-gia-su')}>Xem tất cả</a>
								</p>
							</div>
						</div>
						<div className="next" style={{ zIndex: 1 }}></div>
						<div className="slider-gs" style={customStyle}>
							{count_item > 4 ? (
								<div className="dl_tc">
									<Slider {...settings}>
										{day_tainha?.map((item: any, index: any) => {
											return (
												<div className="sl-sh" key={index}>
													<div className="hov">
														<img
															className="lazyload"
															src={item['ugs_avatar']}
															onError={(e) => {
																const target = e.target as HTMLImageElement
																target.onerror = null
																target.src = '/gia-su/img/add.png'
															}}
															alt={item['ugs_name']}
														/>
														<div className="gt">
															<h3>
																<a
																	onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}
																	tabIndex={-1}
																>
																	{item['ugs_name']}
																</a>
															</h3>
															<div className="sl-gt">
																<p>
																	{item['ct_name']}
																	<span>|</span>
																	{mapSubject(json?.subject, item['as_id'])}
																</p>
															</div>
															<p className="gt-pri">
																<span>
																	{salary_class_tutor(
																		item['ugs_unit_price'],
																		item['ugs_salary'],
																		item['ugs_month'],
																		item['ugs_time']
																	)}
																</span>
															</p>
															<div className="tt-lh">
																<h4>
																	<a
																		onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}
																		tabIndex={-1}
																	>
																		{item['ugs_name']}
																	</a>
																</h4>
																<div className="lh">
																	<div className="mar-one mb-2" style={{ marginLeft: 10 }}>
																		<p>{mapSubject(json?.subject, item['as_id'])}</p>
																	</div>
																	<div className="mar-three mb-2" style={{ marginLeft: 10 }}>
																		{item.experience <= 0 ? (
																			<p>Kinh nghiệm: {item.experience} năm</p>
																		) :
																			<p>Chưa có kinh nghiệm</p>
																		}

																	</div>
																	<div className="mar-four mb-2" style={{ marginLeft: 10 }}>
																		<p>Lịch dạy</p>
																	</div>
																</div>
																<div className="day">
																	<div className="row h_chon_ngay_dh">
																		<Input
																			type="button"
																			className="col-md col-xl col-12 "
																			defaultValue="Sáng"
																			tabIndex={-1}
																		/>
																		<Input
																			type="button"
																			className="col-md col-xl col-12 "
																			defaultValue="Chiều"
																			tabIndex={-1}
																		/>
																		<Input
																			type="button"
																			className="col-md col-xl col-12 "
																			defaultValue="Tối"
																			tabIndex={-1}
																		/>
																	</div>
																	<div className="wrapper-dh">
																		<div className="container container_dh">
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st2'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T2</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st3'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T3</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st4'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T4</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st5'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T5</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st6'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T6</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['st7'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T7</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['scn'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">CN</div>
																				</div>
																			</label>
																		</div>
																		<div className="container container_dh">
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct2'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T2</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct3'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T3</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct4'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T4</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct5'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T5</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct6'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T6</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ct7'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T7</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['ccn'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">CN</div>
																				</div>
																			</label>
																		</div>
																		<div className="container container_dh">
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt2'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T2</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt3'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T3</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt4'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T4</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt5'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T5</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt6'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T6</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tt7'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">T7</div>
																				</div>
																			</label>
																			<label className="option_item">
																				<div
																					className={`option_inner instagram ${item['tcn'] == 1 ? 'active_cal' : ''
																						}`}
																				>
																					<div className="name">CN</div>
																				</div>
																			</label>
																		</div>
																	</div>
																</div>
																<div className="tt-ad">
																	<p>{item['ugs_about_us']}</p>
																</div>
															</div>
														</div>
													</div>
													<button
														className="bt-dn b_login_ph"
														data-toggle="modal"
														data-target="#dnsModal"
														tabIndex={-1}
													>
														Mời dạy
													</button>
												</div>
											)
										})}
									</Slider>
								</div>
							) : (
								<Slider {...settings}>
									{day_tainha?.map((item: any, index: any) => {
										return (
											<div className="sl-sh" key={index}>
												<div className="hov">
													<img
														className="lazyload"
														src="../gia-su/img/add.png"
														data-src="../gia-su/img/add.png"
														alt={item['ugs_name']}
													/>
													<div className="gt">
														<h3>
															<a
																onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}
																tabIndex={-1}
															>
																{item['ugs_name']}
															</a>
														</h3>
														<div className="sl-gt">
															<p>
																{item['ct_name']}
																<span>|</span>
																{mapSubject(json?.subject, item['as_id'])}
															</p>
														</div>
														<p className="gt-pri">
															<span>
																{salary_class_tutor(
																	item['ugs_unit_price'],
																	item['ugs_salary'],
																	item['ugs_month'],
																	item['ugs_time']
																)}
															</span>
														</p>
														<div className="tt-lh">
															<h4>
																<a
																	onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}
																	tabIndex={-1}
																>
																	{item['ugs_name']}
																</a>
															</h4>
															<div className="lh">
																<div className="mar-one mb-2" style={{ marginLeft: 10 }}>
																	<p>{mapSubject(json?.subject, item['as_id'])}</p>
																</div>
																<div className="mar-three mb-2" style={{ marginLeft: 10 }}>
																		{item.experience <= 0 ? (
																			<p>Kinh nghiệm: {item.experience} năm</p>
																		) :
																			<p>Chưa có kinh nghiệm</p>
																		}
																</div>
																<div className="mar-four mb-2" style={{ marginLeft: 10 }}>
																	<p>Lịch dạy</p>
																</div>
															</div>
															<div className="day">
																<div className="row h_chon_ngay_dh">
																	<Input
																		type="button"
																		className="col-md col-xl col-12 "
																		defaultValue="Sáng"
																		tabIndex={-1}
																	/>
																	<Input
																		type="button"
																		className="col-md col-xl col-12 "
																		defaultValue="Chiều"
																		tabIndex={-1}
																	/>
																	<Input
																		type="button"
																		className="col-md col-xl col-12 "
																		defaultValue="Tối"
																		tabIndex={-1}
																	/>
																</div>
																<div className="wrapper-dh">
																	<div className="container container_dh">
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st2'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T2</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st3'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T3</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st4'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T4</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st5'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T5</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st6'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T6</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['st7'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T7</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['scn'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">CN</div>
																			</div>
																		</label>
																	</div>
																	<div className="container container_dh">
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct2'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T2</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct3'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T3</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct4'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T4</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct5'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T5</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct6'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T6</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ct7'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T7</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['ccn'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">CN</div>
																			</div>
																		</label>
																	</div>
																	<div className="container container_dh">
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt2'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T2</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt3'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T3</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt4'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T4</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt5'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T5</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt6'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T6</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tt7'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">T7</div>
																			</div>
																		</label>
																		<label className="option_item">
																			<div
																				className={`option_inner instagram ${item['tcn'] == 1 ? 'active_cal' : ''
																					}`}
																			>
																				<div className="name">CN</div>
																			</div>
																		</label>
																	</div>
																</div>
															</div>
															<div className="tt-ad">
																<p>{item['ugs_about_us']}</p>
															</div>
														</div>
													</div>
												</div>
												<button
													className="bt-dn b_login_ph"
													data-toggle="modal"
													data-target="#dnsModal"
													tabIndex={-1}
													onClick={() => handleClickModal(item)}
												>
													Mời dạy
												</button>
											</div>
										)
									})}
								</Slider>
							)}
						</div>
						<div className="pre" style={{ zIndex: 1 }}></div>
					</div>
				</div>
			)}
			<Modal_moi_day
				thongTinGiaSu={thongTinGiaSu}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={2} />
		</>
	)
}
