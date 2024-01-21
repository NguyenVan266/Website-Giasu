import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Search from '@/components/common/search'
import { MainLayout } from '@/components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { Input } from 'antd'
import { callApiListClass1, callApiSaveCourse } from '@/functions/callApi'
import Modal_dang_nhap from '@/components/common/modal_dang_nhap'

const DanhChoGiaSu = () => {
	const [showModalLogin, setShowModalLogin] = useState(false)
	const router = useRouter()
	const [dataListClass, setListClass] = useState([])
	const [listSubject, setListSubject] = useState([])
	const [dataChild, setDataChild] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	const [token, setToken] = useState('')
	useEffect(() => {
		const userToken = Cookies.get('token_base365')

		if (userToken) {
			setToken(userToken)
		}
	}, [])
	console.log(token)
	const [saved, setSaved] = useState('lưu')
	const [id_lopChild, setId_lopChild] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiListClass1({})
				setListClass(response.data)
				console.log(dataListClass)
				setSaved(response.data.saved)
				setListSubject(response.listSubject)
				setDataChild(response.dataChild.title)
				setId_lopChild(response.dataChild.id_lop)

				const totalItems = Object.keys(response).length
				const itemsPerPage = 2
				const totalPages = Math.ceil(totalItems / itemsPerPage)
				getTotalPage(totalPages)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	const saveCourse = async (data: any, b: any) => {
		console.log(token)
		console.log(b)
		if (!token) {
			setShowModalLogin(true)
		}
		if (token) {
			if (b === 'lưu') {
				try {
					const response = await axios.post(
						'https://api.timviec365.vn/api/giasu/tutor/SaveCourse',
						{
							pft_id: data,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					)
					if (response.data !== null) {
						window.location.reload()
					}
				} catch (error) {
					console.error('Error updating profile:', error)
				}
			}
			if (b === 'Đã lưu tin') {
				try {
					const response = await axios.post(
						'https://api.timviec365.vn/api/giasu/tutor/UnSaveClass',
						{
							id: data,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					)
					if (response.data !== null) {
						window.location.reload()
					}
				} catch (error) {
					console.error('Error updating profile:', error)
				}
			}
		}
	}
	return (
		<>
			<>
				<meta charSet="UTF-8" />
				<meta name="robots" content="noindex,nofollow" />
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
				<link rel="preload" as="style" href="/gia-su/css/includes/list_class.css" />
				<link rel="preload" as="style" href="/gia-su/css/includes/modal.css" />
				<link rel="preload" as="style" href="/gia-su/css/includes/footer.css" />
				<link rel="stylesheet" media="all" href="/gia-su/css/includes/header.css" />
				<link rel="stylesheet" media="all" href="/gia-su/css/includes/list_class.css" />
				<link rel="stylesheet" media="all" href="/gia-su/css/includes/modal.css" />
				<link rel="stylesheet" media="all" href="/gia-su/css/includes/footer.css" />
				<link rel="stylesheet" media="all" href="/gia-su/css/bootstrap.min.css" />
				<title>Tìm Việc Gia Sư, Tìm Lớp Gia Sư Mới Nhất Năm 2023 - timviec365.vn</title>
				<meta charSet="UTF-8" />
				<meta name="robots" content="noindex,nofollow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="canonical" href="https://giasu.timviec365.vn/danh-cho-gia-su.html" />

				<meta
					name="description"
					content="Tìm việc gia sư mới nhất năm 2023, tham khảo lớp đang có nhu cầu đang có nhu cầu tuyển giáo viên. Danh sách lớp gia sư hàng đầu trên timviec365.vn"
				/>
				<meta name="Keywords" content="Tìm gia sư" />
				<meta property="og:locale" content="vi_VN" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Tìm Việc Gia Sư, Tìm Lớp Gia Sư Mới Nhất Năm 2023 - timviec365.vn"
				/>
				<meta
					property="og:description"
					content="Tìm việc gia sư mới nhất năm 2023, tham khảo lớp đang có nhu cầu đang có nhu cầu tuyển giáo viên. Danh sách lớp gia sư hàng đầu trên timviec365.vn"
				/>
				<meta property="og:site_name" content="Timviec365.vn" />
				<meta property="og:image" content="https://giasu.timviec365.vn/img/anhdaidien.png" />
				<meta name="twitter:card" content="summary" />
				<meta
					name="twitter:description"
					content="Tìm việc gia sư mới nhất năm 2023, tham khảo lớp đang có nhu cầu đang có nhu cầu tuyển giáo viên. Danh sách lớp gia sư hàng đầu trên timviec365.vn"
				/>
				<meta
					name="twitter:title"
					content="Tìm Việc Gia Sư, Tìm Lớp Gia Sư Mới Nhất Năm 2023 - timviec365.vn"
				/>
				<div className="wrapper">
					<div className="header-re header">
						<Header token_base365={token} />
						<Modal_dang_nhap showModal={showModalLogin} setShowModal={setShowModalLogin} type={1} />
						<div className="search" style={{ background: 'none' }}>
							<p className="search-p">Danh sách lớp học</p>
							<Search />
						</div>
					</div>
					<div className="content-lt">
						<div className="container">
							<p className="container_p">
								<a onClick={() => router.push('/gia-su')}>Trang chủ</a> <span>Tìm lớp gia sư</span>
							</p>
							<h1 className="titile_h1">Danh sách lớp học gần đây</h1>
							<div className="lt-one">
								<div className="lt-dm-sx">
									<div className="ct-dm-sx lh-mr">
										<div className="th-sx">
											<Input type="radio" name="gs-gd" defaultValue={1} checked />
											<label htmlFor="">Gần nhất</label>
										</div>
										<div className="th-sx">
											<Input type="radio" name="gs-gd" defaultValue={2} />
											<label htmlFor="">Xem nhiều</label>
										</div>
										<div className="th-sx">
											<Input type="radio" name="gs-gd" defaultValue={3} />
											<label htmlFor="">Hàng đầu</label>
										</div>
									</div>
									<div className="lt-dm-mh lh-mr">
										<h3>Lọc theo lớp</h3>
										<div className="dm-mh-sc">
											<form action="">
												{listSubject
													? listSubject?.map((item: any, index: number) => {
															return (
																<div className="th-sx" key={index}>
																	<Input
																		type="checkbox"
																		id="checkbox"
																		defaultValue={2}
																		name="as_name"
																	/>
																	<label htmlFor="">{item.Name}</label>
																	<p>{item.Count}</p>
																</div>
															)
													  })
													: ''}
											</form>
										</div>
									</div>
									<div className="crs-kp lh-mr">
										<div className="crs-h">
											<h3>Lớp học phổ biến</h3>
										</div>
										<div className="dm-crs">
											<div className="avt-crs">
												<a
													style={{ width: '100%' }}
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${id_lopChild}`)}
												>
													<img
														className=" lazyloaded"
														src="../gia-su/upload/ph/2022/03/21/PH1653703883.gif"
														data-src="../gia-su/upload/ph/2022/03/21/PH1653703883.gif"
														alt=""
													/>
												</a>
											</div>
											<div className="tt-ct-crs">
												<p>
													<a onClick={() => router.push(`/chi-tiet-lop/?id_lop=${id_lopChild}`)}>
														{dataChild}
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="crs-ht">
									<div className="data_container data_container_class">
										{dataListClass?.map((item: any, index: any) => {
											return (
												<div className="crs-ht-ct" key={index}>
													<div className="crs-ct-avt">
														<a onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.pft_id}`)}>
															<img
																className=" lazyloaded"
																src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
																data-src="../gia-su/upload/ph/2023/08/07/PH1691570454.PNG"
																alt="Tìm gia sư vật lý lượng tử"
															/>
														</a>
													</div>
													<div className="crs-ct-tt" id="dnd_usid">
														<div className="crs-gt" id="pft_id" data-id={item['pft_id']}>
															<h3>
																<a
																	onClick={() =>
																		router.push(`/chi-tiet-lop/?id_lop=${item.pft_id}`)
																	}
																>
																	{item['title']}
																</a>
															</h3>
															<p>Mã lớp: {item['pft_id']} </p>
														</div>
														<div className="crs-nh">
															<p className="crs-qp">{item.city} </p>
															<p className="crs-st">
																Trạng thái: {item['pft_form'] == 1 ? 'Gặp mặt' : 'Online'}
															</p>{' '}
															<p className="crs-dnd">Đề nghị dạy: {item.NumInvite} </p>
														</div>
														<p className="crs-ct-nd">
															<span>{item.ten_mon_hoc} </span>
														</p>
														<div className="crs-lm">
															<p className="crs-gtd">{item.phi_nhan_lop} VNĐ/Buổi </p>
															<div
																className="crs-ltt btn_cursor b_login_ph b_click_bootstrap"
																data-toggle="modal"
																data-target="#dngsModal"
																onClick={() => saveCourse(item.pft_id, item.saved)}
															>
																<span>
																	<img src="/gia-su/img/Vector2.png" alt="lưu lớp học" />
																</span>
																<p id="save">{item.saved}</p>
															</div>
														</div>
													</div>
												</div>
											)
										})}
										<div className="pagination_wrap text-center clr">
											<div className="clr">
												<a className="jp-current">1</a>{' '}
												<a onClick={() => router.push('/danh-cho-gia-su.html?page=2')} className="">
													2
												</a>{' '}
												<a href="/danh-cho-gia-su.html?page=3" className="">
													3
												</a>{' '}
												<a href="/danh-cho-gia-su.html?page=4" className="">
													4
												</a>{' '}
												<a href="/danh-cho-gia-su.html?page=2" className=" next" title="Next page">
													&gt;
												</a>{' '}
												<a href="/danh-cho-gia-su.html?page=5" className=" notUndeline">
													...
												</a>{' '}
												<a href="/danh-cho-gia-su.html?page=9" className=" last" title="Last page">
													Cuối
												</a>{' '}
											</div>
											{/* <ReactPaginate
                                            previousLabel={'<'}
                                            nextLabel={'>'}
                                            breakLabel={'...'}
                                            breakClassName={'break-me'}
                                            pageCount={totalPages}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageChange}
                                            containerClassName={'pagination m_pt_ul d_flex fl_row al_ct'}
                                            subContainerClassName={'pages pagination'}
                                            activeClassName={'active sh_cursor'}
                                        /> */}
										</div>
									</div>
								</div>
							</div>
							<div className="crs-three">
								<h3>Tìm lớp cho gia sư </h3>
								<div className="crs-thre-ct">
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-toan-sj1')}>
											Tìm lớp gia sư Toán
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-ly-sj2')}>Tìm lớp gia sư Lý</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-hoa-sj3')}>Tìm lớp gia sư Hóa</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-van-sj4')}>Tìm lớp gia sư Văn</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-day-ve-sj47')}>
											Tìm lớp gia sư dạy vẽ
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-sinh-sj7')}>
											Tìm lớp gia sư Sinh
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-van-lop-8-sj59')}>
											Tìm lớp gia sư Tiếng anh lớp 1
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-van-lop-7-sj70')}>
											Tìm lớp gia sư Tiếng anh lớp 12
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-tieng-anh-sj8')}>
											Tìm lớp gia sư Tiếng anh
										</a>
									</p>
									<p>
										<a onClick={() => router.push('/tim-lop-gia-su-tieng-trung-sj14')}>
											Tìm lớp gia sư Tiếng trung
										</a>
									</p>
									<p>
										<a>
											<img src="/gia-su/img/tlq.svg" alt="xem thêm" />
										</a>
									</p>
								</div>
							</div>
							<div className="lt-tow">
								<div className="ct-lt-ml">
									<nav className="table-of-contents">
										<p className="tt_phu_luc tt-pl">
											<span>Mục lục:</span>
										</p>
										<ul>
											<li>
												<a
													className="ul_h2"
													href="#nhu-cau-t-igrave-m-gia-su-quan-9-tp-ho-ch-iacute-minh"
												>
													1. Nhu cầu tìm gia sư quận 9 - tp Hồ Chí Minh
												</a>
											</li>
											<li>
												<a
													className="ul_h2"
													href="#t-igrave-m-hieu-loi-iacute-ch-cua-viec-hoc-gia-su-quan-9"
												>
													2. Tìm hiểu lợi ích của việc học gia sư quận 9{' '}
												</a>
											</li>
											<li>
												<a
													className="ul_h3"
													href="#loi-iacute-ch-cua-viec-t-igrave-m-gia-su-quan-9-doi-voi-phu-huynh"
												>
													2.1. Lợi ích của việc tìm gia sư quận 9 đối với phụ huynh
												</a>
											</li>
											<li>
												<a
													className="ul_h3"
													href="#hoc-gia-su-quan-9-dem-lai-loi-iacute-ch-g-igrave-cho-hoc-sinh"
												>
													2.2. Học gia sư quận 9 đem lại lợi ích gì cho học sinh?
												</a>
											</li>
											<li>
												<a
													className="ul_h2"
													href="#doi-tuong-n-agrave-o-ph-ugrave-hop-l-agrave-m-gia-su-cho-con-ban"
												>
													3. Đối tượng nào phù hợp làm gia sư cho con bạn?
												</a>
											</li>
											<li>
												<a className="ul_h3" href="#gia-su-quan-9-l-agrave-sinh-vi-ecirc-n">
													3.1. Gia sư quận 9 là sinh viên
												</a>
											</li>
											<li>
												<a className="ul_h3" href="#gia-su-quan-9-l-agrave-gi-aacute-o-vi-ecirc-n">
													3.2. Gia sư quận 9 là giáo viên
												</a>
											</li>
											<li>
												<a
													className="ul_h2"
													href="#chia-se-kinh-nghiem-t-igrave-m-gia-su-quan-9-hieu-qua"
												>
													4. Chia sẻ kinh nghiệm tìm gia sư quận 9 hiệu quả
												</a>
											</li>
											<li>
												<a
													className="ul_h3"
													href="#t-igrave-m-den-trung-t-acirc-m-gia-su-uy-t-iacute-n"
												>
													4.1. Tìm đến trung tâm gia sư uy tín
												</a>
											</li>
											<li>
												<a className="ul_h3" href="#t-igrave-m-gia-su-quan-9-tai-timviec365-com">
													4.2. Tìm gia sư quận 9 tại timviec365.com
												</a>
											</li>
										</ul>{' '}
									</nav>
								</div>
								<div className="ct-lt-lq">
									<p dir="ltr">
										<em>
											<span>
												<span>
													Quận 9 là một quận nằm ở phía Đông của TP Hồ Chí Minh, có vị trí địa lý
													không quá xa so với trung tâm thành phố. Đây cũng là nơi hội tụ đông dân
													cư và phát triển đều các lĩnh vực khác nhau. Chính vì vậy việc chăm chút
													hơn đến việc học hành của trẻ luôn được nâng cao.&nbsp;
												</span>
											</span>
										</em>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Tìm gia sư quận 9 như thế nào? Mong muốn của nhiều phụ huynh đang sinh sống
												và làm việc trên địa bàn này. Nếu bạn là một trong số họ vậy thì đừng bỏ qua
												bài viết được chia sẻ bên dưới này nhé.
											</span>
										</span>
									</p>{' '}
									<h2 dir="ltr" id="nhu-cau-t-igrave-m-gia-su-quan-9-tp-ho-ch-iacute-minh">
										<span>
											<span>1. Nhu cầu tìm gia sư quận 9 - tp Hồ Chí Minh</span>
										</span>
									</h2>{' '}
									<p dir="ltr">
										<span>
											<span>
												Sở hữu diện tích khá lớn đến 113,97km2, quận 9 là nơi thu hút được đông đảo
												người dân từ nơi khác tới sinh sống và làm việc.&nbsp;
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Nhìn chung về kinh tế, quận 9 có mức độ tăng trưởng khá là đều đặn. Tỷ lệ
												của mọi ngành trên địa bàn đều có xu hướng tăng lên hàng năm, đó là dấu hiệu
												đáng mừng báo hiệu cuộc sống của người dân nơi đây phần nào được đảm bảo.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Trong bối cảnh nền kinh tế phát triển, bạn có thể nhìn thấy nhu cầu đầu tư
												cho giáo dục ngày càng mạnh mẽ. Bỏ qua nỗi lo về cơm áo gạo tiền, các phụ
												huynh quận 9 dường như quan tâm và chú trọng hơn về vấn đề học hành của con,
												họ nhận thấy rằng đầu tư cho tương lai và sự nghiệp học hành của con là đầu
												tư sinh lời lớn nhất.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Cho dù là cuộc sống chưa được như ý muốn thì các bậc cha mẹ vẫn luôn muốn
												dành sự ưu ái cho con mình, ngoài việc chăm lo về mặt ăn uống, mặc đẹp thì
												việc chú trọng vào công tác học hành ngày càng phổ biến hơn. Cũng bởi lý do
												ấy mà không chỉ những địa bàn trung tâm cho tới những khu vực ít người hơn.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Nhu cầu tìm gia sư quận 9 - tp Hồ Chí Minh"
												height={734}
												className=" lazyloaded"
												src="https://giasu.timviec365.vn/pictures/images/1(1).png"
												data-src="https://giasu.timviec365.vn/pictures/images/1(1).png"
												width={1404}
											/>{' '}
											<figcaption>Nhu cầu tìm gia sư quận 9 - tp Hồ Chí&nbsp;Minh</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Ở thời đại công nghệ số thay đổi từng ngày, không có kiến thức quả thật là
												một sự thiệt thòi lớn nhất là đối với các em học sinh - thế hệ măng non của
												đất nước. Nếu có thay đổi thì các em chính là đối tượng phải được thừa hưởng
												và am hiểu đầu tiên.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Hiện nay, hầu hết cha mẹ đều đi làm từ sáng đến tối cho nên việc nắm bắt
												thông tin về việc học của con là rất khó khăn. Chính bởi vậy giải pháp hữu
												hiệu chính là tìm gia sư quận 9 cho con. Các gia sư sẽ dạy kèm con bạn tại
												nhà và vì vậy mà bạn cũng sẽ nắm bắt rõ thông tin này.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Lo lắng cho con là vậy thế nhưng vẫn còn 1 số phụ huynh không nhận ra tầm
												quan trọng của việc học gia sư nên vẫn chưa hành động. Vậy hãy tham khảo
												phần nội dung bên dưới để hiểu rõ vấn đề hơn bạn nhé.
											</span>
										</span>
									</p>{' '}
									<h2 dir="ltr" id="t-igrave-m-hieu-loi-iacute-ch-cua-viec-hoc-gia-su-quan-9">
										<span>
											<span>2. Tìm hiểu lợi ích của việc học gia sư quận 9&nbsp;</span>
										</span>
									</h2>{' '}
									<h3
										dir="ltr"
										id="loi-iacute-ch-cua-viec-t-igrave-m-gia-su-quan-9-doi-voi-phu-huynh"
									>
										<span>
											<span>2.1. Lợi ích của việc tìm gia sư quận&nbsp;9 đối với phụ huynh</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Về phía phụ huynh, ngoài mong muốn kết quả học tập của con mình tốt hơn thì
												họ còn muốn nắm bắt được tình hình học tập hàng ngày của các em. Việc tìm
												gia sư quận 9 dạy kèm tại nhà sẽ giúp bạn giải quyết được nỗi băn khoăn ấy.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Lợi ích của việc tìm gia sư quận 9 đối với phụ huynh"
												height={720}
												className=" lazyloaded"
												src="/pictures/images/loi-ich-cua-viec-tim-gia-su-quan-9.jpg"
												data-src="/pictures/images/loi-ich-cua-viec-tim-gia-su-quan-9.jpg"
												width={1280}
											/>{' '}
											<figcaption>Lợi ích của việc tìm gia sư quận 9 đối với phụ huynh</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Thông qua các buổi dạy kèm của gia sư quận 9, bạn có thể thăm dò về tình
												hình học tập của con để biết con đang yếu ở mảng nào và cần khắc phục như
												thế nào.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Đó chính là lợi ích lớn nhất mà phía phụ huynh nhận được khi tìm gia sư quận
												9 cho con mình.
											</span>
										</span>
									</p>{' '}
									<h3 dir="ltr" id="hoc-gia-su-quan-9-dem-lai-loi-iacute-ch-g-igrave-cho-hoc-sinh">
										<span>
											<span>2.2. Học gia sư quận 9 đem lại lợi ích gì cho học sinh?</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Với học sinh thì sao? Khi hoc gia sư quận 9 các em sẽ nhận về những gì?
												Chúng ta cùng tìm hiểu ngay nhé:
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												- Đối với các em học sinh có học lực yếu, kém hoặc trung bình thì việc học
												gia sư quận 9 sẽ giúp các em bổ sung vốn kiến thức còn thiếu. Có thể khi học
												tập trên lớp các em sẽ không hiểu bài bằng các bạn, chính vì vậy nếu có thêm
												khoảng thời gian ôn tập ở nhà nữa thì chắc chắn các em sẽ hiểu bài hơn.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Học gia sư quận 9 đem lại lợi ích gì cho học sinh?"
												height={720}
												className=" lazyloaded"
												src="/pictures/images/tim-gia-su-ta-quan-9-dem-lai-loi-ich-gi-cho-hoc-sinh.jpg"
												data-src="/pictures/images/tim-gia-su-ta-quan-9-dem-lai-loi-ich-gi-cho-hoc-sinh.jpg"
												width={1280}
											/>{' '}
											<figcaption>
												Học gia sư quận 9 đem&nbsp;lại lợi ích gì cho học sinh?
											</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												- Riêng với những học sinh khá giỏi, học gia sư cũng không phải thừa đâu
												nhé. Khi được học gia sư các em sẽ được tiếp cận với những kiến thức mới,
												nâng cao và chuyên sâu hơn. Chúng có thể giúp các em phấn đấu trở thành học
												sinh giỏi và tham dự các cuộc thi học sinh giỏi do trường hoặc thành phố tổ
												chức,...
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Nói chung, ngoài việc cải thiện chất lượng học tập thì với học sinh, việc
												học gia sư sẽ giúp các em biết cách quản lý quỹ thời gian của mình. Biết kết
												hợp giữa thời gian học trên lớp, thời gian nghỉ ngơi và cả khoảng thời gian
												học thêm,...
											</span>
										</span>
									</p>{' '}
									<h2
										dir="ltr"
										id="doi-tuong-n-agrave-o-ph-ugrave-hop-l-agrave-m-gia-su-cho-con-ban"
									>
										<span>
											<span>3. Đối tượng nào phù hợp làm gia sư cho con bạn?</span>
										</span>
									</h2>{' '}
									<p dir="ltr">
										<span>
											<span>
												Nên tìm đối tượng gia sư nào để dạy kèm cho con bạn? Đó là thắc mắc của rất
												nhiều phụ huynh ở khu vực quận 9. Bởi họ không có chuyên môn nên không biết
												đâu mới là sự lựa chọn đúng đắn nhất giúp con phát triển toàn diện. Đừng lo
												tôi sẽ giúp bạn giải đáp nỗi trăn trở này.
											</span>
										</span>
									</p>{' '}
									<h3 dir="ltr" id="gia-su-quan-9-l-agrave-sinh-vi-ecirc-n">
										<span>
											<span>3.1. Gia sư quận 9 là sinh viên</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Với sinh viên, đối tượng này sẽ phù hợp với những gia đình eo hẹp về kinh
												tế, hay nói cách khác là những gia đình không dư giả về tài chính. Phụ huynh
												có thể liên hệ tới các bạn sinh viên theo thông tin đăng tải trên mạng, tờ
												rơi hoặc là giới thiệu từ một ai đó để nhanh chóng tìm người bạn đồng hành
												cho con mình.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Gia sư quận 9 là sinh viên"
												height={720}
												className=" lazyloaded"
												src="/pictures/images/gia-su-quan-9-la-sinh-vien.jpg"
												data-src="/pictures/images/gia-su-quan-9-la-sinh-vien.jpg"
												width={1280}
											/>{' '}
											<figcaption>Gia sư quận 9 là sinh viên</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Đối tượng này tuy không được các phụ huynh yêu thích nhưng ngược lại, ở đối
												tượng này có đặc điểm chung là chi phí dạy thấp, có nhiệt huyết và năng
												động.&nbsp;
											</span>
										</span>
									</p>{' '}
									<h3 dir="ltr" id="gia-su-quan-9-l-agrave-gi-aacute-o-vi-ecirc-n">
										<span>
											<span>3.2. Gia sư quận 9 là giáo viên</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Đối tượng luôn được phụ huynh yêu thích là các thầy cô giáo có kinh nghiệm
												đứng trên bục giảng và là những người có tiếng tăm, có nghiệp vụ sư phạm.
												Tuy nhiên phụ huynh hãy cân nhắc thật kỹ trước khi lựa chọn bởi vì bạn sẽ
												phải chi trả mức học phí cao hơn.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Gia sư quận 9 là giáo viên"
												height={720}
												className=" lazyloaded"
												src="/pictures/images/gia-su-quan-9-la-giao-vien.jpg"
												data-src="/pictures/images/gia-su-quan-9-la-giao-vien.jpg"
												width={1280}
											/>{' '}
											<figcaption>Gia sư quận 9 là giáo viên</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Hỏi con xem con thích được tiếp cận với đối tượng nào hơn thì hãy ưu tiên mẹ
												nhé, đôi khi việc học giáo viên sẽ khiến các bé không được thoải mái và có
												tâm lý sợ sệt, cũng có khi học sinh viên lại khiến các em không có động lực
												vì chẳng có áp lực.&nbsp;
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Vậy nên, tùy thuộc vào từng hoàn cảnh, nhu cầu và sở thích của mỗi phụ huynh
												và học sinh mà đối tượng nào cũng sẽ là phù hợp. Chỉ là bạn có tìm đúng đến
												người chất lượng hay không mà thôi.
											</span>
										</span>
									</p>{' '}
									<h2 dir="ltr" id="chia-se-kinh-nghiem-t-igrave-m-gia-su-quan-9-hieu-qua">
										<span>
											<span>4. Chia sẻ kinh nghiệm tìm gia sư quận 9 hiệu quả</span>
										</span>
									</h2>{' '}
									<h3 dir="ltr" id="t-igrave-m-den-trung-t-acirc-m-gia-su-uy-t-iacute-n">
										<span>
											<span>4.1. Tìm đến trung tâm gia sư uy tín</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Ngoài việc giới thiệu từ người thân thì bố mẹ cũng có thể chủ động tìm kiếm
												và lựa chọn gia sư chất lượng cho con mình bằng cách liên hệ tới các trung
												tâm gia sư uy tín. Kể từ khi hình thức trung tâm gia sư bùng nổ thì đây
												chính là cách phổ biến được phụ huynh ưa chuộng.
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Tìm đến trung tâm gia sư uy tín"
												height={381}
												className=" lazyloaded"
												src="/pictures/images/tim-gia-su-quan-9-tai-trung-tam.jpg"
												data-src="/pictures/images/tim-gia-su-quan-9-tai-trung-tam.jpg"
												width={800}
											/>{' '}
											<figcaption>Tìm đến trung tâm gia sư&nbsp;uy tín</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Trước khi đi đến lựa chọn cuối cùng thì phụ huynh cũng nên tìm hiểu thật kỹ
												về nguồn gốc, địa chỉ và độ uy tín của trung tâm đó trên thị trường để không
												mắc bẫy của những đối tượng lừa đảo.
											</span>
										</span>
									</p>{' '}
									<h3 dir="ltr" id="t-igrave-m-gia-su-quan-9-tai-timviec365-com">
										<span>
											<span>4.2. Tìm gia sư quận 9 tại timviec365.com</span>
										</span>
									</h3>{' '}
									<p dir="ltr">
										<span>
											<span>
												Nếu như bố mẹ quá bận rộn với mớ công việc hiện tại, không có thời gian dạo
												quanh thị trường để tìm kiếm trung tâm gia sư hay các địa chỉ trực tiếp khác
												vậy thì có thể truy cập vào timviec365.com để tìm gia sư chất lượng ngay
												nhé.
											</span>
										</span>
									</p>{' '}
									<p dir="ltr">
										<span>
											<span>
												Ngoài tính năng tuyển dụng và tìm việc làm thì timviec365.com còn đem lại
												cho bạn những thông tin hữu ích về loạt gia sư đúng nhu cầu. Vậy nên đừng
												ngại gõ vào ô tìm kiếm nội dung mà bạn mong muốn, có thể là tìm gia sư Toán,
												gia sư Văn, gia sư Lý, Hoá,...
											</span>
										</span>
									</p>{' '}
									<div>
										{' '}
										<figure className="image">
											<img
												alt="Tìm gia sư quận 9 tại timviec365.com"
												height={532}
												className=" lazyloaded"
												src="/pictures/images/tim-gia-su-quan-9-tai-timviec365_com.jpg"
												data-src="/pictures/images/tim-gia-su-quan-9-tai-timviec365_com.jpg"
												width={800}
											/>{' '}
											<figcaption>Tìm gia sư quận 9 tại timviec365.com</figcaption>
										</figure>
									</div>{' '}
									<p dir="ltr">
										<span>
											<span>
												Vừa rồi, timviec365.com đã chia sẻ cho bạn một số thông tin hữu ích về việc
												tìm gia sư quận 9. Hy vọng sau bài viết này, các phụ huynh sẽ sớm tìm được
												người bạn đồng hành “chất lượng” cho con của mình.
											</span>
										</span>
									</p>{' '}
									<div className="box_suggest">
										<div className="title_suggest">Bài viết dành cho gia sư</div>
										<div className="content_suggest">
											<p dir="ltr">
												<em>
													<span>
														<span>
															Nếu đang sinh sống và làm việc ở thành phố Hồ Chí Minh thì đừng bỏ qua
															những những kinh nghiệm tìm gia sư cho con ở bài viết dưới đây. Chắc
															chắn chúng sẽ rất hữu ích tới bạn.nnn
														</span>
													</span>
												</em>
											</p>
											<p dir="ltr">
												<a href="https://giasu.timviec365.com/tim-gia-su-tai-ho-chi-minh-sc45.html">
													<span>
														<span>Tìm gia sư tại Hồ Chí Minh</span>
													</span>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="clear" />
				<Footer />
			</>
		</>
	)
}
DanhChoGiaSu.Layout = MainLayout
export default DanhChoGiaSu
