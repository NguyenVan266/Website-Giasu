import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { callApiDS_PH_DaLuu, callApideleteSaveParent } from '@/functions/callApi'
import { useState, useEffect } from 'react'

const PhuHuynhDaLuu = () => {
	const router = useRouter()
	const [DS_PH_DaLuu, setDS_PH_DaLuu] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiDS_PH_DaLuu({})
				setDS_PH_DaLuu(response.DSPhuHuynhDaLuu)

				console.log(response.DSPhuHuynhDaLuu)

				const totalItems = Object.keys(response.DSPhuHuynhDaLuu).length
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
		const deleteItem = window.confirm('Bạn có muốn xóa không')
		if (deleteItem) {
			try {
				const res = await callApideleteSaveParent({
					id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}

	console.log(DS_PH_DaLuu)

	return (
		<>
			<title>Quản lý Phụ huynh đã lưu</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý lớp dạy &gt; Phụ huynh đã lưu</span>
				</p>
			</div>
			<div className="ad-phmd b-width-table">
				<div className="table-ad-phdl">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên phụ huynh</th>
								<th scope="col">Mã phụ huynh</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Chi tiết phụ huynh</th>
								<th scope="col">Xóa</th>
							</tr>
						</thead>
						<tbody>
							{DS_PH_DaLuu.length &&
								DS_PH_DaLuu.length > 0 &&
								DS_PH_DaLuu?.map((item: any, index: number) => {
									return (
										<tr key={index}>
											<td>{item.userNameParent}</td>
											<td>{item.IdParent}</td>
											<td>{item.ugs_address} </td>
											<td>
												<a onClick={() => router.push(`/chi-tiet-ph/?IdParent=${item.IdParent}`)}>
													Xem chi tiết
												</a>
											</td>
											<td>
												<a title="Xóa" onClick={() => remove_class(item['sp_id'])}>
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

PhuHuynhDaLuu.Layout = GiaSuLayout
export default PhuHuynhDaLuu
