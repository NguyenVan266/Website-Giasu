import React, { useState, useEffect } from 'react'
import { PhuHuynhLayout } from '@/components/layout'
import { Select, Input, message } from 'antd'
const { Option } = Select
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useParams } from 'react-router-dom'
import {
	callApiListSubject,
	callApiListClassPh,
	callApiGetCity,
	callApiGetDistrict,
	callApiDetailClass,
} from '@/functions/callApi'
const SuaTin = () => {
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

	// in value trước khi sửa tin

	const { id_lop } = router.query
	const [pft_priceValue, setPft_priceValue] = useState('')
	const [pft_phoneValue, setPft_phoneValue] = useState('')
	const [pft_timeValue, setPft_timeValue] = useState('')
	const [pft_genderValue, setPft_genderValue] = useState('')
	const [pft_summaryValue, setPft_summaryValue] = useState('')
	const [pft_addressValue, setPft_addressValue] = useState('')
	const [districtValue, setDistrictValue] = useState('')
	const [pft_price_typeValue, setPft_price_typeValue] = useState<number>()
	const [pft_endValue, setPft_endValue] = useState('')
	const [pft_monthValue, setPft_monthValue] = useState('')
	const [tutor_styleValue, setTutor_styleValue] = useState('')
	const [pft_school_dayValue, setPft_school_dayValue] = useState('')
	const [as_idValue, setAs_idValue] = useState('')
	const [pft_formValue, setPft_formValue] = useState('')
	const [pft_nb_studentValue, setPft_nb_studentValue] = useState<string>('')
	const [as_detailValue, setAs_detailValue] = useState('')
	const [pft_detailValue, setPft_detailValue] = useState('')
	const [pft_nb_lessonValue, setPft_nb_lessonValue] = useState('')
	const [cityValue, setCityValue] = useState('')
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
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDetailClass({ id_lop })
				const priceValues = response.data.phi_nhan_lop.split('-')
				setPft_summaryValue(response.data.title)
				setPft_addressValue(response.data.pft_address)
				setPft_detailValue(response.data.pft_detail)
				setPft_endValue(priceValues[1])
				setPft_priceValue(priceValues[0])
				setPft_formValue(response.data.pft_form)
				setPft_genderValue(response.data.pft_gender)
				setPft_monthValue(response.data.pft_month)
				setPft_nb_lessonValue(response.data.pft_nb_lesson)
				setPft_nb_studentValue(response.data.pft_nb_student)
				setPft_phoneValue(response.data.pft_phone)
				setPft_price_typeValue(response.data.pft_price_type)
				setPft_school_dayValue(response.data.pft_school_day)
				setAs_idValue(response.data.id_mon_hoc)
				setPft_timeValue(response.data.pft_time)
				setAs_detailValue(response.data.chi_tiet_mon_hoc)
				setDistrictValue(response.data.id_district)
				setCityValue(response.data.id_city)
				setPft_genderValue(response.data.pft_gender)
				setTutor_styleValue(response.data.tutor_style)
				setSt2Value(response.schedule.st2)
				setSt3Value(response.schedule.st3)
				setSt4Value(response.schedule.st4)
				setSt5Value(response.schedule.st5)
				setSt6Value(response.schedule.st6)
				setSt7Value(response.schedule.st7)
				setScnValue(response.schedule.scn)
				setCt2Value(response.schedule.ct2)
				setCt3Value(response.schedule.ct3)
				setCt4Value(response.schedule.ct4)
				setCt5Value(response.schedule.ct5)
				setCt6Value(response.schedule.ct6)
				setCt7Value(response.schedule.ct7)
				setCcnValue(response.schedule.ccn)
				setTt2Value(response.schedule.tt2)
				setTt3Value(response.schedule.tt3)
				setTt4Value(response.schedule.tt4)
				setTt5Value(response.schedule.tt5)
				setTt6Value(response.schedule.tt6)
				setTt7Value(response.schedule.tt7)
				setTcnValue(response.schedule.tcn)
				if (response.data.pft_price_type === 1) {
					handleCoDinhClick()
				} else if (response.data.pft_price_type === 2) {
					handleUocLuongClick()
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [id_lop])

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
				setPft_price_typeValue(2)
			} else {
				inputUocLuong.style.display = 'none'
				inputStart.style.display = 'none'
				inputgiaca.style.display = 'block'
				buttonUocLuong.classList.remove('btn_actv')
				buttonCoDinh.classList.add('btn_actv')
				setPft_price_typeValue(1)
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
				console.log('selectedCityId', selectedCityId)

				const response = await callApiGetDistrict(Number(selectedCityId) || Number(cityValue))
				console.log('District data response:', response)
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

	//api sửa tin
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
		if (!pft_phoneValue) {
			setPhoneError('Chưa nhập hoặc nhập sai định dạng số điện thoại')
			isValid = false
		} else {
			setPhoneError('')
		}

		if (!pft_summaryValue) {
			setTitleError('Không được bỏ trống tên lớp')
			isValid = false
		} else {
			setTitleError('')
		}

		if (!pft_addressValue) {
			setAddressError('Không được để trống địa chỉ')
			isValid = false
		} else {
			setAddressError('')
		}
		if (!as_idValue) {
			setSubjectError('Không được bỏ trống môn học')
			isValid = false
		} else {
			setSubjectError('')
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

		if (!pft_genderValue) {
			setGenderError('Kiểu gia sư không được để trống')
			isValid = false
		} else {
			setGenderError('')
		}

		if (!tutor_styleValue) {
			setTypeGsError('Yêu cầu gia sư không được để trống')
			isValid = false
		} else {
			setTypeGsError('')
		}

		if (!pft_school_dayValue) {
			setHourError('Số giờ học không được để trống')
			isValid = false
		} else {
			setHourError('')
		}

		if (!pft_nb_lessonValue) {
			setSlLessonError('Không được bỏ trống số buổi học')
			isValid = false
		} else {
			setSlLessonError('')
		}
		if (!pft_nb_studentValue) {
			setSlStudentError('Số học sinh không được để trống')
			isValid = false
		} else {
			setSlStudentError('')
		}

		if (!pft_formValue) {
			setTypeLearnError('Hình thức học không được để trống')
			isValid = false
		} else {
			setTypeLearnError('')
		}

		if (!as_detailValue) {
			setClassNameError('Môn học chi tiết không được để trống')
			isValid = false
		} else {
			setClassNameError('')
		}

		if (!pft_detailValue) {
			setContentError('Chi tiết môn học không được để trống')
			isValid = false
		} else {
			setContentError('')
		}

		if (!pft_timeValue) {
			setTimeError('Thời gian bắt đầu học không được để trống')
			isValid = false
		} else {
			setTimeError('')
		}
		if (!pft_priceValue) {
			setPriceError('Thời gian bắt đầu học không được để trống')
			isValid = false
		} else {
			setPriceError('')
		}
		if (!pft_monthValue) {
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
				'https://api.timviec365.vn/api/giasu/parent/edit',
				{
					pft_id: id_lop,
					pft_address: pft_addressValue,
					pft_detail: pft_detailValue,
					pft_gender: pft_genderValue,
					pft_end: pft_endValue,
					pft_form: pft_formValue,
					pft_month: pft_monthValue,
					pft_nb_lesson: pft_nb_lessonValue,
					pft_nb_student: pft_nb_studentValue,
					pft_phone: pft_phoneValue,
					pft_price: pft_priceValue,
					pft_price_type: pft_price_typeValue,
					pft_school_day: pft_school_dayValue,
					pft_summary: pft_summaryValue,
					pft_time: pft_timeValue,
					as_detail: as_detailValue,
					as_id: as_idValue,
					tutor_style: tutor_styleValue,
					city_detail: districtValue,
					city_id: selectedCityId || cityValue,
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

			if (response.status === 200) {
				alert('Cập nhật tin thành công thành công')
				router.push('/tat-ca-tin-da-dang')
			} else {
				message.error('Failed to update profile')
			}
		} catch (error) {
			console.error('Error updating profile:', error)
			message.error('Failed to update profile. Please try again.')
		}
	}
	return (
		<>
			<title>Quản lý sửa tin đã đăng tìm gia sư</title>
			<div className="ad-ari">
				<p>
					<a href="">Trang chủ &gt;</a>
					<span>Sửa tin đã đăng tìm gia sư</span>
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
							value={pft_summaryValue}
							onChange={(e) => {
								setPft_summaryValue(e.target.value)
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
								value={as_idValue}
								onChange={(value) => {
									setAs_idValue(value)
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
								value={as_detailValue}
								onChange={(value) => {
									setAs_detailValue(value)
									setClassNameError('')
								}}
							>
								{listClass?.map((listClass: any) => (
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
								value={pft_formValue}
								onChange={(value) => {
									setPft_formValue(value)
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
								value={pft_school_dayValue.toString()}
								onChange={(value) => {
									setPft_school_dayValue(value)
									setHourError('')
								}}
								placeholder="Chọn số giờ học một buổi"
								style={{ width: '100%' }}
							>
								{timeLearn.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.value === '1' && '1h'}
										{option.value === '2' && '1.5h'}
										{option.value === '3' && '2h'}
										{option.value === '4' && '2.5h'}
										{option.value === '5' && '3h'}
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
								value={pft_nb_studentValue}
								onChange={(e) => {
									setPft_nb_studentValue(e.target.value)
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
								value={pft_nb_lessonValue.toString()}
								onChange={(value) => {
									setPft_nb_lessonValue(value)
									setSlLessonError('')
								}}
								placeholder="Chọn số buổi học trong tuần"
								style={{ width: '100%' }}
							>
								{listLesson.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.value === '1' && '1 buổi'}
										{option.value === '2' && '2 buổi'}
										{option.value === '3' && '3 buổi'}
										{option.value === '4' && '4 buổi'}
										{option.value === '5' && '5 buổi'}
										{option.value === '6' && '6 buổi'}
										{option.value === '7' && '7 buổi'}
										{option.value === '8' && '8 buổi'}
										{option.value === '9' && '9 buổi'}
										{option.value === '10' && '10 buổi'}
										{option.value === '11' && '11 buổi'}
										{option.value === '12' && '12 buổi'}
										{option.value === '13' && '13 buổi'}
										{option.value === '14' && '14 buổi'}
										{option.value === '15' && '15 buổi'}
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
								value={pft_genderValue.toString()}
								onChange={(value) => {
									setPft_genderValue(value)
									setGenderError('')
								}}
								placeholder="Chọn giới tính"
								style={{ width: '100%' }}
							>
								{genderOptions.map((option) => (
									<Option key={option.value} value={option.value} label={option.label}>
										{option.value === '1' && 'Nam'}
										{option.value === '2' && 'Nữ'}
										{option.value === '3' && 'Không yêu cầu'}
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
									value={pft_timeValue}
									onChange={(e) => {
										setPft_timeValue(e.target.value)
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
								value={pft_phoneValue}
								onChange={(e) => {
									setPft_phoneValue(e.target.value)
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
						<div className="form-group col-md-6 pl-2">
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
							value={pft_addressValue}
							onChange={(e) => {
								setPft_addressValue(e.target.value)
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
							value={tutor_styleValue.toString()}
							onChange={(value) => {
								setTutor_styleValue(value)
								setTypeGsError('')
							}}
							style={{ width: '100%' }}
						>
							{repuestGs.map((option) => (
								<Option key={option.value} value={option.value} label={option.label}>
									{option.value === '1' && 'Sinh viên'}
									{option.value === '2' && 'Giáo viên mầm non'}
									{option.value === '3' && 'Giáo viên cấp 1'}
									{option.value === '4' && 'Giáo viên cấp 2'}
									{option.value === '5' && 'Giáo viên cấp 3'}
									{option.value === '6' && 'Giảng viên đại học'}
									{option.value === '7' && 'Chuyên gia'}
									{option.value === '8' && 'Người nước ngoài'}
									{option.value === '9' && 'Học sinh'}
									{option.value === '10' && 'Không yêu cầu'}
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
								value={pft_priceValue}
								onChange={(e) => {
									setPft_priceValue(e.target.value)
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
								value={pft_priceValue}
								onChange={(e) => {
									setPft_priceValue(e.target.value)
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
								value={pft_endValue}
								onChange={(e) => {
									setPft_endValue(e.target.value)
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
								value={pft_monthValue}
								onChange={(value) => {
									setPft_monthValue(value)
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
							value={pft_detailValue}
							onChange={(e) => {
								setPft_detailValue(e.target.value)
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
											value={st2Value}
											onClick={() => handleCheckboxClick(setSt2Value)}
										/>
										<div className={`option_inner instagram ${st2Value === 1 && 'active_cal'}`}>
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
											value={st3Value}
											onClick={() => handleCheckboxClick(setSt3Value)}
										/>
										<div className={`option_inner instagram ${st3Value === 1 && 'active_cal'}`}>
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
											value={st4Value}
											onClick={() => handleCheckboxClick(setSt4Value)}
										/>
										<div className={`option_inner instagram ${st4Value === 1 && 'active_cal'}`}>
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
											value={st5Value}
											onClick={() => handleCheckboxClick(setSt5Value)}
										/>
										<div className={`option_inner instagram ${st5Value === 1 && 'active_cal'}`}>
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
											value={st6Value}
											onClick={() => handleCheckboxClick(setSt6Value)}
										/>
										<div className={`option_inner instagram ${st6Value === 1 && 'active_cal'}`}>
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
											value={st7Value}
											onClick={() => handleCheckboxClick(setSt7Value)}
										/>
										<div className={`option_inner instagram ${st7Value === 1 && 'active_cal'}`}>
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
											value={scnValue}
											onClick={() => handleCheckboxClick(setScnValue)}
										/>
										<div className={`option_inner instagram ${scnValue === 1 && 'active_cal'}`}>
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
											value={ct2Value}
											onClick={() => handleCheckboxClick(setCt2Value)}
										/>
										<div className={`option_inner instagram ${ct2Value === 1 && 'active_cal'}`}>
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
											value={ct3Value}
											onClick={() => handleCheckboxClick(setCt3Value)}
										/>
										<div className={`option_inner instagram ${ct3Value === 1 && 'active_cal'}`}>
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
											value={ct4Value}
											onClick={() => handleCheckboxClick(setCt4Value)}
										/>
										<div className={`option_inner instagram ${ct4Value === 1 && 'active_cal'}`}>
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
											value={ct5Value}
											onClick={() => handleCheckboxClick(setCt5Value)}
										/>
										<div className={`option_inner instagram ${ct5Value === 1 && 'active_cal'}`}>
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
											value={ct6Value}
											onClick={() => handleCheckboxClick(setCt6Value)}
										/>
										<div className={`option_inner instagram ${ct6Value === 1 && 'active_cal'}`}>
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
											value={ct7Value}
											onClick={() => handleCheckboxClick(setCt7Value)}
										/>
										<div className={`option_inner instagram ${ct7Value === 1 && 'active_cal'}`}>
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
											value={ccnValue}
											onClick={() => handleCheckboxClick(setCcnValue)}
										/>
										<div className={`option_inner instagram ${ccnValue === 1 && 'active_cal'}`}>
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
											value={tt2Value}
											onClick={() => handleCheckboxClick(setTt2Value)}
										/>
										<div className={`option_inner instagram ${tt2Value === 1 && 'active_cal'}`}>
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
											value={tt3Value}
											onClick={() => handleCheckboxClick(setTt3Value)}
										/>
										<div className={`option_inner instagram ${tt3Value === 1 && 'active_cal'}`}>
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
											value={tt4Value}
											onClick={() => handleCheckboxClick(setTt4Value)}
										/>
										<div className={`option_inner instagram ${tt4Value === 1 && 'active_cal'}`}>
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
											value={tt5Value}
											onClick={() => handleCheckboxClick(setTt5Value)}
										/>
										<div className={`option_inner instagram ${tt5Value === 1 && 'active_cal'}`}>
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
											value={tt6Value}
											onClick={() => handleCheckboxClick(setTt6Value)}
										/>
										<div className={`option_inner instagram ${tt6Value === 1 && 'active_cal'}`}>
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
											value={tt7Value}
											onClick={() => handleCheckboxClick(setTt7Value)}
										/>
										<div className={`option_inner instagram ${tt7Value === 1 && 'active_cal'}`}>
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
											value={tcnValue}
											onClick={() => handleCheckboxClick(setTcnValue)}
										/>
										<div className={`option_inner instagram ${tcnValue === 1 && 'active_cal'}`}>
											<div className="name">Tối</div>
										</div>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-primary btn-pft" name="btn-pft">
							Cập nhật
						</button>
						<div className="error" id="err_tag" />
					</div>
				</form>
			</div>
		</>
	)
}

SuaTin.Layout = PhuHuynhLayout
export default SuaTin
