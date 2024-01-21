import React, { useState, useEffect } from 'react'
import styles from './chi-tiet-gs.module.css'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Search from '@/components/common/search'
import {
	callApiListSubject,
	callApiListPoint,
	callApiUpdatePointParent,
	callApiListClassPh,
	callApiHome,
	callApiDetailGs,
} from '@/functions/callApi'
import axios from 'axios'
import { useRouter } from 'next/router'
import SlideGs from '@/components/common/slide_gs'
import Cookies from 'js-cookie'
import { Modal, Input } from 'antd'
import { set } from 'date-fns'
import dayjs from 'dayjs'
import Link from 'next/link'
import Modal_moi_day from '@/components/common/modal_moi_day'
import Modal_dang_nhap from '@/components/common/modal_dang_nhap'
const ChiTietGS = () => {
	const [showModal, setShowModal] = useState(false)
	const [showModalLogin, setShowModalLogin] = useState(false)
	const [thongTinGiaSu, setThongTinGiaSu] = useState({})
	function formatDateTime(dateTimeString: any) {
		const formattedDate = dayjs(dateTimeString).format('DD-MM-YYYY')
		return formattedDate
	}
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
		{ value: 1, label: 'Nam' },
		{ value: 2, label: 'Nữ' },
		{ value: 3, label: 'Không yêu cầu' },
	]
	const marriedOptions = [
		{ value: 0, label: 'Chưa kết hôn' },
		{ value: 1, label: 'Đã kết hôn' },
	]
	const formOptions = [
		{ value: 1, label: 'Gặp mặt' },
		{ value: 2, label: 'Online' },
	]
	const router = useRouter()
	const token = Cookies.get('token_base365')
	const { id } = router.query
	const [modalOpen, setModalOpen] = useState(false)
	const [modalOpenHetDiem, setModalOpenHetDiem] = useState(false)
	const [emailContact, setEmailContact] = useState('')
	const [phone, setPhone] = useState('')
	const [birthday, setBirthday] = useState('')
	const [gender, setGender] = useState<string | undefined>(undefined)
	const [ugs_salary, setUgs_salary] = useState('')
	const [address, setAddress] = useState('')
	const [district, setDistrict] = useState('')
	const [ugs_achievements, setUgs_achievements] = useState<number>()
	const [experience, setExperience] = useState('')
	const [married, setMarried] = useState<string | undefined>(undefined)
	const [typeGS, setTypeGS] = useState<string | undefined>(undefined)
	const [ugs_graduation_year, setUgs_graduation_year] = useState('')
	const [as_id, setAs_id] = useState<string | undefined>(undefined)
	const [ugs_month, setUgs_month] = useState('')
	const [ugs_class_teach, setUgs_class_teach] = useState<string | undefined>(undefined)
	const [as_detail, setAs_detail] = useState('')
	const [ugs_about_us, setUgs_about_us] = useState('')
	const [ugs_formality, setUgs_formality] = useState<string | undefined>(undefined)
	const [ugs_school, setUgs_school] = useState('')
	const [ugs_specialized, setUgs_specialized] = useState('')
	const [ugs_time, setUgs_time] = useState('')
	const [ugs_tutor_style, setUgs_tutor_style] = useState<string | undefined>(undefined)
	const [ugs_unit_price, setUgs_unit_price] = useState('')
	const [ugs_workplace, setUgs_workplace] = useState('')
	const [updatedAt, setUpdatedAt] = useState('')
	const [userName, setUserName] = useState('')
	const [ugs_id, setUgsId] = useState('')
	const [pointParent, setPointParent] = useState('')
	const [avatarUser, setAvatarUser] = useState('')
	const [isCanViewDetail, setIsCanViewDetail] = useState(false)
	const [listIdTeach, setListIdTeach] = useState<string[]>(['44', '48', '67'])
	const [st2, setSt2] = useState<number>(0)
	const [st3, setSt3] = useState<number>(0)
	const [st4, setSt4] = useState<number>(0)
	const [st5, setSt5] = useState<number>(0)
	const [st6, setSt6] = useState<number>(0)
	const [st7, setSt7] = useState<number>(0)
	const [scn, setScn] = useState<number>(0)
	const [ct2, setCt2] = useState<number>(0)
	const [ct3, setCt3] = useState<number>(0)
	const [ct4, setCt4] = useState<number>(0)
	const [ct5, setCt5] = useState<number>(0)
	const [ct6, setCt6] = useState<number>(0)
	const [ct7, setCt7] = useState<number>(0)
	const [ccn, setCcn] = useState<number>(0)
	const [tt2, setTt2] = useState<number>(0)
	const [tt3, setTt3] = useState<number>(0)
	const [tt4, setTt4] = useState<number>(0)
	const [tt5, setTt5] = useState<number>(0)
	const [tt6, setTt6] = useState<number>(0)
	const [tt7, setTt7] = useState<number>(0)
	const [tcn, setTcn] = useState<number>(0)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const pointParents = localStorage.getItem('pointParent')
			if (pointParents) {
				const storedUserObject = JSON.parse(pointParents)
				setPointParent(storedUserObject)
			}
		}
	}, [])

	useEffect(() => {
		const ListPoint = async () => {
			// localStorage.setItem('pointParent', "4");
			try {
				const response = await callApiListPoint({})
				// Xử lý kết quả từ API (nếu cần)
				if (response.result) {
					if (response.data && response.data.length != 0) {
						const idTeachArray = response.data.map((item: any) => item.idTeach)
						// setListIdTeach(idTeachArray)
						if (typeof id === 'string') {
							if (idTeachArray.includes(id)) {
								setIsCanViewDetail(true)
							}
						}
					}
				}
			} catch (err) {
				console.log(err)
			}
		}
		ListPoint()
	}, [id])

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			try {
				const fd = new FormData()
				fd.append('id', id?.toString())
				const res = await axios.post(
					'https://api.timviec365.vn/api/giasu/account/detailTeach',
					fd,
					{
						headers: { 'Content-Type': 'multipart/form-data' },
					}
				)
				const response = res?.data?.data?.data

				setUpdatedAt(formatDateTime(response.updatedAt))
				setUserName(response.userName)
				setAddress(response.address)
				setAvatarUser(response.avatarUser)
				setUgsId(response.idGiaSu)
				setAs_detail(response.as_detail)
				setBirthday(formatDateTime(response.birthday))
				setDistrict(response.district)
				setEmailContact(response.emailContact)
				setExperience(response.experience)
				const genderValue = genderOptions.find((item: any) => item.value === response.gender)
				setGender(genderValue?.label)
				const marrie = marriedOptions.find((item: any) => Number(item.value) === response.married)
				setMarried(marrie?.label)
				setPhone(response.phone)
				const tutor_style = repuestGs.find((item: any) => Number(item.value) === response.typeGS)
				setTypeGS(tutor_style?.label)
				setUgs_about_us(response.ugs_about_us)
				setUgs_achievements(response.ugs_achievements)
				const form = formOptions.find((item: any) => Number(item.value) === response.ugs_formality)
				setUgs_formality(form?.label)
				setUgs_graduation_year(response.ugs_graduation_year)
				setUgs_month(response.ugs_month)
				setUgs_salary(response.ugs_salary)
				setUgs_school(response.ugs_school)
				setUgs_specialized(response.ugs_specialized)
				setUgs_time(response.ugs_time)
				setUgs_tutor_style(response.ugs_tutor_style)
				setUgs_unit_price(response.ugs_unit_price)
				setUgs_workplace(response.ugs_workplace)
				setSt2(response.st2)
				setSt3(response.st3)
				setSt4(response.st4)
				setSt5(response.st5)
				setSt6(response.st6)
				setSt7(response.st7)
				setScn(response.scn)
				setCt2(response.ct2)
				setCt3(response.ct3)
				setCt4(response.ct4)
				setCt5(response.ct5)
				setCt6(response.ct6)
				setCt7(response.ct7)
				setCcn(response.ccn)
				setTt2(response.tt2)
				setTt3(response.tt3)
				setTt4(response.tt4)
				setTt5(response.tt5)
				setTt6(response.tt6)
				setTt7(response.tt7)
				setTcn(response.tcn)
				const responseListSubject = await callApiListSubject()
				const subjects = responseListSubject.list
				const subName = subjects.find((item: any) => Number(item.as_id) === response.as_id)
				setAs_id(subName?.as_name)

				const responseListClass = await callApiListClassPh([])
				const listClass = responseListClass.list
				const className = listClass.find(
					(item: any) => String(item.ct_id) === response.ugs_class_teach
				)
				setUgs_class_teach(className?.ct_name)
				console.log('123', className)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [id])

	const handleUpdatePointParent = async () => {
		const pointParents = localStorage.getItem('pointParent')
		try {
			const response = await callApiUpdatePointParent({
				id_teach: id,
			})
			// Xử lý kết quả từ API (nếu cần)
			if (response.result) {
				if (pointParents) {
					const currentPoints = parseInt(pointParents, 10)
					const storedUserObject = JSON.parse(pointParents)
					localStorage.setItem('pointParent', (currentPoints - 1).toString())
					setPointParent((storedUserObject - 1).toString())
					setIsCanViewDetail(true)
				}
			} else {
				// const storedUserString = localStorage.getItem('pointParent');
				// if (storedUserString) {
				//   const storedUserObject = JSON.parse(storedUserString);
				//   setPointParent(storedUserObject);
				// }
			}
			setModalOpen(false)
		} catch (err) {
			console.log(err)
		}
	}
	const handleCancel = () => {
		setModalOpen(false)
	}

	const handleCancelHetDiem = () => {
		setModalOpenHetDiem(false)
	}

	const handleOpen = () => {
		if (pointParent != '0') {
			setModalOpen(true)
		} else {
			setModalOpenHetDiem(true)
		}
	}

	//list gia sư
	const [listGs, setListGs] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiHome({ pageSize: 10 })

				setListGs(response.data)
			} catch (e) {
				console.log('Fetching data error: ', e)
			}
		}
		fetchData()
	}, [])
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

	const [type, setType] = useState(0)
	// const [dsLopDaLuu, setdsLopDaLuu] = useState([])
	// useEffect(() => {
	//   const fetchData = async () => {
	//     try {
	//       const response = await callApiDetailGs({});
	//       setdsLopDaLuu(response.data);
	//       const data = dsLopDaLuu.find((item: any) => item.pft_id === id);
	//       if (data) {
	//         setType(1);
	//       } else {
	//         setType(0);
	//       }
	//     } catch (error) {
	//       console.error('Error fetching data:', error);
	//     }
	//   };
	//   fetchData();
	// }, [])

	const idNumber = Number(id)
	useEffect(() => {
		const updateApi = async () => {
			try {
				if (type === 0) {
					const res = await axios.post(
						'http://210.245.108.202:3000/api/giasu/parent/saveTeacher',
						{
							st_it_teach: idNumber,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					)
					alert('Lưu gia sư thành công')
				} else if (type === 1) {
					const res = await axios.post(
						'http://210.245.108.202:3000/api/giasu/parent/unsaveTeacherV2',
						{
							id: idNumber,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					)
					alert('Hủy lưu gia sư thành công')
				}
			} catch (err) {
				console.log(err)
			}
		}

		updateApi()
	}, [type])

	const changeSave = (id: any) => {
		if (type === 0) {
			setType(1)
		} else if (type === 1) {
			setType(0)
		}
	}

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="robots" content="noindex,nofollow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff" as="font" />
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/header.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/detail_class.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/modal.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/footer.css" />

			<div className="wrapper">
				<div className="header-re header__detail__tutor">
					<Header token_base365={token} />
					<Modal_moi_day
						thongTinGiaSu={thongTinGiaSu}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
					<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={2} />
					<div className="search" style={{ background: 'none' }}>
						<Search />
					</div>
				</div>

				<div className="content-gs content_detail_gs" id="user_login">
					<div className="container " id="point_free_ph">
						<div className="wps-ln breadcrum_tutor">
							<p>
								<Link href="/" title="Gia Sư 365">
									Gia Sư 365{' '}
								</Link>
								/
								<a href="tim-kiem-gia-su.html" title="Danh sách gia sư">
									{' '}
									Danh sách gia sư
								</a>{' '}
								/
								<a className="title_tutor" href="" title={userName}>
									{userName}
								</a>
							</p>
						</div>
						<div className="gs-cnt-one" id="point_buy_ph">
							<div className="gs-avt" id="ugs_tk">
								<img
									className="avt_gs lazyloaded"
									src={avatarUser ? avatarUser : '/gia-su/img/add.png'}
									alt="Nguyễn Thành Trung"
								/>
								{!token ? (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
									>
										Đăng nhập để xem SĐT
									</p>
								) : !isCanViewDetail ? (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
										onClick={handleOpen}
									>
										Xem số điện thoại
									</p>
								) : (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
									>
										{phone}
									</p>
								)}
								{!token ? (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
									>
										Đăng nhập để xem Email
									</p>
								) : !isCanViewDetail ? (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
										onClick={handleOpen}
									>
										Xem Email
									</p>
								) : (
									<p
										className="dn-dt btn_cursor"
										data-toggle="modal"
										data-target="#dnsModal"
										suppressHydrationWarning={true}
									>
										{emailContact}
									</p>
								)}
								<div className="gs-bt">
									<p className="view_gs">Lượt xem: 266 </p>
									<div className="gs-nt">
										<p>Thích</p>
										<svg
											width={13}
											height={13}
											viewBox="0 0 13 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0)">
												<path
													d="M1.35416 5.6875C0.60775 5.6875 0 6.29525 0 7.04166V11.375C0 12.1214 0.60775 12.7292 1.35416 12.7292H2.97916C3.28413 12.7292 3.56469 12.6262 3.79166 12.4551V5.6875H1.35416Z"
													fill="white"
												/>
												<path
													d="M13.0006 7.7189C13.0006 7.39337 12.8717 7.09003 12.648 6.86631C12.901 6.58953 13.0299 6.21847 12.9947 5.83228C12.9313 5.14381 12.3111 4.60431 11.582 4.60431H8.23614C8.40189 4.1011 8.6673 3.17865 8.6673 2.43765C8.6673 1.26278 7.66902 0.270996 7.0423 0.270996C6.47952 0.270996 6.07758 0.587871 6.06027 0.600871C5.99636 0.652338 5.95898 0.730338 5.95898 0.812654V2.64944L4.39898 6.0289L4.33398 6.06194V11.8675C4.77489 12.0755 5.3328 12.1877 5.68814 12.1877H10.6601C11.25 12.1877 11.7662 11.7901 11.8875 11.2414C11.9498 10.9592 11.9135 10.6748 11.7895 10.4278C12.1898 10.2263 12.459 9.81406 12.459 9.34391C12.459 9.15215 12.4151 8.96853 12.3317 8.80225C12.732 8.60075 13.0006 8.18853 13.0006 7.7189Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0">
													<rect width={13} height={13} fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<div className="gs-ics">
										<img src="/gia-su/img/twitter 1.png" alt="Twitter" />
										<img src="/gia-su/img/facebook (2) 1.png" alt="Facebook" />
										<img src="/gia-su/img/intergram.svg" alt="Intergram" />
									</div>
								</div>
							</div>
							<div className="gs-ct">
								<div className="gs-gt">
									<div className="gs-gt-one">
										<h1 className="h3_name" id="ugs_teach">
											{userName}
										</h1>
									</div>
									<div className="gs-gt-tow">
										<span className="gs-lgs" onClick={() => changeSave(idNumber)}>
											<img src="/gia-su/img/Vector2.png" alt="lưu gia sư" />
											<p data-toggle="modal" data-target="#dnsModal">
												{type === 0 && 'Lưu'}
												{type === 1 && 'Đã lưu '}
											</p>
										</span>
										<span
											className="gs-md"
											data-toggle="modal"
											data-target="#dnsModal"
											onClick={() =>
												handleClickModal({
													ugs_name: userName,
													ugs_avatar: avatarUser,
													ugs_id: ugs_id,
												})
											}
										>
											<img src="/gia-su/img/icon14.png" alt="mời dạy" />
											<p>Mời dạy</p>
										</span>
									</div>
									<p className="gs-gtn">{ugs_about_us ? ugs_about_us : 'Chưa cập nhật'} </p>
								</div>
								<div className="gs-kn">
									<h2 className="gs-kn-titile-h2">Thông tin gia sư</h2>
									<div className="gs-kn-one">
										<div className="gs-ns">
											<p className="gs-gs-h">Ngày sinh gia sư</p>
											<p className="gs-gs-p">{birthday ? birthday : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Giới tính gia sư</p>
											<p className="gs-gs-p">{gender ? gender : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Tình trạng hôn nhân</p>
											<p className="gs-gs-p">{married ? married : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Kiểu giáo viên</p>
											<p className="gs-gs-p">{typeGS ? typeGS : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Địa chỉ gia sư</p>
											<p className="gs-gs-p">{address ? address : 'Chưa cập nhật'} </p>
										</div>

										<div className="gs-ns">
											<p className="gs-gs-h">Ngày cập nhật hồ sơ</p>
											<p className="gs-gs-p">{updatedAt ? updatedAt : 'Chưa cập nhật'} </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Học phí</p>
											<p className="gs-gs-p">
												{' '}
												{ugs_unit_price
													? ugs_unit_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
													: 'Chưa cập nhật'}{' '}
											</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Chuyên ngành</p>
											<p className="gs-gs-p">
												{ugs_specialized ? ugs_specialized : 'Chưa cập nhật'}{' '}
											</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Số năm kinh nghiệm</p>
											<p className="gs-gs-p">{experience ? experience : 'Chưa cập nhật'} năm</p>
										</div>
									</div>
									<div className="gs-kn-tow">
										<div className="gs-ns">
											<p className="gs-gs-h">Kinh nghiệm dạy</p>
											<p className="gs-gs-p">{experience ? experience : 'Chưa cập nhật'} năm</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Hình thức dạy</p>
											<p className="gs-gs-p" id="gs-htd">
												{ugs_formality ? ugs_formality : 'Chưa cập nhật'}
											</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Khu vực giảng dạy</p>
											<p className="gs-gs-p">
												<a
													href="https://giasu.timviec365.vn/tim-gia-su-tai-quan-dong-da-ha-noi-qh71.html"
													target="_blank"
													style={{ color: '#969696' }}
													rel="noopener"
												>
													Quận Đống Đa
												</a>{' '}
												|{' '}
												<a
													href="/tim-gia-su-tai-ha-noi-tt.html"
													style={{ color: '#969696' }}
													target="_blank"
												>
													Hà Nội{' '}
												</a>
											</p>
										</div>
										<div
											className="gs-ns detail_tutor_mh"
											style={{ display: 'flex', flexDirection: 'column' }}
										>
											<p className="gs-gs-h">Môn học </p>
											<div
												style={{
													display: 'flex',
													color: '#969696',
													alignItems: 'center',
												}}
											>
												&nbsp;
												<a
													href="https://giasu.timviec365.vn/tim-gia-su-ielts-sj99.html"
													target="_blank"
													rel="noopener"
												>
													<p className="gs-gs-p" id="gs-lesson">
														{as_id ? as_id : 'Chưa cập nhật'}
													</p>
												</a>{' '}
											</div>
										</div>
										<div
											className="gs-ns detail_tutor_mh"
											style={{ display: 'flex', flexDirection: 'column' }}
										>
											<p className="gs-gs-h">Môn học chi tiết</p>
											<div
												style={{
													display: 'flex',
													color: '#969696',
													alignItems: 'center',
													flexWrap: 'wrap',
												}}
											>
												{as_detail ? as_detail : 'Chưa cập nhật'}
											</div>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Lớp học</p>
											<a href="/tim-gia-su-lop-11-lv11.html" target="_blank">
												<p className="gs-gs-p">
													{ugs_class_teach ? ugs_class_teach : 'Chưa cập nhật'}{' '}
												</p>
											</a>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Học trường</p>
											<p className="gs-gs-p">{ugs_school ? ugs_school : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Nơi công tác</p>
											<p className="gs-gs-p">{ugs_workplace ? ugs_workplace : 'Chưa cập nhật'}</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Năm tốt nghiệp</p>
											<p className="gs-gs-p">
												{' '}
												{ugs_graduation_year ? ugs_graduation_year : 'Chưa cập nhật'}{' '}
											</p>
										</div>
									</div>
								</div>
								<div className="gs-td">
									<h2 className="gs-td-titile-h2">Kinh nghiệm giảng dạy</h2>
									<div className="ct-kn">
										<span>{experience ? experience : 'Chưa cập nhật'} năm</span>
									</div>
								</div>
								<div className="gs-ld">
									<h2 className="gs-ld-titile-h2">Thành tích đạt được</h2>
									<div className="all-tt">
										<p>{ugs_achievements ? ugs_achievements : 'Chưa cập nhật'}</p>
									</div>
								</div>
								<div className="gs-dg">
									<h2 className="gs-dg-titile-h2">Lịch dạy</h2>
									<form action="">
										<div className="row h_chon_ngay_lh">
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 2" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 3" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 4" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 5" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 6" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="Thứ 7" />
											<Input type="button" className="col-md col-xl col-12 " defaultValue="CN" />
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
								<div className="d-css-teacher-detail2-infor5">
									<div id="show_cmt_rate">
										<div className="d-cmt-vote" id="d-cmt-vote52">
											<div className="d-cmt-vote1">
												<div className="d-cmt-vote-img">
													<img
														height="60px"
														alt=""
														src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
														className="logo_cmt lazyloaded"
														data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
													/>
												</div>
												<div className="d-cmt-vote-name">
													<p
														className="d-css-class-detail2 d-vote-name-p"
														style={{ fontWeight: 'bold' }}
													>
														Phụ Huynh Test1
													</p>
													<span className="d-vote-cmt">
														<svg
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
																fill="#F8971C"
															/>
														</svg>
														<svg
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
																fill="#F8971C"
															/>
														</svg>
														<svg
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
																fill="#F8971C"
															/>
														</svg>
														<svg
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
																fill="#F8971C"
															/>
														</svg>
														<svg
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
																fill="#F8971C"
															/>
														</svg>
													</span>
													<p className="d-css-class-detail2 d-vote-cmt-time">2 tháng trước</p>
													<div
														className="d-css-class-detail2 d-vote-name-cmt"
														style={{ marginTop: 5 }}
													>
														<p />
													</div>
												</div>
											</div>
											<div className="d-cmt-vote2">
												<p
													className="d-css-class-detail2 d-vote-cmt2"
													data-toggle="collapse"
													data-target="#reply52"
													style={{ cursor: 'pointer' }}
												>
													0 phản hồi
												</p>
											</div>
											{/*Reply*/}
											<div className="d-cmt-vote2 d-cmt-vote3 collapse replyRow" id="reply52">
												<div id="parent-reply252" />
											</div>
										</div>
									</div>
									<div className="d-login-vote d-login-vote-2">
										<span className="dn-dt btn_cursor" data-toggle="modal" data-target="#dnsModal">
											Đăng nhập để đánh giá
										</span>
									</div>
								</div>
							</div>
						</div>
						<SlideGs listGs={listGs} />
					</div>
				</div>

				<Modal
					className={styles.modalConfirm}
					aria-labelledby="myModalLabel"
					aria-hidden="true"
					open={modalOpen}
					onCancel={handleCancel}
					footer={null}
				>
					<div className="modal-dialog">
						<h4 className="modal-title" />
						<button type="button" className="close" data-dismiss="modal">
							.
						</button>
					</div>

					<div className="modal-body dd">
						<form action="" method="POST">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<img src="../gia-su/img/tt-d.png" alt="" />
								</div>
								<p style={{ textAlign: 'center' }}>
									Bạn có <span className="dd-fr">{pointParent}</span> điểm hôm nay
									<span className="dd-fr" /> .Bạn có muốn dùng <span>1</span> điểm để xem liên hệ
									với gia sư này không?
								</p>
							</div>
							<div className="md-im-ic text-center">
								<button
									onClick={() => {
										setModalOpen(false)
									}}
									className={styles.buttonCancel}
								>
									Hủy bỏ
								</button>

								<button
									type="button"
									name="dy"
									onClick={handleUpdatePointParent}
									className={styles.buttonAcept}
								>
									Đồng ý
								</button>
							</div>
						</form>
					</div>
				</Modal>
				<Modal
					className={styles.modalConfirm}
					aria-labelledby="myModalLabel"
					aria-hidden="true"
					open={modalOpenHetDiem}
					onCancel={handleCancelHetDiem}
					footer={null}
				>
					<div className="modal-dialog">
						<h4 className="modal-title" />
					</div>

					<div className="modal-body dd">
						<form action="" method="POST">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<img src="../gia-su/img/tt-d.png" alt="" />
								</div>
								<p style={{ textAlign: 'center' }}>
									Số điểm bạn có hôm nay đã hết. Hãy quay lại vào ngày mai hoặc bạn có muốn mua điểm
									để xem liên hệ với gia sư này không
								</p>
							</div>
							<div className="md-im-ic text-center">
								<button
									className={styles.buttonCancel}
									onClick={() => {
										setModalOpenHetDiem(false)
									}}
								>
									Hủy
								</button>
								<button type="button" className={styles.buttonAcept}>
									Đồng ý
								</button>
							</div>
						</form>
					</div>
				</Modal>
				<div className="clear" />
				<Footer />
			</div>
		</>
	)
}
export default ChiTietGS
