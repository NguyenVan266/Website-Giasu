import { useState, useEffect } from 'react'
import { callApiDsPhInvite, callApiListSubject } from '@/functions/callApi'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { Select } from 'antd'
import axios from 'axios'
import Cookies from 'js-cookie'
const { Option } = Select
interface Invitation {
	_id: string
	it_id: number
	as_id: number
	userNameTeach: string
	it_status: number
}
interface Subject {
	_id: string
	as_id: number
	as_name: string
}
const GiaSuDangDay = () => {
	const router = useRouter()
	const [data, setData] = useState<Invitation[]>([])
	const [status, setStatus] = useState<string[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const type = 3
				const response = await callApiDsPhInvite(type, [])
				const invitations: Invitation[] = response.data
				const responseListSubject = await callApiListSubject()
				const subjects: Subject[] = responseListSubject.list

				const updatedInvitations = invitations.map((invitation) => {
					const subject = subjects.find((sub) => sub.as_id === invitation.as_id)
					return {
						...invitation,
						subjectName: subject ? subject.as_name : 'Unknown Subject',
					}
				})

				setData(updatedInvitations)

				// Set the initial statuses when updating the statuses state
				setStatus(updatedInvitations.map((item) => item.it_status.toString()))
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])
	const statusOption = [
		{ value: '2', label: 'Đang dạy' },
		{ value: '4', label: 'Kết thúc' },
	]
	const token = Cookies.get('token_base365')
	const handleChange = async (value: string, index: number) => {
		// Update the corresponding status in the array

		try {
			const selectedInvitation = data[index]
			const it_id = selectedInvitation.it_id
			setStatus((prevStatuses) => {
				const newStatuses = [...prevStatuses]
				newStatuses[index] = value
				return newStatuses
			})
			const response = await axios.post(
				'https://api.timviec365.vn/api/giasu/parent/updateStatusTeach',
				{
					trangthai: value,
					id_md: it_id,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			// }
			alert('Cập nhật trạng thái gia sư thành công!')
		} catch (error) {
			console.error('Lỗi khi gọi API cập nhật trạng thái gia sư:', error)
		}
	}

	return (
		<>
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<title>Quản lý gia sư đang dạy</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý gia sư &gt; Gia sư đang dạy</span>
				</p>
			</div>
			<div className="ad-gsdd b-width-table">
				<div className="gsdd-tb-ad">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên gia sư</th>
								<th scope="col">Tên lớp</th>
								<th scope="col">Môn học</th>
								<th scope="col">Học phí</th>
								<th scope="col">Trạng thái</th>
								<th scope="col">Đánh giá</th>
							</tr>
						</thead>
						<tbody>
							{data.length &&
								data.length > 0 &&
								data?.map((item: any, index: number) => {
									return (
										<tr key={index}>
											<td>
												{item.userNameTeach}
												<div>
													<a onClick={() => router.push(`/chi-tiet-gs/?id=${item.IdTeach}`)}>
														(Xem chi tiết)
													</a>
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
											<td>{item.subjectName} </td>
											<td>
												{item.pft_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ/Buổi{' '}
											</td>

											<td className="status_867">
												<Select
													className="status_class"
													optionFilterProp="label"
													value={status[index]}
													onChange={(value) => handleChange(value, index)}
													style={{ width: '100%' }}
												>
													{statusOption.map((option) => (
														<Option key={option.value} value={option.value} label={option.label}>
															{option.value === '2' && 'Đang dạy'}
															{option.value === '4' && 'Kết thúc'}
														</Option>
													))}
												</Select>
											</td>
											<td>
												<div className="dggs">
													<svg
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="star_rate"
														data-idgs={4414}
														data-star={1}
													>
														<path
															d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
															fill="#F8971C"
														/>
													</svg>
													<svg
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="star_rate"
														data-idgs={4414}
														data-star={2}
													>
														<path
															d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
															fill="#F8971C"
														/>
													</svg>
													<svg
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="star_rate"
														data-idgs={4414}
														data-star={3}
													>
														<path
															d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
															fill="#F8971C"
														/>
													</svg>
													<svg
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="star_rate"
														data-idgs={4414}
														data-star={4}
													>
														<path
															d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
															fill="#F8971C"
														/>
													</svg>
													<svg
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="star_rate"
														data-idgs={4414}
														data-star={5}
													>
														<path
															d="M14.1111 5.93344C14.018 5.64695 13.7639 5.44413 13.4644 5.41703L9.38029 5.04625L7.76622 1.26736C7.64705 0.989733 7.37589 0.810547 7.07408 0.810547C6.77227 0.810547 6.50101 0.989733 6.3826 1.26736L4.76852 5.04625L0.683722 5.41703C0.384287 5.44467 0.130728 5.64749 0.0370332 5.93344C-0.056122 6.21992 0.0299089 6.53414 0.256374 6.73276L3.34367 9.43987L2.43338 13.4491C2.36678 13.7439 2.4812 14.0487 2.7258 14.2255C2.85727 14.3211 3.01174 14.3688 3.16675 14.3688C3.29995 14.3688 3.43326 14.3334 3.55232 14.2621L7.07408 12.1564L10.5952 14.2621C10.8535 14.4165 11.1783 14.4024 11.4224 14.2255C11.667 14.0487 11.7814 13.7439 11.7148 13.4491L10.8045 9.43987L13.8918 6.73276C14.1181 6.53414 14.2043 6.22057 14.1111 5.93344Z"
															fill="#F8971C"
														/>
													</svg>
												</div>
												(Xuất sắc){' '}
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
GiaSuDangDay.Layout = PhuHuynhLayout
export default GiaSuDangDay
