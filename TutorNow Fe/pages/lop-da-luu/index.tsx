import { useState, useEffect } from 'react'
import SlideBarGs from '@/components/common/slide_bar_gs'
import { GiaSuLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import {
	callApiDS_Lop_DaLuu,
	callApiOfferTeach,
	callApideleteSaveClass,
	callApiListSubject,
} from '@/functions/callApi'
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

const LopDaLuu = () => {
	const router = useRouter()
	const [totalPages, getTotalPage] = useState(0)
	const [dataList, setDataList] = useState<Invitation[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDS_Lop_DaLuu([])
				const invitations: Invitation[] = response.DSLopDaLuu
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
				console.log(dataList)
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
				const res = await callApideleteSaveClass({
					id: e,
				})
				window.location.reload()
			} catch (err) {
				console.log(err)
			}
		}
	}
	const offerTeach = async (pft_id: any, ugs_parent: any, saved: any) => {
		try {
			const res = await callApiOfferTeach({
				pft_id: pft_id,
				ugs_parent: ugs_parent,
			})
			if (res.data !== null) {
				alert(res.message)
			}
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<>
			<title>Quản lý lớp đã lưu</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý lớp dạy &gt; Lớp đã lưu</span>
				</p>
			</div>
			<div className="ad-ldl b-width-table">
				<div className="ldl-ad-gs">
					<table>
						<thead>
							<tr>
								<th scope="col">Tên lớp</th>
								<th scope="col">Lịch học dự kiến</th>
								<th scope="col">Môn học</th>
								<th scope="col">Học phí</th>
								<th scope="col">Đề nghị dạy</th>
								<th scope="col">Xóa</th>
							</tr>
						</thead>
						<tbody>
							{dataList?.map((item: any, key: number) => {
								return (
									<tr key={key}>
										<td>
											{item.TenLop}
											<a onClick={() => router.push(`/chi-tiet-lop/?id_lop=${item.pft_id}`)}>
												(Xem chi tiết)
											</a>
										</td>
										<td>
											<div className="day " data-id="492">
												<label
													className="option_item"
													style={{ display: 'flex', justifyContent: 'center' }}
												>
													<span className="style_lich">Sáng: </span>
													{Number(item.Lich_hoc.st2) == 1 ? <p>T2</p> : ''}
													{Number(item.Lich_hoc.st3) == 1 ? <p>T3</p> : ''}
													{Number(item.Lich_hoc.st4) == 1 ? <p>T4</p> : ''}
													{Number(item.Lich_hoc.st5) == 1 ? <p>T5</p> : ''}
													{Number(item.Lich_hoc.st6) == 1 ? <p>T6</p> : ''}
													{Number(item.Lich_hoc.st7) == 1 ? <p>T7</p> : ''}
													{Number(item.Lich_hoc.scn) == 1 ? <p>CN</p> : ''}
												</label>
											</div>
											<div className="day " data-id="492">
												<label
													className="option_item"
													style={{ display: 'flex', justifyContent: 'center' }}
												>
													<span className="style_lich">Chiều: </span>
													{Number(item.Lich_hoc.ct2) == 1 ? <p>T2</p> : ''}
													{Number(item.Lich_hoc.ct3) == 1 ? <p>T3</p> : ''}
													{Number(item.Lich_hoc.ct4) == 1 ? <p>T4</p> : ''}
													{Number(item.Lich_hoc.ct5) == 1 ? <p>T5</p> : ''}
													{Number(item.Lich_hoc.ct6) == 1 ? <p>T6</p> : ''}
													{Number(item.Lich_hoc.ct7) == 1 ? <p>T7</p> : ''}
													{Number(item.Lich_hoc.ccn) == 1 ? <p>CN</p> : ''}
												</label>
											</div>
											<div className="day " data-id="492">
												<label
													className="option_item"
													style={{ display: 'flex', justifyContent: 'center' }}
												>
													<span className="style_lich">Tối:</span>
													{Number(item.Lich_hoc.tt2) == 1 ? <p>T2</p> : ''}
													{Number(item.Lich_hoc.tt3) == 1 ? <p>T3</p> : ''}
													{Number(item.Lich_hoc.tt4) == 1 ? <p>T4</p> : ''}
													{Number(item.Lich_hoc.tt5) == 1 ? <p>T5</p> : ''}
													{Number(item.Lich_hoc.tt6) == 1 ? <p>T6</p> : ''}
													{Number(item.Lich_hoc.tt7) == 1 ? <p>T7</p> : ''}
													{Number(item.Lich_hoc.tcn) == 1 ? <p>CN</p> : ''}
												</label>
											</div>
										</td>
										<td>{item.subjectName}</td>
										<td>{item.pft_price} VNĐ/Buổi</td>
										<td>
											<span>{item.luotDeNghiDay}</span>
											lượt đề nghị
											<p className="ldl-dnd add_dnd" id="">
												<a
													href=""
													style={{ paddingLeft: 17 }}
													onClick={() => offerTeach(item.pft_id, item.ugs_id, item.saved)}
												>
													{item.saved === 'Đề nghị dạy' && 'Đề nghị dạy'}
													{item.saved === 'Đã đề nghị dạy' && 'Đề nghị dạy'}
													{item.saved === 'Đang dạy' && 'Đang dạy'}
												</a>
											</p>
										</td>
										<td>
											<a title="Xóa" onClick={() => remove_class(item.pft_id)}>
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

LopDaLuu.Layout = GiaSuLayout
export default LopDaLuu
