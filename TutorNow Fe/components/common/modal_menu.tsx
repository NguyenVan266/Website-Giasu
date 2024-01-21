import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
export default function Modal_menu() {
	const [showModal, setShowModal] = useState(false)
	const modalRef = useRef()

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	useEffect(() => {
		const closeOnOutsideClick = (e: any) => {
			// alert(showModal);
			if (showModal && e.target.closest('.menu-header') === null) {
				setShowModal(false)
			}
		}

		if (showModal) {
			document.addEventListener('click', closeOnOutsideClick)
		} else {
			document.removeEventListener('click', closeOnOutsideClick)
		}

		return () => {
			document.removeEventListener('click', closeOnOutsideClick)
		}
	}, [showModal])
	const router = useRouter()
	return (
		<div>
			<div className="menu-header b_click_bootstrap" onClick={toggleModal}>
				<img
					className="lazyload"
					src="/gia-su/img/menu.webp"
					data-src="/gia-su/img/menu.webp"
					width={59}
					height={60}
					alt="er"
				/>
			</div>

			{showModal && (
				<div
					className="modal fade modal-lg menu-show show"
					id="exampleModalLong"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="exampleModalLongTitle"
					style={{ display: 'block' }}
				>
					<div
						className="modal-dialog"
						role="document"
						onClick={(e: any) => {
							e.stopPropagation()
						}}
					>
						<div className="modal-content">
							<div className="modal-header">
								<div className="menu_bg">
									<img
										className=" ls-is-cached lazyloaded"
										src="/gia-su/img/bgmenu.png"
										data-src="/gia-su/img/bgmenu.png"
										alt="Anh nen"
									/>
								</div>
								<div className="menu_hd text-center">
									<img
										className=" ls-is-cached lazyloaded"
										src="/gia-su/img/add.png"
										data-src="/gia-su/img/add.png"
										alt=""
									/>
								</div>
							</div>
							<div className="modal-body">
								<div className="modal_body_one">
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary loginMobile"
											data-toggle="modal"
											data-target="#dnModal"
										>
											Đăng nhập
										</button>
										<button
											type="button"
											className="btn btn-primary regisMobile"
											data-toggle="modal"
											data-target="#dkModal"
										>
											Đăng ký
										</button>
									</div>
									<a
										data-toggle="modal"
										data-target="#dnphModal"
										id="btn_postClass"
										className="class_dangtin b_click_bootstrap btn_cursor dangnhap"
									>
										Đăng tin
									</a>
									<div className="menu_list">
										<ul>
											<li>
												<a onClick={() => router.push('/gia-su')}>Trang chủ gia sư</a>
											</li>
											<li>
												<a onClick={() => router.push('/tim-kiem-gia-su')}>Danh sách gia sư</a>
											</li>
											<li>
												<a onClick={() => router.push('/danh-cho-gia-su')}>Danh sách lớp học</a>
											</li>
											<li>
												<a href="https://timviec365.vn/blog/c235/tai-lieu-gia-su">Blog gia sư</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
