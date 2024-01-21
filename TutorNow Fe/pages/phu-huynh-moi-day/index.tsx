import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { callApiDS_PH_MoiDay, callApiConfirmInvite, callApiDeleteInvite } from '@/functions/callApi'
import { log } from 'console'
const PhuHuynhMoiDay = () => {
	const router = useRouter()
	const [DSPhuHuynhMoiDay, setDSPhuHuynhMoiDay] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiDS_PH_MoiDay([])
				setDSPhuHuynhMoiDay(response.DSPhuHuynhMoiDay)

				console.log(response)

				const totalItems = Object.keys(response.DSPhuHuynhMoiDay).length
				console.log(totalItems)

				const itemsPerPage = 2
				const totalPages = Math.ceil(totalItems / itemsPerPage)
				getTotalPage(totalPages)
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

	return (
		<>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý lớp dạy &gt; Phụ huynh mời dạy</span>
				</p>
			</div>
			<div className="ad-phmd b-width-table">
				<div className="table-ad-phmd">
					<table>
						<thead>
							<tr>
								<th scope="col">STT</th>
								<th scope="col">Họ tên phụ huynh</th>
								<th scope="col">Tên lớp</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Ngày mời dạy</th>
								<th scope="col">Nhận dạy</th>
								<th scope="col">Xóa</th>
							</tr>
						</thead>
						<tbody>
							{DSPhuHuynhMoiDay.length &&
								DSPhuHuynhMoiDay.length > 0 &&
								DSPhuHuynhMoiDay?.map((item: any, index: number) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td id="us_id">
												{item.userNameParent}
												<br />
												<a onClick={() => router.push(`/chi-tiet-ph/?IdParent=${item.IdParent}`)}>
													(Xem chi tiết)
												</a>
											</td>
											<td>
												{item.TenLop} <br />
												<a
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.pft_address} </td>
											<td>{formattedDate(item.day_invitation_teach)} </td>
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
								})}
						</tbody>
					</table>
				</div>
				<div className="pagination_wrap text-center clr lh-pn gsmd-kl">
					<div className="clr">
						<a className="jp-current">1</a>{' '}
					</div>
				</div>
			</div>
		</>
	)
}

PhuHuynhMoiDay.Layout = GiaSuLayout
export default PhuHuynhMoiDay
