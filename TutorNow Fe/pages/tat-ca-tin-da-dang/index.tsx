import React, { useState, useEffect } from 'react'
import { callApiListClass, callApiStatusClass } from '@/functions/callApi'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { Select } from 'antd'
const { Option } = Select
const TatCaTinDaDang = () => {
	const router = useRouter()

	const genderOptions = [
		{ value: '0', label: 'Đang tìm gia sư' },
		{ value: '1', label: 'Đã có gia sư' },
		{ value: '2', label: 'Kết thúc' },
	]
	const [dataNews, setDataNews] = useState<any[]>([])
	const [selectedLop, setSelectedLop] = useState<number | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiListClass([])
				setDataNews(response.data)
			} catch (error) {
				console.error('Error fetching city data:', error)
			}
		}

		fetchData()
	}, [])

	//trạng thái lớp
	const [status, setStatus] = useState<any[]>([])
	const [selectedStatusList, setSelectedStatusList] = useState<{ [key: number]: string }>({})

	const handleStatusChange = (value: string, id_lop: number) => {
		setSelectedStatusList((prevList) => ({
			...prevList,
			[id_lop]: value,
		}))

		callApiStatusClass(id_lop, value)
			.then((response) => {
				console.log('Status API response:', response)
			})
			.catch((error) => {
				console.error('Error calling status API:', error)
			})
	}

	const handleIdlop = (item: any) => {
		router.push(`/sua-tin-da-dang?id_lop=${item}`)
	}
	// console.log("first", dataNews.trangthai_lop)
	return (
		<>
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<title>Tất cả tin đăng</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Tất cả tin đăng</span>
				</p>
			</div>
			<div className="ad-ldnd">
				<div className="tctd-ad-gs">
					<table>
						<thead>
							<tr>
								<th scope="col">Tên lớp</th>
								<th scope="col">Môn học</th>
								<th scope="col">Học phí</th>
								<th scope="col">Hình thức</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Trạng thái</th>
								<th scope="col" />
							</tr>
						</thead>
						<tbody>
							{dataNews.length &&
								dataNews.length > 0 &&
								dataNews?.map((item: any, key: any) => {
									return (
										<tr key={key}>
											<td>
												{item.title}
												<br />
												<a
													className="gsdl_detail"
													onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.id_lop}`)}
												>
													(Xem chi tiết)
												</a>
											</td>
											<td>{item.ten_mon_hoc} </td>
											<td>
												{item.phi_nhan_lop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ/
												Buổi{' '}
											</td>
											<td id="gm">{item.Hinhthucday}</td>
											<td>{item.pft_address} </td>
											<td>
												<Select
													className="trangthai_lop"
													value={selectedStatusList[item.id_lop] || item.trangthai_lop.toString()}
													onChange={(value) => handleStatusChange(value, item.id_lop)}
												>
													{genderOptions.map((option) => (
														<Option key={option.value} value={option.value} label={option.label}>
															{option.value === '0' && 'Đang tìm gia sư'}
															{option.value === '1' && 'Đã có gia sư'}
															{option.value === '2' && 'Kết thúc'}
														</Option>
													))}
												</Select>
											</td>
											<td>
												<div
													style={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
													}}
												>
													<a title="Làm mới tin" className="refesh_class" style={{ width: 22 }}>
														<svg
															width={22}
															height={21}
															viewBox="0 0 19 21"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M8.43848 3.85735L10.3065 2.09026L10.3835 2.01744L10.3063 1.9448L9.2254 0.927189L9.15668 0.862502L9.08813 0.927355L5.19897 4.60646L5.12272 4.67859L5.19846 4.75126L9.03692 8.43411L9.10502 8.49945L9.17419 8.43524L10.2627 7.42476L10.3403 7.35267L10.2639 7.27931L8.40749 5.49822H9.5C13.2953 5.49822 16.3731 8.41093 16.3731 11.9788C16.3731 15.5466 13.2953 18.4591 9.5 18.4591C5.70467 18.4591 2.62687 15.5466 2.62687 11.9786V11.2581V11.1581L2.52686 11.1581L0.999988 11.1583L0.9 11.1583V11.2583V11.9788C0.9 16.4624 4.76332 20.1 9.5 20.1C14.2367 20.1 18.1 16.4624 18.1 11.9788C18.1 7.49517 14.2367 3.85735 9.5 3.85735H8.43848Z"
																fill="#222FB9"
																stroke="#08827C"
																strokeWidth="0.2"
															/>
														</svg>
													</a>
													<a
														title="Sửa tin"
														// onClick={() => handleEditButtonClick(item.id_lop)}
														onClick={() => handleIdlop(item.id_lop)}
													>
														<img src="/gia-su/img/edit.png" alt="" style={{ maxWidth: 22 }} />
													</a>
												</div>
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

TatCaTinDaDang.Layout = PhuHuynhLayout
export default TatCaTinDaDang
