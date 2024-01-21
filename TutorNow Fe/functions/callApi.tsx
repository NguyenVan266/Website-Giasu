import axios from 'axios'
import Cookies from 'js-cookie'
const callApiPost = async (url: any, conditions: {}) => {
	try {
		type Headers = {}
		const token = Cookies.get('token_base365')
		let headers: Headers = { 'Content-Type': 'multipart/form-data' }
		if (!conditions) conditions = {}
		if (token && token !== '')
			headers = {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			}
		return await axios({
			method: 'post',
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
			data: conditions,
			headers,
		}).then(async (response) => {
			return response.data
		})
	} catch (error: any) {
		console.log(error)
		return error.response
	}
}
export const callApiLogin = async (data: {}) => {
	try {
		const reponse = await callApiPost(`account/login`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}

export const callApiHome = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/homePage`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callApiDeleteInvite = async (data: {}) => {
	try {
		const reponse = await callApiPost(`tutor/deleteInvite`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callApiAcceptInvite = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/confirmInvite`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callApiRefuseInvite = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/refuseOffer`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callApiDetailClass = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/detail`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callApiOfferTeach = async (data: {}) => {
	try {
		const reponse = await callApiPost(`tutor/offerTeach`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}

export const callApiConfirmInvite = async (data: {}) => {
	try {
		const reponse = await callApiPost(`tutor/confirmInvite`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}

export const callApiFilterTeach = async (data: {}) => {
	try {
		const response = await callApiPost(`parent/homePagefilterTeach`, data)
		return response.data
	} catch (error) {
		return null
	}
}
// sdjabkfas
export const callApiListClass1 = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/homePagefilterPost`, data)
		return reponse.data
	} catch (error) {
		return null
	}
}
export const callListDist = async (data: {}) => {
	try {
		const reponse = await callApiPost(`parent/listDistrict`, data)
		return reponse.data.list
	} catch (error) {
		return null
	}
}
export const callApiResgisterForParent = async (data: {}) => {
	try {
		const response = await callApiPost('account/register', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
//
export const callApiQLC_GiaSu = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/QLC_GiaSu', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}

export const callApiParentDeleteInvite = async (data: {}) => {
	try {
		const response = await callApiPost('parent/deleteInvite', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiDS_PH_MoiDay = async (data: []) => {
	try {
		const response = await callApiPost('tutor/DS_PH_MoiDay', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiQLCParent = async (data: {}) => {
	try {
		const response = await callApiPost('parent/QLCParent', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiDS_Lop_DaLuu = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/DS_Lop_DaLuu', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApideleteSaveClass = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/UnSaveClass', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiSaveTeacher = async (data: {}) => {
	try {
		const response = await callApiPost('parent/saveTeacher', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
//mời gia sư
export const callApiParentInvite = async (data: {}) => {
	try {
		const response = await callApiPost('parent/ParentInvite', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
//lưu lớp học
export const callApiSaveCourse = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/SaveCourse', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiDS_PH_DaLuu = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/DS_PH_DaLuu', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiDS_Lop_Da_Nhan_Day = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/DS_Lop_Da_Nhan_Day', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApideleteSaveParent = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/deleteSaveParent', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApilistAllSubject = async (data: {}) => {
	try {
		const response = await callApiPost('parent/listAllSubject', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiDetailGs = async (data: {}) => {
	try {
		const response = await callApiPost('account/detailTeach', data)
		return response.data
	} catch (error) {
		return null
	}
}
export const callApiStatusClass = async (id_lop: number, trangthai: string) => {
	try {
		const response = await callApiPost(`parent/updateStatus`, { id_lop, trangthai })
		return response.data
	} catch (error) {
		console.error('Error updating class status:', error)
		throw error
	}
}
export const updateInfoTeacher = async (data: {}) => {
	try {
		const response = await callApiPost('/account/updateInfoTeacher', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
//thông tin chi tiết phụ huynh
export const callApiDetailPh = async (data: []) => {
	try {
		const response = await callApiPost('account/detailParent', data)
		return response.data.data
	} catch (error: any) {
		console.log(error)
	}
}
//thông tin chi tiết gia sư
export const callApiDetailPGs = async (data: {}) => {
	try {
		const response = await callApiPost('account/detailTeach', data)
		return response.data.data
	} catch (error: any) {
		console.log(error)
	}
}
export const DS_PH_DeNghiDay = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/DS_PH_DeNghiDay', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}

export const callApiDsPhInvite = async (type: number, data: []) => {
	try {
		const response = await callApiPost('parent/listInviteTeach', { type, data })
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}

export const callApiListSubject = async () => {
	try {
		const response = await callApiPost('parent/listAllSubject', [])
		return response.data
	} catch (error: any) {
		console.log(error)
		return []
	}
}
export const callApiListClassPh = async (data: []) => {
	try {
		const response = await callApiPost('parent/listClassTeach', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiChiTietPH = async (data: {}) => {
	try {
		const response = await callApiPost('parent/detailParent', data)
		return response.data
	} catch (error: any) {
		console.log('abc')
	}
}
export const callApiSaveParent = async (data: {}) => {
	try {
		const response = await callApiPost('tutor/SaveParent', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}

export const callApiGetCity = async (data: []) => {
	try {
		const response = await callApiPost('parent/listCity', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiGetDistrict = async (id_city: number) => {
	try {
		const response = await callApiPost('parent/listDistrict', { id_city })
		return response.data.list
	} catch (error: any) {
		console.log(error)
	}
}

export const callApiListClass = async (data: {}) => {
	try {
		const response = await callApiPost('parent/listClass', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
// Lấy điểm phụ huynh
export const callApiPointParent = async (data: {}) => {
	try {
		const response = await callApiPost('parent/PointParent', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}

//cập nhật điểm phụ huynh
export const callApiUpdatePointParent = async (data: {}) => {
	try {
		const response = await callApiPost('parent/UpdatePointParent', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
export const callApiListPoint = async (data: {}) => {
	try {
		const response = await callApiPost('parent/listPoint', data)
		return response.data
	} catch (error: any) {
		console.log(error)
	}
}
// export const callApiLoginForParent = async (data: {}) => {
//     try {
//         const response = await callApiPost('account/')
//     }
// }

// export const callApiLoginForParent = async (data: {}) => {
//     try {
//         const response = await callApiPost('account/')
//     }
// }
