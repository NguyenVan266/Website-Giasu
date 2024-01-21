import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import SlickSlideIndex from './slickSlideIndex'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { callApiConfirmInvite, callApiDeleteInvite, callApiQLC_GiaSu } from '@/functions/callApi'
import { log } from 'console'
const QuanLyTrangChuGS = () => {
	const router = useRouter()
	const [datagiasu, setListgiasu] = useState([])
	const [ClassInvite, setClassInvite] = useState(0)
	const [countClassTeaching, setClassTeaching] = useState(0)
	const [countSuggestions, setSuggestions] = useState(0)
	const [countClassSave, setClassSave] = useState(0)
	const [countViews, setViews] = useState(0)
	const [DSPhuHuynhMoiDay, setDSPhuHuynhMoiDay] = useState([])
	const [DSPhuHuynhDeNghi, setDSPhuHuynhDeNghi] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiQLC_GiaSu({})
				setListgiasu(response)
				console.log(response)

				setClassInvite(response.countClassInvite)
				setClassTeaching(response.countClassTeaching)
				setSuggestions(response.countSuggestions)
				setClassSave(response.countClassSave)
				setViews(response.countViews)
				setDSPhuHuynhMoiDay(response.DSPhuHuynhMoiDay)
				console.log(response.DSPhuHuynhMoiDay)
				console.log(response.DSPhuHuynhDeNghi)

				setDSPhuHuynhDeNghi(response.DSPhuHuynhDeNghi)
				console.log(response.DSPhuHuynhDeNghi)

				const totalItems = Object.keys(response).length
				const itemsPerPage = 2
				const totalPages = Math.ceil(totalItems / itemsPerPage)
				getTotalPage(totalPages)
				console.log(DSPhuHuynhMoiDay)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	const remove_class = async (e: any) => {
		const deleteItem = window.confirm('bạn có muốn xóa không ?')
		if (deleteItem) {
			try {
				const res = await callApiDeleteInvite({
					id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const dongY = async (e: any) => {
		const dongYItem = window.confirm('bạn đồng ý dạy')
		if (dongYItem) {
			try {
				const res = await callApiConfirmInvite({
					it_id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const formattedDate = (date1: any) => {
		const date = new Date(date1)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Tháng bắt đầu từ 0, cần +1
		const year = date.getFullYear()

		const formattedDate = `${day}/${month}/${year}`
		return formattedDate
	}
	console.log(countViews)

	return (
		<>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý chung</span>
				</p>
			</div>
			<div className="ad-qlc">
				<h3>Quản lý chung</h3>
				<SlickSlideIndex
					classInvite={ClassInvite}
					countClassTeaching={countClassTeaching}
					countSuggestions={countSuggestions}
					countClassSave={countClassSave}
					countViews={countViews}
				/>
				<div className="ad-dsgs-md">
					<h3>Danh sách phụ huynh mời dạy mới nhất</h3>
					<div className="table-ad-gs">
						<table>
							<thead>
								<tr>
									<th scope="col">STT</th>
									<th scope="col">Họ tên phụ huynh</th>
									<th scope="col">Tên lớp</th>
									<th scope="col">Địa chỉ</th>
									<th scope="col">Nhận dạy</th>
									<th scope="col">Xóa</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(DSPhuHuynhMoiDay).length != 0
									? DSPhuHuynhMoiDay?.map((item: any, index: number) => {
											return (
												<tr key={index}>
													<td>{index + 1}</td>
													<td>
														{item.userNameParent}
														<br />
														<a onClick={() => router.push(`/chi-tiet-ph/?id=${item.IdParent}`)}>
															(Xem chi tiết)
														</a>
													</td>
													<td>
														{item.TenLop}
														<br />
														<a
															onClick={() =>
																router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)
															}
														>
															(Xem chi tiết)
														</a>
													</td>
													<td>{item['ugs_address']} </td>
													<td>
														<a
															title="Đồng ý"
															id="it_status"
															className="active-status"
															data-id={868}
															onClick={() => dongY(item.it_id)}
														>
															<img src="/gia-su/img/exp-cn.png" alt="" />
														</a>
														<a
															title="Từ chối"
															data-id={868}
															className="tuchoiloimoi btn_cursor"
															onClick={() => remove_class(item['it_id'])}
														>
															<img src="/gia-su/img/exp-tc.png" alt="" />
														</a>
													</td>
													<td>
														<a title="Xóa" onClick={() => remove_class(item['it_id'])}>
															<img src="/gia-su/img/delete.svg" alt="" />
														</a>
													</td>
												</tr>
											)
									  })
									: ''}
							</tbody>
						</table>
					</div>
					<div className="add-ad">
						<a onClick={() => router.push('/phu-huynh-moi-day')}>Xem tất cả</a>
					</div>
				</div>
				<div className="ad-dsgs-mn">
					<h3>Lớp đã đề nghị dạy mới nhất</h3>
					<div className="table-ad-gs">
						<table>
							<thead>
								<tr>
									<th scope="col">STT</th>
									<th scope="col">Tên lớp</th>
									<th scope="col">Môn học</th>
									<th scope="col">Ngày gửi</th>
									<th scope="col">Trạng thái</th>
									<th scope="col">Xóa</th>
								</tr>
							</thead>
							<tbody>
								{DSPhuHuynhDeNghi.length &&
									DSPhuHuynhDeNghi.length > 0 &&
									DSPhuHuynhDeNghi?.map((item: any, index: number) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>
													{item.TenLop}
													<br />
													<a
														onClick={() =>
															router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)
														}
													>
														(Xem chi tiết)
													</a>
												</td>
												<td>
													{item['alias']} <br />{' '}
												</td>
												<td>
													{formattedDate(item.day_invitation_teach)} <br />{' '}
												</td>
												<td>{item['TrangThaiLoiMoi']} </td>

												<td>
													<a title="Xóa" onClick={() => remove_class(item['it_id'])}>
														<img src="/gia-su/img/delete.svg" alt="" />
													</a>
												</td>
											</tr>
										)
									})}
							</tbody>
						</table>
					</div>
					<div className="add-ad">
						<a onClick={() => router.push('/lop-da-de-nghi-day')}>Xem tất cả</a>
					</div>
				</div>
			</div>
		</>
	)
}
QuanLyTrangChuGS.Layout = GiaSuLayout
export default QuanLyTrangChuGS
