import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slide_giasu from '@/components/common/slide_giasu_home'
import GiaSuMoiNhat from '@/components/common/giasu_moinhat_home'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import { useEffect, useState } from 'react'
import GiaSuOnline from '@/components/common/giasu_online_home'
import Search from '@/components/common/search'
import { callApiHome } from '../functions/callApi'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
// export const getServerSideProps = async ()=>{
// 	const response = await callApiHome({});
// 	return {
// 		props:{
// 			response
// 		}
// 	}
// }
interface MyComponentProps {
	response: {}
}
const Home: React.FC<MyComponentProps> = ({ response }) => {
	const router = useRouter()
	const [dataListGS, setListGS] = useState([])
	const [dataDayTaiNha, setDayTaiNha] = useState([])
	const [dataListGsOnline, setListGsOnline] = useState([])
	const [token_base365, setToken] = useState<any>('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Perform asynchronous operations, e.g., data fetching
				const token = Cookies.get('token_base365')
				setToken(token)
				const response = await callApiHome({})
				setListGS(response.data)
				setDayTaiNha(response.data_dayTaiNha)
				setListGsOnline(response.data_dayOnl)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	return (
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
			<link rel="preload" as="style" href="/gia-su/css/includes/index.css" />
			<link rel="preload" as="style" href="/gia-su/css/includes/modal.css" />
			<link rel="preload" as="style" href="/gia-su/css/includes/footer.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/header.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/index.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/modal.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/includes/footer.css" />
			<link rel="stylesheet" media="all" href="/gia-su/css/bootstrap.min.css" />
			<title>Gia Sư 365 - Tìm Gia Sư Online Uy Tín Chất Lượng Tốt Nhất</title>
			<meta
				name="description"
				content="Gia Sư 365 - Trung tâm gia sư online, kênh kết nối dạy và học uy tín. Tìm gia sư dạy kèm tại nhà uy tín, chất lượng cao. Đăng tin miễn phí"
			/>
			<meta name="Keywords" content="Gia sư, tìm gia sư" />
			<meta property="og:locale" content="vi_VN" />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content="Gia Sư 365 - Tìm Gia Sư Online Uy Tín Chất Lượng Tốt Nhất"
			/>
			<meta
				property="og:description"
				content="Gia Sư 365 - Trung tâm gia sư online, kênh kết nối dạy và học uy tín. Tìm gia sư dạy kèm tại nhà uy tín, chất lượng cao. Đăng tin miễn phí"
			/>
			<meta property="og:image" content="https://giasu.timviec365.vn/img/anhdaidien.png" />
			<link rel="canonical" href="https://giasu.timviec365.vn" />
			<link rel="amphtml" href="https://giasu.timviec365.vn/amp" />
			<meta name="twitter:card" content="summary" />
			<meta
				name="twitter:description"
				content="Gia Sư 365 - Trung tâm gia sư online, kênh kết nối dạy và học uy tín. Tìm gia sư dạy kèm tại nhà uy tín, chất lượng cao. Đăng tin miễn phí"
			/>
			<meta
				name="twitter:title"
				content="Gia Sư 365 - Tìm Gia Sư Online Uy Tín Chất Lượng Tốt Nhất"
			/>

			<div className="wrapper">
				<div className="header">
					<div className="bg_header">
						{/* <img data-src="/gia-su/img/anhdaidien.webp" alt="banner" className="lazyload" src="/gia-su/img/loader.gif"/> */}
					</div>
					<div className="header-ct">
						<Header token_base365={token_base365 ? token_base365 : ''} />
						<div className="search">
							<h1 className="search_h1">TÌM GIA SƯ</h1>
							<Search />
						</div>
					</div>
				</div>
				<div className="content">
					<div className="three-h">
						<div className="container">
							<div className="row">
								<div className="col-md-4 exp_first">
									<div className="exp-one exp-img-face">
										<div className="wp_bd_cl">
											<div className="exp-img-one">
												<img
													src="/gia-su/img/icon1.png"
													alt="Đăng ký làm gia sư"
													className=" ls-is-cached lazyloaded"
												/>
											</div>
											<div className="exp-ct">
												<a onClick={() => router.push('/dang-ky-gia-su')}>Đăng Ký Làm Gia Sư</a>
												<p>Đăng ký làm gia sư tìm việc làm tốt</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 exp_sec">
									<div className="exp-tow exp-img-face">
										<div className="wp_bd_cl">
											<div className="exp-img-one">
												<img
													src="/gia-su/img/icon2.png"
													alt="Tải app Timviec365"
													className=" ls-is-cached lazyloaded"
												/>
											</div>
											<div className="exp-ct">
												<a
													href="https://play.google.com/store/apps/details?id=vn.timviec365.myapplication"
													target="_blank"
													rel="noopener"
												>
													Tải app Timviec365
												</a>
												<p>Đăng ký làm gia sư tìm việc làm tốt</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 exp_tfs">
									<div className="exp-three exp-img-face">
										<div className="wp_bd_cl">
											<div className="exp-img-one">
												<img
													src="/gia-su/img/icon3.png"
													alt="Tải app CV365"
													className=" ls-is-cached lazyloaded"
												/>
											</div>
											<div className="exp-ct">
												<a
													target="_blank"
													href="https://play.google.com/store/apps/details?id=com.hungha.appcv365"
													rel="noopener"
												>
													Tải app CV365
												</a>
												<p>Đăng ký làm gia sư tìm việc làm tốt</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="content-one">
						<div className="container">
							<div className="row pb-10">
								<div className="col-md-6 ct-lt-one">
									<div className="ct-h">
										<h2>
											Tìm việc 365 có những gia sư chuyên nghiệp, giàu kinh nghiệm. Chất lượng là ưu
											tiên hàng đầu của chúng tôi
										</h2>
										<p>
											{' '}
											Mặc dù là gia sư, tuy nhiên về bản chất đó cũng là chân dung những người lái
											đò, đưa tầng lớp trẻ non cập bến bờ tri thức thành công. Gia sư tại nhà là một
											trong những việc làm vô cùng phổ biến.
										</p>
										<p>
											Các phụ huynh hiện nay đang khá khắt khe hơn về việc chọn lựa gia sư dạy kèm
											tại nhà cho con em của mình. Đó chính là lý do bạn cần tìm hiểu thật kỹ việc
											làm gia sư dạy kèm tại nhà nếu quan tâm đến nghề nghiệp này!
										</p>
										<div className="ct-h-qt">
											<div className="container">
												<div className="row">
													<div className="col-md-4">
														<div className="ct-qt-one">
															<p className="ct-qt">1100 +</p>
															<p className="ct-nd">Lượt đăng ký làm gia sư</p>
														</div>
													</div>
													<div className="col-md-4">
														<div className="ct-qt-tow">
															<p className="ct-qt">1100 +</p>
															<p className="ct-nd">Lớp đang tìm gia sư</p>
														</div>
													</div>
													<div className="col-md-4">
														<div className="ct-qt-three">
															<p className="ct-qt">1100 +</p>
															<p className="ct-nd">Tìm gia sư thành công</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 ct-lt-tow">
									<div className="ct-img">
										<img
											className=" ls-is-cached lazyloaded"
											src="/gia-su/img/imgpsh_fullsize_anim.webp"
											data-src="/gia-su/img/imgpsh_fullsize_anim.webp"
											alt="Tìm gia sư chất lượng"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<GiaSuMoiNhat list_gs={dataListGS} />

					<Slide_giasu day_tainha={dataDayTaiNha} />

					<GiaSuOnline list_gs_online={dataListGsOnline} />
				</div>
			</div>
			<div className="clear" />
			<Footer />
		</>
	)
}

export default Home
