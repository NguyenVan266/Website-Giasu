import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Modal_moi_day from '@/components/common/modal_moi_day'
import Search from '@/components/common/search'
import Slide_giasu_dangtimlop from '@/components/common/slide_giasu_dangtimlop'
import { MainLayout } from '@/components/layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from 'antd'
const GiaSuDangTimLop = () => {
	const [showModal, setShowModal] = useState(false)
	const [ID_gs, setID_gs] = useState(0)
	const moiday = (event: any) => {
		const dataId = event.currentTarget.dataset.id
		// Bây giờ, bạn có thể sử dụng giá trị dataId theo cách bạn muốn
		console.log(dataId)
		setID_gs(dataId)
		setShowModal(!showModal)
	}
	const router = useRouter()
	const { id_lop } = router.query
	console.log(id_lop)
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
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/includes/slick-theme.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/header.css" rel="stylesheet" />
			<title>Gia sư: Gs Đang Tìm Lớp - 3077</title>
			<link rel="canonical" href="https://giasu.timviec365.vn/gs-dang-tim-lop-gs3077.html" />
			<meta
				name="description"
				content=" Gia sư: Gs Đang Tìm Lớp - 3077 đang có nhu cầu tìm lớp giảng dạy môn Toán. Tham khảo ngay."
			/>
			<meta name="Keywords" content="Gs Đang Tìm Lớp - 3077" />
			<meta property="og:locale" content="vi_VN" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Gia sư: Gs Đang Tìm Lớp - 3077" />
			<meta
				property="og:description"
				content="  Gia sư: Gs Đang Tìm Lớp - 3077 đang có nhu cầu tìm lớp giảng dạy môn Toán. Tham khảo ngay."
			/>
			<meta property="og:site_name" content="Timviec365.vn" />
			<meta
				property="og:image"
				content="https://giasu.timviec365.vn/upload/gs/2022/05/21/giphy.gif"
			/>
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:description"
				content="  Gia sư: Gs Đang Tìm Lớp - 3077 đang có nhu cầu tìm lớp giảng dạy môn Toán. Tham khảo ngay."
			/>
			<meta name="twitter:title" content=" Gia sư: Gs Đang Tìm Lớp - 3077" />
			<div className="wrapper">
				<div className="header-re header__detail__tutor">
					<Header />
					<div className="tt-header">
						<img src="/gia-su/img/bg-header.png" alt="Gia sư" />
						{/* <p>Đăng ký làm gia sư</p> */}
					</div>
					<div className="search" style={{ background: 'none' }}>
						<Search />
					</div>
				</div>
				<div className="content-gs content_detail_gs" id="user_login">
					<div className="container " id="point_free_ph">
						<div className="wps-ln breadcrum_tutor">
							<p>
								<a onClick={() => router.push('/gia-su')} title="Gia Sư 365">
									Gia Sư 365{' '}
								</a>
								/
								<a onClick={() => router.push('/tim-kiem-gia-su')} title="Danh sách gia sư">
									{' '}
									Danh sách gia sư
								</a>{' '}
								/
								<a className="title_tutor" href="" title="Gs Đang Tìm Lớp">
									Gs Đang Tìm Lớp
								</a>
							</p>
						</div>
						<div className="gs-cnt-one" id="point_buy_ph">
							<div className="gs-avt" id="ugs_tk">
								<img
									className="avt_gs lazyloaded"
									src="../gia-su/upload/gs/2022/05/21/giphy.gif"
									data-src="../gia-su/upload/gs/2022/05/21/giphy.gif"
									alt="Gs Đang Tìm Lớp"
								/>
								<p className="dn-dt btn_cursor" data-toggle="modal" data-target="#dnsModal">
									Đăng nhập để xem SĐT
								</p>
								<p className="dn-el btn_cursor" data-toggle="modal" data-target="#dnsModal">
									Đăng nhập để xem email
								</p>
								<div className="gs-bt">
									<p className="view_gs">Lượt xem: 299 </p>
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
											Gs Đang Tìm Lớp
										</h1>
										{/* <p>Giáo viên lâu năm </p> */}
									</div>
									<div className="gs-gt-tow">
										<span className="gs-lgs">
											<img src="/gia-su/img/Vector2.png" alt="lưu gia sư" />
											<p data-toggle="modal" data-target="#dnsModal">
												Lưu gia sư
											</p>
										</span>
										<span className="gs-md" data-toggle="modal" data-target="#dnsModal">
											<img src="/gia-su/img/icon14.png" alt="mời dạy" />
											<p>Mời dạy</p>
										</span>
									</div>
									<p className="gs-gtn">fvf </p>
								</div>
								<div className="gs-kn">
									<h2 className="gs-kn-titile-h2">Thông tin gia sư</h2>
									<div className="gs-kn-one">
										<div className="gs-ns">
											<p className="gs-gs-h">Ngày sinh gia sư</p>
											<p className="gs-gs-p">03-05-2022</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Giới tính gia sư</p>
											<p className="gs-gs-p">Nữ</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Tình trạng hôn nhân</p>
											<p className="gs-gs-p">Đã kết hôn</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Kiểu giáo viên</p>
											<p className="gs-gs-p">Giáo viên cấp 3</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Địa chỉ gia sư</p>
											<p className="gs-gs-p">Quận Lê Chân | Hải Phòng </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Địa chỉ hiện tại</p>
											<p className="gs-gs-p" id="st_address">
												HN{' '}
											</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Ngày cập nhật hồ sơ</p>
											<p className="gs-gs-p">11-11-2023 </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Học phí</p>
											<p className="gs-gs-p"> 150,000 VNĐ/Buổi </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Chuyên ngành</p>
											<p className="gs-gs-p">Chưa cập nhật. </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Số năm kinh nghiệm</p>
											<p className="gs-gs-p">2 năm </p>
										</div>
									</div>
									<div className="gs-kn-tow">
										<div className="gs-ns">
											<p className="gs-gs-h">Kinh nghiệm dạy</p>
											<p className="gs-gs-p">2 năm</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Hình thức dạy</p>
											<p className="gs-gs-p" id="gs-htd">
												Gặp mặt
											</p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Khu vực giảng dạy</p>
											<p className="gs-gs-p">
												<a
													href="https://giasu.timviec365.vn/tim-gia-su-tai-huyen-yen-the-bac-giang-qh229.html"
													target="_blank"
													style={{ color: '#969696' }}
													rel="noopener"
												>
													Huyện Yên Thế
												</a>{' '}
												|{' '}
												<a
													href="/tim-gia-su-tai-bac-giang-tt.html"
													style={{ color: '#969696' }}
													target="_blank"
												>
													Bắc Giang{' '}
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
													href="https://giasu.timviec365.vn/tim-gia-su-toan-sj1.html"
													target="_blank"
													rel="noopener"
												>
													<p className="gs-gs-p" id="gs-lesson">
														Toán
													</p>
												</a>{' '}
											</div>
											{/* <a href="https://giasu.timviec365.vn/tim-gia-su-toan-sj1.html" target="_blank">
                                    <p class="gs-gs-p" id="gs-lesson" >Toán</p>
                                </a> */}
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
												&nbsp;
												<a
													href="https://giasu.timviec365.vn/tim-gia-su-toan-cap-2-sj23.html"
													target="_blank"
													rel="noopener"
												>
													<span className="gs-gs-p">Toán cấp 2</span>
												</a>
												, &nbsp;
												<a
													href="https://giasu.timviec365.vn/tim-gia-su-toan-lop-1-sj25.html"
													target="_blank"
													rel="noopener"
												>
													<span className="gs-gs-p">Toán lớp 1</span>
												</a>{' '}
											</div>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Lớp học</p>
											<a onClick={() => router.push('/tim-gia-su-lop-3-lv3')} target="_blank">
												<p className="gs-gs-p">Lớp 3 </p>
											</a>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Học trường</p>
											<p className="gs-gs-p">Chưa cập nhật. </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Nơi công tác</p>
											<p className="gs-gs-p">Chưa cập nhật. </p>
										</div>
										<div className="gs-ns">
											<p className="gs-gs-h">Năm tốt nghiệp</p>
											<p className="gs-gs-p">Chưa cập nhật. </p>
										</div>
									</div>
								</div>
								<div className="gs-td">
									<h2 className="gs-td-titile-h2">Kinh nghiệm giảng dạy</h2>
									<div className="ct-kn">
										<span>Chưa cập nhật</span>
									</div>
								</div>
								<div className="gs-ld">
									<h2 className="gs-ld-titile-h2">Thành tích đạt được</h2>
									<div className="all-tt">
										<p>Chưa cập nhật </p>
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
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Sáng</div>
													</div>
												</label>
											</div>
											<div className="container container_lh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram  active_cal ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Chiều</div>
													</div>
												</label>
											</div>
											<div className="container container_lh">
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
												<label className="option_item">
													<div className="option_inner instagram ">
														<div className="name">Tối</div>
													</div>
												</label>
											</div>
										</div>
									</form>
								</div>
								<div className="d-css-teacher-detail2-infor5">
									<div id="show_cmt_rate">
										<div className="no_comment_yet">
											<p className="no-record">Hiện chưa có bình luận</p>
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
						<div className="gs-cnt-tow b-gs-cnt-tow">
							<h2 className="gs-tt-h2">Gia sư tương tự</h2>
							<Slide_giasu_dangtimlop />
						</div>
					</div>
				</div>
				<div className="clear" />
				<Footer />
				{showModal && <Modal_moi_day ID_gs={ID_gs} />}
			</div>
		</>
	)
}
GiaSuDangTimLop.Layout = MainLayout
export default GiaSuDangTimLop
