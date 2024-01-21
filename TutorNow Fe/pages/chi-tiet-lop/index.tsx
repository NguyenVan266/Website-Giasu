import React, { useEffect, useRef, useState } from 'react'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Search from '@/components/common/search'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Input } from 'antd'
import {
	DS_PH_DeNghiDay,
	callApiDS_Lop_DaLuu,
	callApiDetailClass,
	callApiListClass,
	callApiListClassPh,
	callApiOfferTeach,
	callApiSaveCourse,
	callApideleteSaveClass,
	callApilistAllSubject,
} from '@/functions/callApi'
import Slide_class from '@/components/common/slide_list_class'
import Link from 'next/link'
import Modal_dang_nhap from '@/components/common/modal_dang_nhap'
const repuestGs = [
	{ value: '1', label: 'Sinh viên' },
	{ value: '2', label: 'Giáo viên mầm non' },
	{ value: '3', label: 'Giáo viên cấp 1' },
	{ value: '4', label: 'Giáo viên cấp 2' },
	{ value: '5', label: 'Giáo viên cấp 3' },
	{ value: '6', label: 'Giảng viên đại học' },
	{ value: '7', label: 'Chuyên gia' },
	{ value: '8', label: 'Người nước ngoài' },
	{ value: '9', label: 'Học sinh' },
	{ value: '10', label: 'Không yêu cầu' },
]
const genderOptions = [
	{ value: '1', label: 'Nam' },
	{ value: '2', label: 'Nữ' },
	{ value: '3', label: 'Không yêu cầu' },
]
const trangThaiLop = [
	{ value: '0', label: 'Đang tìm gia sư' },
	{ value: '1', label: 'Đã có gia sư' },
	{ value: '2', label: 'Kết thúc' },
]

