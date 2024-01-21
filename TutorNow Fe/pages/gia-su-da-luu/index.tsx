import Cookies from 'js-cookie'
import Modal_moi_day from '@/components/common/modal_moi_day'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { callApiQLCParent, callApiListSubject } from '@/functions/callApi'
interface Invitation {
	_id: string
	it_id: number
	as_id: number
	userNameTeach: string
}
interface Subject {
	_id: string
	as_id: number
	as_name: string
}
const GiaSuDaLuu = () => {
	const router = useRouter()
	const [dataList, setDataList] = useState<Invitation[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiQLCParent([])
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

				setDataList(updatedInvitations)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
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
	const handleIdGs = (item: any) => {
		router.push(`/chi-tiet-gs?id=${item}`)
	}
	return (
		<>
			<title>Quản lý gia sư đã lưu</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý gia sư &gt; Gia sư đã lưu</span>
				</p>
			</div>
			<div className="ad-gsdl b-width-table">
				<div className="gsdl-tb-ad width__column__gsdl">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên gia sư</th>
								<th scope="col">Môn dạy</th>
								<th scope="col">Hình thức</th>
								<th scope="col">Địa chỉ</th>
								<th scope="col">Mời dạy</th>
							</tr>
						</thead>
						<tbody>
							{dataList?.map((item: any, key: number) => {
								return (
									<tr key={key}>
										<td>
											{item.userNameTeach}
											<br />
											<a onClick={() => handleIdGs(item.ugs_teach)}>(Xem chi tiết)</a>
										</td>
										<td>{item.subjectName}</td>
										<td id="gm">
											{' '}
											{item.pft_form === '1' ? 'Gặp mặt' : item.pft_form === '2' ? 'Online' : ''}
										</td>
										<td>{item.ugs_address} </td>
										<td>
											<div
												className="lt-md lt-mr b_login_ph"
												onClick={() =>
													handleClickModal({ ugs_name: item.userNameTeach, ugs_id: item.IdTeach })
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
				<div className="pagination_wrap text-center clr lh-pn gsmd-kl">
					<div className="clr"></div>
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

GiaSuDaLuu.Layout = PhuHuynhLayout
export default GiaSuDaLuu
