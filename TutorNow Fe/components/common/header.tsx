import React, { useState, useEffect } from 'react'
import Modal_menu from './modal_menu'
import Modal from './modal'
import Modal_dang_ky from './modal_dangky'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { logOut } from './checkLogin'
import jwtDecode from 'jwt-decode'
import Link from 'next/link'
import Modal_dang_nhap from '@/components/common/modal_dang_nhap'
export default function Header({ token_base365 }: any) {
	const [showModal, setShowModal] = React.useState(false)
	const [showLogin, setShowLogin] = React.useState(false)
	const [showModalLogin, setShowModalLogin] = useState(false)
	const type = Cookies.get('type')
	const showdropdown = () => {
		setShowLogin(!showLogin)
	}
	const dropdownRef = React.useRef<HTMLDivElement>(null)
	const closeDropdown = (event: any) => {
		// Nếu click ra ngoài dropdown-menu hoặc không phải là nút "Đăng nhập", đóng dropdown
		const targetElement = event.target as HTMLElement
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(targetElement) &&
			event.target.className !== 'btn_cursor b_header_dn'
		) {
			setShowLogin(false)
		}
	}
	React.useEffect(() => {
		// Thêm event listener khi component được mount
		document.addEventListener('click', closeDropdown)

		// Xóa event listener khi component bị unmount
		return () => {
			document.removeEventListener('click', closeDropdown)
		}
	}, [])

	// State hiển thị dropDown của avatar
	const [dropDownAvatar, setDropDownAvatart] = useState(false)
	// State hiển thị dropDown của Thông báo
	const [dropDownNoti, setDropDownNoti] = useState(false)

	// Click để thay đổi trạng thái của dropDown
	const toggleDropDownAvatar = () => {
		setDropDownAvatart(!dropDownAvatar)
	}
	const postNews = () => {
		if (token_base365 !== null && type === '2') {
			router.push('/dang-tin-tim-gia-su')
		} else {
			setShowModalLogin(true)
		}
	}
	// Xử lý tắt box khi click ngoài vùng dropdown Avatar
	// const [useName,setUseName] = useState("")
	// useEffect(() =>{
	// 	const token = Cookies.get("token_base365")
	// 	if(token) {
	// 		const info:any = jwtDecode(token)
	// 		console.log(info?.data?.userName)
	// 	}

	// },[])
	useEffect(() => {
		const closeOnOutsideClick = (e: any) => {
			if (dropDownAvatar && e.target.closest('.exp-lg-menu') === null) {
				setDropDownAvatart(false)
			}
		}
		if (dropDownAvatar) {
			document.addEventListener('click', closeOnOutsideClick)
		} else {
			document.removeEventListener('click', closeOnOutsideClick)
		}
	}, [dropDownAvatar])
	// Style của dropDown
	const dropDownAvatarStyle = {
		display: dropDownAvatar ? 'block' : 'none',
	}
	const checkType = () => {
		if (type === '1') {
			router.push('/quan-ly-trang-chu-gs')
		} else if (type === '2') {
			router.push('/quan-ly-trang-chu-ph')
		}
	}
	const router = useRouter()
	return (
		<>
			<div className="nav">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" onClick={() => router.push('/gia-su')}>
							{/* <img
								className=" ls-is-cached lazyloaded"
								src="/gia-su/img/logo.webp"
								data-src="/gia-su/img/logo.webp"
								alt="Tìm gia sư"
							/> */}
						</a>
						<div className="collapse navbar-collapse">
							<ul className="justify-content-end navbar-nav">
								<li onClick={() => router.push('http://localhost:3000/gia-su')}>Trang chủ gia sư</li>
								<li onClick={() => router.push('/tim-kiem-gia-su')}>Danh sách gia sư</li>
								<li onClick={() => router.push('/danh-cho-gia-su')}>Danh sách lớp học</li>
								<li>
									<a
										href="https://timviec365.vn/blog/c235/tai-lieu-gia-su"
										target="_blank"
										rel="noopener"
									>
										Blog gia sư
									</a>
								</li>
								<li>
									<a
										data-toggle="modal"
										data-target="#dnphModal"
										id="btn_postClass"
										className="class_dangtin b_click_bootstrap btn_cursor"
										onClick={postNews}
									>
										Đăng tin
									</a>
								</li>
							</ul>
						</div>
						{!token_base365 ? (
							<div className="lg_user">
								<div className="navbar-lg">
									<span className="btn_cursor b_header_dn" onClick={showdropdown}>
										Đăng nhập
									</span>{' '}
									/
									<span className="btn_cursor b_header_dk" onClick={() => setShowModal(true)}>
										Đăng ký
									</span>
									{showLogin && (
										<div className="dropdown-menu" ref={dropdownRef}>
											<Link href="/dang-nhap-phu-huynh">Phụ huynh</Link>
											<br /> <Link href="/dang-nhap-gia-su">Gia sư</Link>
										</div>
									)}
								</div>
							</div>
						) : (
							<div className="lg_user">
								<div className="navbar_lg">
									<div className="box_thong_bao noti" style={{ display: 'none' }}>
										<div className="thong_bao">Thông báo 1</div>
										<div className="content_noti">
											<div className="item_thong_bao">
												<a href="#" className="alg_one">
													<img
														className=" lazyloaded"
														src="/gia-su/img/add.png"
														data-src="/gia-su/img/add.png"
														alt="load"
													/>
												</a>
												<div className="text1">
													<p>
														<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
														<span className="span_tb">Tìm gia sư vật lý lý thuyết</span> vào ngày{' '}
														<span className="span_tb">07/08/2023</span>
													</p>
												</div>
												<div className="time_thong_bao">4 tháng trước</div>
											</div>
											<div className="item_thong_bao">
												<a href="#" className="alg_one">
													<img
														className=" lazyloaded"
														src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
														data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
														alt="load"
													/>
												</a>
												<div className="text1">
													<p>
														<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
														<span className="span_tb">Tìm gia sư piano</span> vào ngày{' '}
														<span className="span_tb">07/08/2023</span>
													</p>
												</div>
												<div className="time_thong_bao">4 tháng trước</div>
											</div>
											<div className="item_thong_bao">
												<a href="#" className="alg_one">
													<img
														className=" lazyloaded"
														src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
														data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
														alt="load"
													/>
												</a>
												<div className="text1">
													<p>
														<span className="span_tb">Phụ Huynh Test1</span> đã đồng ý lời đề nghị
														dạy lớp <span className="span_tb">Tìm gia sư Ielts</span> của bạn vào
														ngày <span className="span_tb">07/08/2023</span>
													</p>
												</div>
												<div className="time_thong_bao">4 tháng trước</div>
											</div>
										</div>
										<div className="xoa_thong_bao">
											<button data-id_del="1806,1804,1803" className="click_clear_noti">
												Xóa tất cả thông báo
											</button>
										</div>
									</div>
									<div className="lg_tt">
										<img src="/gia-su/img/tt-tt.png" alt="thong bao" />
										<div className="thongbao">3</div>
									</div>
									<span className="exp-lg-tb" />
									<div className="bg-avatar">
										<img
											className=" ls-is-cached lazyloaded"
											src="/gia-su/img/add.png"
											data-src="/gia-su/img/add.png"
											alt="load"
										/>
										<span className="exp-lg-menu" onClick={toggleDropDownAvatar} />
										<div className="mu-lg" style={dropDownAvatarStyle}>
											<a onClick={checkType} className="qltk-lg">
												Quản lý tài khoản
											</a>
											<a onClick={() => router.push('/doi-mat-khau-gs')} className="dmk-lg">
												Đổi mật khẩu
											</a>
											<a className="logout" onClick={logOut}>
												Đăng xuất
											</a>
										</div>
									</div>
								</div>
							</div>
						)}

						<div className="ctn-dn">
							<Modal_menu />
							<div className="hd-lg-avt">
								<Link href="/">
									<img
										className="lazyload"
										src="/gia-su/img/logo.webp"
										data-src="/gia-su/img/logo.webp"
										alt="Tìm gia sư"
										width={128}
										height={28}
									/>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<Modal_dang_ky showModal={showModal} setShowModal={setShowModal} />
			<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={2} />
		</>
	)
}
