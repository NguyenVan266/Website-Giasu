import { salary_class_tutor } from '@/functions/functions.js'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
export default function GiaSuMoiNhat({ list_gs }: any) {
	
	const count_item = list_gs ? Object.keys(list_gs).length : 0;
	const handleImageError = (event: any) => {
		event.target.src = '/gia-su/img/add.png'
	}
	const router = useRouter()
	return (
		<>
			{count_item > 0 && (
				<div className="content-tow">
					<div className="container">
						<div className="row ctt">
							<div className="ct-tow-h">
								<h2>Gia sư mới nhất</h2>
								<div className="p-ct-nd">
									<p>Trở thành một phần của chúng tôi</p>
								</div>
								<div className="p-ct-ad">
									<p onClick={() => router.push('/tim-kiem-gia-su')}>Xem tất cả</p>
								</div>
							</div>
							<div className="ct-ct">
								{list_gs?.map((item: any, index: any) => {
									return (
										<div className="cl-ct " key={index}>
											<div className="ct-ct-one">
												<div className="avt">
													<a onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}>
														<img
															className=" ls-is-cached lazyloaded"
															src={item['ugs_avatar']}
															onError={(e) => {
																const target = e.target as HTMLImageElement
																target.onerror = null
																target.src = '/gia-su/img/add.png'
															}}
															alt={item['ugs_name']}
														/>
													</a>
												</div>
												<h3>
													<a onClick={() => router.push(`/chi-tiet-gs/?id=${item.ugs_id}`)}>
														{item['ugs_name']}
													</a>
												</h3>
												<div className="ct-ic">
													<p className="ct-ic-one">{item['ct_name']}</p>
													<div
														className="lt-l lt-mr b_login_ph"
														data-toggle="modal"
														data-target="#dnsModal"
													>
														<p className="ct-ic-tow">Lưu</p>
													</div>
												</div>
												<p className="ct-ct-p">
													<span>{item['ugs_about_us']}</span>
												</p>
												<div className="ct-bt">
													<p className="ct-bt-co">Mã gia sư: {item['ugs_id']} </p>
													<p className="ct-bt-pr">
														{salary_class_tutor(
															item['ugs_unit_price'],
															item['ugs_salary'],
															item['ugs_month'],
															item['ugs_time']
														)}
													</p>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