const ChiTietLop = () => {
	const [showModalLogin, setShowModalLogin] = useState(false)
	const [dataClass, setDataClass] = useState({})
	const [pft_address, setPft_address] = useState('')
	const [phi_nhan_lop, setPhi_nhan_lop] = useState('')
	const [ten_mon_hoc, setTen_mon_hoc] = useState('')
	const [countInvite, setCountInvite] = useState('')
	const [pft_nb_lesson, setPft_nb_lesson] = useState('')
	const [pft_time, setPft_time] = useState('')
	const [Hinhthucday, setHinhthucday] = useState('')
	const [pft_nb_student, setPft_nb_student] = useState('')
	const [userName, setUserName] = useState('')
	const [pft_detail, setPft_detail] = useState('')
	const [lichDay, setlichDay] = useState([])
	const [emailContact, setEmailContact] = useState('')
	const [phone, setPhone] = useState('')
	const [classTearch, setClassTearch] = useState('')
	const [typeGs, setTypeGS] = useState<string | undefined>(undefined)
	const [gender, setGender] = useState<string | undefined>(undefined)
	const [trangthai, setTrangthai] = useState<string | undefined>(undefined)
	const [subject, setSubject] = useState('')
	const [id_Phu_Huynh, setId_Phu_Huynh] = useState(0)
	const [title, setTitle] = useState('')
	const [avatar, setAvatar] = useState<any>()
	const [st2, setst2] = useState(0)
	const [st3, setst3] = useState(0)
	const [st4, setst4] = useState(0)
	const [st5, setst5] = useState(0)
	const [st6, setst6] = useState(0)
	const [st7, setst7] = useState(0)
	const [scn, setscn] = useState(0)
	const [ct2, setct2] = useState(0)
	const [ct3, setct3] = useState(0)
	const [ct4, setct4] = useState(0)
	const [ct5, setct5] = useState(0)
	const [ct6, setct6] = useState(0)
	const [ct7, setct7] = useState(0)
	const [ccn, setccn] = useState(0)
	const [tt2, settt2] = useState(0)
	const [tt3, settt3] = useState(0)
	const [tt4, settt4] = useState(0)
	const [tt5, settt5] = useState(0)
	const [tt6, settt6] = useState(0)
	const [tt7, settt7] = useState(0)
	const [tcn, settcn] = useState(0)
	const router = useRouter()
	const { id_lop } = router.query
	console.log(id_lop)

	// const queryString = window.location.search;
	// const urlParams = new URLSearchParams(queryString);
	// const idLop = urlParams.get('id_lop');
	// console.log(idLop);
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(id_lop)
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiDetailClass({ id_lop: id_lop })
				setId_Phu_Huynh(response.data.id_Phu_Huynh)
				console.log(response.data.id_Phu_Huynh)
				setAvatar(response.data.avatarUser)
				setPft_address(response.data.pft_address)
				console.log(response.data.pft_address)
				setTen_mon_hoc(response.data.ten_mon_hoc)
				setPhi_nhan_lop(response.data.phi_nhan_lop)
				setCountInvite(response.data.countInvite)
				setPft_nb_lesson(response.data.pft_nb_lesson)
				setPft_time(response.data.pft_time)
				setHinhthucday(response.data.Hinhthucday)
				setPft_nb_student(response.data.pft_nb_student)
				setUserName(response.data.userName)
				setEmailContact(response.data.emailContact)
				setPhone(response.data.phone)
				setPft_detail(response.data.pft_detail)
				setTitle(response.data.title)

				const listAllSubject = await callApilistAllSubject([])
				const listSubject = listAllSubject.list

				const responseListClass = await callApiListClassPh([])
				const listClass = responseListClass.list
				// const a = listClass.find((item: any) => item.ct_id === response.data.classTearch_id);
				// setClassTearch(a.ct_name);

				const b = repuestGs.find((item: any) => Number(item.value) === response.data.tutor_style)
				setTypeGS(b?.label)

				const c = genderOptions.find((item: any) => item.value === response.data.pft_gender)
				setGender(c?.label)
				const d = trangThaiLop.find(
					(item: any) => Number(item.value) === response.data.trangthai_lop
				)
				setTrangthai(d?.label)
				const e = listClass.find(
					(item: any) => Number(item.as_id) === response.data.chi_tiet_mon_hoc
				)
				setSubject(e?.as_name)
				setst2(response.schedule.st2)
				setst3(response.schedule.st3)
				setst4(response.schedule.st4)
				setst5(response.schedule.st5)
				setst6(response.schedule.st6)
				setst7(response.schedule.st7)
				setscn(response.schedule.scn)
				setct2(response.schedule.ct2)
				setct3(response.schedule.ct3)
				setct4(response.schedule.ct4)
				setct5(response.schedule.ct5)
				setct6(response.schedule.ct6)
				setct7(response.schedule.ct7)
				setccn(response.schedule.ccn)
				settt2(response.schedule.tt2)
				settt3(response.schedule.tt3)
				settt4(response.schedule.tt4)
				settt5(response.schedule.tt5)
				settt6(response.schedule.tt6)
				settt7(response.schedule.tt7)
				settcn(response.schedule.tcn)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [id_lop])
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

	//lưu lớp
	const [type, setType] = useState(0)
	const [dsLopDaLuu, setdsLopDaLuu] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDS_Lop_DaLuu({})
				setdsLopDaLuu(response.data)
				const data = dsLopDaLuu.find((item: any) => item.pft_id === id_lop)
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
				if (type === 1) {
					const res = await callApiSaveCourse({
						pft_id: id_lop,
					})
					// Gửi yêu cầu cập nhật thành công
					console.log('Lưu lớp thành công')
				} else if (type === 0) {
					const res = await callApideleteSaveClass({
						id: id_lop,
					})
				}
			} catch (err) {
				console.log(err)
			}
		}
		updateApi()
	}, [type])

	const changeSave = (id: any) => {
		if (!token || (token && typeToken !== '1')) {
			setShowModalLogin(true)
		}
		if (token && typeToken === '1') {
			if (type === 0) {
				setType(1) // Cập nhật giá trị type thành 1
			} else if (type === 1) {
				setType(0) // Cập nhật giá trị type thành 0
			}
		}
	}

	// đề nghị dạy

	const offerTeach = async (pft_id: any, ugs_parent: any) => {
		if (!token || (token && typeToken !== '1')) {
			setShowModalLogin(true)
		}
		if (token && typeToken === '1') {
			try {
				const res = await callApiOfferTeach({
					pft_id: pft_id,
					ugs_parent: ugs_parent,
				})
				if (res.data !== null) {
					alert(res.message)
				}
			} catch (err) {
				console.log(err)
			}
		}
	}

	//lọc ra lớp dạy

	const [token, setToken] = useState('')
	const [typeToken, setTypeToken] = useState('')
	useEffect(() => {
		const userToken = Cookies.get('token_base365')
		const typeUserToken = Cookies.get('type')

		if (userToken) {
			setToken(userToken)
		}
		if (typeUserToken) {
			setTypeToken(typeUserToken)
		}
	}, [])
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
			<link rel="preload" as="style" href="/gia-su/css/includes/header.css" />
			<link rel="preload" as="style" href="/gia-su/css/includes/detail_class.css" />
			<link rel="preload" as="style" href="/gia-su/css/includes/modal.css" />
			<link rel="preload" as="style" href="/gia-su/css/includes/footer.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/header.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/detail_class.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/modal.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/footer.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/bootstrap.min.css" />
			<title>{title}</title>
			<div className="wrapper">
				<div className="header-re">
					<Header token_base365={token} />
					<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={1} />
					<div className="search" style={{ background: 'none' }}>
						<Search />
					</div>
				</div>
				<div className="content-lh">
					<div className="ex-lh-one">
						<div className="container" id="dnd_usid">
							<div className="wps-ln breadcrum_class">
								<p>
									<Link href="/gia-su" title="Gia Sư 365">
										Trang chủ{' '}
									</Link>
									/
									<a href="danh-cho-gia-su.html" title="Lớp Học">
										Lớp học
									</a>{' '}
									/
									<a className="title_class" href="" title={title}>
										{title}
									</a>
								</p>
							</div>
							<div className="ct-lh-one" id="pft_id">
								<div className="gt-dc" id="ugs_parent">
									<h1 className="gt-dc-h1">{title}</h1>
									<div className="add_img_class">
										<img
											className=" ls-is-cached lazyloaded"
											width="725"
											height="280"
											src={avatar ? avatar : '/gia-su/img/add.png'}
											alt="err"
										/>
									</div>
									<div
										className="value_img_class"
										data-value="<img class='lazyload' width='725' height='280' src='../gia-su/img/loader.gif' data-src='../upload/ph/2023/08/07/PH1691570454.PNG' alt='Tìm gia sư vật lý lý thuyết'>"
									/>
									<div className="dc-lh">
										<img src="/gia-su/img/Vector1.png" alt="" />
										<p className="gt-tp">{pft_address}</p>
									</div>
								</div>
								<div className="gt-ct-one">
									<h3>Chi tiết nội dung</h3>
									<p>{pft_detail}</p>
								</div>
								<div className="gt-ld">
									<h3>Lịch dạy</h3>
									<form action="">
										<div className="row h_chon_ngay_lh">
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 2" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 3" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 4" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 5" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 6" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="Thứ 7" />
											<Input type="button" className="col-md col-xl col-12" defaultValue="CN" />
										</div>
										<div className="wrapper-lh">
											<div className="container container_lh">
												<label className="option_item">
													<div className={`option_inner instagram ${st2 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${st3 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${st4 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${st5 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${st6 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${st7 === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${scn === 1 && 'active_cal'}`}>
														<div className="name">Sáng</div>
													</div>
												</label>
											</div>
											<div className="container container_lh">
												<label className="option_item">
													<div className={`option_inner instagram ${ct2 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ct3 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ct4 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ct5 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ct6 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ct7 === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${ccn === 1 && 'active_cal'}`}>
														<div className="name">Chiều</div>
													</div>
												</label>
											</div>
											<div className="container container_lh">
												<label className="option_item">
													<div className={`option_inner instagram ${tt2 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tt3 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tt4 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tt5 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tt6 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tt7 === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className={`option_inner instagram ${tcn === 1 && 'active_cal'}`}>
														<div className="name">Tối</div>
													</div>
												</label>
											</div>
										</div>
									</form>
								</div>
								<div className="tk-lq">
									<h3>Từ khóa liên quan</h3>
									<div className="lq-tk">
										<a className="tklq">Tìm lớp gia sư Lý lớp 6</a>
										<a className="tklq">Tìm lớp gia sư Lý lớp 7</a>
										<a className="tklq">Tìm lớp gia sư Lý lớp 8</a>
										<a className="tklq">Tìm lớp gia sư Lý lớp 9</a>
										<a className="tklq">Tìm lớp gia sư Lý lớp 10</a>
									</div>
								</div>
							</div>
							<div className="ct-lh-tow">
								<div className="tt-btl">
									<p
										className="tt-bt-one b_login_ph"
										data-toggle="modal"
										data-target="#dngsModal"
										onClick={() => changeSave(id_lop)}
									>
										<img width={16} height={17} src="/gia-su/img/Vector2.png" alt="" />
										{type === 0 && ' lưu tin'}
										{type === 1 && 'Đã lưu tin'}
									</p>
									<p
										className="tt-bt-tow b_login_ph"
										data-toggle="modal"
										data-target="#dngsModal"
										onClick={() => offerTeach(id_lop, id_Phu_Huynh)}
									>
										<img width={16} height={17} src="/gia-su/img/exp-01.png" alt="" /> Đề nghị dạy
									</p>
								</div>
								<div className="tt-cb">
									<div className="tt-ct">
										<p>Email</p>
										<p className="subject">
											<span className="">{emailContact}</span>
										</p>
									</div>
									<div className="tt-ct">
										<p>Số điện thoại</p>
										<p className="subject">
											<span className="">{phone}</span>
										</p>
									</div>
									<div className="tt-ct">
										<p>Trạng thái</p>
										<p className="subject">
											<span> {trangthai}</span>
										</p>
									</div>
									<div className="tt-ct">
										<p>Phí nhận lớp</p>
										<p className="subject" id="pft_price">
											<span>{phi_nhan_lop}</span>
										</p>
									</div>
									<div className="tt-ct">
										<p id="pft_nb_lesson">Môn học</p>
										<a href="/tim-lop-gia-su-ly-sj2.html" target="_blank">
											<p className="subject">{ten_mon_hoc}</p>
										</a>
									</div>
									<div className="tt-ct">
										<p>Lớp dạy</p>
										<a href="/tim-lop-gia-su-cap-3-lv16.html" target="_blank">
											<p className="subject">{subject}</p>
										</a>
									</div>
									<div className="tt-ct">
										<p>Lời đề nghị dạy</p>
										<p className="subject">{countInvite}</p>
									</div>
									<div className="tt-ct">
										<p>Số buổi học</p>
										<p className="subject">{pft_nb_lesson} buổi</p>
									</div>
									<div className="tt-ct">
										<p>Thời gian học</p>
										<p className="subject">{pft_time} </p>
									</div>
									<div className="tt-ct">
										<p>Yêu cầu gia sư</p>
										<p className="subject">{typeGs}</p>
									</div>
									<div className="tt-ct">
										<p>Giới tính gia sư</p>
										<p className="subject">{gender}</p>
									</div>
									<div className="tt-ct">
										<p>Mã lớp học</p>
										<p className="subject">{id_lop}</p>
									</div>
									<div className="tt-ct">
										<p className="htd">Hình thức dạy</p>
										<p className="subject">{Hinhthucday}</p>
									</div>
									<div className="tt-ct">
										<p>Số học viên</p>
										<p className="subject"> {pft_nb_student}</p>
									</div>
								</div>
								<div className="ttcn-ph">
									<div className="ttr-c">
										<div className="ttr-avt">
											<a onClick={() => router.push(`/chi-tiet-ph/?id=${id_Phu_Huynh}`)}>
												<img
													className=" ls-is-cached lazyloaded"
													src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
													data-src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
													alt="Phụ Huynh Test1"
												/>
											</a>
										</div>
										<div className="ttr-tt">
											<h4>
												Đăng bởi: <a href="/phu-huynh-test-ph4419.html">{userName} </a>
											</h4>
											<p>{pft_address}</p>
										</div>
									</div>
								</div>
								<div className="tt-lq">
									<div className="nd-lq">
										<button className="lx">Lượt xem: 260 </button>
										<button className="lt">
											<img src="/gia-su/img/like.svg" alt="1" />
											Thích
										</button>
										<div className="ph-cs">
											<img src="/gia-su/img/twitter 1.png" alt="1" />
										</div>
										<div className="ph-cs">
											<img src="/gia-su/img/facebook (2) 1.png" alt="1" />
										</div>
										<div className="ph-cs">
											<img src="/gia-su/img/intergram.svg" alt="1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Slide_class listClass={listClass} />
				</div>
				<div className="clear" />
				<Footer />
			</div>
		</>
	)
}

export default ChiTietLop
