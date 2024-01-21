import Cookies from 'js-cookie'
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { MainLayout } from '@/components/layout'
import { callApiListClass, callApiLogin } from '@/functions/callApi'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import CustomSelect from '@/components/common/select2.js'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
interface FormData {
	email: string
	password_first: string
}
const Dangnhapphuhuynh = () => {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password_first: '',
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
					type: 2,
				})
				if (response.data === null) {
					alert(response.error.message)
				} else {
					Cookies.set('token_base365', response.data.access_token)

					Cookies.set('type', response.data.typeGS)
					console.log(response.data)

					window.location.href = '/gia-su/quan-ly-trang-chu-ph'
				}
			} catch (error) {
				console.log(error)
			}
		}
	}
	const router = useRouter()
	const isLoggedIn = () => {
		const token = Cookies.get('token_base365')
		return token !== undefined && token !== null
	}
	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="robots" content="noindex,nofollow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff" as="font" />
			<link href="/gia-su/css/bootstrap.min.css?v=13" rel="stylesheet" />
			<link href="/gia-su/css/slick.css?v=13" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css?v=13" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css?v=13" />
			<link href="/gia-su/css/style.css?v=13" rel="stylesheet" />
			<link href="/gia-su/css/login.css?v=13" rel="stylesheet" />
			<title>Đăng ký tìm gia sư</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<div className="header-re">
				<Header />

				<div className="tt-header">
					<img src="/gia-su/img/bg-header.png" alt="err" />
				</div>
			</div>
			<section className="login_uv login_uv_mb">
				<div className="vieclam_container" style={{ background: 'unset' }}>
					<div className="login_content">
						<h1>Đăng nhập tài khoản phụ huynh</h1>
					</div>
					<div className="form_dang_nhap form_dn_uv">
						<div className="login_logo_header">
							<img src="/images/New_images/logo_login1.png" alt="abc" />
						</div>
						<div className="box_select_login lg_uv">
							<div className="select_login lg_tk act" id="lg_tk">
								<p>Tài khoản</p>
								<p className="upn nbon">(email hoặc SĐT)</p>
							</div>
						</div>
						<form
							action=""
							onSubmit={handleSubmit}
							id="formSignUp"
							method="POST"
							className="form_tk"
							data-gtm-form-interact-id={0}
						>
							<div className="form_uv">
								<i className="email_lg" />
								<input
									className={`form-control valid ${errors.email && 'is-invalid'}`}
									type="text"
									id="user_email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Nhập tài khoản đăng nhập"
									data-gtm-form-interact-field-id={0}
								/>
								{errors.email && <div className="invalid-feedback">{errors.email}</div>}
							</div>
							<div className="form_uv">
								<i className="pass_lg" />
								<input
									className={`form-control valid ${errors.password_first && 'is-invalid'}`}
									type="password"
									maxLength={20}
									id="user_password_first"
									name="password_first"
									value={formData.password_first}
									onChange={handleChange}
									placeholder="Nhập mật khẩu"
									data-gtm-form-interact-field-id={1}
								/>
								{errors.password_first && (
									<div className="invalid-feedback">{errors.password_first}</div>
								)}
							</div>
							<div style={{ display: 'none' }} className="login_err alert alert-danger" />
							<div className="btn_login2">
								<input
									className="btn_login_uv m_checkspam"
									type="submit"
									name="Submit"
									value="Đăng nhập"
								/>
								<div className="triangle-left" />
								<div className="triangle-right" />
							</div>
						</form>
						<div className="bottom_re dbn">
							<p>
								Bạn chưa có tài khoản?{' '}
								<a onClick={() => router.push('/dang-ky-ung-vien')} title="Đăng ký ngay">
									Đăng ký ngay
								</a>
							</p>
						</div>
						<div className="forget_pw">
							<a
								onClick={() => router.push('/quen-mat-khau-ung-vien')}
								title="Quên mật khẩu"
								className="qmk"
							>
								Quên mật khẩu?
							</a>
						</div>
					</div>
					<div className="login_register">
						<p>
							Bạn chưa có tài khoản?{' '}
							<a onClick={() => router.push('/dang-ky-ung-vien')} title="Đăng ký ngay">
								Đăng ký ngay
							</a>
						</p>
					</div>
				</div>
			</section>

			<div className="clear" />
			<Footer />
		</>
	)
}
Dangnhapphuhuynh.Layout = MainLayout
export default Dangnhapphuhuynh
