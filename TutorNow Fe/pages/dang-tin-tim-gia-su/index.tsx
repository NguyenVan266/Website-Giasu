import React, { useState, useEffect } from 'react'
import { PhuHuynhLayout } from '@/components/layout'
import { Select, Input, message } from 'antd'
const { Option } = Select
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
import {
	callApiListSubject,
	callApiListClassPh,
	callApiGetCity,
	callApiGetDistrict,
} from '@/functions/callApi'
const DangTinTimGiaSu = () => {
	const router = useRouter()
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

	// check value lịch học
	const handleCheckboxClick = (stateSetter: React.Dispatch<React.SetStateAction<number>>) => {
		stateSetter((prevValue) => (prevValue === 0 ? 1 : 0))
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
				setPft_price_type(2)
			} else {
				inputUocLuong.style.display = 'none'
				inputStart.style.display = 'none'
				inputgiaca.style.display = 'block'
				buttonUocLuong.classList.remove('btn_actv')
				buttonCoDinh.classList.add('btn_actv')
				setPft_price_type(1)
			}
		}
	}, [isUocLuongActive])

	const handleUocLuongClick = () => {
		setIsUocLuongActive(true)
	}

	const handleCoDinhClick = () => {
		setIsUocLuongActive(false)
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

	const [listCity, setListCity] = useState([])
	const [listDistrict, setListDistrict] = useState([])
	const [selectedCityId, setSelectedCityId] = useState()

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

	//api đăng tin
	const [pft_price, setPft_price] = useState('')
	const [pft_phone, setPft_phone] = useState('')
	const [pft_time, setPft_time] = useState('')
	const [pft_gender, setPft_gender] = useState('')
	const [pft_summary, setPft_summary] = useState('')
	const [pft_address, setPft_address] = useState('')
	const [city_detail, setCity_detail] = useState('')
	const [pft_price_type, setPft_price_type] = useState<number>()
	const [pft_end, setPft_end] = useState('')
	const [pft_month, setPft_month] = useState('')
	const [tutor_style, setTutor_style] = useState('')
	const [pft_school_day, setPft_school_day] = useState('')
	const [as_id, setAs_id] = useState('')
	const [pft_form, setPft_form] = useState('')
	const [pft_nb_student, setPft_nb_student] = useState('')
	const [as_detail, setAs_detail] = useState('')
	const [pft_detail, setPft_detail] = useState('')
	const [pft_nb_lesson, setPft_nb_lesson] = useState('')
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
	const [token, setToken] = useState('')
	const [phoneError, setPhoneError] = useState('')
	const [titleError, setTitleError] = useState('')
	const [subjectError, setSubjectError] = useState('')
	const [classNameError, setClassNameError] = useState('')
	const [cityError, setCityError] = useState('')
	const [districtError, setDistrictError] = useState('')
	const [genderError, setGenderError] = useState('')
	const [timeError, setTimeError] = useState('')
	const [addressError, setAddressError] = useState('')
	const [hourError, setHourError] = useState('')
	const [slStudentError, setSlStudentError] = useState('')
	const [slLessonError, setSlLessonError] = useState('')
	const [typeGsError, setTypeGsError] = useState('')
	const [priceError, setPriceError] = useState('')
	const [contentError, setContentError] = useState('')
	const [typeLearnError, setTypeLearnError] = useState('')
	const [wageError, setwageError] = useState('')
	const validateForm = () => {
		let isValid = true

		// Validate phone
		if (!pft_phone || !/^\d{10}$/.test(pft_phone)) {
			setPhoneError('Chưa nhập hoặc nhập sai định dạng số điện thoại')
			isValid = false
		} else {
			setPhoneError('')
		}

		if (!pft_summary) {
			setTitleError('Không được bỏ trống tên lớp')
			isValid = false
		} else {
			setTitleError('')
		}

		if (!pft_address) {
			setAddressError('Không được để trống địa chỉ')
			isValid = false
		} else {
			setAddressError('')
		}
		if (!as_id) {
			setSubjectError('Không được bỏ trống môn học')
			isValid = false
		} else {
			setSubjectError('')
		}
		if (!selectedCityId) {
			setCityError('Tỉnh thành không được để trống')
			isValid = false
		} else {
			setCityError('')
		}

		if (!city_detail) {
			setDistrictError('Quận huyện không được để trống')
			isValid = false
		} else {
			setDistrictError('')
		}

		if (!pft_gender) {
			setGenderError('Kiểu gia sư không được để trống')
			isValid = false
		} else {
			setGenderError('')
		}

		if (!tutor_style) {
			setTypeGsError('Yêu cầu gia sư không được để trống')
			isValid = false
		} else {
			setTypeGsError('')
		}

		if (!pft_school_day) {
			setHourError('Số giờ học không được để trống')
			isValid = false
		} else {
			setHourError('')
		}

		if (!pft_nb_lesson) {
			setSlLessonError('Không được bỏ trống số buổi học')
			isValid = false
		} else {
			setSlLessonError('')
		}
		if (!pft_nb_student) {
			setSlStudentError('Số học sinh không được để trống')
			isValid = false
		} else {
			setSlStudentError('')
		}

		if (!pft_form) {
			setTypeLearnError('Hình thức học không được để trống')
			isValid = false
		} else {
			setTypeLearnError('')
		}

		if (!as_detail) {
			setClassNameError('Môn học chi tiết không được để trống')
			isValid = false
		} else {
			setClassNameError('')
		}

		if (!pft_detail) {
			setContentError('Chi tiết môn học không được để trống')
			isValid = false
		} else {
			setContentError('')
		}

		if (!pft_time) {
			setTimeError('Thời gian bắt đầu học không được để trống')
			isValid = false
		} else {
			setTimeError('')
		}
		if (!pft_price) {
			setPriceError('Thời gian bắt đầu học không được để trống')
			isValid = false
		} else {
			setPriceError('')
		}
		if (!pft_month) {
			setwageError('Không được để trống thời gian')
			isValid = false
		} else {
			setwageError('')
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
			const response = await axios.post(
				'https://api.timviec365.vn/api/giasu/parent/postFindTeacher',
				{
					pft_address: pft_address,
					pft_detail: pft_detail,
					pft_gender: pft_gender,
					pft_end: pft_end,
					pft_form: pft_form,
					pft_month: pft_month,
					pft_nb_lesson: pft_nb_lesson,
					pft_nb_student: pft_nb_student,
					pft_phone: pft_phone,
					pft_price: pft_price,
					pft_price_type: pft_price_type,
					pft_school_day: pft_school_day,
					pft_summary: pft_summary,
					pft_time: pft_time,
					as_detail: as_detail,
					as_id: as_id,
					tutor_style: tutor_style,
					city_detail: city_detail,
					city_id: selectedCityId,
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
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (response.status === 200) {
				alert('Đăng tin thành công thành công')
			} else {
				message.error('Failed to update profile')
			}
			setAs_detail('')
			setPft_address('')
			setPft_detail('')
			setPft_end('')
			setPft_form('')
			setPft_gender('')
			setPft_month('')
			setPft_nb_lesson('')
			setPft_nb_student('')
			setPft_phone('')
			setPft_price('')
			setPft_school_day('')
			setPft_summary('')
			setPft_time('')
			setAs_id('')
			router.push('/tat-ca-tin-da-dang')
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	return (
		<>
			<title>Quản lý đăng tin tìm gia sư</title>
			<div className="ad-ari">
				<p>
					<a href="">Trang chủ &gt;</a>
					<span>Đăng tin tìm gia sư</span>
				</p>
			</div>
			<div className="ad-dtt-gs post_class">
				<form
					action=""
					method="POST"
					id="vali-form"
					encType="multipart/form-data"
					onSubmit={handleSubmit}
				>
					<div className="form-group">
						<label htmlFor="">
							Tóm tắt yêu cầu tìm gia sư (1 câu, tối đa 100 ký tự) <span>*</span>
						</label>
						<Input
							type="text"
							value={pft_summary}
							onChange={(e) => {
								setPft_summary(e.target.value)
								setTitleError('')
							}}
							id="pft_summary"
							name="pft_summary"
							placeholder="VD: Tìm gia sư tiếng Anh lớp 7, tại Hoàn Kiếm, Hà Nội"
						></Input>
						<div id="error10" className="red d-span-content" />
						<span className="err_info">{titleError}</span>
					</div>
					<div className="form-row">
						<div className="form-group col-md-12 infor-group pr-2 display_mh">
							<label htmlFor="">
								Lựa chọn môn học <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								placeholder="Chọn môn học"
								value={as_id}
								onChange={(value) => {
									setAs_id(value)
									setSubjectError('')
								}}
								style={{ width: '100%' }}
							>
								{list?.map((subject: any) => (
									<Option key={subject?._id} value={subject?.as_id} label={subject?.as_name}>
										{subject?.as_name}
									</Option>
								))}
							</Select>
							<div className="err_custom" id="mon_hoc" />
							<span className="err_info">{subjectError}</span>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Lựa chọn lớp học <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								placeholder="Chọn lớp học"
								style={{ width: '100%' }}
								value={as_detail}
								onChange={(value) => {
									setAs_detail(value)
									setClassNameError('')
								}}
							>
								{listClass.map((listClass: any) => (
									<Option key={listClass?._id} value={listClass?.ct_id} label={listClass?.ct_name}>
										{listClass?.ct_name}
									</Option>
								))}
							</Select>
							<div className="err_custom" id="lop_hoc" />
							<span className="err_info">{classNameError}</span>
						</div>
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Hình thức học <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								value={pft_form}
								onChange={(value) => {
									setPft_form(value)
									setTypeLearnError('')
								}}
								placeholder="Chọn hình thức học"
								style={{ width: '100%' }}
							>
								{formLearn.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.label}
									</Option>
								))}
							</Select>
							<div className="err_custom" id="ht_hoc" />
							<span className="err_info">{typeLearnError}</span>
							<span className="t-date" />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6 infor-group pr-2">
							<label htmlFor="">
								Số giờ học 1 buổi <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								value={pft_school_day}
								onChange={(value) => {
									setPft_school_day(value)
									setHourError('')
								}}
								placeholder="Chọn số giờ học một buổi"
								style={{ width: '100%' }}
							>
								{timeLearn.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.label}
									</Option>
								))}
							</Select>
							<span className="t-date" />
							<span className="err_info">{hourError}</span>
						</div>
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Số học viên <span>*</span>
							</label>
							<Input
								type="text"
								name="pft_nb_student"
								id="pft_nb_student"
								value={pft_nb_student}
								onChange={(e) => {
									setPft_nb_student(e.target.value)
									setSlStudentError('')
								}}
								placeholder="Nhập số học viên"
							/>
							<span className="err_info">{slStudentError}</span>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6 infor-group pr-2">
							<label htmlFor="">
								Số buổi học trong tuần <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								value={pft_nb_lesson}
								onChange={(value) => {
									setPft_nb_lesson(value)
									setSlLessonError('')
								}}
								placeholder="Chọn số buổi học trong tuần"
								style={{ width: '100%' }}
							>
								{listLesson.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.label}
									</Option>
								))}
							</Select>
							<div className="err_custom" id="sb_hoc" />
							<span className="err_info">{slLessonError}</span>
						</div>
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Giới tính gia sư<span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="label"
								value={pft_gender}
								onChange={(value) => {
									setPft_gender(value)
									setGenderError('')
								}}
								placeholder="Chọn giới tính"
								style={{ width: '100%' }}
							>
								{genderOptions.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.label}
									</Option>
								))}
							</Select>
							<div className="err_custom" id="gioi_tinh" />
							<span className="err_info">{genderError}</span>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6 infor-group pr-2">
							<div>
								<label htmlFor="">
									Ngày dự kiến học <span>*</span>
								</label>
							</div>
							<div>
								<Input
									type="date"
									value={pft_time}
									onChange={(e) => {
										setPft_time(e.target.value)
										setTimeError('')
									}}
								/>
								<span className="err_info">{timeError}</span>
							</div>
						</div>
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Số điện thoại liên hệ<span>*</span>
							</label>
							<Input
								type="number"
								name="pft_phone"
								id="pft_phone"
								value={pft_phone}
								onChange={(e) => {
									setPft_phone(e.target.value)
									setPhoneError('')
								}}
								placeholder="Nhập số điện thoại liên hệ"
							/>
							<span className="err_info">{phoneError}</span>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6 infor-group pr-2">
							<label htmlFor="">
								Địa điểm diễn ra lớp học <span>*</span>
							</label>
							<Select
								showSearch
								optionFilterProp="children"
								placeholder="Chọn tỉnh thành phố"
								style={{ width: '100%' }}
								value={selectedCityId}
								onChange={handleCityChange}
							>
								{listCity.map((city: any) => (
									<Option key={city?._id} value={city?._id} label={city?.name}>
										{city?.name}
									</Option>
								))}
							</Select>
							<span className="err_info">{cityError}</span>
							<div className="err_custom" id="dd_hoc" />
						</div>
						<div className="form-group col-md-6 pl-2">
							<label htmlFor="">
								Quận/huyện <span>*</span>
							</label>
							<Select
								showSearch
								value={city_detail}
								onChange={(value) => {
									setCity_detail(value)
									setDistrictError('')
								}}
								optionFilterProp="children"
								placeholder="Chọn quận huyện"
								style={{ width: '100%' }}
							>
								{listDistrict?.map((district: any) => (
									<Option key={district._id} value={district._id}>
										{district.name}
									</Option>
								))}
							</Select>
							<span className="err_info">{districtError}</span>
							<div className="err_custom" id="qh_hoc" />
							<span className="t-date" />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="">
							Địa điểm cụ thể <span>*</span>
						</label>
						<Input
							type="text"
							className="pft_address"
							name="pft_address"
							id="pft_address"
							value={pft_address}
							onChange={(e) => {
								setPft_address(e.target.value)
								setAddressError('')
							}}
							placeholder="Nhập địa chỉ cụ thể"
						/>
						<span className="err_info">{addressError}</span>
					</div>
					<div className="form-group">
						<label htmlFor="">
							Yêu cầu gia sư <span>*</span>
						</label>
						<Select
							showSearch
							optionFilterProp="label"
							placeholder="Lựa chọn gia sư"
							value={tutor_style}
							onChange={(value) => {
								setTutor_style(value)
								setTypeGsError('')
							}}
							style={{ width: '100%' }}
						>
							{repuestGs.map((option) => (
								<Option key={option.value} value={option.value} label={option.label}>
									{option.label}
								</Option>
							))}
						</Select>
						<span className="err_info">{typeGsError}</span>
					</div>
					<div className="form-row ml-thv">
						<label htmlFor="">
							Mức lương <span>*</span>{' '}
						</label>
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
							<Input
								type="text"
								className="nput_price format_price"
								name="pft_price"
								value={pft_price}
								onChange={(e) => {
									setPft_price(e.target.value)
									setPriceError('')
								}}
								id="pft_price"
								placeholder="Nhập mức lương"
								style={{ width: '100%' }}
							/>
							<Input
								type="text"
								className=" input_price format_price"
								name="pft_start"
								value={pft_price}
								onChange={(e) => {
									setPft_price(e.target.value)
									setPriceError('')
								}}
								id="pft_start"
								placeholder="Từ"
								style={{ display: 'none' }}
							/>
							<span className="err_info">{priceError}</span>
							<Input
								type="text"
								className=" input_price format_price"
								name="pft_end"
								id="pft_end"
								placeholder="Đến"
								value={pft_end}
								onChange={(e) => {
									setPft_end(e.target.value)
									setPriceError('')
								}}
								style={{ display: 'none' }}
							/>
						</div>

						<span className="dx" />
						<div className="form-group col-md-4 pl-2 ">
							<Select
								showSearch
								optionFilterProp="label"
								placeholder="Buổi"
								value={pft_month}
								onChange={(value) => {
									setPft_month(value)
									setwageError('')
								}}
								style={{ width: '100%' }}
							>
								{wage.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.label}
									</Option>
								))}
							</Select>
							<span className="err_info">{wageError}</span>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="">
							Mô tả chi tiết nội dung buổi học <span>*</span>
						</label>
						<textarea
							style={{ width: '100%', padding: '10px', border: '1px solid #ced4da' }}
							name="pft_detail"
							id="pft_detail"
							value={pft_detail}
							onChange={(e) => {
								setPft_detail(e.target.value)
								setContentError('')
							}}
							placeholder="Mô tả nội dung muốn học tại đây"
							rows={5}
							defaultValue={''}
						/>
						<span className="err_info">{contentError}</span>
					</div>
					<div className="form-row pb-3 pt-3">
						<label htmlFor="">
							Lịch học dự kiến <span>*</span>
						</label>
						<div className="hidden_lichday">
							<Input type="text" className="lichday hidden" name="lichday" defaultValue="" />
						</div>
						<div className="content__lichday">
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
							<div className="wrapper-tt">
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
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary btn-pft" name="btn-pft">
							Đăng yêu cầu
						</button>
						<div className="error" id="err_tag" />
					</div>
				</form>
			</div>
		</>
	)
}

DangTinTimGiaSu.Layout = PhuHuynhLayout
export default DangTinTimGiaSu
