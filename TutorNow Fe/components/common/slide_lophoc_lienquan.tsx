import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/common/slide_gs.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'
export default function Slide_lophoc_lienquan() {
	const sliderRef = useRef<Slider | null>(null)
	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customNextArrow} onClick={onClick} />
	}

	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customPrevArrow} onClick={onClick} />
	}
	const settings = {
		dots: false, // Hiển thị các điểm đại diện cho từng slide
		infinite: true, // Cho phép tua vô hạn qua các slide
		slidesToShow: 3, // Số slide hiển thị cùng một lúc
		slidesToScroll: 1, // Số slide được chuyển khi người dùng tua
		speed: 500, // Tốc độ chuyển slide (milliseconds)
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// Add more breakpoints as needed
		],
	}
	const router = useRouter()
	return (
		<>
			<div className="slick-gs">
				<div className="dl_tc">
					<Slider {...settings}>
						<div
							className="tc-ct"
							id=""
							data-id={4414}
							style={{ width: '100%', display: 'inline-block' }}
						>
							<div className="tc" id="" data-id={483}>
								<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
									<img
										className=" ls-is-cached lazyloaded"
										src="../gia-su/img/add.png"
										data-src="../gia-su/img/add.png"
									/>
								</a>
								<h4>
									<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
										Tìm gia sư lớp 2
									</a>
								</h4>
								<div className="ct-ic">
									<p className="ct-ic-one">Hà Nội</p>
									<p className="ct-ic-tow lkh" data-id_teach={4414} data-id={483}>
										Lưu tin
									</p>
								</div>
								<p className="ct-ct-p">Dạy kèm toán lớp 2</p>
								<div className="ct-bt">
									<p className="ct-bt-co">Mã lớp: 483 </p>
									<p className="ct-bt-pr css_price">300,000 VNĐ/Buổi </p>
								</div>
							</div>
						</div>
						<div
							className="tc-ct"
							id=""
							data-id={4414}
							style={{ width: '100%', display: 'inline-block' }}
						>
							<div className="tc" id="" data-id={483}>
								<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
									<img
										className=" ls-is-cached lazyloaded"
										src="../gia-su/img/add.png"
										data-src="../gia-su/img/add.png"
									/>
								</a>
								<h4>
									<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
										Tìm gia sư lớp 2
									</a>
								</h4>
								<div className="ct-ic">
									<p className="ct-ic-one">Hà Nội</p>
									<p className="ct-ic-tow lkh" data-id_teach={4414} data-id={483}>
										Lưu tin
									</p>
								</div>
								<p className="ct-ct-p">Dạy kèm toán lớp 2</p>
								<div className="ct-bt">
									<p className="ct-bt-co">Mã lớp: 483 </p>
									<p className="ct-bt-pr css_price">300,000 VNĐ/Buổi </p>
								</div>
							</div>
						</div>
						<div
							className="tc-ct"
							id=""
							data-id={4414}
							style={{ width: '100%', display: 'inline-block' }}
						>
							<div className="tc" id="" data-id={483}>
								<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
									<img
										className=" ls-is-cached lazyloaded"
										src="../gia-su/img/add.png"
										data-src="../gia-su/img/add.png"
									/>
								</a>
								<h4>
									<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
										Tìm gia sư lớp 2
									</a>
								</h4>
								<div className="ct-ic">
									<p className="ct-ic-one">Hà Nội</p>
									<p className="ct-ic-tow lkh" data-id_teach={4414} data-id={483}>
										Lưu tin
									</p>
								</div>
								<p className="ct-ct-p">Dạy kèm toán lớp 2</p>
								<div className="ct-bt">
									<p className="ct-bt-co">Mã lớp: 483 </p>
									<p className="ct-bt-pr css_price">300,000 VNĐ/Buổi </p>
								</div>
							</div>
						</div>
						<div
							className="tc-ct"
							id=""
							data-id={4414}
							style={{ width: '100%', display: 'inline-block' }}
						>
							<div className="tc" id="" data-id={483}>
								<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
									<img
										className=" ls-is-cached lazyloaded"
										src="../gia-su/img/add.png"
										data-src="../gia-su/img/add.png"
									/>
								</a>
								<h4>
									<a onClick={() => router.push('/tim-gia-su-lop-2-c483')} tabIndex={-1}>
										Tìm gia sư lớp 2
									</a>
								</h4>
								<div className="ct-ic">
									<p className="ct-ic-one">Hà Nội</p>
									<p className="ct-ic-tow lkh" data-id_teach={4414} data-id={483}>
										Lưu tin
									</p>
								</div>
								<p className="ct-ct-p">Dạy kèm toán lớp 2</p>
								<div className="ct-bt">
									<p className="ct-bt-co">Mã lớp: 483 </p>
									<p className="ct-bt-pr css_price">300,000 VNĐ/Buổi </p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</>
	)
}
