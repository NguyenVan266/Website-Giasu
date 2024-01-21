import { PhuHuynhLayout } from '@/components/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { callApiDsPhInvite, callApiParentDeleteInvite } from '@/functions/callApi'
import dayjs from 'dayjs'
const GiaSuMoiDay = () => {
	const router = useRouter()
	function formatDateTime(dateTimeString: any) {
		const formattedDate = dayjs(dateTimeString).format('DD-MM-YYYY')
		return formattedDate
	}
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const type = 1
				const response = await callApiDsPhInvite(type, [])
				setData(response.data)
				console.log(response.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	const remove_class = async (e: any) => {
		const deleteItem = window.confirm('Bạn có muốn xóa không?')
		if (deleteItem) {
			try {
				const res = await callApiParentDeleteInvite({
					id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const handleIdGs = (item: any) => {
		router.push(`/chi-tiet-gs?id=${item}`)
	}
	return (
		<>
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<title>Quản lý gia sư mời dạy</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý gia sư &gt; Gia sư đã mời dạy</span>
				</p>
			</div>
			<div className="ad-gsmd b-width-table">
				<div className="gsmd-tb-ad">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên gia sư</th>
								<th scope="col">Tên lớp</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Hình thức</th>
								<th scope="col">Ngày mời</th>
								<th scope="col">Trạng thái</th>
								<th scope="col">Xóa</th>
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
											<td>
												{item.userNameTeach}
												<div>
													<a onClick={() => handleIdGs(item.ugs_teach)}>(Xem chi tiết)</a>
												</div>
											</td>
											<td>
												{item.title}
												<br />
												<a
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.it_address} </td>
											<td id="gm">
												{' '}
												{item.pft_form === '1' ? 'Gặp mặt' : item.pft_form === '2' ? 'Online' : ''}
											</td>
											<td>{formattedDate} </td>
											<td>
												{' '}
												{item.trangthai_lop === 0
													? 'Đã gửi lời mời'
													: item.trangthai_lop === 1
													? 'Đã nhận dạy'
													: ''}
											</td>
											<td>
												<a className="btn_cursor" onClick={() => remove_class(item['it_id'])}>
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

GiaSuMoiDay.Layout = PhuHuynhLayout
export default GiaSuMoiDay
