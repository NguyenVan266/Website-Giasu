import { useState, useEffect } from 'react'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import {
	callApiDsPhInvite,
	callApiDeleteInvite,
	callApiAcceptInvite,
	callApiRefuseInvite,
} from '@/functions/callApi'
import dayjs from 'dayjs'
const GiaSuDeNghiDay = () => {
	const router = useRouter()
	const [data, setData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const type = 2
				const response = await callApiDsPhInvite(type, [])
				setData(response.data)
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
				const res = await callApiDeleteInvite({
					id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const acceptInvite = async (e: any) => {
		const accept = window.confirm('Chấp nhận lời mời của gia sư?')
		if (accept) {
			try {
				const res = await callApiAcceptInvite({
					ot_id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const refuseInvite = async (e: any) => {
		const refuse = window.confirm('Từ chối lời mời của gia sư?')
		if (refuse) {
			try {
				const res = await callApiRefuseInvite({
					ot_id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	function formatDateTime(dateTimeString: any) {
		const formattedDate = dayjs(dateTimeString).format('DD-MM-YYYY')
		return formattedDate
	}

	// lấy id gia sư
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
			<title>Quản lý gia sư đã đề nghị dạy</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý gia sư &gt; Gia sư đã đề nghị dạy</span>
				</p>
			</div>
			<div className="ad-gsmd">
				<div className="gsmd-tb-ad">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên gia sư</th>
								<th scope="col">Tên lớp</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Hình thức</th>
								<th scope="col">Ngày đề nghị</th>
								<th scope="col">Nhận dạy</th>
								<th scope="col">Xóa</th>
							</tr>
						</thead>
						<tbody>
							{data.length &&
								data.length > 0 &&
								data?.map((item: any, key: any) => {
									const formattedDate = formatDateTime(item.day_invitation_teach)
									return (
										<tr key={key}>
											<td>
												{item.userNameTeach} <br />
												<a onClick={() => handleIdGs(item.ugs_teach)}>(Xem chi tiết)</a>
											</td>
											<td>
												{item.title}
												<br />
												<a
													className="id_lop"
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.it_class_code}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.it_address} </td>
											<td style={{ color: '#4C5BD4' }}>
												{item.pft_form === '1' ? 'Gặp mặt' : item.pft_form === '2' ? 'Online' : ''}
											</td>
											<td>{formattedDate} </td>
											<td>
												<a
													title="Đồng ý"
													id="it_status"
													className="active-status confirn_ph btn_cursor"
													data-id={875}
													onClick={() => acceptInvite(item['it_id'])}
												>
													<img src="/gia-su/img/exp-cn.png" alt="" />
												</a>
												<a
													title="Từ chối"
													className="tuchoidenghi btn_cursor"
													data-id={875}
													style={{ paddingLeft: '5px' }}
													onClick={() => refuseInvite(item['it_id'])}
												>
													<img src="/gia-su/img/exp-tc.png" alt="" />
												</a>
											</td>
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

GiaSuDeNghiDay.Layout = PhuHuynhLayout
export default GiaSuDeNghiDay
