import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import Search from '@/components/common/search'
import CustomSelect from '@/components/common/select2'
import { MainLayout } from '@/components/layout'
import {
	callApiGetCity,
	callApiGetDistrict,
	callApiListSubject,
	callApiResgisterForParent,
	callListDist,
} from '@/functions/callApi'
import { ChangeEvent, useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload, DatePicker, Space, Input, Select, message } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import axios from 'axios'
import Cookies from 'js-cookie'
import type { UploadFile } from 'antd/es/upload/interface'

const { Option } = Select

const Dangkygiasu = () => {
	const [isUocLuongActive, setIsUocLuongActive] = useState(false)

	useEffect(() => {
		const inputUocLuong = document.getElementById('pft_end')
		const inputStart = document.getElementById('pft_start')
		const buttonUocLuong = document.getElementById('uoc_luong')
		const buttonCoDinh = document.getElementById('co_dinh')
		const inputgiaca = document.getElementById('pft_price')
		if (inputUocLuong && buttonUocLuong && buttonCoDinh && inputgiaca && inputStart) {
			if (isUocLuongActive) {
				inputUocLuong.style.display = 'block'
				inputStart.style.display = 'block'
				inputgiaca.style.display = 'none'
				buttonUocLuong.classList.add('btn_actv')
				buttonCoDinh.classList.remove('btn_actv')
				setUgs_unit_price(2)
			} else {
				inputUocLuong.style.display = 'none'
				inputStart.style.display = 'none'
				inputgiaca.style.display = 'block'
				buttonUocLuong.classList.remove('btn_actv')
				buttonCoDinh.classList.add('btn_actv')
				setUgs_unit_price(1)
			}
		}
	}, [isUocLuongActive])

	const handleUocLuongClick = () => {
		setIsUocLuongActive(true)
	}

	const handleCoDinhClick = () => {
		setIsUocLuongActive(false)
	}
	const addErrorLabel = (inputElement: HTMLInputElement, errorId: string, errorMessage: string) => {
		const errorLabel = document.createElement('label')
		errorLabel.id = errorId
		errorLabel.className = 'error'
		errorLabel.htmlFor = inputElement.id
		errorLabel.textContent = errorMessage
		// Kiểm tra xem label lỗi đã tồn tại chưa trước khi thêm vào
		const existingErrorLabel = document.getElementById(errorId)
		if (!existingErrorLabel) {
			inputElement.parentElement?.appendChild(errorLabel)
		}
	}
	// const handleContinueClick = () => {
	// 	// Lấy giá trị từ các trường input
	// 	const phoneElement = document.getElementById('ugs_phone') as HTMLInputElement;
	// 	const emailElement = document.getElementById('ugs_email') as HTMLInputElement;
	// 	const passwordElement = document.getElementById('ugs_password') as HTMLInputElement;
	// 	const retypePasswordElement = document.getElementById('ugs_retype_password') as HTMLInputElement;

	// 	const phoneValue = phoneElement.value;
	// 	const emailValue = emailElement.value;
	// 	const passwordValue = passwordElement.value;
	// 	const retypePasswordValue = retypePasswordElement.value;

	// 	// Kiểm tra xem có trường nào bị trống không
	// 	if (!phoneValue || !emailValue || !passwordValue || !retypePasswordValue) {
	// 		if (!phoneValue) {
	// 			addErrorLabel(phoneElement, 'ugs_phone-error', 'Số điện thoại không được để trống');
	// 		}
	// 		if (!emailValue) {
	// 			addErrorLabel(emailElement, 'ugs_email-error', 'Email không được để trống');
	// 		}
	// 		if (!passwordValue) {
	// 			addErrorLabel(passwordElement, 'ugs_password-error', 'Mật khẩu không được để trống');
	// 		}
	// 		if (!retypePasswordValue) {
	// 			addErrorLabel(retypePasswordElement, 'ugs_retype_password-error', 'Không được để trống');
	// 		}
	// 	} else {
	// 		// Nếu tất cả các trường đã được điền, có thể thực hiện các hành động tiếp theo
	// 		// Ví dụ: Chuyển đến trang kế tiếp, gửi dữ liệu lên server, vv.
	// 		console.log('All fields are filled:', phoneValue, emailValue, passwordValue, retypePasswordValue);
	// 	}
	// 	// }
	// };
	//api  danh sách môn học
	const [list, setList] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiListSubject()
				setList(response.list)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	const [previewOpen, setPreviewOpen] = useState(false)
	const [previewImage, setPreviewImage] = useState('')
	const [previewTitle, setPreviewTitle] = useState('')
	const [fileList, setFileList] = useState<UploadFile[]>([])
	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)
	const [isChecked, setIsChecked] = useState(true)
	//Số điện thoại
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true)
	const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false)
	const handlePhoneNumberChange = (e: any) => {
		const inputValue = e.target.value
		setPhoneNumber(inputValue)

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

	//Kiểm tra email

	const [email, setEmail] = useState('')
	const [isEmailEmpty, setIsEmailEmpty] = useState(false)
	const [isEmailValid, setIsEmailValid] = useState(true)

	const handleEmailChange = (e: any) => {
		const inputValue = e.target.value
		setEmail(inputValue)
		setIsEmailEmpty(inputValue.trim() === '')
		setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue))
	}
	//passowd
	const [showPass1, setShowPass1] = useState(false)
	const [showPass2, setShowPass2] = useState(false)
	const clickshowPass1 = () => {
		setShowPass1(!showPass1)
	}
	const clickshowPass2 = () => {
		setShowPass2(!showPass2)
	}
	const [password, setPassword] = useState('')
	const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
	const [isPasswordValid, setIsPasswordValid] = useState(true)

	const handlePasswordChange = (e: any) => {
		const inputValue = e.target.value
		setPassword(inputValue)
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
	//submit
	const validateForm = () => {
		let isValid = true
		// Validate
		if (!phoneNumber) {
			setUserNameError('Không được bỏ trống tên ')
			isValid = false
		} else {
			setUserNameError('')
		}
		if (!userName) {
			setUserNameError('Không được bỏ trống tên ')
			isValid = false
		} else {
			setUserNameError('')
		}
		if (!userName) {
			setUserNameError('Không được bỏ trống tên ')
			isValid = false
		} else {
			setUserNameError('')
		}
		if (!userName) {
			setUserNameError('Không được bỏ trống tên ')
			isValid = false
		} else {
			setUserNameError('')
		}

		if (!address) {
			setAddressError('Không được để trống địa chỉ')
			isValid = false
		} else {
			setAddressError('')
		}
		if (!birthday) {
			setBirthdayError('Không được bỏ trống ngày sinh')
			isValid = false
		} else {
			setBirthdayError('')
		}
		if (!married) {
			setMarriedError('Tình trạng hôn nhân không được để trống')
			isValid = false
		} else {
			setMarriedError('')
		}

		if (!ugs_tutor_style) {
			setUgs_tutor_styleError('Kiểu gia sư không được để trống')
			isValid = false
		} else {
			setUgs_tutor_styleError('')
		}

		if (!gender) {
			setGenderError('Giới tinh không được để trống')
			isValid = false
		} else {
			setGenderError('')
		}

		if (!ugs_class_teach) {
			setUgs_class_teachError('Lớp học sẽ dạy không được để trống')
			isValid = false
		} else {
			setUgs_class_teachError('')
		}

		if (!selectedCityId) {
			setUgs_city_gsError('Tỉnh thành không được để trống')
			isValid = false
		} else {
			setUgs_city_gsError('')
		}

		if (!ugs_county_gs) {
			setUgs_county_gsError('Quận huyện không được bỏ trống')
			isValid = false
		} else {
			setUgs_county_gsError('')
		}
		if (!ugs_about_us) {
			setUgs_about_usError('Giới thiệu bản thân không được để trống')
			isValid = false
		} else {
			setUgs_about_usError('')
		}

		if (!experience) {
			setExperienceError('Kinh nghiệm không được để trống')
			isValid = false
		} else {
			setExperienceError('')
		}
		if (!as_id) {
			setAs_idError('Môn học không được bỏ trống')
			isValid = false
		} else {
			setAs_idError('')
		}
		if (!ugs_formality) {
			setUgs_formalityError('Hình thức giảng dạy không được để trống')
			isValid = false
		} else {
			setUgs_formalityError('')
		}
		if (!ugs_month) {
			setUgs_monthError('Không được để trống')
			isValid = false
		} else {
			setUgs_monthError('')
		}
		if (!ugs_salary) {
			setUgs_salaryError('Mức lương không được bỏ trống')
			isValid = false
		} else {
			setUgs_salaryError('')
		}
		setIsPhoneNumberEmpty(phoneNumber.trim() === '')
		setIsPasswordEmpty(password.trim() === '')
		setIsConfirmPasswordEmpty(confirmPassword.trim() === '')
		setIsPasswordMatch(confirmPassword === password)
		setIsEmailEmpty(email.trim() === '')
		setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
		return isValid
	}
	console.log(email)
	//hàm lấy token
	const [token, setToken] = useState('')
	useEffect(() => {
		const userToken = Cookies.get('token_base365')
		if (userToken) {
			setToken(userToken)
		}
	}, [])
	console.log(email)

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		if (!isChecked) {
			alert('Bạn hãy đồng ý cam kết trước khi đăng ký')
			return
		}
		if (!validateForm()) {
			return
		}
		try {
			const res = await callApiResgisterForParent({
				account: phoneNumber,
				typeGiaSu: '1',
				emailContact: email,
				password: password,
				userName: userName,
				gender: gender,
				birthday: birthday,
				married: married,
				ugs_tutor_style: ugs_tutor_style,
				ugs_class_teach: ugs_class_teach,
				ugs_school: ugs_school,
				ugs_graduation_year: ugs_graduation_year,
				ugs_specialized: ugs_specialized,
				ugs_city_gs: selectedCityId,
				ugs_county_gs: ugs_county_gs,
				address: address,
				ugs_workplace: ugs_workplace,
				ugs_about_us: ugs_about_us,
				ugs_achievements: ugs_achievements,
				experience: experience,
				//
				as_id: as_id,
				ugs_formality: ugs_formality,
				ugs_unit_price: ugs_unit_price,
				ugs_salary: ugs_salary,
				ugs_time: ugs_time,
				ugs_month: ugs_month,
				st2: st2,
				st3: st3,
				st4: st4,
				st5: st5,
				st6: st6,
				st7: st7,
				scn: scn,
				ct2: ct2,
				ct3: ct3,
				ct4: ct4,
				ct5: ct5,
				ct6: ct6,
				ct7: ct7,
				ccn: ccn,
				tt2: tt2,
				tt3: tt3,
				tt4: tt4,
				tt5: tt5,
				tt6: tt6,
				tt7: tt7,
				tcn: tcn,
			})
			if (res.data === null) {
				alert(res.error.message)
			} else {
				alert('Bạn đã đăng ký thành công')
				window.location.href = '/'
			}
		} catch (error) {
			console.log('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	//api
	//api thay đổi
	const [userName, setUserName] = useState('')
	const [address, setAddress] = useState('')
	const [birthday, setBirthday] = useState('')
	const [gender, setgender] = useState('')
	const [married, setMarried] = useState('')
	const [ugs_about_us, setUgs_about_us] = useState('')
	const [ugs_county_gs, setUgs_county_gs] = useState('')
	const [ugs_tutor_style, setUgs_tutor_style] = useState('')
	const [ugs_class_teach, setUgs_class_teach] = useState('')
	const [ugs_school, setUgs_school] = useState('')
	const [ugs_graduation_year, setUgs_graduation_year] = useState('')
	const [ugs_specialized, setUgs_specialized] = useState('')
	const [experience, setExperience] = useState('')
	const [ugs_workplace, setUgs_workplace] = useState('')
	const [ugs_achievements, setUgs_achievements] = useState('')
	//
	const [as_id, setAs_id] = useState<any>()
	const [ugs_formality, setUgs_formality] = useState('')
	const [ugs_time, setUgs_time] = useState('')
	const [ugs_salary, setUgs_salary] = useState('')
	const [ugs_month, setUgs_month] = useState('')
	const [ugs_unit_price, setUgs_unit_price] = useState<number>()

	const [st2, setSt2] = useState<number>(0)
	const [st3, setSt3] = useState<number>(0)
	const [st4, setSt4] = useState<number>(0)
	const [st5, setSt5] = useState<number>(0)
	const [st6, setSt6] = useState<number>(0)
	const [st7, setSt7] = useState<number>(0)
	const [scn, setScn] = useState<number>(0)
	const [ct2, setCt2] = useState<number>(0)
	const [ct3, setCt3] = useState<number>(0)
	const [ct4, setCt4] = useState<number>(0)
	const [ct5, setCt5] = useState<number>(0)
	const [ct6, setCt6] = useState<number>(0)
	const [ct7, setCt7] = useState<number>(0)
	const [ccn, setCcn] = useState<number>(0)
	const [tt2, setTt2] = useState<number>(0)
	const [tt3, setTt3] = useState<number>(0)
	const [tt4, setTt4] = useState<number>(0)
	const [tt5, setTt5] = useState<number>(0)
	const [tt6, setTt6] = useState<number>(0)
	const [tt7, setTt7] = useState<number>(0)
	const [tcn, setTcn] = useState<number>(0)
	//các thông báo lỗi
	const [userNameError, setUserNameError] = useState('')
	const [genderError, setGenderError] = useState('')
	const [birthdayError, setBirthdayError] = useState('')
	const [marriedError, setMarriedError] = useState('')
	const [ugs_tutor_styleError, setUgs_tutor_styleError] = useState('')
	const [ugs_class_teachError, setUgs_class_teachError] = useState('')
	const [ugs_city_gsError, setUgs_city_gsError] = useState('')
	const [addressError, setAddressError] = useState('')
	const [ugs_county_gsError, setUgs_county_gsError] = useState('')
	const [ugs_about_usError, setUgs_about_usError] = useState('')
	const [experienceError, setExperienceError] = useState('')
	//
	const [as_idError, setAs_idError] = useState('')
	const [ugs_formalityError, setUgs_formalityError] = useState('')
	const [ugs_monthError, setUgs_monthError] = useState('')
	const [ugs_salaryError, setUgs_salaryError] = useState('')

	//thay đổi thành phố, quận huyện
	const [listCity, setListCity] = useState([])
	const [listDistrict, setListDistrict] = useState([])
	const [selectedCityId, setSelectedCityId] = useState()
	//lấy ra danh sách thành phố
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiGetCity([])
				setListCity(response.list)
			} catch (error) {
				console.error('Error fetching city data:', error)
			}
		}

		fetchData()
	}, [])
	//thay đổi giá trị của thành phố
	const handleCityChange = async (value: any) => {
		try {
			const cityInfo = listCity.find((city: any) => city._id === value)
			setSelectedCityId(value)
		} catch (error) {
			console.error('Error handling city change:', error)
		}
	}
	//lấy ra danh sách của quận huyện
	useEffect(() => {
		const fetchDistrictData = async () => {
			try {
				if (selectedCityId) {
					const response = await callApiGetDistrict(selectedCityId)
					console.log('District data response:', response)
					if (response) {
						setListDistrict(response)
					} else {
						console.error('Error: Unexpected response format for district data')
					}
				}
			} catch (error) {
				console.error('Error fetching district data:', error)
			}
		}

		fetchDistrictData()
	}, [selectedCityId])

	// check value lịch học
	const handleCheckboxClick = (stateSetter: React.Dispatch<React.SetStateAction<number>>) => {
		stateSetter((prevValue) => (prevValue === 0 ? 1 : 0))
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
			<title>Đăng ký làm gia sư</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<div className="header-re">
				<Header />

				<div className="tt-header">
					<img src="/gia-su/img/bg-header.png" alt="1" />
				</div>
			</div>
			<div className="wapper ">
				<div className="container">
					<form
						className="form-horizontal form_loginGS"
						action=""
						method="POST"
						id="vali-form"
						encType="multipart/form-data"
						onSubmit={handleSubmit}
					>
						<fieldset id="company_information" className="">
							<div className="st-tb-tow text-center">
								<div className="user-img text-center">
									<Upload
										action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
										listType="picture-circle"
										fileList={fileList}
									>
										{fileList.length >= 1 ? null : uploadButton}
									</Upload>
									<Modal open={previewOpen} title={previewTitle} footer={null}>
										<img alt="example" style={{ width: '100%' }} src={previewImage} />
									</Modal>
								</div>
								<div className="xt-p text-center pt-3">
									<p>
										Chọn ảnh đại diện <span className="required_star">*</span>
									</p>
								</div>
							</div>
						</fieldset>
						<fieldset id="account_information" className="">
							<div className=" st-tb-three">
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
										placeholder="Nhập số điện thoại"
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

								<div className="form-group">
									<label htmlFor="">
										Email <span>*</span>
									</label>
									<input
										type="text"
										className={`form-control ${isEmailEmpty || !isEmailValid ? 'is-invalid' : ''}`}
										name="ugs_email"
										id="ugs_email"
										placeholder="Nhập địa chỉ Email"
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
								<div className="form-group">
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
										id="ugs_password"
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
									<span id="" />
								</div>
								<div className="form-group">
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
										name="ugs_retype_password"
										id="ugs_retype_password"
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
						</fieldset>
						<fieldset id="personal_information" className="">
							<div className="st-tb-three">
								<div className="form-row">
									<div className="form-group col-md-6 pr-3">
										<label htmlFor="">
											Họ và tên <span>*</span>
										</label>
										<input
											type="text"
											className={`form-control ${userNameError && 'is-invalid'}`}
											name="userName"
											id="ugs_name"
											placeholder="Nhập họ và tên"
											value={userName}
											onChange={(e) => {
												setUserName(e.target.value)
												setUserNameError('')
											}}
										/>
										<span className="err_info">{userNameError}</span>
									</div>
									<div className="form-group col-md-6 wfr_icon pl-3">
										<label htmlFor="">
											Giới tính <span>*</span>
										</label>
										<select
											className={`form-control ${genderError && 'is-invalid'}`}
											name="gender"
											id="ugs_gender"
											value={gender}
											title="Chọn giới tính"
											onChange={(e) => {
												setgender(e.target.value)
												setGenderError('')
											}}
										>
											<option value="">Chọn giới tính</option>
											<option value={1}>Nam</option>
											<option value={2}>Nữ</option>
											<option value={3}>Khác</option>
										</select>
										<span className="err_info">{genderError}</span>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6 wfr_date_icon pr-3">
										<div>
											<label htmlFor="">
												Ngày sinh <span>*</span>
											</label>

											<Input
												type="date"
												className={`form-control ${birthdayError && 'is-invalid'}`}
												value={birthday}
												onChange={(e) => {
													setBirthday(e.target.value)
													setBirthdayError('')
												}}
											/>
											<span className="err_info">{birthdayError}</span>
										</div>
										<br />
										<div>
											{/* <input
												type="text"
												className="form-control pr-1"
												name="ugs_brithday"
												placeholder="dd/mm/yyyy"
												onfocus="(this.type='date')"
											/> */}
										</div>
									</div>
									<div className="form-group col-md-6 wfr_icon pl-3">
										<label htmlFor="">
											Tình trạng hôn nhân <span>*</span>
										</label>
										<select
											className={`form-control ${marriedError && 'is-invalid'}`}
											value={married}
											title="Chọn tình trạng hôn nhân"
											onChange={(e) => {
												setMarried(e.target.value)
												setMarriedError('')
											}}
											name="married"
											id="ugs_marriage"
										>
											<option value="">Chọn tình trạng hôn nhân</option>
											<option value={0}>Chưa kết hôn</option>
											<option value={1}>Đã kết hôn</option>
										</select>
										<span className="err_info">{marriedError}</span>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6 wp_rp_icon pr-3">
										<label htmlFor="">
											Kiểu gia sư <span>*</span>
										</label>
										<select
											name="ugs_tutor_style"
											id="ugs_tutor_style"
											title="Lựa chọn gia sư"
											className={`form-control ${ugs_tutor_styleError && 'is-invalid'}`}
											value={ugs_tutor_style}
											onChange={(e) => {
												setUgs_tutor_style(e.target.value)
												setUgs_tutor_styleError('')
											}}
										>
											<option value="">Lựa chọn gia sư</option>
											<option value={1}>Sinh viên </option>
											<option value={2}>Người đi làm </option>
											<option value={3}>Giáo viên mầm non </option>
											<option value={4}>Giáo viên cấp 1 </option>
											<option value={5}>Giáo viên cấp 2 </option>
											<option value={6}>Giáo viên cấp 3 </option>
											<option value={7}>Giảng viên đại học </option>
											<option value={8}>Chuyên gia </option>
											<option value={9}>Người nước ngoài </option>
											<option value={10}>Học sinh </option>
											<option value={11}>Không yêu cầu </option>
										</select>
										<span className="err_info">{ugs_tutor_styleError}</span>
									</div>
									<div className="form-group col-md-6 wfr_icon pl-3">
										<label htmlFor="">
											Lớp học sẽ dạy <span>*</span>
										</label>
										<select
											id="ugs_class_teach"
											name="ugs_class_teach"
											className={`form-control ${ugs_class_teachError && 'is-invalid'}`}
											value={ugs_class_teach}
											title="Chọn lớp học"
											onChange={(e) => {
												setUgs_class_teach(e.target.value)
												setUgs_class_teachError('')
											}}
										>
											<option value="" selected={true}>
												Chọn lớp học
											</option>
											<option value={1}>Lớp 1 </option>
											<option value={2}>Lớp 2 </option>
											<option value={3}>Lớp 3 </option>
											<option value={4}>Lớp 4 </option>
											<option value={5}>Lớp 5 </option>
											<option value={6}>Lớp 6 </option>
											<option value={7}>Lớp 7 </option>
											<option value={8}>Lớp 8 </option>
											<option value={9}>Lớp 9 </option>
											<option value={10}>Lớp 10 </option>
											<option value={11}>Lớp 11</option>
											<option value={12}>Lớp 12 </option>
											<option value={13}>Luyện thi đại học </option>
											<option value={14}>Cấp 1 </option>
											<option value={15}>Cấp 2 </option>
											<option value={16}>Cấp 3 </option>
										</select>
										<span className="err_info">{ugs_class_teachError}</span>
										<div className="err_custom" id="lop_hoc" />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6 pr-3">
										<label htmlFor="">Học trường</label>
										<input
											type="text"
											className="form-control"
											name="ugs_school"
											placeholder="Nhập tên trường"
											value={ugs_school}
											onChange={(e) => {
												setUgs_school(e.target.value)
											}}
										/>
									</div>
									<div className="form-group col-md-6 pl-3">
										<label htmlFor="">Năm tốt nghiệp (nếu đã tốt nghiệp)</label>
										<input
											type="number"
											className="form-control"
											name="ugs_graduation_year"
											placeholder="Nhập năm tốt nghiệp"
											value={ugs_graduation_year}
											onChange={(e) => {
												setUgs_graduation_year(e.target.value)
											}}
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="">Chuyên ngành</label>
									<input
										type="text"
										className="form-control"
										name="ugs_specialized"
										placeholder="Nhập tên chuyên ngành"
										value={ugs_specialized}
										onChange={(e) => {
											setUgs_specialized(e.target.value)
										}}
									/>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6 infor-group">
										<label htmlFor="">
											Tỉnh/thành phố <span>*</span>
										</label>
										<Select
											className={`${ugs_city_gsError && 'is-invalid'}`}
											showSearch
											optionFilterProp="children"
											placeholder="Chọn tỉnh thành phố"
											style={{ width: '100%', textAlign: 'left' }}
											value={selectedCityId}
											onChange={handleCityChange}
										>
											{listCity.map((city: any) => (
												<Option key={city?._id} value={city?._id} label={city?.name}>
													{city?.name}
												</Option>
											))}
										</Select>
										<span className="err_info">{ugs_city_gsError}</span>
										<div className="err_custom" id="dd_hoc" />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="">
											Quận/huyện <span>*</span>
										</label>
										<Select
											className={`${ugs_county_gsError && 'is-invalid'}`}
											style={{ width: '100%', textAlign: 'left' }}
											showSearch
											value={ugs_county_gs}
											onChange={(value) => {
												setUgs_county_gs(value)
												setUgs_county_gsError('')
											}}
											optionFilterProp="children"
											placeholder="Chọn quận huyện"
										>
											{listDistrict?.map((district: any) => (
												<Option key={district._id} value={district._id}>
													{district.name}
												</Option>
											))}
										</Select>
										<span className="err_info">{ugs_county_gsError}</span>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="">
										Địa chỉ hiện tại <span>*</span>
									</label>
									<input
										type="text"
										className={`form-control ${addressError && 'is-invalid'}`}
										placeholder="Nhập địa chỉ cụ thể"
										name="address"
										value={address}
										onChange={(e) => {
											setAddress(e.target.value)
											setAddressError('')
										}}
									/>
									<span className="err_info">{addressError}</span>
								</div>
								<div className="form-group">
									<label htmlFor="">Nơi công tác (nếu đã đi làm)</label>
									<input
										type="text"
										className="form-control"
										name="ugs_workplace"
										placeholder="Nhập nơi công tác"
										value={ugs_workplace}
										onChange={(e) => {
											setUgs_workplace(e.target.value)
										}}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="">
										Giới thiệu về bản thân <span>*</span>
									</label>
									<textarea
										className={`form-control ${ugs_about_usError && 'is-invalid'}`}
										name="ugs_about_us"
										placeholder="Giới thiệu ngắn về bản thân"
										defaultValue={''}
										value={ugs_about_us}
										onChange={(e) => {
											setUgs_about_us(e.target.value)
											setUgs_about_usError('')
										}}
									/>
									<span className="err_info">{ugs_about_usError}</span>
								</div>
								<div className="form-group">
									<label htmlFor="">Thành tích</label>
									<textarea
										className="form-control"
										name="ugs_achievements"
										placeholder="Nhập các thành tích của bạn "
										rows={5}
										cols={25}
										defaultValue={''}
										value={ugs_achievements}
										onChange={(e) => {
											setUgs_achievements(e.target.value)
										}}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="">
										Số năm kinh nghiệm <span>*</span>
									</label>
									<input
										type="number"
										className={`form-control ${experienceError && 'is-invalid'}`}
										name="ugs_experience_year"
										placeholder="Nhập số năm kinh nghiệm"
										value={experience}
										onChange={(e) => {
											setExperience(e.target.value)
											setExperienceError('')
										}}
									/>
									<span className="err_info">{experienceError}</span>
								</div>
								<div className="form-group teacher-exp">
									<label htmlFor="">Kinh nghiệm giảng dạy</label>
									<div className="exp-tt">
										<h4 />
										<div className="exp-date">
											<span className="start_year" /> <span className="end_year" />
										</div>
										<p className="exp-ct-p" />
									</div>
								</div>
								<span className="div-boc">
									<div className="form-group">
										<input
											type="text"
											className="form-control if-bd ugs_title"
											name="ugs_title[]"
											id="ugs_title"
											placeholder="Tiêu đề"
										/>
									</div>
									<div className="form-row div__date__kn">
										{/* <div className="form-group col-md-6 pr-3">
											<input
												type="text"
												className="form-control if-bd ugs_year_start"
												name="ugs_year_start[]"
												id="ugs_year_start"
												placeholder="dd/mm/yyyy"
											/>
										</div>
										<div className="form-group col-md-6 pl-3">
											<input
												type="text"
												className="form-control if-bd ugs_year_end"
												name="ugs_year_end[]"
												id="ugs_year_end"
												placeholder="dd/mm/yyyy"
											/>
										</div> */}
										<Space direction="vertical" style={{ width: '100%', marginBottom: '1rem' }}>
											<DatePicker.RangePicker style={{ width: '100%' }} />
										</Space>
									</div>
									<div className="form-group">
										<textarea
											className="form-control if-bd ugs_job_description job_description"
											name="ugs_job_description[]"
											id="ugs_job_description"
											placeholder="Mô tả công việc"
											defaultValue={''}
										/>
										<div
											id="errorKN"
											className="error red d-span-content"
											style={{ color: 'red', float: 'left' }}
										/>
									</div>
								</span>
								<div className="form-group infor-tk">
									<img src="/gia-su/img/icon11.png" alt="1" />
									<p>
										<a className="add-exp" href="javascript:void(0)">
											Thêm kinh nghiệm
										</a>
									</p>
								</div>
								{/* <div className="infor-tt text-center">
									<button className="btn btn_reg2">Trở lại</button>
									<button className="btn btn_reg1 click_kinhnghiem tmp_submit_b3">
										Tiếp tục
									</button>
								</div> */}
							</div>
						</fieldset>
						<fieldset id="end_information" className="">
							<div className="st-tb-four">
								<div className="form-row">
									<div className="form-group col-md-6 fg_info pl-0 pr-2 select_mhdd display_mh ">
										<label htmlFor="">
											Môn học giảng dạy <span>*</span>
										</label>
										<Select
											showSearch
											optionFilterProp="label"
											placeholder="Chọn môn học"
											value={as_id}
											onChange={(value) => {
												setAs_id(value)
												setAs_idError('')
											}}
											style={{ width: '100%', textAlign: 'start' }}
										>
											{list?.map((subject: any) => (
												<Option key={subject?._id} value={subject?.as_id} label={subject?.as_name}>
													{subject?.as_name}
												</Option>
											))}
										</Select>
										<div className="err_custom" id="mon_hoc" />
										<span className="err_info">{as_idError}</span>
									</div>
									<div className="form-group col-md-6 fg_info pl-0 pr-2 select_mhdd display_mh">
										<label htmlFor="">
											Hình thức giảng dạy <span>*</span>
										</label>
										<select
											name="ugs_formality"
											className={`form-control ${ugs_formalityError && 'is-invalid'}`}
											value={ugs_formality}
											title="Chọn hình thức giảng dạy"
											onChange={(e) => {
												setUgs_formality(e.target.value)
												setUgs_formalityError('')
											}}
										>
											<option value="">Chọn hình thức giảng dạy</option>
											<option value={1}>Gặp mặt</option>
											<option value={2}>Online</option>
										</select>
										<span className="err_info">{ugs_formalityError}</span>
										<span className="t-date" />
									</div>
								</div>
								<div className="form-row">
									<label htmlFor="">
										Học phí dự kiến <span>*</span>
									</label>
									<div className="form-row form-bd">
										<div className="form-group col-md-12 pr-2 ">
											<button
												type="button"
												className={`btn_price ${!isUocLuongActive ? 'btn_actv' : ''}`}
												id="co_dinh"
												data-id="co_dinh"
												onClick={handleCoDinhClick}
											>
												Cố định
											</button>
											<button
												type="button"
												className={`btn_price ${isUocLuongActive ? 'btn_actv' : ''}`}
												id="uoc_luong"
												data-id="uoc_luong"
												onClick={handleUocLuongClick}
											>
												Ước lượng
											</button>
										</div>
										<div className="form-group col-md-8 pr-2 price_div">
											<input
												type="number"
												className="form-control  format_price"
												name="pft_price"
												id="pft_price"
												placeholder="Nhập mức lương"
												value={ugs_salary}
												onChange={(e) => {
													setUgs_salary(e.target.value)
													setUgs_salaryError('')
												}}
											/>
											<input
												type="number"
												className="form-control input_price format_price"
												name="pft_start"
												id="pft_start"
												placeholder="Từ"
												style={{ display: 'none' }}
												value={ugs_salary}
												onChange={(e) => {
													setUgs_salary(e.target.value)
													setUgs_salaryError('')
												}}
											/>
											<span className="err_info">{ugs_salaryError}</span>
											<input
												type="number"
												className="form-control input_price format_price"
												name="pft_end"
												id="pft_end"
												placeholder="Đến"
												value={ugs_time}
												onChange={(e) => {
													setUgs_time(e.target.value)
													setUgs_salaryError('')
												}}
											/>
										</div>
										<span className="dx" />
										<div className="form-group col-md-4 pl-2 ">
											<select
												className="form-control"
												name="pft_month"
												id="pft_month"
												value={ugs_month}
												title="Chọn"
												onChange={(e) => {
													setUgs_month(e.target.value)
													setUgs_monthError('')
												}}
											>
												<option value="">Chọn</option>
												<option value={1}>Buổi</option>
												<option value={2}>Tháng</option>
											</select>
											<span className="err_info">{ugs_monthError}</span>
										</div>
									</div>
								</div>
								<div className="form-row mt-4">
									<div className="form-group col-md-6 infor-group">
										<label htmlFor="">
											Khu vực giảng dạy <span>*</span>
										</label>
										<Select
											className={`${ugs_city_gsError && 'is-invalid'}`}
											showSearch
											optionFilterProp="children"
											placeholder="Chọn tỉnh thành phố"
											style={{ width: '100%', textAlign: 'left' }}
											value={selectedCityId}
											onChange={handleCityChange}
										>
											{listCity.map((city: any) => (
												<Option key={city?._id} value={city?._id} label={city?.name}>
													{city?.name}
												</Option>
											))}
										</Select>
										<span className="err_info">{ugs_city_gsError}</span>
										<div className="err_custom" id="dd_hoc" />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="">
											<span>*</span>
										</label>
										<Select
											className={`${ugs_county_gsError && 'is-invalid'}`}
											style={{ width: '100%', textAlign: 'left' }}
											showSearch
											value={ugs_county_gs}
											onChange={(value) => {
												setUgs_county_gs(value)
												setUgs_county_gsError('')
											}}
											optionFilterProp="children"
											placeholder="Chọn quận huyện"
										>
											{listDistrict?.map((district: any) => (
												<Option key={district._id} value={district._id}>
													{district.name}
												</Option>
											))}
										</Select>
										<span className="err_info">{ugs_county_gsError}</span>
									</div>
								</div>
								<div className="form-row pb-3 pt-0">
									<label htmlFor="">
										Bạn có thể dạy <span>*</span>
									</label>
									<div className="hidden_lichday">
										<Input type="text" className="lichday hidden" name="lichday" defaultValue="" />
									</div>
									<div className="row h_chon_ngay_uv b_chon_ngay_uv">
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 2"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 3"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 4"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 5"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 6"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="Thứ 7"
										/>
										<Input
											type="button"
											className="col-md
                                      col-xl col-12"
											defaultValue="CN"
										/>
									</div>
									<div className="wrapper-tt b-wrapper-tt">
										<div className="container container_h">
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st2"
													id="st2"
													defaultValue={0}
													value={st2}
													onClick={() => handleCheckboxClick(setSt2)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st3"
													id="st3"
													defaultValue={0}
													value={st3}
													onClick={() => handleCheckboxClick(setSt3)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st4"
													id="st4"
													defaultValue={0}
													value={st4}
													onClick={() => handleCheckboxClick(setSt4)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st5"
													id="st5"
													defaultValue={0}
													value={st5}
													onClick={() => handleCheckboxClick(setSt5)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st6"
													id="st6"
													defaultValue={0}
													value={st6}
													onClick={() => handleCheckboxClick(setSt6)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="st7"
													id="st7"
													defaultValue={0}
													value={st7}
													onClick={() => handleCheckboxClick(setSt7)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_sang"
													name="scn"
													id="scn"
													defaultValue={0}
													value={scn}
													onClick={() => handleCheckboxClick(setScn)}
												/>
												<div className="option_inner instagram">
													<div className="name">Sáng</div>
												</div>
											</label>
										</div>
										<div className="container container_h">
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct2"
													id="ct2"
													defaultValue={0}
													value={ct2}
													onClick={() => handleCheckboxClick(setCt2)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct3"
													id="ct3"
													defaultValue={0}
													value={ct3}
													onClick={() => handleCheckboxClick(setCt3)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct4"
													id="ct4"
													defaultValue={0}
													value={ct4}
													onClick={() => handleCheckboxClick(setCt4)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct5"
													id="ct5"
													defaultValue={0}
													value={ct5}
													onClick={() => handleCheckboxClick(setCt5)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct6"
													id="ct6"
													defaultValue={0}
													value={ct6}
													onClick={() => handleCheckboxClick(setCt6)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ct7"
													id="ct7"
													defaultValue={0}
													value={ct7}
													onClick={() => handleCheckboxClick(setCt7)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_chieu"
													name="ccn"
													id="ccn"
													defaultValue={0}
													value={ccn}
													onClick={() => handleCheckboxClick(setCcn)}
												/>
												<div className="option_inner instagram">
													<div className="name">Chiều</div>
												</div>
											</label>
										</div>
										<div className="container container_h">
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt2"
													id="tt2"
													defaultValue={0}
													value={tt2}
													onClick={() => handleCheckboxClick(setTt2)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt3"
													id="tt3"
													defaultValue={0}
													value={tt3}
													onClick={() => handleCheckboxClick(setTt3)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt4"
													id="tt4"
													defaultValue={0}
													value={tt4}
													onClick={() => handleCheckboxClick(setTt4)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt5"
													id="tt5"
													defaultValue={0}
													value={tt5}
													onClick={() => handleCheckboxClick(setTt5)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt6"
													id="tt6"
													defaultValue={0}
													value={tt6}
													onClick={() => handleCheckboxClick(setTt6)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tt7"
													id="tt7"
													defaultValue={0}
													value={tt7}
													onClick={() => handleCheckboxClick(setTt7)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
											<label className="option_item">
												<Input
													type="checkbox"
													className="checkbox h_toi"
													name="tcn"
													id="tcn"
													defaultValue={0}
													value={tcn}
													onClick={() => handleCheckboxClick(setTcn)}
												/>
												<div className="option_inner instagram">
													<div className="name">Tối</div>
												</div>
											</label>
										</div>
									</div>
								</div>
								<div className="form-row ch-bx">
									<Input
										type="checkbox"
										className="text-left camket"
										checked={isChecked}
										onChange={() => setIsChecked(!isChecked)}
										name="camket"
									/>
									<p>
										Tôi cam kết thông tin đăng ký làm gia sư là thật. Tôi chấp nhận các{' '}
										<a href="https://timviec365.vn/thoa-thuan-su-dung.html">điều khoản </a>
										và <a href="https://timviec365.vn/quy-dinh-bao-mat.html">chính sách</a> của
										Giasu365
									</p>
								</div>
								<div className="infor-tt text-center b-infor-tt">
									{/* <button className="btn btn_reg2">Trở lại</button> */}
									<button
										type="submit"
										id="regis_gs"
										className="btn btn_reg3 tmp_submit_b4 register_gs_b4"
										value="add"
										name="xn-dk"
									>
										Đăng ký
									</button>
									<p className="load btn btn_reg3">
										<img src="/gia-su/img/loading.gif" alt="1" />
									</p>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
			<div className="clear" />
			<Footer />
		</>
	)
}
Dangkygiasu.Layout = MainLayout
export default Dangkygiasu
