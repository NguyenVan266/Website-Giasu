import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import { MainLayout } from '@/components/layout'
import { callListDist, callApiResgisterForParent } from '@/functions/callApi'
import React, { ChangeEvent, FormEvent, use, useEffect, useRef, useState } from 'react'
import CustomSelect from '@/components/common/select2.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import LoadingComponent from '@/components/common/loading'
interface FormData {
	ugs_phone: string
	ugs_password: string
	ugs_retype_password_ph: string
	ugs_name: string
	ugs_gender: number
	ugs_email: string
	ugs_address: string
	ugs_brithday: string
	ugs_city: number
	ugs_county: number
	ugs_about_us: string
}
const Dangkyphuhuynh = () => {
	const [showPass1, setShowPass1] = useState(false)
	const [showPass2, setShowPass2] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [city, setCity] = useState(undefined)
	const [district, setDist] = useState(undefined)
	const [listDistrict, setListDistrict] = useState([])
	const clickshowPass1 = () => {
		setShowPass1(!showPass1)
	}
	const clickshowPass2 = () => {
		setShowPass2(!showPass2)
	}
	interface MyComponentProps {
		city: []
	}
	const [json, SetJson] = useState<MyComponentProps>({
		city: [],
	})
	useEffect(() => {
		const fetchData = async () => {
			type Response = any
			const response: Response = await fetch('data/data.json')
			const datajson = await response.json()
			SetJson(datajson)
		}
		fetchData()
	}, [])

	const options = json.city
	const handleSelectChange = async (selectedValue: any) => {
		setCity(selectedValue)
		setFormData((prevData) => ({
			...prevData,
			ugs_city: selectedValue,
		}))
		setErrors((prevErrors) => ({ ...prevErrors, ugs_city: '' }))
	}
	const handleSelectDist = async (selectedValue: any) => {
		setDist(selectedValue)
		setFormData((prevData) => ({
			...prevData,
			ugs_county: selectedValue,
		}))
		setErrors((prevErrors) => ({ ...prevErrors, ugs_county: '' }))
	}

	useEffect(() => {
		const getDistrict = async () => {
			let object = {
				id_city: Number(city),
			}
			const list_district = await callListDist(object)
			setListDistrict(list_district)
		}
		if (city) {
			getDistrict()
		}
	}, [city])

	const newListDist = listDistrict.map(({ _id, name }) => ({
		value: _id,
		label: name,
	}))

	const [formData, setFormData] = useState<FormData>({
		ugs_phone: '',
		ugs_password: '',
		ugs_retype_password_ph: '',
		ugs_name: '',
		ugs_gender: 0,
		ugs_email: '',
		ugs_address: '',
		ugs_brithday: '',
		ugs_city: 0,
		ugs_county: 0,
		ugs_about_us: '',
		// Thêm các trường khác của form vào đây
	})
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)
	const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false)
	const [isChecked, setIsChecked] = useState(true)
	const [errors, setErrors] = useState<Record<string, string>>({})

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
		// Xóa thông báo lỗi khi người dùng thay đổi giá trị
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
	}
	const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
		// Xóa thông báo lỗi khi người dùng thay đổi giá trị
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
	}
	const handlePhoneNumberChange = (e: any) => {
		const inputValue = e.target.value
		setPhoneNumber(inputValue)
		setFormData((prevData) => ({
			...prevData,
			ugs_phone: inputValue,
		}))
		// Kiểm tra xem số điện thoại có rỗng không
		setIsPhoneNumberEmpty(inputValue.trim() === '')

		// Kiểm tra định dạng số điện thoại nếu có dữ liệu
		if (inputValue.trim() !== '') {
			const phoneNumberRegex = /^\d{10}$/ // Ví dụ: 10 chữ số liên tiếp
			setIsValidPhoneNumber(phoneNumberRegex.test(inputValue))
		} else {
			setIsValidPhoneNumber(true) // Đặt lại trạng thái nếu số điện thoại rỗng
		}
	}
	const [password, setPassword] = useState('')
	const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
	const [isPasswordValid, setIsPasswordValid] = useState(true)

	const handlePasswordChange = (e: any) => {
		const inputValue = e.target.value
		setPassword(inputValue)
		setFormData((prevData) => ({
			...prevData,
			ugs_password: inputValue,
		}))
		setIsPasswordEmpty(inputValue.trim() === '')

		if (inputValue.trim() !== '') {
			// Kiểm tra mật khẩu có ít nhất 6 ký tự, 1 chữ và 1 số, không chứa dấu cách
			const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
			setIsPasswordValid(passwordRegex.test(inputValue))
		} else {
			setIsPasswordValid(true)
		}
	}

	const [confirmPassword, setConfirmPassword] = useState('')
	const [isConfirmPasswordEmpty, setIsConfirmPasswordEmpty] = useState(false)
	const [isPasswordMatch, setIsPasswordMatch] = useState(true)
	const handleConfirmPasswordChange = (e: any) => {
		const inputValue = e.target.value
		setConfirmPassword(inputValue)
		setIsConfirmPasswordEmpty(inputValue.trim() === '')
		setIsPasswordMatch(inputValue === password)
	}

	const [email, setEmail] = useState('')
	const [isEmailEmpty, setIsEmailEmpty] = useState(false)
	const [isEmailValid, setIsEmailValid] = useState(true)

	const handleEmailChange = (e: any) => {
		const inputValue = e.target.value
		setEmail(inputValue)
		setFormData((prevData) => ({
			...prevData,
			ugs_email: inputValue,
		}))
		setIsEmailEmpty(inputValue.trim() === '')
		setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue))
	}
	const [shouldLogFormData, setShouldLogFormData] = useState(false)

	useEffect(() => {
		// Kiểm tra xem tất cả các trường có giá trị không
		const isFormFilled =
			formData.ugs_phone.trim() !== '' &&
			formData.ugs_password.trim() !== '' &&
			formData.ugs_name.trim() !== '' &&
			formData.ugs_gender !== 0 &&
			formData.ugs_email.trim() !== '' &&
			formData.ugs_address.trim() !== '' &&
			formData.ugs_brithday.trim() !== '' &&
			formData.ugs_city !== 0 &&
			formData.ugs_county !== 0
		setShouldLogFormData(isFormFilled)
	}, [formData])

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!isChecked) {
			alert('Bạn hãy đồng ý cam kết trước khi đăng ký')
			return
		}
		setIsPhoneNumberEmpty(phoneNumber.trim() === '')
		setIsPasswordEmpty(password.trim() === '')
		setIsConfirmPasswordEmpty(confirmPassword.trim() === '')
		setIsPasswordMatch(confirmPassword === password)
		setIsEmailEmpty(email.trim() === '')
		setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))

		if (!formData.ugs_retype_password_ph.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_retype_password_ph: 'Không được để trống' }))
		}
		if (!formData.ugs_name.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_name: 'Họ tên không được để trống' }))
		}
		if (!formData.ugs_gender) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_gender: 'Giới tính không được để trống' }))
		}
		if (!formData.ugs_email.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_email: 'Email không được để trống' }))
		}
		if (!formData.ugs_address.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_address: 'Địa chỉ không được để trống' }))
		}
		if (!formData.ugs_brithday.trim()) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_brithday: 'Ngày sinh không để trống' }))
		}
		if (!formData.ugs_city) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_city: 'Chọn thành phố bạn đang sống' }))
		}
		if (!formData.ugs_county) {
			setErrors((prevErrors) => ({ ...prevErrors, ugs_county: 'Chọn quận/huyện bạn đang sống' }))
		}

		if (shouldLogFormData) {
			// Xử lý dữ liệu form tại đây, có thể sử dụng fetch hoặc axios để gửi dữ liệu lên server
			const fetchData = async () => {
				try {
					setIsLoading(true)
					const response = await callApiResgisterForParent({
						account: formData.ugs_phone,
						typeGiaSu: '2',
						userName: formData.ugs_name,
						emailContact: formData.ugs_email,
						password: formData.ugs_password,
						address: formData.ugs_address,
						birthday: formData.ugs_brithday,
						gender: formData.ugs_gender,
						ugs_about_us: formData.ugs_about_us,
						ugs_city_gs: formData.ugs_city,
						ugs_county_gs: formData.ugs_county,
					})
					if (response.data === null) {
						alert(response.error.message)
					} else {
						alert('Bạn đã đăng ký thành công')
						window.location.href = '/'
					}
				} catch (error) {
					console.log('Fetching is error: ' + error)
				} finally {
					setIsLoading(false)
				}
			}
			fetchData()
			console.log('Form data:', formData)
			return
		}
	}

	const [selectedDate, setSelectedDate] = useState(null)
	const handleDateChange = (date: any) => {
		setSelectedDate(date)
		const formattedDate = format(date, 'yyyy/MM/dd')
		setFormData((prevData) => ({
			...prevData,
			ugs_brithday: formattedDate,
		}))
		setErrors((prevErrors) => ({ ...prevErrors, ugs_brithday: '' }))
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
			<title>Đăng ký tìm gia sư</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<div className="header-re">
				<Header />

				<div className="tt-header">
					<img src="/gia-su/img/bg-header.png" alt="" />
				</div>
			</div>
			{/* <LoadingComponent type="spinningBubbles" color="#fff" /> */}
			<div className="content-tutor">
				<div className="container">
					<div className="ct-for ct-tutor">
						<form action="" method="POST" id="lg_vali_form_ph" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="">
									Số điện thoại <span>*</span>
								</label>
								<input
									type="text"
									className={`form-control ${isPhoneNumberEmpty ? 'is-invalid' : ''} ${
										!isValidPhoneNumber && !isPhoneNumberEmpty ? 'is-invalid' : ''
									}`}
									name="ugs_phone"
									id="ugs_phone"
									placeholder="Nhập số điện thoại"
									value={phoneNumber}
									onChange={handlePhoneNumberChange}
								/>
								{isPhoneNumberEmpty && (
									<div className="invalid-feedback">Số điện thoại không được để trống</div>
								)}
								{!isPhoneNumberEmpty && !isValidPhoneNumber && (
									<div className="invalid-feedback">Số điện thoại phải là số</div>
								)}
							</div>
							<div className="form-row">
								<div className="form-group col-md-6 infor-group">
									<label htmlFor="">
										Mật khẩu <span>*</span>
									</label>
									<i
										className={`fa icons eye1 ${!showPass1 ? 'fa-eye-slash' : 'fa-eye'}`}
										id="eye1"
										onClick={clickshowPass1}
									/>
									<input
										type={!showPass1 ? 'password' : 'text'}
										className={`form-control ${isPasswordEmpty ? 'is-invalid' : ''} ${
											!isPasswordValid && !isPasswordEmpty ? 'is-invalid' : ''
										}`}
										name="ugs_password"
										id="ugs_password_ph"
										placeholder="Nhập mật khẩu"
										value={password}
										onChange={handlePasswordChange}
									/>
									{isPasswordEmpty && (
										<div className="invalid-feedback">Mật khẩu không được bỏ trống.</div>
									)}
									{!isPasswordEmpty && !isPasswordValid && (
										<div className="invalid-feedback">
											Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số, không chứa dấu cách.
										</div>
									)}
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="">
										Nhập lại mật khẩu <span>*</span>
									</label>
									<i
										className={`fa icons eye2 ${!showPass2 ? 'fa-eye-slash' : 'fa-eye'}`}
										id="eye1"
										onClick={clickshowPass2}
									/>
									<input
										type={!showPass2 ? 'password' : 'text'}
										className={`form-control ${isConfirmPasswordEmpty ? 'is-invalid' : ''} ${
											!isPasswordMatch && !isConfirmPasswordEmpty ? 'is-invalid' : ''
										}`}
										name="ugs_retype_password_ph"
										id="ugs_retype_password_ph"
										placeholder="Nhập lại mật khẩu"
										value={confirmPassword}
										onChange={handleConfirmPasswordChange}
									/>
									{isConfirmPasswordEmpty && (
										<div className="invalid-feedback">Vui lòng nhập lại mật khẩu.</div>
									)}
									{!isConfirmPasswordEmpty && !isPasswordMatch && (
										<div className="invalid-feedback">
											Mật khẩu xác nhận không khớp với mật khẩu.
										</div>
									)}
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6 infor-group">
									<label htmlFor="">
										Họ và tên <span>*</span>
									</label>
									<input
										type="text"
										className={`form-control ${errors.ugs_name && 'is-invalid'}`}
										name="ugs_name"
										id="ugs_name"
										placeholder="Nhập họ và tên"
										onChange={handleChange}
									/>
									{errors.ugs_name && <div className="invalid-feedback">{errors.ugs_name}</div>}
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="">
										Giới tính<span>*</span>
									</label>
									<select
										className={`form-control ${errors.ugs_gender && 'is-invalid'}`}
										name="ugs_gender"
										id="ugs_gender"
										value={formData.ugs_gender}
										onChange={handleChangeSelect}
									>
										<option value="">Chọn giới tính</option>
										<option value={1}>Nam</option>
										<option value={2}>Nữ</option>
										<option value={3}>Khác</option>
									</select>
									{errors.ugs_gender && <div className="invalid-feedback">{errors.ugs_gender}</div>}
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6 infor-group">
									<label htmlFor="">
										Email <span>*</span>
									</label>
									<input
										type="text"
										className={`form-control ${isEmailEmpty || !isEmailValid ? 'is-invalid' : ''}`}
										name="ugs_email"
										placeholder="Nhập email"
										value={email}
										onChange={handleEmailChange}
									/>
									{isEmailEmpty && (
										<div className="invalid-feedback">Vui lòng nhập địa chỉ email.</div>
									)}
									{!isEmailEmpty && !isEmailValid && (
										<div className="invalid-feedback">Địa chỉ email không hợp lệ.</div>
									)}
								</div>
								<div className="form-group col-md-6 infor-group">
									<label htmlFor="ugs_brithday">
										Ngày sinh <span>*</span>
									</label>
									<br />
									<DatePicker
										selected={selectedDate}
										onChange={handleDateChange}
										dateFormat="dd/MM/yyyy"
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										className={`form-control pr-1 ${errors.ugs_brithday && 'is-invalid'}`}
										name="ugs_brithday"
										id="ugs_brithday"
										placeholderText="dd/mm/yyyy"
									/>
									{errors.ugs_brithday && (
										<label id="ugs_brithday-error" className="error" htmlFor="ugs_brithday">
											{errors.ugs_brithday}
										</label>
									)}
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6 infor-group">
									<label htmlFor="">
										Tỉnh/thành phố <span>*</span>
									</label>
									<CustomSelect
										id="ugs_city"
										name="ugs_city"
										className={`form-control ${errors.ugs_city && 'is-invalid'}`}
										options={options}
										onChange={handleSelectChange}
									/>
									{errors.ugs_city && <div className="invalid-feedback">{errors.ugs_city}</div>}
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="">
										Quận/huyện <span>*</span>
									</label>
									<CustomSelect
										id="ugs_county"
										name="ugs_county"
										className={`form-control ${errors.ugs_county && 'is-invalid'}`}
										options={newListDist}
										onChange={handleSelectDist}
									/>
									{errors.ugs_county && <div className="invalid-feedback">{errors.ugs_county}</div>}
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="">
									Địa chỉ cụ thể <span>*</span>
								</label>
								<input
									type="text"
									className={`form-control ${errors.ugs_address && 'is-invalid'}`}
									placeholder="Nhập địa chỉ cụ thể"
									name="ugs_address"
									onChange={handleChange}
								/>
								{errors.ugs_address && <div className="invalid-feedback">{errors.ugs_address}</div>}
							</div>
							<div className="form-group">
								<label htmlFor="">Giới thiệu về bản thân </label>
								<textarea
									className="form-control"
									name="ugs_about_us"
									placeholder="Giới thiệu ngắn "
									defaultValue={''}
									onChange={handleChange}
								/>
							</div>
							<div className="form-row ch-bx">
								<input
									type="checkbox"
									className="text-left camket"
									checked={isChecked}
									onChange={() => setIsChecked(!isChecked)}
									name="camket"
								/>
								<p>
									Tôi cam kết thông tin đăng ký phụ huynh là thật. Tôi chấp nhận các{' '}
									<a target="_blank" href="https://timviec365.vn/thoa-thuan-su-dung.html">
										điều khoản{' '}
									</a>
									và{' '}
									<a target="_blank" href="https://timviec365.vn/quy-dinh-bao-mat.html">
										chính sách
									</a>{' '}
									của Giasu365
								</p>
							</div>
							<div className="form-group tutor-tt text-center">
								<button
									type="submit"
									className="btn btn-outline-primary"
									id="regis_ph"
									value="add"
									name="xn-dk"
								>
									Đăng ký
								</button>
								<p
									className="load btn btn-outline-primary"
									style={{ background: '#4C5BD4', display: 'none' }}
								>
									<img src="/gia-su/img/loading.gif" alt="" />
								</p>
							</div>
							<div className="form-group tutor-tk">
								<p>
									Bạn đã có tài khoản?{' '}
									<a href="" data-toggle="modal" data-target="#dnsModal">
										Đăng nhập ngay
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="clear" />
			<Footer />
		</>
	)
}
Dangkyphuhuynh.Layout = MainLayout
export default Dangkyphuhuynh
