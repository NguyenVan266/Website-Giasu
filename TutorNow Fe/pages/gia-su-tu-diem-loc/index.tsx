import HeaderPh from '@/components/common/header_ph'
import SlideBarPh from '@/components/common/slide_bar_ph'
import { MainLayout, PhuHuynhLayout } from '@/components/layout'
import { useRouter } from 'next/router'
const GiaSuTuDiemLoc = () => {
	const router = useRouter()
	return (
		<>
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<title>Quản lý gia sư từ điểm lọc</title>
			<div className="ad-ari">
				<p>
					<a onClick={() => router.push('/gia-su')}>Trang chủ &gt;</a>
					<span>Quản lý gia sư &gt; Gia sư từ điểm lọc</span>
				</p>
			</div>
			<div className="ad-gstdl b-width-table">
				<div className="gstdl-tb-ad">
					<table>
						<thead>
							<tr>
								<th scope="col">Họ tên gia sư</th>
								<th scope="col">Mã gia sư</th>
								<th scope="col">Chi tiết gia sư</th>
								<th scope="col">Ngày xem điểm lọc</th>
								<th scope="col">Điểm lọc</th>
								<th scope="col">Xóa</th>
								<th />
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
				<div className="pagination_wrap text-center clr lh-pn gsmd-kl">
					<div className="clr"></div>
				</div>
			</div>
		</>
	)
}

GiaSuTuDiemLoc.Layout = PhuHuynhLayout
export default GiaSuTuDiemLoc
