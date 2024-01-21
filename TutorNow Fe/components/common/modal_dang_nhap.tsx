import { callApiLogin } from '@/functions/callApi'
import Modal from 'react-bootstrap/Modal'
import Cookies from 'js-cookie'
import { ChangeEvent, FormEvent, useState } from 'react'
interface FormData {
	email: string
	password_first: string
}

export default function Modal_dang_nhap({ showModal, setShowModal, type }: any) {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password_first: '',
		// Thêm các trường khác của form vào đây
	})

	const [errors, setErrors] = useState<Record<string, string>>({})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
		// Xóa thông báo lỗi khi người dùng thay đổi giá trị
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
	}
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		let formIsValid = true

		// Kiểm tra xem email và password có trống không
		if (!formData.email.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, email: 'Tài khoản không được để trống' }))
			formIsValid = false
		}

		if (!formData.password_first.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, password_first: 'Mật khẩu không được để trống' }))
			formIsValid = false
		}
		// Xử lý dữ liệu form tại đây, có thể sử dụng fetch hoặc axios để gửi dữ liệu lên server
		if (formIsValid) {
			try {
				const response = await callApiLogin({
					account: formData.email,
					password: formData.password_first,
					type: type,
				})
				if (response.data === null) {
					alert(response.error.message)
				} else {
					console.log(response.data.access_token)
					Cookies.set('token_base365', response.data.access_token)
					Cookies.set('type', response.data.typeGS)

					{
						type === 1 && (window.location.href = '/gia-su/quan-ly-trang-chu-gs')
					}
					{
						type === 2 && (window.location.href = '/gia-su/quan-ly-trang-chu-ph')
					}
				}
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<Modal
			show={showModal}
			onHide={() => setShowModal(false)}
			className="modal fade modal-dn"
			id="dnsModal"
			role="dialog"
		>
			<div className="modal-header">
				<h4 className="modal-title">Đăng nhập tài khoản</h4>
				<button type="button" className="close" onClick={() => setShowModal(false)}>
					×
				</button>
			</div>
			<div className="modal-body ph">
				<div className="md-ct-cl">
					<div className="md-exp text-center">
						<span className="btn-log-reg md-ph mr-3">
							<svg
								width={20}
								height={20}
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.1914 12.3511C9.39454 12.2449 10.6046 12.2449 11.8078 12.3511L12.1919 12.3836C12.7174 12.4354 13.2391 12.5165 13.7525 12.6261C15.0611 12.8956 16.0114 13.3739 16.432 14.2609C16.7445 14.9209 16.7445 15.6871 16.4318 16.3473C16.0102 17.2367 15.0477 17.7189 13.7622 17.9725L13.3728 18.0533C12.8523 18.1532 12.3274 18.2214 11.806 18.2571C10.8275 18.3404 9.84456 18.3556 8.89636 18.3034C8.79184 18.3034 8.72168 18.303 8.65987 18.3016L8.53966 18.2971C8.3935 18.2896 8.2596 18.2743 8.20341 18.2579C7.54373 18.213 6.88843 18.1175 6.2598 17.9757L6.04656 17.9312C4.85619 17.6667 3.97464 17.1896 3.56687 16.3464C3.41244 16.0192 3.33256 15.6616 3.33302 15.3026C3.33168 14.941 3.41221 14.5838 3.57239 14.2502C3.99707 13.3972 4.99484 12.884 6.24202 12.6271C6.8882 12.4886 7.5433 12.3961 8.1914 12.3511ZM11.7027 13.5528C10.5695 13.4529 9.42971 13.4529 8.28547 13.5537C7.6827 13.5956 7.08364 13.6802 6.48807 13.8079C5.56569 13.9979 4.86046 14.3607 4.65068 14.7819C4.57342 14.9428 4.53363 15.1193 4.53429 15.3011C4.53406 15.4839 4.57439 15.6645 4.64989 15.8245C4.86565 16.2706 5.53111 16.604 6.50615 16.7951L6.79991 16.8573C7.29191 16.9548 7.79863 17.0221 8.36175 17.0646C8.43287 17.0788 8.50961 17.0876 8.60066 17.0923L8.92866 17.0979C9.85381 17.1479 10.7813 17.1336 11.7143 17.0542C12.3156 17.013 12.913 16.9263 13.5159 16.7918L13.7034 16.7521C14.5597 16.5579 15.1521 16.2402 15.3471 15.829C15.5044 15.4968 15.5044 15.1112 15.3473 14.7793C15.1386 14.3392 14.4789 14.0072 13.5069 13.807C12.9156 13.6808 12.3163 13.5961 11.7132 13.5537L11.7027 13.5528ZM10.0033 1.66699C12.4483 1.66699 14.4304 3.65752 14.4304 6.11297C14.4304 8.56842 12.4483 10.5589 10.0033 10.5589C7.55823 10.5589 5.57615 8.56842 5.57615 6.11297C5.57615 3.65752 7.55823 1.66699 10.0033 1.66699ZM10.0033 2.87338C8.22167 2.87338 6.77742 4.3238 6.77742 6.11297C6.77742 7.90214 8.22167 9.35256 10.0033 9.35256C11.7848 9.35256 13.2291 7.90214 13.2291 6.11297C13.2291 4.3238 11.7848 2.87338 10.0033 2.87338Z"
									fill="#fff"
								/>
							</svg>
							{type === 2 && 'Phụ huynh'}
							{type === 1 && 'Gia sư'}
						</span>
					</div>
					<form
						action=""
						onSubmit={handleSubmit}
						method="post"
						id="vali-form-lg2"
						encType="multipart/form-data"
						className="popup__regie_private"
					>
						<div className="form-group oot">
							<input
								type="text"
								className={`form-control valid ${errors.email && 'is-invalid'}`}
								value={formData.email}
								onChange={handleChange}
								placeholder="Nhập tài khoản đăng nhập"
								name="email"
								id="ugs_email_ph_pm"
							/>
							{errors.email && <div className="invalid-feedback">{errors.email}</div>}
							<div className=" error" id="err_emailxt_ph_2" />
							<span id="erruser" />
						</div>
						<div className="form-group ott">
							<input
								type="password"
								className={`form-control valid ${errors.password_first && 'is-invalid'}`}
								maxLength={20}
								value={formData.password_first}
								onChange={handleChange}
								placeholder="Nhập mật khẩu"
								name="password_first"
								id="ugs_password_ph_pm"
							/>
							{errors.password_first && (
								<div className="invalid-feedback">{errors.password_first}</div>
							)}
							<div className=" error" id="err_pass_phuhuynh" />
							<span id="errpass" />
							<i className="icon-pass-login-ph-1">
								<img src="/gia-su/img/icon12.png" alt="" />
							</i>
						</div>
						<button
							type="submit"
							className="btn btn-primary ph-modal-tow"
							id="gs-modal-ph-pm"
							name="dn-tk"
						>
							ĐĂNG NHẬP
						</button>
					</form>
				</div>
			</div>
			<div className="md-mk text-center">
				<span className="quen_mk btn_cursor text-center">Quên mật khẩu?</span>
			</div>
			<div className="md-tk text-center">
				<p>
					Bạn chưa có tài khoản?{' '}
					<a href="/dang-ky-phu-huynh.html" className="b-regis-ph">
						Đăng ký ngay
					</a>
				</p>
			</div>
		</Modal>
	)
}
