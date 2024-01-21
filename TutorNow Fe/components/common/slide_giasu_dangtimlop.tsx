import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'
export default function Slide_giasu_dangtimlop() {
	const sliderRef = useRef<Slider | null>(null)
	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customNextArrow} onClick={onClick} />
	}

	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customPrevArrow} onClick={onClick} />
	}
	const settings = {
		dots: true, // Hiển thị các điểm đại diện cho từng slide
		infinite: true, // Cho phép tua vô hạn qua các slide
		slidesToShow: 4, // Số slide hiển thị cùng một lúc
		slidesToScroll: 1, // Số slide được chuyển khi người dùng tua
		speed: 500, // Tốc độ chuyển slide (milliseconds)
		autoplay: true, // Tự động chạy
		autoplaySpeed: 2000, // Tốc độ chuyển slide khi tự động chạy (milliseconds)
		// nextArrow: <SampleNextArrow />,
		// prevArrow: <SamplePrevArrow />,
	}
	const router = useRouter()
	return (
		<>
			<div className="gs-sld">
				<Slider {...settings}>
					<div
						className="sl-gs slick-slide"
						data-slick-index={0}
						aria-hidden="true"
						tabIndex={-1}
						role="tabpanel"
						id="slick-slide00"
						aria-describedby="slick-slide-control00"
						style={{ width: 300 }}
					>
						<div className="hov">
							<img
								className=" lazyloaded"
								src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								data-src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								alt="gia su"
							/>
							<div className="gt b_gt">
								<h3>
									<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
										hùng
									</a>
								</h3>
								<div className="sl-gt">
									<p>
										Hà Nội<span>|</span>
										Toán{' '}
									</p>
								</div>
								<p className="gt-pri">
									<span>200,000 - 500,000 VNĐ/Buổi </span>
								</p>
								{/* hover */}
								<div className="tt-lh gs__lienquan">
									<h4>
										<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
											hùng{' '}
										</a>
									</h4>
									<div className="lh">
										<div className="mar-one mb-2">
											<p>Toán</p>
										</div>
										<div className="mar-three mb-2">
											<p>Kinh nghiệm: 1 năm</p>
										</div>
										<div className="mar-four mb-2">
											<p>Lịch dạy</p>
										</div>
									</div>
									<div className="day">
										<div className="row h_chon_ngay_dh">
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Sáng"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Chiều"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Tối"
												tabIndex={-1}
											/>
										</div>
										<div className="wrapper-dh">
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div className="tt-ad">
										<p>
											iei dicifneisioc i idkwoepgglb djksuenr
											<br />
											124456
											<br />
											78901
										</p>
									</div>
								</div>
								{/* --- */}
							</div>
						</div>
						<button className="bt-dn" data-toggle="modal" data-target="#dnsModal" tabIndex={-1}>
							Mời dạy
						</button>
					</div>
					<div
						className="sl-gs slick-slide"
						data-slick-index={0}
						aria-hidden="true"
						tabIndex={-1}
						role="tabpanel"
						id="slick-slide00"
						aria-describedby="slick-slide-control00"
						style={{ width: 300 }}
					>
						<div className="hov">
							<img
								className=" lazyloaded"
								src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								data-src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								alt="gia su"
							/>
							<div className="gt b_gt">
								<h3>
									<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
										hùng
									</a>
								</h3>
								<div className="sl-gt">
									<p>
										Hà Nội<span>|</span>
										Toán{' '}
									</p>
								</div>
								<p className="gt-pri">
									<span>200,000 - 500,000 VNĐ/Buổi </span>
								</p>
								{/* hover */}
								<div className="tt-lh gs__lienquan">
									<h4>
										<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
											hùng{' '}
										</a>
									</h4>
									<div className="lh">
										<div className="mar-one mb-2">
											<p>Toán</p>
										</div>
										<div className="mar-three mb-2">
											<p>Kinh nghiệm: 1 năm</p>
										</div>
										<div className="mar-four mb-2">
											<p>Lịch dạy</p>
										</div>
									</div>
									<div className="day">
										<div className="row h_chon_ngay_dh">
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Sáng"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Chiều"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Tối"
												tabIndex={-1}
											/>
										</div>
										<div className="wrapper-dh">
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div className="tt-ad">
										<p>
											iei dicifneisioc i idkwoepgglb djksuenr
											<br />
											124456
											<br />
											78901
										</p>
									</div>
								</div>
								{/* --- */}
							</div>
						</div>
						<button className="bt-dn" data-toggle="modal" data-target="#dnsModal" tabIndex={-1}>
							Mời dạy
						</button>
					</div>
					<div
						className="sl-gs slick-slide"
						data-slick-index={0}
						aria-hidden="true"
						tabIndex={-1}
						role="tabpanel"
						id="slick-slide00"
						aria-describedby="slick-slide-control00"
						style={{ width: 300 }}
					>
						<div className="hov">
							<img
								className=" lazyloaded"
								src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								data-src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								alt="gia su"
							/>
							<div className="gt b_gt">
								<h3>
									<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
										hùng
									</a>
								</h3>
								<div className="sl-gt">
									<p>
										Hà Nội<span>|</span>
										Toán{' '}
									</p>
								</div>
								<p className="gt-pri">
									<span>200,000 - 500,000 VNĐ/Buổi </span>
								</p>
								{/* hover */}
								<div className="tt-lh gs__lienquan">
									<h4>
										<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
											hùng{' '}
										</a>
									</h4>
									<div className="lh">
										<div className="mar-one mb-2">
											<p>Toán</p>
										</div>
										<div className="mar-three mb-2">
											<p>Kinh nghiệm: 1 năm</p>
										</div>
										<div className="mar-four mb-2">
											<p>Lịch dạy</p>
										</div>
									</div>
									<div className="day">
										<div className="row h_chon_ngay_dh">
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Sáng"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Chiều"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Tối"
												tabIndex={-1}
											/>
										</div>
										<div className="wrapper-dh">
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div className="tt-ad">
										<p>
											iei dicifneisioc i idkwoepgglb djksuenr
											<br />
											124456
											<br />
											78901
										</p>
									</div>
								</div>
								{/* --- */}
							</div>
						</div>
						<button className="bt-dn" data-toggle="modal" data-target="#dnsModal" tabIndex={-1}>
							Mời dạy
						</button>
					</div>
					<div
						className="sl-gs slick-slide"
						data-slick-index={0}
						aria-hidden="true"
						tabIndex={-1}
						role="tabpanel"
						id="slick-slide00"
						aria-describedby="slick-slide-control00"
						style={{ width: 300 }}
					>
						<div className="hov">
							<img
								className=" lazyloaded"
								src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								data-src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								alt="gia su"
							/>
							<div className="gt b_gt">
								<h3>
									<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
										hùng
									</a>
								</h3>
								<div className="sl-gt">
									<p>
										Hà Nội<span>|</span>
										Toán{' '}
									</p>
								</div>
								<p className="gt-pri">
									<span>200,000 - 500,000 VNĐ/Buổi </span>
								</p>
								{/* hover */}
								<div className="tt-lh gs__lienquan">
									<h4>
										<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
											hùng{' '}
										</a>
									</h4>
									<div className="lh">
										<div className="mar-one mb-2">
											<p>Toán</p>
										</div>
										<div className="mar-three mb-2">
											<p>Kinh nghiệm: 1 năm</p>
										</div>
										<div className="mar-four mb-2">
											<p>Lịch dạy</p>
										</div>
									</div>
									<div className="day">
										<div className="row h_chon_ngay_dh">
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Sáng"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Chiều"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Tối"
												tabIndex={-1}
											/>
										</div>
										<div className="wrapper-dh">
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div className="tt-ad">
										<p>
											iei dicifneisioc i idkwoepgglb djksuenr
											<br />
											124456
											<br />
											78901
										</p>
									</div>
								</div>
								{/* --- */}
							</div>
						</div>
						<button className="bt-dn" data-toggle="modal" data-target="#dnsModal" tabIndex={-1}>
							Mời dạy
						</button>
					</div>
					<div
						className="sl-gs slick-slide"
						data-slick-index={0}
						aria-hidden="true"
						tabIndex={-1}
						role="tabpanel"
						id="slick-slide00"
						aria-describedby="slick-slide-control00"
						style={{ width: 300 }}
					>
						<div className="hov">
							<img
								className=" lazyloaded"
								src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								data-src="../gia-su/upload/gs/2022/03/21/GS1652090437.gif"
								alt="gia su"
							/>
							<div className="gt b_gt">
								<h3>
									<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
										hùng
									</a>
								</h3>
								<div className="sl-gt">
									<p>
										Hà Nội<span>|</span>
										Toán{' '}
									</p>
								</div>
								<p className="gt-pri">
									<span>200,000 - 500,000 VNĐ/Buổi </span>
								</p>
								{/* hover */}
								<div className="tt-lh gs__lienquan">
									<h4>
										<a onClick={() => router.push('/hung-gs463')} tabIndex={-1}>
											hùng{' '}
										</a>
									</h4>
									<div className="lh">
										<div className="mar-one mb-2">
											<p>Toán</p>
										</div>
										<div className="mar-three mb-2">
											<p>Kinh nghiệm: 1 năm</p>
										</div>
										<div className="mar-four mb-2">
											<p>Lịch dạy</p>
										</div>
									</div>
									<div className="day">
										<div className="row h_chon_ngay_dh">
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Sáng"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Chiều"
												tabIndex={-1}
											/>
											<input
												type="button"
												className="col-md col-xl col-12 "
												defaultValue="Tối"
												tabIndex={-1}
											/>
										</div>
										<div className="wrapper-dh">
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
											<div className="container container_dh">
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T2</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T3</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T4</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T5</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T6</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">T7</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">CN</div>
													</div>
												</label>
											</div>
										</div>
									</div>
									<div className="tt-ad">
										<p>
											iei dicifneisioc i idkwoepgglb djksuenr
											<br />
											124456
											<br />
											78901
										</p>
									</div>
								</div>
								{/* --- */}
							</div>
						</div>
						<button className="bt-dn" data-toggle="modal" data-target="#dnsModal" tabIndex={-1}>
							Mời dạy
						</button>
					</div>
				</Slider>
			</div>
		</>
	)
}
