import { callApiListClass, callApiParentInvite } from '@/functions/callApi'
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Input } from 'antd'
export default function Modal_moi_day({ thongTinGiaSu, showModal, setShowModal }: any) {
	const [listClass, setListClass] = useState([])
	const [totalPages, getTotalPage] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			try {
				// // Perform asynchronous operations, e.g., data fetching
				const response = await callApiListClass({})
				setListClass(response.data)
				console.log(response.data)

				const totalItems = response.data.length
				const itemsPerPage = 2
				const totalPages = Math.ceil(totalItems / itemsPerPage)
				getTotalPage(totalPages)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	const [selectedItems, setSelectedItems] = useState<any[]>([])
	const ParentInvite = async () => {
		try {
			const checkboxes = document.querySelectorAll('input[name="name_class"]:checked')
			const selectedValues = Array.from(checkboxes).map((checkbox: any) => {
				const parentDiv = checkbox.closest('.md-bt-ch')
				const dataValue = parentDiv.querySelector('.md-cd').getAttribute('data-value')
				return dataValue
			})

			if (selectedValues.length === 0) {
				alert('Vui lòng chọn ít nhất một lớp để mời giáo viên dạy')
				return
			}

			setSelectedItems(selectedValues)

			await Promise.all(
				selectedValues.map(async (value) => {
					const res = await callApiParentInvite({
						id_lop: value,
						ugs_teach: thongTinGiaSu.ugs_id,
					})
					// You can handle the response if needed
					console.log(`Mời gia sư thành công cho lớp ${value}`)
				})
			)

			alert('Mời gia sư thành công')
		} catch (err) {
			console.error(err)
		}
	}

	// console.log("data",ParentInvite)

	return (
		<Modal
			show={showModal}
			onHide={() => setShowModal(false)}
			className="modal fade show"
			id="myModal"
			aria-labelledby="myModalLabel"
			style={{ display: 'block' }}
		>
			<div className="modal-header">
				<h4 className="modal-title">Mời giáo viên</h4>
				<button type="button" className="close" onClick={() => setShowModal(false)}>
					×
				</button>
			</div>
			<div className="modal-body">
				<div className="md-ct modal_invite_teach">
					{' '}
					<div className="md-ct">
						<div className="md-img">
							<img
								className=" lazyloaded"
								src={thongTinGiaSu.ugs_avatar ? thongTinGiaSu.ugs_avatar : '/gia-su/img/add.png'}
								alt="er"
							/>
						</div>
						<div className="md-name">
							<p>{thongTinGiaSu.ugs_name}</p>
							<span className="giasu_id" style={{ display: 'none' }} />
						</div>
					</div>
				</div>
				<div className="md-ct-cl">
					<p>Chọn lớp mà bạn muốn mời giáo viên dạy:</p>
					<div className="md-bt" id="ugs_id">
						{listClass?.length &&
							listClass?.length > 0 &&
							listClass?.map((item: any, index: number) => {
								return (
									<div className="md-bt-ch" key={index}>
										<Input type="checkbox" name="name_class" />
										<div className="md-cd" id="pft_address" data-value={item.id_lop}>
											<p>
												<span>[ML: {item.id_lop}]</span>
											</p>
										</div>
										<div className="md-nd">
											<p>{item.ten_mon_hoc} </p>
										</div>
									</div>
								)
							})}
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<button name="lm-d" id="lm-d" onClick={ParentInvite}>
					Gửi lời mời
				</button>
			</div>
		</Modal>
	)
}
