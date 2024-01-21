import { useState, useEffect } from 'react'
import axios from 'axios'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const DoiMatKhau = () => {
	const router = useRouter()
	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [retypePassword, setRetypePassword] = useState('')
	const [error, setError] = useState('')
	const [token, setToken] = useState('')
	useEffect(() => {
		// Lấy token từ cookie khi component được tạo
		const userToken = Cookies.get('token_base365')
		if (userToken) {
			setToken(userToken)
		}
	}, [])
	const handleSubmit = async (e: any) => {
		e.preventDefault()

		if (newPassword !== retypePassword) {
			setError('Mật khẩu mới và nhập lại mật khẩu mới không khớp.')
			return
		}

		try {
			// Gọi API đổi mật khẩu với token từ cookie
			const response = await axios.post(
				'http://210.245.108.202:3000/api/qlc/individual/updatePassword',
				{
					old_password: oldPassword,
					password: newPassword,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			console.log('Phản hồi từ API:', response.data)
			alert('Đổi mật khẩu thành công!')
			setOldPassword('')
			setNewPassword('')
			setRetypePassword('')
			setError('')
		} catch (error) {
			console.error('Lỗi khi gọi API đổi mật khẩu:', error)
			setError('Thay đổi mật khẩu không thành công. Vui lòng thử lại.')
		}
	}
	return (
		<>
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<title>Đổi mật khẩu</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ </a>
					<span>Thông tin cá nhân &gt; Đổi mật khẩu</span>
				</p>
			</div>
			<div className="ad-dmk b-ad-dmk">
				<div className="dmk-tk-ad">
					<form action="" method="POST" id="vali-form" onSubmit={handleSubmit}>
						<div className="form-group b_dmk_p">
							<label htmlFor="">
								Mật khẩu cũ <span>*</span>
							</label>
							<input
								type="password"
								className="form-control ph_password"
								name="ugs_password"
								id="ugs_password"
								placeholder="Nhập mật khẩu cũ"
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
							/>
							<i className="fa-showpass fa fa-eye-slash pass-dmkc-ph" />
							<div className="error err_pass" id="err_Email" style={{ top: 67 }} />
						</div>
						<div className="form-group b_dmk_p">
							<label htmlFor="">
								Mật khẩu mới <span>*</span>
							</label>
							<input
								type="password"
								className="form-control ph_password_new"
								name="ugs_new_password"
								id="ugs_new_password"
								placeholder="Nhập mật khẩu mới"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<i className="fa-showpass fa fa-eye-slash pass-dmkm-ph" />
						</div>
						<div className="form-group b_dmk_p">
							<label htmlFor="">
								Nhập lại mật khẩu mới <span>*</span>
							</label>
							<input
								type="password"
								className="form-control"
								name="ugs_retype_password"
								id="ugs_retype_password"
								placeholder="Nhập lại mật khẩu mới"
								value={retypePassword}
								onChange={(e) => setRetypePassword(e.target.value)}
							/>
							<i className="fa-showpass fa fa-eye-slash pass-nldmkm-ph" />
						</div>
						<div className="error" style={{ color: 'red' }}>
							{error}
						</div>

						<button type="submit" name="btn-dmk" className="btn_sb text-center">
							Cập nhật
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

DoiMatKhau.Layout = PhuHuynhLayout
export default DoiMatKhau
