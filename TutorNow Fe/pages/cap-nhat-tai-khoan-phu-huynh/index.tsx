import React, { useState, useEffect } from 'react'
import { PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { Select, Input, message } from 'antd'
const { Option } = Select
import { callApiGetCity, callApiGetDistrict, callApiDetailPh } from '@/functions/callApi'
import Cookies from 'js-cookie'
import axios from 'axios'
import dayjs from 'dayjs'
const CapNhatTaiKhoanPH = () => {
	function formatDateTime(dateTimeString: any) {
		return dayjs(dateTimeString).format('YYYY-MM-DD')
	}
	const router = useRouter()
	const genderOptions = [
		{ value: '1', label: 'Nam' },
		{ value: '2', label: 'Nữ' },
		{ value: '3', label: 'Khác' },
	]
	//api in ra value

	const [phoneValue, setPhoneValue] = useState('')
	const [nameValue, setNameValue] = useState('')
	const [genderValue, setGenderValue] = useState('')
	const [birthdayValue, setbirthdayValue] = useState<string | undefined>(undefined)
	const [emailvalue, setemailvalue] = useState('')
	const [addressValue, setAddressValue] = useState('')
	const [aboutValue, setAboutValue] = useState('')
	const [cityValue, setCityValue] = useState('')
	const [districtValue, setDistrictValue] = useState('')

	const fetchData = async () => {
		try {
			const response = await callApiDetailPh([])
			setAboutValue(response.ugs_about_us)
			setGenderValue(response.gender)
			setAddressValue(response.address)
			setNameValue(response.userName)
			setemailvalue(response.emailContact)
			setPhoneValue(response.phone)
			setCityValue(response.id_city._id)
			setAvatarFile(response.avatarUser)
			setbirthdayValue(formatDateTime(response.birthday))
			setDistrictValue(response.id_district._id)
		} catch (error) {
			console.error('Error fetching city data:', error)
		}
	}
	useEffect(() => {
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

	//api cập nhật
	const [password, setPassword] = useState('')
	const [token, setToken] = useState('')
	const [phoneError, setPhoneError] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [userNameError, setUserNameError] = useState('')
	const [cityError, setCityError] = useState('')
	const [districtError, setDistrictError] = useState('')
	const [genderError, setGenderError] = useState('')
	const [birthdayError, setBirthdayError] = useState('')
	const [addressError, setAddressError] = useState('')
	const validateForm = () => {
		let isValid = true
		// Validate phone
		if (!phoneValue) {
			setPhoneError('Chưa nhập hoặc nhập sai định dạng số điện thoại')
			isValid = false
		} else {
			setPhoneError('')
		}

		if (!emailvalue) {
			setEmailError('Chưa nhập hoặc nhập sai định dạng email')
			isValid = false
		} else {
			setEmailError('')
		}

		if (!password || password.length < 6) {
			setPasswordError('Không được để trống hoặc mật khẩu ít hơn 6 ký tự')
			isValid = false
		} else {
			setPasswordError('')
		}
		if (!nameValue) {
			setUserNameError('Họ tên không được để trống')
			isValid = false
		} else {
			setUserNameError('')
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

		if (!genderValue) {
			setGenderError('Giới tính không được để trống')
			isValid = false
		} else {
			setGenderError('')
		}

		if (!birthdayValue) {
			setBirthdayError('Ngày sinh không được để trống')
			isValid = false
		} else {
			setBirthdayError('')
		}

		if (!addressValue) {
			setAddressError('Địa chỉ không được để trống')
			isValid = false
		} else {
			setAddressError('')
		}
		return isValid
	}
	useEffect(() => {
		const userToken = Cookies.get('token_base365')
		if (userToken) {
			setToken(userToken)
		}
	}, [])

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		if (!validateForm()) {
			return
		}
		try {
			const formData = new FormData()
			formData.append('userName', nameValue)
			formData.append('birthday', birthdayValue || '')
			formData.append('emailContact', emailvalue)
			formData.append('phone', phoneValue)
			formData.append('address', addressValue)
			formData.append('password', password)
			formData.append('ugs_about_us', aboutValue)
			formData.append('ugs_city', cityValue)
			formData.append('ugs_county', districtValue)
			formData.append('avatarUser', avatarFile)
			formData.append('gender', genderValue)
			const response = await axios.post(
				'http://210.245.108.202:3023/api/giasu/account/updateInfoParent',
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (response.status === 200) {
				alert('Cập nhật thành công')
			} else {
				message.error('Failed to update profile')
			}
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	console.log('avtar', avatarFile)
	return (
		<>
			<title>Cập nhật thông tin phụ huynh</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Thông tin cá nhân &gt; Cập nhật thông tin</span>
				</p>
			</div>
			<div className="ad-cntt">
				<div className="cntt-tk-ad">
					<form
						action=""
						method="POST"
						id="vali-form"
						encType="multipart/form-data"
						onSubmit={handleSubmit}
					>
						<div className="avt-tk text-center">
							<label htmlFor="avatarInput">
								<img src={avatarFile ? avatarFile : '/gia-su/img/add.png'} alt="" id="ugs_avatar" />
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

						<div className="form-row">
							<div className="form-group col-md-6 pr-3">
								<label htmlFor="">
									Số điện thoại <span>*</span>
								</label>
								<Input
									type="text"
									name="ugs_phone"
									placeholder="Nhập số điện thoại"
									value={phoneValue}
									onChange={(e) => {
										setPhoneValue(e.target.value)
										setPhoneError('')
									}}
								></Input>
								<span className="err_info">{phoneError}</span>
							</div>
							<div className="form-group col-md-6 pl-3">
								<label htmlFor="">
									Email <span>*</span>
								</label>
								<Input
									type="text"
									name="ugs_email"
									placeholder="Nhập email"
									value={emailvalue}
									onChange={(e) => {
										setemailvalue(e.target.value)
										setEmailError('')
									}}
								/>
								<span className="err_info">{emailError}</span>
							</div>
						</div>
						<div className="form-row bd-bt">
							<div className="form-group col-md-6 pr-3">
								<label htmlFor="">
									Mật khẩu <span>*</span>
								</label>
								<Input
									type="password"
									name="ugs_password"
									placeholder="Nhập mật khẩu"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value)
										setPasswordError('')
									}}
								/>
								<span className="err_info">{passwordError}</span>
							</div>
						</div>
						<div className="form-row pt-3">
							<div className="form-group col-md-6 pr-3">
								<label htmlFor="">
									Họ và tên <span>*</span>
								</label>
								<Input
									type="text"
									id="ugs_name"
									name="ugs_name"
									placeholder="Nhập họ và tên"
									value={nameValue}
									onChange={(e) => {
										setNameValue(e.target.value)
										setUserNameError('')
									}}
								/>
								<span className="err_info">{userNameError}</span>
							</div>
							<div className="form-group col-md-6 pl-3">
								<label htmlFor="">
									Giới tính <span>*</span>
								</label>
								<Select
									showSearch
									optionFilterProp="label"
									placeholder="Chọn giới tính"
									style={{ width: '100%' }}
									value={genderValue.toString()}
									onChange={(value) => {
										setGenderValue(value)
										setGenderError('')
									}}
								>
									{genderOptions.map((option) => (
										<Option key={option.value} value={option.value} label={option.label}>
											{option.value === '1' && 'Nam'}
											{option.value === '2' && 'Nữ'}
											{option.value === '3' && 'Khác'}
										</Option>
									))}
								</Select>
								<span className="err_info">{genderError}</span>
								<span className="t-date-one" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6 pr-3">
								<label htmlFor="">
									Ngày sinh <span>*</span>
								</label>
								<Input
									type="date"
									value={birthdayValue}
									onChange={(e) => {
										setbirthdayValue(e.target.value)
										setBirthdayError('')
									}}
								/>
								<span className="err_info">{birthdayError}</span>
							</div>
							<div className=" col-md-6 pl-3">
								<label htmlFor="">
									Tỉnh thành/phố <span>*</span>
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
								<div className="err_custom" id="tinh_tp" />
								<span className="t-date-one" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6 pr-3">
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
								<div className="err_custom" id="quan_huyen" />
								<span className="t-date-one" />
							</div>
							<div className="form-group col-md-6 pl-3">
								<label htmlFor="">
									Địa chỉ cụ thể <span>*</span>
								</label>
								<Input
									type="text"
									name="ugs_address"
									placeholder="Nhập địa chỉ cụ thể"
									value={addressValue}
									onChange={(e) => {
										setAddressValue(e.target.value)
										setAddressError('')
									}}
								/>
								<span className="err_info">{addressError}</span>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="">Giới thiệu về bản thân </label>
							<textarea
								style={{ width: '100%', padding: '10px', border: '1px solid #ced4da' }}
								name="ugs_about_us"
								placeholder="Giới thiệu ngắn "
								defaultValue={''}
								value={aboutValue}
								onChange={(e) => setAboutValue(e.target.value)}
							/>
						</div>

						<div className="form__submit">
							<button type="submit" className="btn_sb text-center" value="update" name="cn-tt-new">
								Cập nhật
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

CapNhatTaiKhoanPH.Layout = PhuHuynhLayout
export default CapNhatTaiKhoanPH
