import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { callApiDS_Lop_Da_Nhan_Day, callApiDeleteInvite } from '@/functions/callApi'
const LopDaNhanDay = () => {
	const router = useRouter()

	const [DS_Lop_Da_Nhan_Day, setDS_Lop_Da_Nhan_Day] = useState([])

	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiDS_Lop_Da_Nhan_Day({})
				console.log(response)

				setDS_Lop_Da_Nhan_Day(response.DS_Lop_Da_Nhan_Day)
				console.log(response.DS_Lop_Da_Nhan_Day)

				// console.log(response);

				const totalItems = Object.keys(response.DS_Lop_Da_Nhan_Day).length
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
	const formattedDate = (date1: any) => {
		const date = new Date(date1)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Tháng bắt đầu từ 0, cần +1
		const year = date.getFullYear()

		const formattedDate = `${day}/${month}/${year}`
		return formattedDate
	}

	console.log(DS_Lop_Da_Nhan_Day)
	const handleIdlop = (item: any) => {
		console.log(item)
		router.push(`/sua-tin-da-dang?id_lop=${item}`)
	}

	return (
		<>
			<title>Quản lý lớp đã nhận dạy</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý lớp dạy &gt; Lớp đã nhận dạy</span>
				</p>
			</div>
			<div className="ad-ldnd b-width-table">
				<div className="ldnd-ad-gs">
					<table>
						<thead>
							<tr>
								<th scope="col">Tên lớp</th>
								<th scope="col">Họ tên phụ huynh</th>
								<th scope="col">Môn học</th>
								<th scope="col">Học phí</th>
								<th scope="col">Ngày nhận</th>
								<th scope="col">Trạng thái</th>
								<th scope="col">Xóa</th>
								<th scope="col" />
							</tr>
						</thead>
						{/* <tbody></tbody> */}
						<tbody>
							{DS_Lop_Da_Nhan_Day.length &&
								DS_Lop_Da_Nhan_Day.length > 0 &&
								DS_Lop_Da_Nhan_Day?.map((item: any, index: number) => {
									return (
										<tr key={index}>
											<td>
												{item.TenLop}
												<br />
												<a
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>
												{item.userNameParent}
												<br />
												<a onClick={() => router.push(`/chi-tiet-ph/?IdParent=${item.IdParent}`)}>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.as_name}</td>
											<td>{item.pft_price} VNĐ/Buổi</td>
											<td>{formattedDate(item.day_invitation_teach)}</td>
											<td>{item.TrangThaiLoiMoi}</td>
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

LopDaNhanDay.Layout = GiaSuLayout
export default LopDaNhanDay
