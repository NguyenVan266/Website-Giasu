import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { logOut } from './checkLogin'
import Link from 'next/link'
const HeaderPh = ({ setShowModal }: any) => {
	// State hiển thị dropDown của avatar
	const [dropDownAvatar, setDropDownAvatart] = useState(false)
	// State hiển thị dropDown của Thông báo
	const [dropDownNoti, setDropDownNoti] = useState(false)
	// Click để thay đổi trạng thái của dropDown
	const toggleDropDownAvatar = () => {
		setDropDownAvatart(!dropDownAvatar)
	}
	// Click để thay đổi trạng thái của dropDown
	const toggleDropDownNoti = () => {
		setDropDownNoti(!dropDownNoti)
	}
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
	// Style của dropDown
	const dropDownAvatarStyle = {
		display: dropDownAvatar ? 'block' : 'none',
	}
	const dropDownNotiStyle = {
		display: dropDownNoti ? 'block' : 'none',
	}
	const isLoggedIn = () => {
		const token = Cookies.get('token_base365')
		return token !== undefined && token !== null
	}
	const router = useRouter()
	return (
		<div className="header_gd">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<div className="ctn-dn">
						<div className="menu-header" onClick={() => setShowModal(true)}>
							<img
								className="lazyload"
								src="/gia-su/img/loader.gif"
								data-src="/gia-su/img/menu.png"
								alt="Description of the image"
							/>
						</div>
						<div className="hd-lg-avt">
							<Link href="/">
								<img src="/gia-su/img/logo.png" alt="Description of the image" />
							</Link>
						</div>
						<div
							style={dropDownNotiStyle}
							className="box_thong_bao noti"
							onClick={(e: any) => {
								e.stopPropagation()
							}}
						>
							{' '}
							{/* thông báo của gs */}
							<div className="thong_bao">Thông báo</div>
							<div className="content_noti">
								<div className="item_thong_bao">
									<img
										className="lazyload"
										src="../gia-su/img/loader.gif"
										data-src="https://giasu.timviec365.vn/upload/gs/2023/08/09/GS1691577209.jpg"
										alt="Description of the image"
									/>
									<div className="text1">
										<p>
											<span className="span_tb">Nguyễn Văn Lâm</span> đã đề nghị dạy lớp{' '}
											<span className="span_tb">Tìm gia sư vật lý lượng tử</span> vào ngày{' '}
											<span className="span_tb">11/08/2023</span>
										</p>
									</div>
									<div className="time_thong_bao">3 tháng trước</div>
								</div>
							</div>
							<div className="xoa_thong_bao">
								<button data-id_del={1812} className="click_clear_noti">
									Xóa tất cả thông báo
								</button>
							</div>
						</div>
						<div className="tt-header-tt lg_tt">
							<div className="b_mb_tt">
								<img
									onClick={toggleDropDownNoti}
									className="lazyload"
									src="/gia-su/img/loader.gif"
									data-src="/gia-su/img/tt.png"
									alt="Description of the image"
								/>
								<span className="thongbaoMobile">1</span>
							</div>
							<span className="exp-lg-tb" />
						</div>
						{/* <div class="tt-header-tt" data-toggle="modal" data-target="#epr_menu">
          <img src="/gia-su/img/tt.png">
      </div> */}
					</div>
					<div className="collapse navbar-collapse">
						<ul className="menu_qly ">
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
								<Link
									href="https://timviec365.vn/blog/c235/tai-lieu-gia-su"
									target="_blank"
									rel="noopener"
								>
									Blog gia sư
								</Link>
							</li>
							<li className="dangtin_mdmb">
								<a onClick={() => router.push('/dang-tin-tim-gia-su')}>
									<span className="class_dangtin">Đăng tin</span>{' '}
								</a>
							</li>
						</ul>
					</div>
					<div className="lg_user">
						<div className="navbar_lg">
							<div className="lg_tt ql_lg_tt" onClick={toggleDropDownNoti}>
								<img src="/gia-su/img/tt-ad.png" alt="thong bao" />
								<span className="thongbao thongbao_ql">1</span>
							</div>
							<div
								className="box_thong_bao 1 noti"
								style={dropDownNotiStyle}
								onClick={(e: any) => {
									e.stopPropagation()
								}}
							>
								{' '}
								{/* thông báo của gs */}
								<div className="thong_bao">Thông báo</div>
								<div className="content_noti">
									{/* Thông báo của ph */}
									<div className="item_thong_bao">
										<img
											className="lazyload"
											src="../gia-su/img/loader.gif"
											data-src="https://giasu.timviec365.vn/upload/gs/2023/08/09/GS1691577209.jpg"
											alt="Description of the image"
										/>
										<div className="text1">
											<p>
												<span className="span_tb">Nguyễn Văn Lâm</span> đã đề nghị dạy lớp{' '}
												<span className="span_tb">Tìm gia sư vật lý lượng tử</span> vào ngày{' '}
												<span className="span_tb">11/08/2023</span>
											</p>
										</div>
										<div className="time_thong_bao">3 tháng trước</div>
									</div>
								</div>
								<div className="xoa_thong_bao">
									<button data-id_del={1812} className="click_clear_noti">
										Xóa tất cả thông báo
									</button>
								</div>
							</div>
							{/*                              <div style="margin-top: 17px;margin-left: 10px; display: none;" class="thongbao_gs thongbao"><p style="margin-top: -25px;position: initial;">1</p></div>
							 */}
							<div className="bg-avatar">
								<img
									className=" ls-is-cached lazyloaded"
									src="/gia-su/img/add.png"
									data-src="/gia-su/img/add.png"
									alt="err"
								/>
								<span className="exp-lg-menu" onClick={toggleDropDownAvatar}></span>
								<div
									className="mu-lg"
									style={dropDownAvatarStyle}
									onClick={(e: any) => {
										e.stopPropagation()
									}}
								>
									<a onClick={() => router.push('/quan-ly-trang-chu-ph')} className="qltk-lg">
										Quản lý tài khoản
									</a>
									<a onClick={() => router.push('/doi-mat-khau')} className="dmk-lg">
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

export default HeaderPh
