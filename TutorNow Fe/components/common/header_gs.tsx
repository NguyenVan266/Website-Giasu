import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { Input, Button, Image } from 'antd'
import { logOut } from './checkLogin'
import Link from 'next/link'
const HeaderGs = ({ setShowModal }: any) => {
	// State hiển thị dropDown của avatar
	const [dropDownAvatar, setDropDownAvatart] = useState(false)
	// State hiển thị dropDown của Thông báo
	const [dropDownNoti, setDropDownNoti] = useState(false)
	// State hiển thị dropDown của Thông báo trên màn nhỏ hơn
	const [dropDonwNotiSmall, setDropDownNotiSmall] = useState(false)
	// Click để thay đổi trạng thái của dropDown
	const toggleDropDownAvatar = () => {
		setDropDownAvatart(!dropDownAvatar)
	}
	// Click để thay đổi trạng thái của dropDown
	const toggleDropDownNoti = () => {
		setDropDownNoti(!dropDownNoti)
	}
	// Click để thay đổi trạng thái của dropdonw
	const toogleDropDownNotiSmall = () => {
		setDropDownNotiSmall(!dropDonwNotiSmall)
	}
	// Xử lý tắt box khi click ngoài vùng dropdown Avatar
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
	// Xử lý tắt box khi click ngoài vùng dropdown Noti
	useEffect(() => {
		const closeOnOutsideClick = (e: any) => {
			if (dropDownNoti && e.target.closest('.ql_lg_tt') === null) {
				setDropDownNoti(false)
			}
		}
		if (dropDownNoti) {
			document.addEventListener('click', closeOnOutsideClick)
		} else {
			document.removeEventListener('click', closeOnOutsideClick)
		}
		return () => {
			document.removeEventListener('click', closeOnOutsideClick)
		}
	}, [dropDownNoti])
	useEffect(() => {
		const closeOnOutsideClick = (e: any) => {
			if (dropDonwNotiSmall && e.target.closest('.b_mb_tt') === null) {
				setDropDownNotiSmall(false)
			}
		}
		if (dropDonwNotiSmall) {
			document.addEventListener('click', closeOnOutsideClick)
		} else {
			document.removeEventListener('click', closeOnOutsideClick)
		}
		return () => {
			document.removeEventListener('click', closeOnOutsideClick)
		}
	}, [dropDonwNotiSmall])

	// Style của dropDown
	const dropDownAvatarStyle = {
		display: dropDownAvatar ? 'block' : 'none',
	}
	const dropDownNotiStyle = {
		display: dropDownNoti ? 'block' : 'none',
	}
	const dropDownNotiSmallStyle = {
		display: dropDonwNotiSmall ? 'block' : 'none',
	}
	const checkType = () => {
		const type = Cookies.get('type')
		if (type === '1') {
			router.push('/quan-ly-trang-chu-gs')
		} else if (type === '2') {
			router.push('/quan-ly-trang-chu-ph')
		}
	}
	const router = useRouter()
	return (
		<div className="header_gd">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<div className="ctn-dn">
						<div
							className="menu-header"
							data-toggle="modal"
							data-target="#exp_menu"
							onClick={() => setShowModal(true)}
						>
							<img
								className="lazyload"
								src="/gia-su/img/menu.png"
								data-src="/gia-su/img/menu.png"
								alt="load"
							/>
						</div>
						<div className="hd-lg-avt">
							<Link href="/">
								<img src="/gia-su/img/logo.png" alt="load" />
							</Link>
						</div>
						<div style={dropDownNotiSmallStyle} className="box_thong_bao noti">
							{' '}
							{/* thông báo của gs */}
							<div className="thong_bao">Thông báo</div>
							<div className="content_noti">
								<div className="item_thong_bao">
									<img
										className="lazyload"
										src="../gia-su/img/loader.gif"
										data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
										alt="1"
									/>
									<div className="text1">
										<p>
											<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
											<span className="span_tb">Tìm gia sư vật lý lý thuyết</span> vào ngày{' '}
											<span className="span_tb">07/08/2023</span>
										</p>
									</div>
									<div className="time_thong_bao">3 tháng trước</div>
								</div>
								<div className="item_thong_bao">
									<img
										className="lazyload"
										src="../gia-su/img/loader.gif"
										data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
										alt="1"
									/>
									<div className="text1">
										<p>
											<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
											<span className="span_tb">Tìm gia sư piano</span> vào ngày{' '}
											<span className="span_tb">07/08/2023</span>
										</p>
									</div>
									<div className="time_thong_bao">3 tháng trước</div>
								</div>
								<div className="item_thong_bao">
									<img
										className="lazyload"
										src="../gia-su/img/loader.gif"
										data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
										alt="1"
									/>
									<div className="text1">
										<p>
											<span className="span_tb">Phụ Huynh Test1</span> đã đồng ý lời đề nghị dạy lớp{' '}
											<span className="span_tb">Tìm gia sư Ielts</span> của bạn vào ngày{' '}
											<span className="span_tb">07/08/2023</span>
										</p>
									</div>
									<div className="time_thong_bao">3 tháng trước</div>
								</div>
							</div>
							<div className="xoa_thong_bao">
								<button data-id_del="1806,1804,1803" className="click_clear_noti">
									Xóa tất cả thông báo
								</button>
							</div>
						</div>
						<div className="tt-header-tt lg_tt">
							<div className="b_mb_tt">
								<img
									className="lazyload"
									src="/gia-su/img/tt.png"
									data-src="/gia-su/img/tt.png"
									onClick={toogleDropDownNotiSmall}
									alt="1"
								/>
								<span className="thongbaoMobile">3</span>
							</div>
							<span className="exp-lg-tb" />
						</div>
					</div>
					<div className="collapse navbar-collapse">
						<div className="uvactiventd" id="uvactiventd">
							<div className="box_search">
								<span className="allow_search">Cho phép tìm kiếm:</span>
								<label className="switch btn_checked">
									<Input
										type="checkbox"
										defaultValue={1}
										name="uvduyetsearch"
										id="uvduyetsearch"
										className="input_checked uvduyetsearch"
									/>
									<span className="slider round" />
								</label>
							</div>
							<div>
								<span className="">Làm mới hồ sơ:</span>
								<Button className="btn_refesh_uv">
									<svg
										width={22}
										height={21}
										viewBox="0 0 19 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.43848 3.85735L10.3065 2.09026L10.3835 2.01744L10.3063 1.9448L9.2254 0.927189L9.15668 0.862502L9.08813 0.927355L5.19897 4.60646L5.12272 4.67859L5.19846 4.75126L9.03692 8.43411L9.10502 8.49945L9.17419 8.43524L10.2627 7.42476L10.3403 7.35267L10.2639 7.27931L8.40749 5.49822H9.5C13.2953 5.49822 16.3731 8.41093 16.3731 11.9788C16.3731 15.5466 13.2953 18.4591 9.5 18.4591C5.70467 18.4591 2.62687 15.5466 2.62687 11.9786V11.2581V11.1581L2.52686 11.1581L0.999988 11.1583L0.9 11.1583V11.2583V11.9788C0.9 16.4624 4.76332 20.1 9.5 20.1C14.2367 20.1 18.1 16.4624 18.1 11.9788C18.1 7.49517 14.2367 3.85735 9.5 3.85735H8.43848Z"
											fill="#4C5BD4"
											stroke="#08827C"
											strokeWidth="0.2"
										/>
									</svg>
								</Button>
							</div>
						</div>
						<ul className="menu_qly menu_qly_gs">
							<li>
								<Link href="/">Trang chủ gia sư</Link>
							</li>
							<li>
								<a onClick={() => router.push('/tim-kiem-gia-su')}>Danh sách gia sư</a>
							</li>
							<li>
								<a onClick={() => router.push('/danh-cho-gia-su')}>Danh sách lớp học</a>
							</li>
							<li>
								<a
									href="https://timviec365.vn/blog/c235/tai-lieu-gia-su"
									target="_blank"
									rel="noopener"
								>
									Blog gia sư
								</a>
							</li>
							<li className="dangtin_mdmb">
								{/* <a href="#" data-toggle="modal" data-target="#dnModal" ><span class="class_dangtin dang_tin_popup">Đăng tin</span></a> */}
							</li>
						</ul>
					</div>
					<div className="lg_user">
						<div className="navbar_lg">
							<div className="lg_tt ql_lg_tt">
								<img src="/gia-su/img/tt-ad.png" alt="thong bao" onClick={toggleDropDownNoti} />
								<span className="thongbao thongbao_ql">3</span>
							</div>
							<div className="box_thong_bao 1 noti" style={dropDownNotiStyle}>
								{' '}
								{/* thông báo của gs */}
								<div className="thong_bao">Thông báo</div>
								<div className="content_noti">
									<div className="item_thong_bao">
										<img
											className="lazyload"
											src="../gia-su/img/loader.gif"
											data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
											alt="1"
										/>
										<div className="text1">
											<p>
												<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
												<span className="span_tb">Tìm gia sư vật lý lý thuyết</span> vào ngày{' '}
												<span className="span_tb">07/08/2023</span>
											</p>
										</div>
										<div className="time_thong_bao">3 tháng trước</div>
									</div>
									<div className="item_thong_bao">
										<img
											className="lazyload"
											src="../gia-su/img/loader.gif"
											data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
											alt="1"
										/>
										<div className="text1">
											<p>
												<span className="span_tb">Phụ Huynh Test1</span> đã mời bạn dạy lớp{' '}
												<span className="span_tb">Tìm gia sư piano</span> vào ngày{' '}
												<span className="span_tb">07/08/2023</span>
											</p>
										</div>
										<div className="time_thong_bao">3 tháng trước</div>
									</div>
									<div className="item_thong_bao">
										<img
											className="lazyload"
											src="../gia-su/img/loader.gif"
											data-src="https://giasu.timviec365.vn/upload/ph/2023/08/07/PH1691570454.PNG"
											alt="1"
										/>
										<div className="text1">
											<p>
												<span className="span_tb">Phụ Huynh Test1</span> đã đồng ý lời đề nghị dạy
												lớp <span className="span_tb">Tìm gia sư Ielts</span> của bạn vào ngày{' '}
												<span className="span_tb">07/08/2023</span>
											</p>
										</div>
										<div className="time_thong_bao">3 tháng trước</div>
									</div>
								</div>
								<div className="xoa_thong_bao">
									<button data-id_del="1806,1804,1803" className="click_clear_noti">
										Xóa tất cả thông báo
									</button>
								</div>
							</div>
							{/*                              <div style="margin-top: 17px;margin-left: 10px; display: none;" class="thongbao_gs thongbao"><p style="margin-top: -25px;position: initial;">3</p></div>
							 */}
							<div className="bg-avatar">
								<img
									className=" ls-is-cached lazyloaded"
									src="/gia-su/img/add.png"
									data-src="/gia-su/img/add.png"
									alt="err"
								/>
								<span className="exp-lg-menu" onClick={toggleDropDownAvatar} />
								<div className="mu-lg" style={dropDownAvatarStyle}>
									<a onClick={() => router.push('/quan-ly-trang-chu-gs')} className="qltk-lg">
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
				</div>
			</nav>
		</div>
	)
}

export default HeaderGs
