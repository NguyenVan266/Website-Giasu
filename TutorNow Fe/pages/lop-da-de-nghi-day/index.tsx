import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { DS_PH_DeNghiDay, callApiDeleteInvite } from '@/functions/callApi'
import { useEffect, useState } from 'react'
const LopDaDeNghiDay = () => {
	const router = useRouter()

	const [DSPhuHuynhDeNghi, setDSPhuHuynhDeNghi] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await DS_PH_DeNghiDay({})
				setDSPhuHuynhDeNghi(response.DSPhuHuynhDeNghi)
				console.log(response.DSPhuHuynhDeNghi)
				const totalItems = Object.keys(response.DSPhuHuynhDeNghi).length
				const itemsPerPage = 2
				const totalPages = Math.ceil(totalItems / itemsPerPage)
				getTotalPage(totalPages)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	console.log(DSPhuHuynhDeNghi)
	const formattedDate = (date1: any) => {
		const date = new Date(date1)
		const day = date.getDate()
		const month = date.getMonth() + 1 // Tháng bắt đầu từ 0, cần +1
		const year = date.getFullYear()

		const formattedDate = `${day}/${month}/${year}`
		return formattedDate
	}
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

	return (
		<>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý lớp dạy &gt; Lớp đã đề nghị dạy</span>
				</p>
			</div>
			<div className="ad-lddnd b-width-table">
				<div className="lddnd-ad-gs mn-ad-tb ">
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
												{item.TenLop} <br />
												<a
													className="xem_ct_gs"
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.TenLop}</td>
											<td>{formattedDate(item.day_invitation_teach)} </td>
											<td>{item.TrangThaiLoiMoi} </td>
											<td>
												<a onClick={() => remove_class(item['it_id'])}>
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
LopDaDeNghiDay.Layout = GiaSuLayout
export default LopDaDeNghiDay
