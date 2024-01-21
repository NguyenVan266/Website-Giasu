import Cookies from 'js-cookie'
import Modal_moi_day from '@/components/common/modal_moi_day'
import { PhuHuynhLayout } from '@/components/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { callApiQLCParent, callApiDsPhInvite } from '@/functions/callApi'
import dayjs from 'dayjs'
const QuanLyTrangChuPh = () => {
	function formatDateTime(dateTimeString: any) {
		const formattedDate = dayjs(dateTimeString).format('DD-MM-YYYY')
		return formattedDate
	}
	const [post, setPost] = useState()
	const [save, setSave] = useState()
	const [seen, setSeen] = useState()
	const [invite, setInvite] = useState()
	const [dataList, setDataList] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiQLCParent([])
				setPost(response.countPost)
				setSave(response.countSaved)
				setSeen(response.countViews)
				setInvite(response.countInvite)
				setDataList(response.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	const [data, setData] = useState([])
	useEffect(() => {
		try {
			const fetchData = async () => {
				const type = 1
				const response = await callApiDsPhInvite(type, [])
				setData(response.data)
			}
			fetchData()
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}, [])
	const router = useRouter()
	const [showModal, setShowModal] = useState(false)
	const [thongTinGiaSu, setThongTinGiaSu] = useState({})
	const [showModalLogin, setShowModalLogin] = useState(false)
	const handleClickModal = async (thongTin: any) => {
		const isCookieExists = Cookies.get('token_base365') !== undefined
		if (isCookieExists) {
			await setThongTinGiaSu(thongTin)
			setShowModal(true)
		} else {
			setShowModalLogin(true)
		}
	}
	// lấy id gia sư
	const handleIdGs = (item: any) => {
		router.push(`/chi-tiet-gs?id=${item}`)
	}
	return (
		<>
			<title>Quản lý trang chủ phụ huynh</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>

			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ </a>
					<a>Quản lý chung</a>
				</p>
			</div>
			<div className="ad-qlc">
				<h3>Quản lý chung</h3>
				<div className="mt_qlc">
					<div className="ad_sld">
						<div className="sl_ttph">
							<div className="gt-ad">
								<p>{post}</p>
								<p className="gsph">Tin đã đăng</p>
							</div>
						</div>
						<div className="sl_ttph">
							<div className="gt-ad">
								<p>{save}</p>
								<p className="gsph">Gia sư đã lưu</p>
							</div>
						</div>
						<div className="sl_ttph">
							<div className="gt-ad">
								<p>{seen}</p>
								<p className="gsph">Lượt xem hồ sơ</p>
							</div>
						</div>
						<div className="sl_ttph">
							<div className="gt-ad">
								<p>{invite}</p>
								<p className="gsph">Gia sư mời dạy</p>
							</div>
						</div>
					</div>
				</div>
				<div className="ad-ds-md">
					<h3>Danh sách gia sư mời dạy</h3>
					<div className="table-ttph">
						<div className="table-ad-tb">
							<table>
								<thead>
									<tr>
										<th scope="col">STT</th>
										<th scope="col">Họ tên gia sư</th>
										<th scope="col">Tên lớp</th>
										<th scope="col">Địa chỉ</th>
										<th scope="col">Hình thức</th>
										<th scope="col">Ngày mời</th>
									</tr>
								</thead>
								<tbody>
									{data.length &&
										data.length > 0 &&
										data?.map((item: any, key: number) => {
											const formattedDate = formatDateTime(item.day_invitation_teach)
											const stt = key + 1
											if (stt > data.length) {
												return null
											}
											return (
												<tr key={key}>
													<td>{stt} </td>
													<td>
														{item.userNameTeach}
														<br />
														<a onClick={() => handleIdGs(item.ugs_teach)}>(Xem chi tiết)</a>
													</td>
													<td>
														{item.title}
														<br />
														<a
															onClick={() =>
																router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)
															}
														>
															(Xem chi tiết)
														</a>
													</td>
													<td>{item.it_address} </td>
													<td id="gm">
														{' '}
														{item.pft_form === '1'
															? 'Gặp mặt'
															: item.pft_form === '2'
															? 'Online'
															: ''}
													</td>
													<td>{formattedDate} </td>
												</tr>
											)
										})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="add-ad">
						<a onClick={() => router.push('/gia-su-moi-day')}>Xem tất cả</a>
					</div>
				</div>
				<div className="ad-ds-md">
					<h3>Danh sách gia sư đã lưu mới nhất</h3>
					<div className="table-ttph">
						<div className="table-ad-ab">
							<table>
								<thead>
									<tr>
										<th scope="col">Họ tên gia sư</th>
										<th scope="col">Môn học</th>
										<th scope="col">Hình thức</th>
										<th scope="col">Địa chỉ</th>
										<th scope="col">Mời dạy</th>
									</tr>
								</thead>
								<tbody>
									{dataList.length &&
										dataList.length > 0 &&
										dataList?.map((item: any, key: number) => {
											return (
												<tr key={key}>
													<td>
														{item.userNameTeach}
														<br />
														<a onClick={() => handleIdGs(item.ugs_teach)}>(Xem chi tiết)</a>
													</td>
													<td>{item.pft_summary}</td>
													<td id="gm">
														{' '}
														{item.pft_form === '1'
															? 'Gặp mặt'
															: item.pft_form === '2'
															? 'Online'
															: ''}
													</td>
													<td>{item.ugs_address} </td>
													<td>
														<div
															className="lt-md lt-mr b_login_ph"
															onClick={() =>
																handleClickModal({
																	ugs_name: item.userNameTeach,
																	ugs_id: item.IdTeach,
																})
															}
														>
															<span>
																<img src="/gia-su/img/add-user.png" alt="Mời dạy" />
															</span>
															<button className="btn_md">Mời dạy</button>
														</div>
													</td>
												</tr>
											)
										})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="add-ad">
						<a onClick={() => router.push('/gia-su-da-luu')}>Xem tất cả</a>
					</div>
				</div>
				<Modal_moi_day
					thongTinGiaSu={thongTinGiaSu}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			</div>
		</>
	)
}

QuanLyTrangChuPh.Layout = PhuHuynhLayout
export default QuanLyTrangChuPh
