import React, { useState, useEffect } from 'react'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { callApiChiTietPH, callApiListClass, callApiSaveParent } from '@/functions/callApi'
import { useRouter } from 'next/router'
import Slide_class_fillter from '@/components/common/slide_list_class_fillter'
import axios from 'axios'
import Cookies from 'js-cookie'
import { log } from 'console'

import Modal_dang_nhap from '@/components/common/modal_dang_nhap'

import Link from 'next/link'

const ChiTietPH = () => {
	const router = useRouter()
	const { id } = router.query
	console.log(id)
	const [showModalLogin, setShowModalLogin] = useState(false)
	const [token, setToken] = useState('')
	useEffect(() => {
		// Lấy token từ cookie khi component được tạo
		const userToken = Cookies.get('token_base365')
		if (userToken) {
			setToken(userToken)
		}
	}, [])
	const [gender, setGender] = useState()
	const [userName, setuserName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [birthday, setBirthday] = useState('')
	const [phone, setPhone] = useState([])
	const [emailContact, setEmailContact] = useState('')
	const [address, setAddress] = useState('')
	const [detailPh, setDetailPh] = useState('')
	const [saved, setSaved] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiChiTietPH({ id: id })
				console.log(response)
				setuserName(response.data.userName)
				setGender(response.data.gender)
				setBirthday(response.data.birthday)
				setPhone(response.data.phone)
				setEmailContact(response.data.emailContact)
				setAddress(response.data.address)
				setDetailPh(response.data.detailPh)
				setSaved(response.data.saved)
				setAvatar(response.data.avatarUser)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [id])
	console.log('tesst', userName)

	const formattedDate = (date1: any) => {
		const date = new Date(date1)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Tháng bắt đầu từ 0, cần +1
		const year = date.getFullYear()

		const formattedDate = `${day}/${month}/${year}`
		return formattedDate
	}
	const [listClass, setListClass] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiListClass({})
				setListClass(response.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	function filter(objects: any) {
		return objects.filter(function (obj: any) {
			return obj.trangthai_lop === 0
		})
	}
	const listClassFillter = filter(listClass)
	console.log(listClassFillter)
	const ModalClick = async () => {
		console.log(token)
		if (!token) {
			setShowModalLogin(true)
		}
	}

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="robots" content="index,follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link
				rel="preload"
				href="/fonts/Roboto-Bold.woff2"
				as="font"
				type="font/woff2"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Roboto-Medium.woff2"
				as="font"
				type="font/woff2"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Roboto-Regular.woff2"
				as="font"
				type="font/woff2"
				crossOrigin=""
			/>

			<link rel="stylesheet" media="all" href="/gia-su/css/includes/header.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/detail_parent.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/modal.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/footer.css" />

			<div className="wrapper">
				<div className="header-re">
					<Header token_base365={token} />
					<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={2} />
					<div className="wps-ln text-center">
						<p>
							<Link href="/gia/su" title="Gia Sư 365">
								Gia sư 365{' '}
							</Link>
							/
							<a href="danh-cho-gia-su.html" title="Phụ Huynh">
								Phụ huynh
							</a>{' '}
							/
							<a href="" title={userName}>
								{userName}
							</a>
						</p>
					</div>
				</div>
				<div className="content-ph">
					<div className="container">
						<div className="contract-ph">
							<div className="ex-ph-one" id="id">
								<div className="ct-ph-one add_img_ph" id="id_pra">
									<img
										className=" ls-is-cached lazyloaded"
										src={avatar ? avatar : '/gia-su/img/add.png'}
										alt="anh dai dien"
									/>
								</div>
								<div
									className="value_img_ph"
									data-value="<img class='lazyload' src='../gia-su/img/loader.gif' data-src='../upload/ph/2023/08/07/PH1691570454.PNG' alt='anh dai dien'>"
								/>
								<div className="ct-ph-tow">
									<h3 id="name">{userName}</h3>
									<div className="ph-tt">
										{gender === 1 && <p className="t-ph">Nam</p>}
										{gender === 2 && <p className="t-ph">Nữ</p>}
										{gender === 3 && <p className="t-ph">Giới tính khác</p>}
										<p className="br-ph">{formattedDate(birthday)}</p>
										<p
											className="dt-ph b_login_ph"
											data-toggle="modal"
											data-target="#dngsModal"
											onClick={() => ModalClick()}
										>
											<span>{phone}</span>
										</p>
										<p
											className="ml-ph b_login_ph"
											data-toggle="modal"
											data-target="#dngsModal"
											onClick={() => ModalClick()}
										>
											<span>{emailContact}</span>
										</p>
									</div>
									<div className="dc-ph">
										<p className="gt-qh" id="address">
											{address}
										</p>
									</div>
								</div>
								<div className="ct-ph-three">
									<div className="ph-btl">
										<button
											type="submit"
											className="ph-bt-one text-center save_login b_login_ph"
											data-toggle="modal"
											data-target="#dngsModal"
											onClick={() => ModalClick()}
										>
											<p>{saved === 'lưu' && 'Lưu phụ huynh'}</p>
											<p>{saved === 'Đã lưu' && 'Đã lưu phụ huynh'}</p>
										</button>
									</div>
									<div className="ph-btl-tow ">
										<button
											id="icon-button"
											type="submit"
											className="inlineBlock _2tga _89n_ _8j9v"
											title="Thích"
										>
											<span className="_8f1i" />
											<div className="flex">
												<span className="_3jn- inlineBlock _2v7">
													<span className="_3jn_" />
													<span className="_49vg">
														<img
															className="_1pbs inlineBlock img"
															src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/YIS3ivaSt-J.png"
															alt=""
															width={16}
															height={16}
														/>
													</span>
													<span className="_5n2y">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 16 16"
															className="_1pbq"
															color="#ffffff"
														>
															<path
																fill="none"
																stroke="#ffffff"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M2.808 8.354l3.135 3.195 7.383-7.2"
															/>
														</svg>
														<img
															className="_1pbs inlineBlock img"
															src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/pJoAsLqC77U.png"
															alt=""
															width={16}
															height={16}
														/>
													</span>
												</span>
												<span className="_49vh _2pi7">Thích</span>
												<span className="_5n6h _2pih" id="u_0_1_7z">
													4
												</span>
											</div>
										</button>

										<div className="ph-cs">
											<img
												className=" ls-is-cached lazyloaded"
												src="/gia-su/img/twitter 1.png"
												data-src="/gia-su/img/twitter 1.png"
												alt=""
												width="23"
												height="23"
											/>
										</div>
										<div className="ph-cs">
											<img
												className=" ls-is-cached lazyloaded"
												src="/gia-su/img/facebook (2) 1.png"
												data-src="/gia-su/img/facebook (2) 1.png"
												alt=""
												width="23"
												height="23"
											/>
										</div>
										<div className="ph-cs">
											<img
												className=" ls-is-cached lazyloaded"
												src="/gia-su/img/intergram.svg"
												data-src="/gia-su/img/intergram.svg"
												alt=""
												width="23"
												height="23"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="gt-ph-one">
							<div className="ph-ct-nd">
								<h3>Giới thiệu chung</h3>
								<p />
							</div>
						</div>

						<Slide_class_fillter listClassFillter={listClassFillter} />
					</div>
				</div>
				<div className="clear" />
				<Footer />
			</div>
		</>
	)
}
export default ChiTietPH
