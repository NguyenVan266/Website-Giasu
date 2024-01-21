import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Modal, Upload, DatePicker, Space, Select, Input, message } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import { isValid } from 'date-fns'
import dayjs from 'dayjs'
import axios from 'axios'
import Cookies from 'js-cookie'
import { format } from 'date-fns'
import { PlusOutlined } from '@ant-design/icons'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
	callApiDetailPGs,
	callApiGetCity,
	callApiGetDistrict,
	callApiListClassPh,
	callApiListSubject,
	callListDist,
	updateInfoTeacher,
} from '@/functions/callApi'
import type { DatePickerProps } from 'antd'
import CustomSelect from '@/components/common/select2'
const { Option } = Select

const TabLink = () => {
	const genderOptions = [
		{ value: '1', label: 'Nam' },
		{ value: '2', label: 'Nữ' },
		{ value: '3', label: 'Không yêu cầu' },
	]
	const formLearn = [
		{ value: '1', label: 'Gặp mặt' },
		{ value: '2', label: 'Online' },
	]
	const timeLearn = [
		{ value: '1', label: '1h' },
		{ value: '2', label: '1.5h' },
		{ value: '3', label: '2h' },
		{ value: '4', label: '2.5h' },
		{ value: '5', label: '3h' },
	]
	const listLesson = [
		{ value: '1', label: '1 buổi' },
		{ value: '2', label: '2 buổi' },
		{ value: '3', label: '3 buổi' },
		{ value: '4', label: '4 buổi' },
		{ value: '5', label: '5 buổi' },
		{ value: '6', label: '6 buổi' },
		{ value: '7', label: '7 buổi' },
		{ value: '8', label: '8 buổi' },
		{ value: '9', label: '9 buổi' },
		{ value: '10', label: '10 buổi' },
		{ value: '11', label: '11 buổi' },
		{ value: '12', label: '12 buổi' },
		{ value: '13', label: '13 buổi' },
		{ value: '14', label: '14 buổi' },
		{ value: '15', label: '15 buổi' },
	]
	const repuestGs = [
		{ value: '1', label: 'Sinh viên' },
		{ value: '2', label: 'Giáo viên mầm non' },
		{ value: '3', label: 'Giáo viên cấp 1' },
		{ value: '4', label: 'Giáo viên cấp 2' },
		{ value: '5', label: 'Giáo viên cấp 3' },
		{ value: '6', label: 'Giảng viên đại học' },
		{ value: '7', label: 'Chuyên gia' },
		{ value: '8', label: 'Người nước ngoài' },
		{ value: '9', label: 'Học sinh' },
		{ value: '10', label: 'Không yêu cầu' },
	]
	const wage = [
		{ value: '1', label: 'Buổi' },
		{ value: '2', label: 'Tháng' },
	]
	//api in value
	const [userNameValue, setUserNameValue] = useState('')
	const [genderValue, setGenderValue] = useState('')
	const [birthdayValue, setbirthdayValue] = useState<string | undefined>(undefined)
	const [marriedValue, setMarriedValue] = useState('')
	const [ugs_tutor_styleValue, setUgs_tutor_styleValue] = useState('')
	const [ugs_class_teachValue, setUgs_class_teachValue] = useState('')
	const [ugs_schoolValue, setUgs_schoolValue] = useState('')
	const [ugs_graduation_yearValue, setUgs_graduation_yearValue] = useState('')
	const [ugs_specializedValue, setUgs_specializedValue] = useState('')
	const [cityValue, setCityValue] = useState()
	const [districtValue, setDistrictValue] = useState()
	const [addressValue, setAddressValue] = useState('')
	const [ugs_workplaceValue, setUgs_workplaceValue] = useState('')
	const [ugs_about_usValue, setUgs_about_usValue] = useState('')
	const [ugs_achievementsValue, setUgs_achievementsValue] = useState('')
	const [experienceValue, setExperienceValue] = useState('')
	//api in value 4
	const [as_idValue, setAs_idValue] = useState('')
	const [ugs_formalityValue, setUgs_formalityValue] = useState('')
	const [ugs_unit_priceValue, setUgs_unit_priceValue] = useState(0)
	const [ugs_salaryValue, setUgs_salaryValue] = useState('')
	const [ugs_timeValue, setUgs_timeValue] = useState('')
	const [ugs_monthValue, setUgs_monthValue] = useState('')
	const [st2Value, setSt2Value] = useState<number>(0)
	const [st3Value, setSt3Value] = useState<number>(0)
	const [st4Value, setSt4Value] = useState<number>(0)
	const [st5Value, setSt5Value] = useState<number>(0)
	const [st6Value, setSt6Value] = useState<number>(0)
	const [st7Value, setSt7Value] = useState<number>(0)
	const [scnValue, setScnValue] = useState<number>(0)
	const [ct2Value, setCt2Value] = useState<number>(0)
	const [ct3Value, setCt3Value] = useState<number>(0)
	const [ct4Value, setCt4Value] = useState<number>(0)
	const [ct5Value, setCt5Value] = useState<number>(0)
	const [ct6Value, setCt6Value] = useState<number>(0)
	const [ct7Value, setCt7Value] = useState<number>(0)
	const [ccnValue, setCcnValue] = useState<number>(0)
	const [tt2Value, setTt2Value] = useState<number>(0)
	const [tt3Value, setTt3Value] = useState<number>(0)
	const [tt4Value, setTt4Value] = useState<number>(0)
	const [tt5Value, setTt5Value] = useState<number>(0)
	const [tt6Value, setTt6Value] = useState<number>(0)
	const [tt7Value, setTt7Value] = useState<number>(0)
	const [tcnValue, setTcnValue] = useState<number>(0)

	// in value
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDetailPGs({})
				setUserNameValue(response.userName)
				console.log(response.userName)
				setGenderValue(response.gender)
				setbirthdayValue(formatDateTime(response.birthday))
				setMarriedValue(response.married)
				setUgs_tutor_styleValue(response.ugs_tutor_style)
				setUgs_class_teachValue(response.ugs_class_teach)
				setUgs_schoolValue(response.ugs_school)
				setUgs_graduation_yearValue(response.ugs_graduation_year)
				setUgs_specializedValue(response.ugs_specialized)
				setAddressValue(response.address)
				setUgs_workplaceValue(response.ugs_workplace)
				setUgs_about_usValue(response.ugs_about_us)
				setUgs_achievementsValue(response.ugs_achievements)
				setExperienceValue(response.experience)
				setCityValue(response.city)
				setAvatarFile(response.avatarUser)
				setAs_idValue(response.as_id)
				setUgs_formalityValue(response.ugs_formality)
				setUgs_unit_priceValue(response.ugs_unit_price)
				setUgs_timeValue(response.ugs_time)
				setUgs_salaryValue(response.ugs_salary)
				setUgs_monthValue(response.ugs_month)
				setSt2Value(response.st2)
				setSt3Value(response.st3)
				setSt4Value(response.st4)
				setSt5Value(response.st5)
				setSt6Value(response.st6)
				setSt7Value(response.st7)
				setScnValue(response.scn)
				setCt2Value(response.ct2)
				setCt3Value(response.ct3)
				setCt4Value(response.ct4)
				setCt5Value(response.ct5)
				setCt6Value(response.ct6)
				setCt7Value(response.ct7)
				setCcnValue(response.ccn)
				setTt2Value(response.tt2)
				setTt3Value(response.tt3)
				setTt4Value(response.tt4)
				setTt5Value(response.tt5)
				setTt6Value(response.tt6)
				setTt7Value(response.tt7)
				setTcnValue(response.tcn)
				const listDist = await callListDist([{ id_city: cityValue }])
				console.log(listDist)
				const c = listDist.find((item: any) => item._id === response.district)
				setDistrictValue(c._id)
				console.log(c.name)
			} catch (error) {
				console.error('Error fetching city data:', error)
			}
		}
		fetchData()
	}, [])
	console.log('123', addressValue)

	// check value lịch học
	const handleCheckboxClick = (stateSetter: React.Dispatch<React.SetStateAction<number>>) => {
		stateSetter((prevValue) => (prevValue === 0 ? 1 : 0))
	}
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
	//api danh sách lớp học
	const [listClass, setListClass] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiListClassPh([])
				setListClass(response.list)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	//api tỉnh thành
	const [listCity, setListCity] = useState([])
	const [listDistrict, setListDistrict] = useState([])
	const [selectedCityId, setSelectedCityId] = useState(cityValue)

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

	const handleCityChange = async (value: any) => {
		try {
			const cityInfo = listCity.find((city: any) => city._id === value)
			setSelectedCityId(value)
		} catch (error) {
			console.error('Error handling city change:', error)
		}
	}
	useEffect(() => {
		const fetchDistrictData = async () => {
			try {
				const response = await callApiGetDistrict(Number(selectedCityId) || Number(cityValue))
				if (response) {
					setListDistrict(response)
				} else {
					console.error('Error: Unexpected response format for district data')
				}
			} catch (error) {
				console.error('Error fetching district data:', error)
			}
		}

		fetchDistrictData()
	}, [selectedCityId, cityValue])
	//các thông báo lỗi
	const [userNameError, setUserNameError] = useState('')
	const [genderError, setGenderError] = useState('')
	const [birthdayError, setBirthdayError] = useState('')
	const [marriedError, setMarriedError] = useState('')
	const [ugs_tutor_styleError, setUgs_tutor_styleError] = useState('')
	const [ugs_class_teachError, setUgs_class_teachError] = useState('')
	const [cityError, setCityError] = useState('')
	const [addressError, setAddressError] = useState('')
	const [districtError, setDistrictError] = useState('')
	const [ugs_about_usError, setUgs_about_usError] = useState('')
	const [experienceError, setExperienceError] = useState('')
	//
	const [as_idError, setAs_idError] = useState('')
	const [ugs_formalityError, setUgs_formalityError] = useState('')
	const [ugs_monthError, setUgs_monthError] = useState('')
	const [ugs_salaryError, setUgs_salaryError] = useState('')
	const [token, setToken] = useState('')

	const validateForm3 = () => {
		let isValid = true
		// Validate
		if (!userNameValue) {
			setUserNameError('Không được bỏ trống tên ')
			isValid = false
		} else {
			setUserNameError('')
		}

		if (!addressValue) {
			setAddressError('Không được để trống địa chỉ')
			isValid = false
		} else {
			setAddressError('')
		}
		if (!birthdayValue) {
			setBirthdayError('Không được bỏ trống ngày sinh')
			isValid = false
		} else {
			setBirthdayError('')
		}
		if (!marriedValue) {
			setMarriedError('Tình trạng hôn nhân không được để trống')
			isValid = false
		} else {
			setMarriedError('')
		}

		if (!ugs_tutor_styleValue) {
			setUgs_tutor_styleError('Kiểu gia sư không được để trống')
			isValid = false
		} else {
			setUgs_tutor_styleError('')
		}

		if (!genderValue) {
			setGenderError('Giới tinh không được để trống')
			isValid = false
		} else {
			setGenderError('')
		}

		if (!ugs_class_teachValue) {
			setUgs_class_teachError('Lớp học sẽ dạy không được để trống')
			isValid = false
		} else {
			setUgs_class_teachError('')
		}

		if (!cityValue) {
			setCityError('Tỉnh thành không được để trống')
			isValid = false
		} else {
			setCityError('')
		}

		if (!districtValue) {
			setDistrictError('Quận huyện không được để trống')
			isValid = false
		} else {
			setDistrictError('')
		}
		if (!ugs_about_usValue) {
			setUgs_about_usError('Giới thiệu bản thân không được để trống')
			isValid = false
		} else {
			setUgs_about_usError('')
		}

		if (!experienceValue) {
			setExperienceError('Kinh nghiệm không được để trống')
			isValid = false
		} else {
			setExperienceError('')
		}
		return isValid
	}
	//hàm lấy token
	useEffect(() => {
		const userToken = Cookies.get('token_base365')
		if (userToken) {
			setToken(userToken)
		}
	}, [])
	//hàm khi sumbmit3
	const handleSubmit3 = async (e: any) => {
		e.preventDefault()
		console.log(cityValue, districtValue)

		if (!validateForm3()) {
			return
		}
		try {
			const res = await axios.post(
				'http://210.245.108.202:3023/api/giasu/account/updateInfoTeacher',
				{
					userName: userNameValue,
					gender: genderValue,
					birthday: birthdayValue,
					married: marriedValue,
					ugs_tutor_style: ugs_tutor_styleValue,
					ugs_class_teach: ugs_class_teachValue,
					ugs_school: ugs_schoolValue,
					ugs_graduation_year: ugs_graduation_yearValue,
					ugs_specialized: ugs_specializedValue,
					ugs_city_gs: cityValue,
					ugs_county_gs: districtValue,
					address: addressValue,
					ugs_workplace: ugs_workplaceValue,
					ugs_about_us: ugs_about_usValue,
					ugs_achievements: ugs_achievementsValue,
					experience: experienceValue,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			console.log(res.data)

			if (res.data !== null) {
				alert('Bạn đã cập nhật thành công')
			}
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	const validateForm4 = () => {
		let isValid = true
		// Validate
		if (!as_idValue) {
			setAs_idError('Môn học không được bỏ trống')
			isValid = false
		} else {
			setAs_idError('')
		}

		if (!ugs_formalityValue) {
			setUgs_formalityError('Hình thức giảng dạy không được để trống')
			isValid = false
		} else {
			setUgs_formalityError('')
		}
		if (!ugs_salaryValue) {
			setUgs_salaryError('Mức lương không được bỏ trống')
			isValid = false
		} else {
			setUgs_salaryError('')
		}
		return isValid
	}

	const handleSubmit4 = async (e: any) => {
		e.preventDefault()
		if (!validateForm4()) {
			return
		}
		try {
			const res = await axios.post(
				'http://210.245.108.202:3023/api/giasu/account/updateInfoTeacher',
				{
					as_id: as_idValue,
					ugs_formality: ugs_formalityValue,
					ugs_city_gs: cityValue,
					ugs_county_gs: districtValue,
					ugs_unit_price: ugs_unit_priceValue,
					ugs_salary: ugs_salaryValue,
					ugs_time: ugs_timeValue,
					ugs_month: ugs_monthValue,
					st2: st2Value,
					st3: st3Value,
					st4: st4Value,
					st5: st5Value,
					st6: st6Value,
					st7: st7Value,
					scn: scnValue,
					ct2: ct2Value,
					ct3: ct3Value,
					ct4: ct4Value,
					ct5: ct5Value,
					ct6: ct6Value,
					ct7: ct7Value,
					ccn: ccnValue,
					tt2: tt2Value,
					tt3: tt3Value,
					tt4: tt4Value,
					tt5: tt5Value,
					tt6: tt6Value,
					tt7: tt7Value,
					tcn: tcnValue,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			console.log(res)

			if (res.data !== null) {
				alert('Bạn đã cập nhật thành công')
			}
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	const handleSubmit2 = async (e: any) => {
		e.preventDefault()

		try {
			const formData = new FormData()
			formData.append('avatarUser', avatarFile)
			const res = await axios.post(
				'http://210.245.108.202:3023/api/giasu/account/updateInfoTeacher',
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (res.data !== null) {
				alert('Bạn đã cập nhật thành công')
			}
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
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
				setUgs_unit_priceValue(2)
			} else {
				inputUocLuong.style.display = 'none'
				inputStart.style.display = 'none'
				inputgiaca.style.display = 'block'
				buttonUocLuong.classList.remove('btn_actv')
				buttonCoDinh.classList.add('btn_actv')
				setUgs_unit_priceValue(1)
			}
		}
	}, [isUocLuongActive])

	const handleUocLuongClick = () => {
		setIsUocLuongActive(true)
	}

	const handleCoDinhClick = () => {
		setIsUocLuongActive(false)
	}
	const [value, setValue] = useState('1')
	const handleChange = (e: any, newValue: any) => {
		setValue(newValue)
	}
	//2
	// avatar
	const [avatarFile, setAvatarFile] = useState<any>()
	const handleFileChange = (e: any) => {
		const file = e.target.files[0]

		const reader = new FileReader()

		reader.onload = (event: any) => {
			const imageUrl = event.target.result
			const avatarElement = document.getElementById('ugs_avatar') as HTMLImageElement

			if (avatarElement) {
				avatarElement.src = imageUrl
			}
		}

		reader.readAsDataURL(file)
		setAvatarFile(file)
	}

	function formatDateTime(dateTimeString: any) {
		return dayjs(dateTimeString).format('YYYY-MM-DD')
	}

	return (
		<div className="ad-cnttgs b_cnttgs">
			<div className="cnttgs-ad-gs">
				<TabContext value={value}>
					<Box className="tab-header">
						<TabList onChange={handleChange}>
							<Tab
								label="Thông tin đăng nhập"
								value="4"
								className="tablink collapsed"
								style={{ display: 'none' }}
							/>
							<Tab
								label="Ảnh đại diện"
								value="1"
								className="tablink collapsed"
								style={{ width: '33%' }}
							/>
							<Tab
								label="Thông tin cá nhân"
								value="2"
								className="tablink collapsed"
								style={{ width: '33%' }}
							/>
							<Tab
								label="Thông tin giảng dạy"
								value="3"
								className="tablink collapsed"
								style={{ width: '33%' }}
							/>
						</TabList>
					</Box>
					<Box className="tab-content" id="tab-cont">
						<TabPanel value="4" style={{ display: 'none' }}>
							<div id="ttdn" className="collapse show" data-parent="#tab-cont">
								<form
									method="POST"
									id="vali-ttdn"
									encType="multipart/form-data"
									// onSubmit={handleSubmit1}
								>
									<div className="form-group">
										<label htmlFor="">
											Số điện thoại <span>*</span>
										</label>
										<input
											type="text"
											className="form-control"
											id="ugs_phone"
											name="phone"
											defaultValue="0963808131"
											readOnly={true}
											placeholder="Nhập số điện thoại"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="">
											Email <span>*</span>
										</label>
										<input
											type="text"
											className="form-control"
											id="ugs_email"
											name="emailContact"
											defaultValue="hung@gmail.com"
											// readOnly={true}
											placeholder="Nhập địa chỉ email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="">
											{' '}
											Mật khẩu <span>*</span>
										</label>
										<i
											// className={`fa icons eye1 ${!showPass1 ? "fa-eye-slash" : 'fa-eye'}`}
											id="eye1"
											// onClick={clickshowPass1}
										/>
										<input
											// type={!showPass1 ? "password" : 'text'}
											// className={`form-control ${isPasswordEmpty ? 'is-invalid' : ''} ${!isPasswordValid && !isPasswordEmpty ? 'is-invalid' : ''}`}
											name="ugs_password"
											defaultValue="c89e7f7c6168a7e60ca07db1b0c42d34"
											placeholder="Nhập mật khẩu "
											// value={password}
											// onChange={handlePasswordChange}
										/>
										{/* {isPasswordEmpty && (
                                            <div className="invalid-feedback">Mật khẩu không được bỏ trống.</div>
                                        )}
                                        {!isPasswordEmpty && !isPasswordValid && (
                                            <div className="invalid-feedback">Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số, không chứa dấu cách.</div>
                                        )} */}
									</div>
									<div className="form-group">
										<label htmlFor="">
											Nhập lại mật khẩu <span>*</span>
										</label>
										{/* <i
                                            className={`fa icons eye2 ${!showPass2 ? "fa-eye-slash" : 'fa-eye'}`}
                                            id="eye1"
                                            onClick={clickshowPass2}
                                        /> */}
										{/* <input
                                            type={!showPass2 ? "password" : 'text'}
                                            className={`form-control ${isConfirmPasswordEmpty ? 'is-invalid' : ''} ${!isPasswordMatch && !isConfirmPasswordEmpty ? 'is-invalid' : ''}`}
                                            name="ugs_retype_password"
                                            defaultValue="c89"
                                            placeholder="Nhập lại mật khẩu"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        {isConfirmPasswordEmpty && (
                                            <div className="invalid-feedback">Vui lòng nhập lại mật khẩu.</div>
                                        )}
                                        {!isConfirmPasswordEmpty && !isPasswordMatch && (
                                            <div className="invalid-feedback">Mật khẩu xác nhận không khớp với mật khẩu.</div>
                                        )} */}
									</div>
									<button type="submit" name="tt-cn-ps" id="update_phone">
										Cập nhật
									</button>
								</form>
							</div>
						</TabPanel>
						<TabPanel value="1">
							<div id="avt" className="collapse show">
								<form
									method="POST"
									id="vali-img"
									encType="multipart/form-data"
									onSubmit={handleSubmit2}
								>
									<div className="avt-tk text-center">
										<label htmlFor="avatarInput">
											<img
												src={avatarFile ? avatarFile : '/gia-su/img/add.png'}
												alt=""
												id="ugs_avatar"
												style={{ borderRadius: '50%' }}
											/>
										</label>
										<Input
											type="file"
											name="ugs_avatar"
											id="avatarInput"
											accept="image/png,image/gif,image/jpeg"
											style={{ display: 'none' }}
											onChange={(e) => handleFileChange(e)}
										/>
										<div className="form-group">
											<label htmlFor="avatarInput" className="pt-3">
												Chọn hình ảnh đại diện
											</label>
										</div>
									</div>
									<button type="submit" name="btn-img-gs" id="ud-img-gs">
										Cập nhật
									</button>
								</form>
							</div>
							{/* <div
                                id="avt"
                                className="collapse show"
                            >
                                <form
                                    method="POST"
                                    id="vali-img"
                                    encType="multipart/form-data"
                                // onSubmit={handleSubmit2}
                                >

                                    <div className="user-img text-center">

                                        <Upload
                                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                            listType="picture-circle"
                                            fileList={fileList}
                                            // onPreview={handlePreview}
                                            onChange={handleChange2}
                                        >
                                            {fileList.length >= 1 ? null : uploadButton}
                                        </Upload>
                                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                        </Modal>
                                    </div>
                                    <div className="xt-p text-center pt-3">
                                        <p>
                                            Chọn ảnh đại diện <span className="required_star">*</span>
                                        </p>
                                    </div>
                                    <button type="submit" name="btn-img-gs" id="ud-img-gs">
                                        Cập nhật
                                    </button>
                                </form>
                            </div> */}
						</TabPanel>

						<TabPanel value="2">
							<div id="ttcn" className="collapse show">
								<div className="container">
									<form
										method="POST"
										id="vali-ttcn"
										encType="multipart/form-data"
										onSubmit={handleSubmit3}
									>
										<div className="form-row">
											<div className="form-group col-md-6 pr-2">
												<label htmlFor="">
													Họ và tên <span>*</span>
												</label>
												<input
													type="text"
													className={`form-control ${userNameError && 'is-invalid'}`}
													name="userName"
													id="userName"
													// defaultValue="Nguyễn Thành Trung"
													placeholder="Nhập họ và tên"
													value={userNameValue}
													onChange={(e) => {
														setUserNameValue(e.target.value)
														setUserNameError('')
													}}
												/>
												<div id="error10" className="red d-span-content" />
												<span className="err_info">{userNameError}</span>
											</div>
											<div className="form-group col-md-6 pl-2">
												<label htmlFor="">
													Giới tính <span>*</span>
												</label>
												<select
													className={`form-control ${genderError && 'is-invalid'}`}
													name="gender"
													id="ugs_gender"
													value={genderValue}
													onChange={(e) => {
														setGenderValue(e.target.value)
														setGenderError('')
													}}
												>
													<option value="">Chọn giới tính</option>
													<option value={1}>Nam</option>
													<option value={2}>Nữ</option>
													<option value={3}>Khác</option>
												</select>
												<div id="error10" className="red d-span-content" />
												<span className="err_info">{genderError}</span>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6 pr-2">
												<label htmlFor="">
													Ngày sinh <span>*</span>
												</label>
												<Input
													type="date"
													className={`form-control ${birthdayError && 'is-invalid'}`}
													value={birthdayValue}
													onChange={(e) => {
														setbirthdayValue(e.target.value)
														setBirthdayError('')
													}}
												/>
												<span className="err_info">{birthdayError}</span>
											</div>
											<div className="form-group col-md-6 pl-2">
												<label htmlFor="">
													Tình trạng hôn nhân <span>*</span>
												</label>
												<select
													className={`form-control ${marriedError && 'is-invalid'}`}
													value={marriedValue}
													onChange={(e) => {
														setMarriedValue(e.target.value)
														setMarriedError('')
													}}
													id="ugs_marriage"
													name="married"
												>
													<option value="">Chọn tình trạng hôn nhân</option>
													<option value={1}>Chưa kết hôn</option>
													<option value={2}>Đã kết hôn</option>
												</select>
												<span className="err_info">{marriedError}</span>
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6 pr-2">
												<label htmlFor="">
													Kiểu gia sư <span>*</span>
												</label>
												<select
													className={`form-control ${ugs_tutor_styleError && 'is-invalid'}`}
													value={ugs_tutor_styleValue}
													onChange={(e) => {
														setUgs_tutor_styleValue(e.target.value)
														setUgs_tutor_styleError('')
													}}
													name="ugs_tutor_style"
													id="ugs_tutor_style"
												>
													<option value="" selected={true}>
														Chọn kiểu gia sư{' '}
													</option>
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
											<div className="form-group col-md-6 pl-2">
												<label htmlFor="">
													Lớp học sẽ dạy <span>*</span>
												</label>
												<select
													className={`form-control ${ugs_class_teachError && 'is-invalid'}`}
													value={ugs_class_teachValue}
													onChange={(e) => {
														setUgs_class_teachValue(e.target.value)
														setUgs_class_teachError('')
													}}
													name="ugs_class_teach"
													id="ugs_class_teach"
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
											</div>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6 pr-2">
												<label htmlFor="">Học trường</label>
												<input
													type="text"
													className="form-control"
													placeholder="Nhập tên trường"
													defaultValue=""
													name="ugs_school"
													id="ugs_school"
													value={ugs_schoolValue}
													onChange={(e) => {
														setUgs_schoolValue(e.target.value)
													}}
												/>
											</div>
											<div className="form-group col-md-6 pl-2">
												<label htmlFor="">Năm tốt nghiệp (nếu đã tốt nghiệp)</label>
												<input
													type="number"
													className="form-control"
													placeholder="Nhập năm tốt nghiệp"
													name="ugs_graduation_year"
													id="ugs_graduation_year"
													value={ugs_graduation_yearValue}
													onChange={(e) => {
														setUgs_graduation_yearValue(e.target.value)
													}}
												/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="">Chuyên ngành</label>
											<input
												type="text"
												className="form-control"
												placeholder="Nhập tên chuyên ngành"
												name="ugs_specialized"
												id="ugs_specialized"
												value={ugs_specializedValue}
												onChange={(e) => {
													setUgs_specializedValue(e.target.value)
												}}
											/>
										</div>
										<div className="form-row">
											<div className="form-group col-md-6 infor-group">
												<label htmlFor="">
													Tỉnh/thành phố <span>*</span>
												</label>
												<Select
													showSearch
													id="ugs_city"
													optionFilterProp="children"
													placeholder="Chọn tỉnh thành phố"
													style={{ width: '100%', color: 'black' }}
													onSelect={(e) => {
														setCityValue(e)
														setCityError('')
													}}
													value={cityValue}
													onChange={handleCityChange}
													options={listCity.map((option: any, index) => ({
														value: option._id,
														label: option.name,
														key: index,
													}))}
												></Select>
												<span className="err_info">{cityError}</span>
												<div className="err_custom" id="dd_hoc" />
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="">
													Quận/huyện <span>*</span>
												</label>
												<Select
													showSearch
													optionFilterProp="children"
													id="ugs_county"
													placeholder="Chọn quận huyện"
													style={{ width: '100%' }}
													onChange={(value) => {
														setDistrictValue(value)
														setDistrictError('')
													}}
													onSelect={(e) => {
														setDistrictValue(e)
													}}
													value={districtValue}
													options={listDistrict.map((option: any, index) => ({
														key: index,
														value: option._id,
														label: option.name,
													}))}
												></Select>
												<span className="err_info">{districtError}</span>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="">
												Địa chỉ hiện tại <span>*</span>
											</label>
										</div>
										<div>
											<input
												type="text"
												className={`form-control ${addressError && 'is-invalid'}`}
												// defaultValue="số 1 Trần Nguyên Đán , HN"
												placeholder="Nhập địa chỉ cụ thể"
												name="address"
												id="ugs_address"
												value={addressValue}
												onChange={(e) => {
													setAddressValue(e.target.value)
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
												defaultValue=""
												placeholder="Nhập nơi công tác"
												name="ugs_workplace"
												id="ugs_workplace"
												value={ugs_workplaceValue}
												onChange={(e) => {
													setUgs_workplaceValue(e.target.value)
												}}
											/>
										</div>

										<div className="form-group">
											<label htmlFor="">
												Giới thiệu về bản thân <span>*</span>
											</label>

											<textarea
												className={`form-control ${ugs_about_usError && 'is-invalid'}`}
												placeholder="Giới thiệu ngắn về bản thân"
												name="ugs_about_us"
												id="ugs_about_us"
												// defaultValue={"không có"}
												value={ugs_about_usValue}
												onChange={(e) => {
													setUgs_about_usValue(e.target.value)
													setUgs_about_usError('')
												}}
											/>
											<div id="error10" className="red d-span-content" />
											<span className="err_info">{ugs_about_usError}</span>
										</div>
										<div className="form-group">
											<label htmlFor="">Thành tích</label>
											<textarea
												className="form-control"
												placeholder="Nhập các thành tích của bạn "
												rows={5}
												cols={25}
												name="ugs_achievements"
												id="ugs_achievements"
												// defaultValue={""}
												value={ugs_achievementsValue}
												onChange={(e) => {
													setUgs_achievementsValue(e.target.value)
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
												// defaultValue={2}
												name="experience"
												placeholder="Nhập số năm kinh nghiệm"
												id="ugs_experence"
												value={experienceValue}
												onChange={(e) => {
													setExperienceValue(e.target.value)
													setExperienceError('')
												}}
											/>
											<span className="err_info">{experienceError}</span>
										</div>
										<div className="form-group teacher-exp">
											{/* api chua co */}
											<label htmlFor="">Kinh nghiệm giảng dạy</label>
										</div>
										<span className="div-boc">
											<div className="form-group">
												<input
													type="text"
													className="form-control if-bd ugs_title valid_title"
													name="ugs_title[]"
													id="ugs_title"
													placeholder="Tiêu đề"
													// onChange={handleChange3}
												/>
											</div>
											<div className="form-row">
												<div className="form-group col-md-6 pr-3">
													<input
														type="date"
														className="form-control if-bd ugs_year_start valid_start"
														name="ugs_year_start[]"
														id="ugs_year_start"
														placeholder="Thời gian bắt đầu"
														// onChange={handleChange3}
													/>
												</div>
												<div className="form-group col-md-6 pl-3">
													<input
														type="date"
														className="form-control if-bd ugs_year_end valid_end"
														name="ugs_year_end[]"
														id="ugs_year_end"
														placeholder="Thời gian kết thúc"
														// onChange={handleChange3}
													/>
												</div>
											</div>
											<div className="form-group">
												<textarea
													className="form-control if-bd ugs_job_description valid_des"
													name="as_detail"
													id="as_detail"
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
											<p>
												<a className="add-exp" href="javascript:void(0)">
													Thêm kinh nghiệm
												</a>
											</p>
										</div>
										<button
											type="submit"
											className="btn btn-outline-primary up_tt_cn"
											name="cn-tt-dd"
											style={{ marginLeft: '24%', marginRight: '24%' }}
										>
											Cập nhật
										</button>
									</form>
								</div>
							</div>
						</TabPanel>

						<TabPanel value="3">
							<div id="ttgd" className="collapse show">
								<div className="container">
									<form
										action=""
										method="POST"
										id="vali-ttgd"
										name="vali-ttgd"
										encType="multipart/form-data"
										onSubmit={handleSubmit4}
									>
										<div className="form-row">
											{/* <div className="form-group col-md-12 infor-group pr-2 display_mh"> */}
											<label htmlFor="">
												Môn học giảng dạy <span>*</span>
											</label>
											<Select
												showSearch
												optionFilterProp="label"
												placeholder="Chọn môn học"
												value={as_idValue}
												onChange={(value) => {
													setAs_idValue(value)
													setAs_idError('')
												}}
												style={{ width: '100%', textAlign: 'start' }}
											>
												{list?.map((subject: any) => (
													<Option
														key={subject?._id}
														value={subject?.as_id}
														label={subject?.as_name}
													>
														{subject?.as_name}
													</Option>
												))}
											</Select>
											<span className="err_info">{as_idError}</span>
											<div className="err_custom" id="mon_hoc" />
											{/* </div> */}
										</div>
										<div className="form-row mt-4">
											<label htmlFor="">
												Hình thức giảng dạy <span>*</span>
											</label>
											<select
												name="ugs_formality"
												className={`form-control ${ugs_formalityError && 'is-invalid'}`}
												value={ugs_formalityValue}
												onChange={(e) => {
													setUgs_formalityValue(e.target.value)
													setUgs_formalityError('')
												}}
											>
												<option value="">Chọn hình thức giảng dạy</option>
												<option value={1}>Gặp mặt</option>
												<option value={2}>Online</option>
											</select>
											<span className="err_info">{ugs_formalityError}</span>
											<div className="err_custom" id="ht_hoc" />
											<span className="err_info">{ugs_formalityError}</span>
											<span className="t-date" />
										</div>
										<div className="form-row mt-4">
											<label htmlFor="">
												Học phí dự kiến <span>*</span>
											</label>
											<div className="form-row form-bd">
												<div className="form-group col-md-12 pr-2">
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
														className="form-control input_price format_price"
														id="pft_price"
														placeholder="Nhập mức lương"
														style={{ width: '100%' }}
														name="ugs_salary"
														value={ugs_salaryValue}
														onChange={(e) => {
															setUgs_salaryValue(e.target.value)
															setUgs_salaryError('')
														}}
														// onChange={handleChange4}
													/>
													<input
														type="number"
														className="form-control input_price format_price"
														name="pft_start"
														id="pft_start"
														placeholder="Từ"
														// defaultValue=""
														style={{ display: 'none' }}
														value={ugs_salaryValue}
														onChange={(e) => {
															setUgs_salaryValue(e.target.value)
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
														// defaultValue=""
														style={{ display: 'none' }}
														value={ugs_timeValue}
														onChange={(e) => {
															setUgs_timeValue(e.target.value)
															setUgs_salaryError('')
														}}
													/>
												</div>
												<span className="dx" />
												<div className="form-group col-md-4 pl-2 ">
													<select
														className="form-control pft_month"
														name="pft_month"
														id="pft_month"
														value={ugs_monthValue}
														onChange={(e) => {
															setUgs_monthValue(e.target.value)
															setUgs_monthError('')
														}}
														// onChange={handleChange4}
													>
														<option value={1} selected={true}>
															Buổi
														</option>
														<option value={2}>Tháng</option>
													</select>
													{/* <span className="err_info">{ugs_monthError}</span> */}
												</div>
											</div>
										</div>
										<div className="form-row pt-3">
											<div className="form-group col-md-6 infor-group">
												<label htmlFor="">
													Khu vực giảng dạy <span>*</span>
												</label>
												<Select
													showSearch
													id="ugs_city"
													optionFilterProp="children"
													placeholder="Chọn tỉnh thành phố"
													style={{ width: '100%', color: 'black' }}
													onSelect={(e) => {
														setCityValue(e)
														setCityError('')
													}}
													value={cityValue}
													onChange={handleCityChange}
													options={listCity.map((option: any, index) => ({
														value: option._id,
														label: option.name,
														key: index,
													}))}
												></Select>
												<span className="err_info">{cityError}</span>
												<div className="err_custom" id="dd_hoc" />
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="">
													<span>*</span>
												</label>
												<Select
													showSearch
													optionFilterProp="children"
													id="ugs_county"
													placeholder="Chọn quận huyện"
													style={{ width: '100%' }}
													onChange={(value) => {
														setDistrictValue(value)
														setDistrictError('')
													}}
													onSelect={(e) => {
														setDistrictValue(e)
													}}
													value={districtValue}
													options={listDistrict.map((option: any, index) => ({
														key: index,
														value: option._id,
														label: option.name,
													}))}
												></Select>
												<span className="err_info">{districtError}</span>
											</div>
										</div>
										{/* <div className="form-row wgr pt-3" >
                                            <label htmlFor="">
                                                Khu vực giảng dạy <span>*</span>
                                            </label>
                                            <Select
                                                showSearch
                                                optionFilterProp="children"
                                                placeholder="Chọn tỉnh thành phố"
                                                style={{ width: '42%' }}
                                            // onChange={handleChange4}
                                            // onChange={handleCityChange}
                                            >
                                                {listCity.map((city: any) => (
                                                    <Option key={city?._id} value={city?._id} label={city?.name}>
                                                        {city?.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                            <Select
                                                showSearch
                                                optionFilterProp="children"
                                                placeholder="Chọn quận huyện"
                                                style={{ width: '42%' }}
                                            >
                                                {
                                                    listDistrict?.map((district: any) => (
                                                        <Option key={district._id} value={district._id}>
                                                            {district.name}
                                                        </Option>
                                                    ))}
                                            </Select>

                                        </div> */}
										<div className="form-group fg-lb mt-5">
											<label htmlFor="">
												Bạn có thể dạy <span>*</span>
											</label>
											<div className="hidden_lichday">
												<input
													type="text"
													className="lichday hidden"
													name="lichday"
													defaultValue={1}
												/>
											</div>
											{/* <form action=""> */}
											<div className="content__lichday">
												<div className="row h_chon_ngay_uv b_chon_ngay_uv">
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 2"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 3"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 4"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 5"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 6"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="Thứ 7"
													/>
													<input
														type="button"
														className="col-md
                                      col-xl col-12"
														defaultValue="CN"
													/>
												</div>
												<div className="wrapper-tt">
													<div className="container container_h">
														<label className="option_item ">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st2"
																id="st2"
																defaultValue={0}
																value={st2Value}
																onClick={() => handleCheckboxClick(setSt2Value)}
															/>
															<div className="option_inner instagram ">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st3"
																id="st3"
																defaultValue={0}
																value={st3Value}
																onClick={() => handleCheckboxClick(setSt3Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st4"
																id="st4"
																defaultValue={0}
																value={st4Value}
																onClick={() => handleCheckboxClick(setSt4Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st5"
																id="st5"
																defaultValue={0}
																value={st5Value}
																onClick={() => handleCheckboxClick(setSt5Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st6"
																id="st6"
																defaultValue={0}
																value={st6Value}
																onClick={() => handleCheckboxClick(setSt6Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="st7"
																id="st7"
																defaultValue={0}
																value={st7Value}
																onClick={() => handleCheckboxClick(setSt7Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_sang"
																name="scn"
																id="scn"
																defaultValue={0}
																value={scnValue}
																onClick={() => handleCheckboxClick(setScnValue)}
															/>
															<div className="option_inner instagram">
																<div className="name">Sáng</div>
															</div>
														</label>
													</div>
													<div className="container container_h">
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct2"
																id="ct2"
																defaultValue={0}
																value={ct2Value}
																onClick={() => handleCheckboxClick(setCt2Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct3"
																id="ct3"
																defaultValue={0}
																value={ct3Value}
																onClick={() => handleCheckboxClick(setCt3Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct4"
																id="ct4"
																defaultValue={0}
																value={ct4Value}
																onClick={() => handleCheckboxClick(setCt4Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct5"
																id="ct5"
																defaultValue={0}
																value={ct5Value}
																onClick={() => handleCheckboxClick(setCt5Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct6"
																id="ct6"
																defaultValue={0}
																value={ct6Value}
																onClick={() => handleCheckboxClick(setCt6Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ct7"
																id="ct7"
																defaultValue={0}
																value={ct7Value}
																onClick={() => handleCheckboxClick(setCt7Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_chieu"
																name="ccn"
																id="ccn"
																defaultValue={0}
																value={ccnValue}
																onClick={() => handleCheckboxClick(setCcnValue)}
															/>
															<div className="option_inner instagram">
																<div className="name">Chiều</div>
															</div>
														</label>
													</div>
													<div className="container container_h">
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt2"
																id="tt2"
																defaultValue={0}
																value={tt2Value}
																onClick={() => handleCheckboxClick(setTt2Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt3"
																id="tt3"
																defaultValue={0}
																value={tt3Value}
																onClick={() => handleCheckboxClick(setTt3Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt4"
																id="tt4"
																defaultValue={0}
																value={tt4Value}
																onClick={() => handleCheckboxClick(setTt4Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt5"
																id="tt5"
																defaultValue={0}
																value={tt5Value}
																onClick={() => handleCheckboxClick(setTt5Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt6"
																id="tt6"
																defaultValue={0}
																value={tt6Value}
																onClick={() => handleCheckboxClick(setTt6Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tt7"
																id="tt7"
																defaultValue={0}
																value={tt7Value}
																onClick={() => handleCheckboxClick(setTt7Value)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
														<label className="option_item">
															<input
																type="checkbox"
																className="checkbox h_toi"
																name="tcn"
																id="tcn"
																defaultValue={0}
																value={tcnValue}
																onClick={() => handleCheckboxClick(setTcnValue)}
															/>
															<div className="option_inner instagram">
																<div className="name">Tối</div>
															</div>
														</label>
													</div>
												</div>
											</div>
											{/* </form> */}
										</div>
										<div>
											<button
												type="submit"
												className="btn btn-outline-primary up_tt_gd"
												name="cn_tt_giang_day"
											>
												Cập nhật
											</button>
										</div>
									</form>
								</div>
							</div>
						</TabPanel>
					</Box>
				</TabContext>
			</div>
		</div>
	)
}

export default TabLink
