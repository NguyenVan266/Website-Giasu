import * as React from 'react'

export default function Search() {
	const [showModalCity, setShowModalCity] = React.useState(false)
	const [showModalKey, setShowModalKey] = React.useState(false)
	const toggleModal = (e: any) => {
		if (e == 'citySearch') {
			setShowModalCity(true)
			setShowModalKey(false)
		}
		if (e == 'myInput') {
			setShowModalKey(true)
			setShowModalCity(false)
		}
	}
	const closeModal = () => {
		setShowModalCity(false)
		setShowModalKey(false)
	}
	return (
		<>
			<div id="search-form">
				<form>
					<input
						type="search"
						className="sr-tk"
						id="myInput"
						name="keyword"
						autoComplete="off"
						placeholder="Nhập từ khóa tìm kiếm ...."
						onClick={() => toggleModal('myInput')}
					/>
					<input
						type="search"
						className="input_select"
						id="citySearch"
						name="place"
						autoComplete="off"
						placeholder="Chọn tỉnh thành"
						onClick={() => toggleModal('citySearch')}
					/>
					<input type="submit" className="submit" defaultValue="Tìm kiếm" id="search_index" />
				</form>
				{showModalKey && (
					<span
						id="title_submit"
						className="position-relative b_title_submit"
						style={{ display: 'inline-block' }}
					>
						<div className="dcph col-md-6" id="key_lq1">
							<p className="ph-sty b-ph-sty">Danh sách gia sư</p>
						</div>
						<div className="col-md-6 dcgs" id="key_lq2">
							<p className="gs-sty b-gs-sty">Danh sách lớp học</p>
						</div>
						<span className="position-absolute close_search_result" onClick={closeModal}>×</span>
					</span>
				)}
				{showModalCity && (
					<span
						id="city_submit"
						className="position-relative b_title_submit b-search-none"
						style={{ display: 'inline-block' }}
					>
						<div className="col-md-12" id="only_city">
							<div className="dcph col-md-6" id="key_city_lq1">
								<p className="ph-sty b-ph-sty">Danh sách gia sư</p>
							</div>
							<div className="col-md-6 dcgs" id="key_city_lq2">
								<p className="gs-sty b-ph-sty">Danh sách lớp học</p>
							</div>
						</div>
						<div id="id_city">
							<select name="" id="citySearch2">
								<option value="">Chọn tỉnh thành</option>
								<option value={1}>Hà Nội</option>
								<option value={2}>Hải Phòng</option>
								<option value={3}>Bắc Giang</option>
								<option value={4}>Bắc Kạn</option>
								<option value={5}>Bắc Ninh</option>
								<option value={6}>Cao Bằng</option>
								<option value={7}>Điện Biên</option>
								<option value={8}>Hòa Bình</option>
								<option value={9}>Hải Dương</option>
								<option value={10}>Hà Giang</option>
								<option value={11}>Hà Nam</option>
								<option value={12}>Hưng Yên</option>
								<option value={13}>Lào Cai</option>
								<option value={14}>Lai Châu</option>
								<option value={15}>Lạng Sơn</option>
								<option value={16}>Ninh Bình</option>
								<option value={17}>Nam Định</option>
								<option value={18}>Phú Thọ</option>
								<option value={19}>Quảng Ninh</option>
								<option value={20}>Sơn La</option>
								<option value={21}>Thái Bình</option>
								<option value={22}>Thái Nguyên</option>
								<option value={23}>Tuyên Quang</option>
								<option value={24}>Vĩnh Phúc</option>
								<option value={25}>Yên Bái</option>
								<option value={26}>Đà Nẵng</option>
								<option value={27}>Thừa Thiên Huế</option>
								<option value={28}>Khánh Hòa</option>
								<option value={29}>Lâm Đồng</option>
								<option value={30}>Bình Định</option>
								<option value={31}>Bình Thuận</option>
								<option value={32}>Đắk Lắk</option>
								<option value={33}>Đắk Nông</option>
								<option value={34}>Gia Lai</option>
								<option value={35}>Hà Tĩnh</option>
								<option value={36}>Kon Tum</option>
								<option value={37}>Nghệ An</option>
								<option value={38}>Ninh Thuận</option>
								<option value={39}>Phú Yên</option>
								<option value={40}>Quảng Bình</option>
								<option value={41}>Quảng Nam</option>
								<option value={42}>Quảng Ngãi</option>
								<option value={43}>Quảng Trị</option>
								<option value={44}>Thanh Hóa</option>
								<option value={45}>Hồ Chí Minh</option>
								<option value={46}>Bình Dương</option>
								<option value={47}>Bà Rịa Vũng Tàu</option>
								<option value={48}>Cần Thơ</option>
								<option value={49}>An Giang</option>
								<option value={50}>Bạc Liêu</option>
								<option value={51}>Bình Phước</option>
								<option value={52}>Bến Tre</option>
								<option value={53}>Cà Mau</option>
								<option value={54}>Đồng Tháp</option>
								<option value={55}>Đồng Nai</option>
								<option value={56}>Hậu Giang</option>
								<option value={57}>Kiên Giang</option>
								<option value={58}>Long An</option>
								<option value={59}>Sóc Trăng</option>
								<option value={60}>Tiền Giang</option>
								<option value={61}>Tây Ninh</option>
								<option value={62}>Trà Vinh</option>
								<option value={63}>Vĩnh Long</option>
							</select>
						</div>
						<span className="position-absolute close_search_result" onClick={closeModal}>×</span>
					</span>
				)}
			</div>{' '}
		</>
	)
}
