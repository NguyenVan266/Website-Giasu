import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../../public/css/includes/footer.module.scss"
import Link from 'next/link'
const footerData = [
	{
		id: 1,
		header: 'Dành cho ứng viên',
		links: [
			{ label: 'Mẫu CV xin việc', url: '/cv-xin-viec' },
			{ label: 'Thư xin việc', url: '/cv365/mau-cover-letter-thu-xin-viec' },
			{ label: 'Hồ sơ xin việc', url: '/cv365/mau-don-xin-viec' },
			{ label: 'Bí quyết viết CV', url: '/blog/c24/bi-quyet-viet-cv' },
			{ label: 'Trang vàng', url: '/trang-vang-doanh-nghiep.html' },
		],
	},
	{
		id: 2,
		header: 'Dành cho nhà tuyển dụng',
		links: [
			{ label: 'Đăng tuyển dụng', url: '/dang-tin-tuyen-dung-mien-phi.html' },
			{ label: 'Cẩm nang tuyển dụng', url: '/blog' },
			{ label: 'Tìm hồ sơ', url: '/nguoi-tim-viec.html' },
			{ label: 'Ứng dụng chuyển đổi số', url: 'https:/quanlychung.timviec365.vn' },
			{ label: 'Biểu mẫu', url: '/bieu-mau' },
		],
	},
	{
		id: 3,
		header: 'Tiện ích',
		links: [
			{ label: 'Tra cứu lương', url: '/ssl/so-sanh-luong.html' },
			{ label: 'Lương Gross - Net', url: '/tinh-luong-gross-net.html' },
			{ label: 'Email365', url: '/mail365' },
			{ label: 'Tải app', url: '/gioi-thieu-app-tim-viec.html' },
			{ label: 'Tính bảo hiểm thất nghiệp', url: '/tinh-bao-hiem-that-nghiep' },
		],
	},
	{
		id: 4,
		header: 'Việc làm theo khu vực',
		links: [
			{ label: 'Việc làm tại Hà Nội', url: '/tim-viec-lam-tai-ha-noi.html' },
			{ label: 'Việc làm tại Hồ Chí Minh', url: '/viec-lam-tai-ho-chi-minh-c0v45' },
			{ label: 'Việc làm tại Đà Nẵng', url: '/viec-lam-tai-da-nang-c0v26' },
			{ label: 'Việc làm tại Hải Phòng', url: '/viec-lam-tai-hai-phong-c0v2' },
			{ label: 'Việc làm tại Bình Dương', url: '/viec-lam-tai-binh-duong-c0v46' },
			{ label: 'Việc làm tại Cần Thơ', url: '/viec-lam-tai-can-tho-c0v48' },
			{ label: 'Việc làm tại Đồng Nai', url: '/viec-lam-tai-dong-nai-c0v55' },
			{ label: 'Việc làm tại Bắc Ninh', url: '/viec-lam-tai-bac-ninh-c0v5' },
		],
		other_list: 'Xem tất cả',
		link_list: '/viec-lam-tai-tinh-thanh',
	},
	{
		id: 5,
		header: 'Việc làm theo ngành nghề',
		links: [
			{ label: 'Việc làm kinh doanh', url: '/viec-lam-nhan-vien-kinh-doanh-c9v0' },
			{ label: 'Việc làm bất động sản', url: '/viec-lam-kd-bat-dong-san-c33v0' },
			{ label: 'Việc làm bảo hiểm', url: '/viec-lam-bao-hiem-c66v0' },
			{ label: 'Việc làm IT', url: '/viec-lam-it-phan-mem-c13v0' },
			{ label: 'Việc làm nhân sự', url: '/viec-lam-nhan-su-c27v0' },
			{ label: 'Việc làm bán hàng', url: '/viec-lam-ban-hang-c10v0' },
			{ label: 'Việc làm lương cao', url: '/viec-lam-luong-cao.html' },
			{ label: 'Việc làm kế toán', url: '/viec-lam-ke-toan-kiem-toan-c1v0' },
		],
		other_list: 'Xem tất cả',
		link_list: '/danh-sach-nganh-nghe',
	},
	{
		id: 6,
		header: 'Việc làm theo tag',
		links: [
			{ label: 'Việc làm PHP', url: '/tim-viec-lam-php-t11394.html' },
			{ label: 'Việc làm Kế toán nội bộ', url: '/tag7/DS-viec-lam-tuyen-dung-ke-toan-noi-bo-866' },
			{
				label: 'Việc làm Digital Marketing',
				url: '/tag7/DS-viec-lam-tuyen-dung-digital-marketing-521',
			},
			{
				label: 'Việc làm chuyên viên seo',
				url: '/tag7/DS-viec-lam-tuyen-dung-chuyen-vien-seo-2070',
			},
			{
				label: 'Việc làm bất động sản',
				url: '/tag7/DS-viec-lam-tuyen-dung-tu-van-bat-dong-san-2737',
			},
			{ label: 'Việc làm thực tập sinh', url: '/tag7/DS-viec-lam-tuyen-dung-thuc-tap-sinh-1265' },
			{
				label: 'Việc làm nhân viên bảo hiểm',
				url: '/tag7/DS-viec-lam-tuyen-dung-nhan-vien-bao-hiem-900',
			},
			{ label: 'Việc làm Content', url: '/tag7/DS-viec-lam-tuyen-dung-content-526' },
		],
		other_list: 'Xem tất cả',
		link_list: '/danh-sach-viec-lam-theo-tags',
	},
]
type Props = {}
const FooterPh = ({}: Props) => {
	const [show_timviec365, setShow_timviec365] = useState(false)
	const [activeSection, setActiveSection] = useState(null)

	const toggleSection = (index: any) => {
		if (activeSection === index) {
			setActiveSection(null)
		} else {
			setActiveSection(index)
		}
	}

	return (
		<div className={styles.footer_main}>
			<div className={styles.footer_content}>
				<div className={styles.footer_block1}>
					<Link rel="dofollow" target="_blank" href="/cv365/" className={styles.footer_block1_txt}>
						Hồ sơ xin việc,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-tieng-anh" className={styles.footer_block1_txt}>
						cv tiếng anh,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-tieng-viet" className={styles.footer_block1_txt}>
						cv tiếng việt,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-tieng-han" className={styles.footer_block1_txt}>
						cv tiếng hàn,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-tieng-nhat" className={styles.footer_block1_txt}>
						cv tiếng nhật,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/mau-don-xin-viec" className={styles.footer_block1_txt}>
						đơn xin việc,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/mau-cover-letter-thu-xin-viec" className={styles.footer_block1_txt}>
						thư xin việc,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/mau-so-yeu-ly-lich" className={styles.footer_block1_txt}>
						sơ yếu lý lịch,
					</Link>
					<Link
						rel="dofollow"
						target="_blank"
						href="/cv365/cv-viet-tat-cua-tu-gi-nhung-dieu-can-biet-khi-viet-cv.html"
						className={styles.footer_block1_txt}
					>
						cv là gì,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cau-hoi-tuyen-dung" className={styles.footer_block1_txt}>
						câu hỏi phỏng vấn,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-ke-toan" className={styles.footer_block1_txt}>
						cv kế toán,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-kinh-doanh" className={styles.footer_block1_txt}>
						cv kinh doanh,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-it" className={styles.footer_block1_txt}>
						cv IT,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-hanh-chinh-nhan-su" className={styles.footer_block1_txt}>
						cv nhân sự,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-nhan-vien-ban-hang" className={styles.footer_block1_txt}>
						cv bán hàng,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-marketing" className={styles.footer_block1_txt}>
						CV marketing,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-xay-dung" className={styles.footer_block1_txt}>
						cv xây dựng,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-co-khi" className={styles.footer_block1_txt}>
						cv cơ khí,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-xuat-nhap-khau" className={styles.footer_block1_txt}>
						cv xuất nhập khẩu,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-sinh-vien-moi-ra-truong" className={styles.footer_block1_txt}>
						cv sinh viên mới ra trường,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-kien-truc-noi-that" className={styles.footer_block1_txt}>
						cv kiến trúc nội thất,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-cham-soc-khach-hang" className={styles.footer_block1_txt}>
						cv chăm sóc khách hàng,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-phat-trien-thi-truong" className={styles.footer_block1_txt}>
						cv phát triển thị trường,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-du-lich" className={styles.footer_block1_txt}>
						cv du lịch,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-thu-ngan" className={styles.footer_block1_txt}>
						cv thu ngân,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-viec-lam-telesale" className={styles.footer_block1_txt}>
						cv telesale,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-tai-chinh" className={styles.footer_block1_txt}>
						cv tài chính,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-logistic" className={styles.footer_block1_txt}>
						cv logistic,
					</Link>
					<Link rel="dofollow" target="_blank" href="/cv365/cv-nha-hang-khach-san" className={styles.footer_block1_txt}>
						cv nhà hàng khách sạn
					</Link>
				</div>
				<div className={styles.gach_ngang} />
				<div className={styles.footer_block2}>
					<div className={styles.about_365}>
						<div
							className={`${styles.wrap_arr} ${styles.open_content}`}
							onClick={() => {
								setShow_timviec365(!show_timviec365)
							}}
						>
							<p className={styles.footer_block2_header}>Về Timviec365</p>
							<div className={`${styles.arr_respon} ${styles.hidden}`}>
								{show_timviec365 ? (
									<Image
										loading="lazy"
										width={14}
										height={15}
										src={'https://devnext.timviec365.vn/static-tv/images/before_login/arr_up.svg'}
										className={styles.hidden}
										alt="arrow_up"
									/>
								) : (
									<Image
										loading="lazy"
										width={14}
										height={15}
										src={'https://devnext.timviec365.vn/static-tv/images/arr_down.svg'}
										className={styles.hidden}
										alt="arrow_up"
									/>
								)}
							</div>
						</div>
						<div className={`${styles.list_about_365} ${styles.content_show} ${show_timviec365 ? styles.show : styles.hide}`}>
							<div className={styles.timviec_item}>
								<div className={styles.content_item}>
									<Link rel="nofollow" href="/gioi-thieu-chung.html">
										Giới thiệu
									</Link>
									<Link rel="nofollow" href="/thong-tin-can-biet.html">
										Thông tin
									</Link>
									<Link rel="nofollow" href="/blog/hoi-va-dap-ve-timviec365vn-chat365-va-cac-ung-dung-chuyen-doi-so-new16648.html">
										Hỏi đáp
									</Link>
									<Link rel="nofollow" href="/blog">
										Cẩm nang
									</Link>
									<Link rel="nofollow" href="/thoa-thuan-su-dung.html">
										Thỏa thuận
									</Link>
									<Link rel="nofollow" href="/quy-dinh-bao-mat.html">
										Bảo mật
									</Link>
								</div>
								<div className={styles.content_item}>
									<Link rel="nofollow" href="/giai-quyet-tranh-chap.html">
										Giải quyết tranh chấp
									</Link>
									<Link rel="nofollow" href="/so-do-trang-web.html">
										Sơ đồ Website
									</Link>
									<Link rel="nofollow" target="_blank" href="/https:/www.youtube.com/watch?v=UssNzo6m1p8">
										Video
									</Link>
									<Link rel="nofollow" href="/blog/ung-dung-cua-trinh-sat-ai365-new16655.html">
										AI365
									</Link>
									<Link rel="nofollow" href="/blog/huy-hieu-tia-set-new16722.html">
										Huy hiệu tia sét
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.footer_block2_right}>
						{footerData.map((item, index) => (
							<div key={index} className={styles.for_uv}>
								<div
									className={`${styles.wrap_arr} ${styles.open_content}`}
									onClick={() => {
										toggleSection(item.id)
									}}
								>
									<p className={styles.footer_block2_header}>{item.header}</p>
									<div className={`${styles.arr_respon} ${styles.hidden}`}>
										{activeSection === item.id ? (
											<Image
												loading="lazy"
												width={14}
												height={15}
												src={'https://devnext.timviec365.vn/static-tv/images/before_login/arr_up.svg'}
												className={styles.hidden}
												alt="arrow_up"
											/>
										) : (
											<Image
												loading="lazy"
												width={14}
												height={15}
												src={'https://devnext.timviec365.vn/static-tv/images/arr_down.svg'}
												className={styles.hidden}
												alt="arrow_down"
											/>
										)}
									</div>
								</div>
								<div
									key={`${index}_content`}
									className={`${styles.list_for_uv} ${styles.content_show} ${activeSection === item.id ? styles.show : styles.hide}`}
								>
									<div className={styles.timviec_item}>
										<div className={styles.content_item}>
											{item.links.slice(0, Math.ceil(item.links.length / 2)).map((link, linkIndex) => (
												<Link key={linkIndex} href={link.url}>
													{link.label}
												</Link>
											))}
										</div>
										<div className={styles.content_item}>
											{item.links.slice(Math.ceil(item.links.length / 2)).map((link, linkIndex) => (
												<Link key={`${linkIndex}_second`} href={link.url}>
													{link.label}
												</Link>
											))}
										</div>
									</div>
									{item.other_list && (
										<Link rel="nofollow" href={item.link_list} className={styles.seen_all}>
											{item.other_list}{' '}
											<Image
												loading="lazy"
												style={{ display: 'inline-block' }}
												width={12}
												height={11}
												src="https://devnext.timviec365.vn/static-tv/images/before_login/2arr_right.svg"
												alt="see_all"
											/>
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.gach_ngang} />
				<div className={styles.footer_block3}>
					<div className={styles.wrap_365}>
						<div>
							<Image
								loading="lazy"
								width={184}
								height={41}
								className=" lazyloaded"
								src="https://timviec365.vn/images/365timviec.png"
								alt="timviec365"
							/>
						</div>
						<span className={styles.wrap_365_txt}>KẾT NỐI VỚI TIMVIEC365.VN</span>
						<div className={styles.wrap_block_connect}>
							<div className={styles.wrap_icon_connet}>
								<Link href="/https:/chat365.timviec365.vn/" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={27}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon365.svg"
										alt="chat"
									/>
								</Link>
							</div>
							<div className={styles.wrap_icon_connet}>
								<Link href="/https:/www.facebook.com/Timviec365.Vn/" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={9}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_fb.svg"
										alt="facebook"
									/>
								</Link>
							</div>
							<div className={styles.wrap_icon_connet}>
								<Link href="/https:/twitter.com/timviec365vn" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={13}
										height={11}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_witter.svg"
										alt="witter"
									/>
								</Link>
							</div>
							<div className={styles.wrap_icon_connet}>
								<Link href="/https:/www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={13}
										height={10}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_youtube.svg"
										alt="youtube"
									/>
								</Link>
							</div>
						</div>
						<div className={styles.wrap_certify}>
							<Link rel="nofollow" href="/http:/online.gov.vn/Home/WebDetails/35979">
								<Image
									loading="lazy"
									width={108}
									height={40}
									className={`${styles.icon_bct} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/DK_bocongthuong.png"
									alt="Đã đăng ký bộ công thương"
								/>
							</Link>
							<Link rel="nofollow" href="/">
								<Image
									loading="lazy"
									width={40}
									height={40}
									className={`${styles.icon_dmca} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/dmca.png"
									alt="DMCA.com Protection Status"
								/>
							</Link>
						</div>
					</div>
					<div className={styles.wrap_address}>
						<p className={styles.wrap_address_header}>CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ</p>
						<Link href="/https:/goo.gl/maps/stYYuH5Ln5U2" rel="nofollow" target="_blank" className={styles.wrap_address_txt}>
							VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
						</Link>
						<p className={styles.wrap_address_txt}>VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên</p>
						{/* <p class={styles.wrap_address_txt}>VP3: Tầng 3, Số 1 đường Trần Nguyên Đán, Khu Đô Thị Định Công, Hoàng Mai, Hà Nội</p> */}
						<p className={styles.wrap_address_txt}>Hotline: 0982079209, 1900633682 - ấn phím 1</p>
						<p className={styles.wrap_address_txt}>Email: timviec365.vn@gmail.com</p>
					</div>
					<div className={styles.wrap_qr}>
						<p className={styles.wrap_qr_header}>TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
						<div className={styles.wrap_qr_block}>
							<div className={styles.wrap_qr_child}>
								<Image
									loading="lazy"
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									style={{ width: '101.5%' }}
									src="https://timviec365.vn/images/qr_timviec_uv.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Timviec365 UV</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<Image
									loading="lazy"
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/New_images/new_qr_ft1.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Timviec365 NTD</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<img
									loading="lazy"
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/qr_app_cv_new.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App CV365</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<img
									loading="lazy"
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/qr_chat_365.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Chat365</p>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.footer_block3_2}`}>
					<div>
						<Image
							loading="lazy"
							width={184}
							height={47}
							className={`${styles.lazyloaded}`}
							src="https://timviec365.vn/images/365timviec.png"
							alt="timviec365"
						/>
					</div>
					<div className={`${styles.wrap_address}`}>
						<p className={`${styles.wrap_address_header}`}>CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ</p>
						<p className={`${styles.wrap_address_txt}`}>VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội</p>
						<p className={`${styles.wrap_address_txt}`}>VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên</p>
						<p className={`${styles.wrap_address_txt}`}>Hotline: 0982079209, 1900633682 - ấn phím 1</p>
						<p className={`${styles.wrap_address_txt}`}>Email: timviec365.vn@gmail.com</p>
					</div>
					<div className={`${styles.flex} ${styles.jtf_sb}`}>
						<div className={`${styles.wrap_certify}`}>
							<Link rel="nofollow" target="_blank" href="/http:/online.gov.vn/Home/WebDetails/35979?AspxAutoDetectCookieSupport=1">
								<Image
									loading="lazy"
									width={109}
									height={40}
									className={`${styles.icon_bct} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/DK_bocongthuong.png"
									alt="Đã đăng ký bộ công thương"
								/>
							</Link>
							<Link rel="nofollow" href="/">
								<Image
									loading="lazy"
									width={37}
									height={40}
									className={`${styles.icon_dmca} ${styles.lazyloaded}`}
									src="https://timviec365.vn/images/dmca.png"
									alt="DMCA.com Protection Status"
								/>
							</Link>
						</div>
						<div className={`${styles.wrap_block_connect}`}>
							<div className={`${styles.wrap_icon_connet}`}>
								<Link href="/https:/chat365.timviec365.vn/" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={9}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon365.svg"
										alt="chat"
									/>
								</Link>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<Link href="/https:/www.facebook.com/Timviec365.Vn/" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={9}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_fb.svg"
										alt="facebook"
									/>
								</Link>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<Link href="/https:/twitter.com/timviec365vn" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={9}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_witter.svg"
										alt="witter"
									/>
								</Link>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<Link href="/https:/www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos" rel="nofollow" target="_blank">
									<Image
										loading="lazy"
										width={9}
										height={14}
										src="https://devnext.timviec365.vn/static-tv/images/before_login/icon_youtube.svg"
										alt="youtube"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer_block4}>
					<p className={styles.wrap_qr_header}>TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
					<p className={styles.wrap_qr_header_2}>Tải app để tìm việc siêu tốc Tạo CV đẹp với 365+ mẫu CV xin việc</p>
					<div className={styles.wrap_qr_block}>
						<button className={styles.wrap_qr_child}>
							<Link
								href="/https:/play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
								ios-href="/https:/apps.apple.com/vn/app/t%C3%ACm-vi%E1%BB%87c-365-t%C3%ACm-vi%E1%BB%87c-online/id1597712953?l=vi"
								className={styles.ios_check}
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Timviec365 UV</p>
								<Image
									loading="lazy"
									width={9}
									height={14}
									className={styles.download_img}
									src="https://devnext.timviec365.vn/static-tv/images/before_login/download.svg"
									alt="download"
								/>
							</Link>
						</button>
						<button className={styles.wrap_qr_child}>
							<Link
								href="/https:/play.google.com/store/apps/details?id=vn.timviec365.company"
								ios-href="/https:/apps.apple.com/vn/app/nh%C3%A0-tuy%E1%BB%83n-d%E1%BB%A5ng-timviec365-vn/id1606069668"
								rel="nofollow"
								className={styles.ios_check}
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Timviec365 NTD</p>
								<Image
									loading="lazy"
									width={9}
									height={14}
									className={styles.download_img}
									src="https://devnext.timviec365.vn/static-tv/images/before_login/download.svg"
									alt="download"
								/>
							</Link>
						</button>
						<button className={styles.wrap_qr_child + ' ' + styles.wrap_qr_child_respon}>
							<Link
								href="/https:/play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
								className={styles.ios_check}
								ios-href="/https:/apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app CV365</p>
								<Image
									width={9}
									height={14}
									className={styles.download_img}
									src="https://devnext.timviec365.vn/static-tv/images/before_login/download.svg"
									alt="download"
								/>
							</Link>
						</button>
						<button className={styles.wrap_qr_child + ' ' + styles.wrap_qr_child_respon}>
							<Link
								href="/https:/play.google.com/store/apps/details?id=vn.timviec365.chat_365"
								className={styles.ios_check}
								ios-href="/https:/apps.apple.com/us/app/chat365-nh%E1%BA%AFn-tin-nhanh-ch%C3%B3ng/id1623353330"
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Chat365</p>
								<Image
									loading="lazy"
									width={9}
									height={14}
									className={styles.download_img}
									src="https://devnext.timviec365.vn/static-tv/images/before_login/download.svg"
									alt="download"
								/>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterPh
function get_Cookie_c(arg0: string) {
	throw new Error('Function not implemented.')
}
