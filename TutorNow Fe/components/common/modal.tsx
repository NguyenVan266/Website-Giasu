import * as React from 'react'
import { useRouter } from 'next/router'
import { Form, Input } from 'antd'
export interface ModalProps {}

export default function Modal(props: ModalProps) {
	const router = useRouter()
	return (
		<>
			<div
				className="modal fade show"
				id="myModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Mời giáo viên</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body">
							<div className="md-ct modal_invite_teach">
								{' '}
								<div className="md-ct">
									<div className="md-img">
										<img
											className=" ls-is-cached lazyloaded"
											src="/gia-su/img/add.png"
											data-src="/gia-su/img/add.png"
											alt="1"
										/>
									</div>
									<div className="md-name">
										<p>Nguyễn Thành Trung </p>
										<span className="giasu_id" style={{ display: 'none' }} />
									</div>
								</div>
							</div>
							<div className="md-ct-cl">
								<p>Chọn lớp mà bạn muốn mời giáo viên dạy:</p>
								<div className="md-bt" id="ugs_id">
									<div className="md-bt-ch">
										<Input type="checkbox" name="name_class" />
										<div className="md-cd" id="pft_address">
											<p>
												<span>[ML: 492]</span>
											</p>
										</div>
										<div className="md-nd">
											<p>Tìm gia sư vật lý lượng tử </p>
										</div>
									</div>
									<div className="md-bt-ch">
										<input type="checkbox" name="name_class" defaultValue={491} />
										<div className="md-cd" id="pft_address">
											<p>
												<span>[ML: 491]</span>
											</p>
										</div>
										<div className="md-nd">
											<p>Tìm gia sư vật lý lý thuyết </p>
										</div>
									</div>
									<div className="md-bt-ch">
										<input type="checkbox" name="name_class" defaultValue={490} />
										<div className="md-cd" id="pft_address">
											<p>
												<span>[ML: 490]</span>
											</p>
										</div>
										<div className="md-nd">
											<p>Tìm gia sư piano </p>
										</div>
									</div>
									<div className="md-bt-ch">
										<input type="checkbox" name="name_class" defaultValue={489} />
										<div className="md-cd" id="pft_address">
											<p>
												<span>[ML: 489]</span>
											</p>
										</div>
										<div className="md-nd">
											<p>Tìm gia sư Ielts </p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button name="lm-d" id="lm-d">
								Gửi lời mời
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="exitsTagNew"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Thông báo</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body">
							<p>
								Chúng tôi nhận thấy rằng bạn đã đăng tin tuyển dụng thuộc môn
								<b className="title_subject">Toán - Toán lớp 1</b> của{' '}
								<b className="title_class">Lớp 1</b> tại{' '}
								<b className="title_city">Quận Hoàn Kiếm - Hà Nội</b>.
							</p>
							<p>
								Hãy chỉnh sửa thông tin tin đăng hoặc cập nhật thông tin tin tuyển dụng đó{' '}
								<a target="_blank" className="link_news" href="#">
									tại đây.
								</a>
							</p>
						</div>
						<div className="modal-footer">
							<button name="lm-d" data-dismiss="modal">
								Đóng
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn"
				id="dnModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng nhập tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body lgph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<span className="btn-log-reg lg-ph mr-3">
										<svg
											width={20}
											height={20}
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.1914 12.3511C9.39454 12.2449 10.6046 12.2449 11.8078 12.3511L12.1919 12.3836C12.7174 12.4354 13.2391 12.5165 13.7525 12.6261C15.0611 12.8956 16.0114 13.3739 16.432 14.2609C16.7445 14.9209 16.7445 15.6871 16.4318 16.3473C16.0102 17.2367 15.0477 17.7189 13.7622 17.9725L13.3728 18.0533C12.8523 18.1532 12.3274 18.2214 11.806 18.2571C10.8275 18.3404 9.84456 18.3556 8.89636 18.3034C8.79184 18.3034 8.72168 18.303 8.65987 18.3016L8.53966 18.2971C8.3935 18.2896 8.2596 18.2743 8.20341 18.2579C7.54373 18.213 6.88843 18.1175 6.2598 17.9757L6.04656 17.9312C4.85619 17.6667 3.97464 17.1896 3.56687 16.3464C3.41244 16.0192 3.33256 15.6616 3.33302 15.3026C3.33168 14.941 3.41221 14.5838 3.57239 14.2502C3.99707 13.3972 4.99484 12.884 6.24202 12.6271C6.8882 12.4886 7.5433 12.3961 8.1914 12.3511ZM11.7027 13.5528C10.5695 13.4529 9.42971 13.4529 8.28547 13.5537C7.6827 13.5956 7.08364 13.6802 6.48807 13.8079C5.56569 13.9979 4.86046 14.3607 4.65068 14.7819C4.57342 14.9428 4.53363 15.1193 4.53429 15.3011C4.53406 15.4839 4.57439 15.6645 4.64989 15.8245C4.86565 16.2706 5.53111 16.604 6.50615 16.7951L6.79991 16.8573C7.29191 16.9548 7.79863 17.0221 8.36175 17.0646C8.43287 17.0788 8.50961 17.0876 8.60066 17.0923L8.92866 17.0979C9.85381 17.1479 10.7813 17.1336 11.7143 17.0542C12.3156 17.013 12.913 16.9263 13.5159 16.7918L13.7034 16.7521C14.5597 16.5579 15.1521 16.2402 15.3471 15.829C15.5044 15.4968 15.5044 15.1112 15.3473 14.7793C15.1386 14.3392 14.4789 14.0072 13.5069 13.807C12.9156 13.6808 12.3163 13.5961 11.7132 13.5537L11.7027 13.5528ZM10.0033 1.66699C12.4483 1.66699 14.4304 3.65752 14.4304 6.11297C14.4304 8.56842 12.4483 10.5589 10.0033 10.5589C7.55823 10.5589 5.57615 8.56842 5.57615 6.11297C5.57615 3.65752 7.55823 1.66699 10.0033 1.66699ZM10.0033 2.87338C8.22167 2.87338 6.77742 4.3238 6.77742 6.11297C6.77742 7.90214 8.22167 9.35256 10.0033 9.35256C11.7848 9.35256 13.2291 7.90214 13.2291 6.11297C13.2291 4.3238 11.7848 2.87338 10.0033 2.87338Z"
												fill="#fff"
											/>
										</svg>
										Phụ huynh
									</span>
									<span className="btn-log-reg lg-gs">Gia sư</span>
								</div>
								<div className="adph">
									<Form
										action=""
										method="post"
										id="vali-lg"
										encType="multipart/form-data"
										placeholder="1"
									>
										<div className="form-group oot">
											<input
												type="text"
												className="form-control email__ph__login"
												name="ugs_email"
												id="ugs_email_ph"
												placeholder="Nhập địa chỉ email"
											/>
											<div className=" error" id="err_emailxt_ph" />
											<label className=" error" id="err_email_ph" />
										</div>
										<div className="form-group ott">
											<input
												type="password"
												className="form-control password__ph__login"
												name="ugs_password"
												id="ugs_password_ph"
												placeholder="Nhập mật khẩu"
											/>
											<div className=" error" id="err_pass_ph" />
											<i className="icon-pass-login-ph">
												<img src="/gia-su/img/icon12.png" />
											</i>
										</div>
										<button
											type="submit"
											className="btn btn-primary ph-modal-tow"
											id="gs-modal-ph"
											name="dn-tk"
										>
											ĐĂNG NHẬP
										</button>
									</Form>
									<div className="md-mk text-center btn_cursor b-md-mk">Quên mật khẩu?</div>
									<div className="md-tk text-center">
										<p>
											Bạn chưa có tài khoản?{' '}
											<a
												className="b_popup_login_regis"
												onClick={() => router.push('/dang-ky-phu-huynh')}
											>
												Đăng ký ngay
											</a>
										</p>
									</div>
								</div>
								<div className="adgs">
									<Form
										autoComplete="off"
										id="vali-lg2"
										encType="multipart/form-data"
										name="vali-lg2"
										action=""
										method="post"
										placeholder="1"
									>
										<div className="form-group oot">
											<input
												type="text"
												className="form-control valid_email_gs"
												name="ugs_email"
												id="ugs_email"
												placeholder="Nhập địa chỉ email"
												defaultValue=""
											/>
											<div className=" error" id="err_emailxt_gs" />
											<label className=" error" id="err_Email" />
										</div>
										<div className="form-group ott">
											<input
												type="password"
												className="form-control"
												name="ugs_password"
												id="ugs_password"
												placeholder="Nhập mật khẩu"
											/>
											<div className=" error err_popup_gs" id="err_pass_gs_md" />
											<i className="icon-pass-login-gs">
												<img src="/gia-su/img/icon12.png" />
											</i>
										</div>
										<button
											type="submit"
											className="btn btn-primary gs-modal-tow"
											id="gs-modal"
											name="dn-tk"
										>
											ĐĂNG NHẬP
										</button>
									</Form>
									<div className="md-mk text-center btn_cursor b-md-mk">Quên mật khẩu?</div>
									<div className="md-tk text-center">
										<p>
											Bạn chưa có tài khoản?{' '}
											<a
												className="b_popup_login_regis"
												onClick={() => router.push('/dang-ky-gia-su')}
											>
												Đăng ký ngay
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn"
				id="dngsModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng nhập tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<span className="btn-log-reg lg-gs b-btn-log-reg">Gia sư</span>
								</div>
								<Form
									autoComplete="off"
									id="vali-lggs"
									encType="multipart/form-data"
									name="vali-lggs"
									action=""
									method="post"
									className="popup__regie_private"
									placeholder="1"
								>
									<div className="form-group oot">
										<input
											type="text"
											className="form-control"
											name="ugs_email_gs"
											id="ugs_email_gs"
											placeholder="Nhập địa chỉ email"
											defaultValue=""
										/>
										<div className=" error" id="err_emailxt_gs_2" />
										<label className=" error" id="err_Email" />
									</div>
									<div className="form-group ott">
										<input
											type="password"
											className="form-control"
											name="ugs_password_gs"
											id="ugs_password_gs"
											placeholder="Nhập mật khẩu"
										/>
										<div className=" error err_popup_gs" id="err_pass_gs_md" />
										<label className="error " id="errPass" />
										<i className="icon-pass-login-gs-1">
											<img src="/gia-su/img/icon12.png" />
										</i>
									</div>
									<button
										type="submit"
										className="btn btn-primary gs-modal-tow"
										id="lg-gs-modal"
										name="dn-tk"
									>
										ĐĂNG NHẬP
									</button>
								</Form>
							</div>
						</div>
						<div className="md-mk text-center btn_cursor">Quên mật khẩu?</div>
						<div className="md-tk text-center">
							<p>
								Bạn chưa có tài khoản?{' '}
								<a onClick={() => router.push('/dang-ky-gia-su')}>Đăng ký ngay</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn modal-dk"
				id="dkModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng ký tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="dk-modal-one">
								<div className="md-ct-cl">
									<div className="md-exp text-center">
										<span className="btn-log-reg md-ph mr-3">
											<svg
												width={20}
												height={20}
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8.1914 12.3511C9.39454 12.2449 10.6046 12.2449 11.8078 12.3511L12.1919 12.3836C12.7174 12.4354 13.2391 12.5165 13.7525 12.6261C15.0611 12.8956 16.0114 13.3739 16.432 14.2609C16.7445 14.9209 16.7445 15.6871 16.4318 16.3473C16.0102 17.2367 15.0477 17.7189 13.7622 17.9725L13.3728 18.0533C12.8523 18.1532 12.3274 18.2214 11.806 18.2571C10.8275 18.3404 9.84456 18.3556 8.89636 18.3034C8.79184 18.3034 8.72168 18.303 8.65987 18.3016L8.53966 18.2971C8.3935 18.2896 8.2596 18.2743 8.20341 18.2579C7.54373 18.213 6.88843 18.1175 6.2598 17.9757L6.04656 17.9312C4.85619 17.6667 3.97464 17.1896 3.56687 16.3464C3.41244 16.0192 3.33256 15.6616 3.33302 15.3026C3.33168 14.941 3.41221 14.5838 3.57239 14.2502C3.99707 13.3972 4.99484 12.884 6.24202 12.6271C6.8882 12.4886 7.5433 12.3961 8.1914 12.3511ZM11.7027 13.5528C10.5695 13.4529 9.42971 13.4529 8.28547 13.5537C7.6827 13.5956 7.08364 13.6802 6.48807 13.8079C5.56569 13.9979 4.86046 14.3607 4.65068 14.7819C4.57342 14.9428 4.53363 15.1193 4.53429 15.3011C4.53406 15.4839 4.57439 15.6645 4.64989 15.8245C4.86565 16.2706 5.53111 16.604 6.50615 16.7951L6.79991 16.8573C7.29191 16.9548 7.79863 17.0221 8.36175 17.0646C8.43287 17.0788 8.50961 17.0876 8.60066 17.0923L8.92866 17.0979C9.85381 17.1479 10.7813 17.1336 11.7143 17.0542C12.3156 17.013 12.913 16.9263 13.5159 16.7918L13.7034 16.7521C14.5597 16.5579 15.1521 16.2402 15.3471 15.829C15.5044 15.4968 15.5044 15.1112 15.3473 14.7793C15.1386 14.3392 14.4789 14.0072 13.5069 13.807C12.9156 13.6808 12.3163 13.5961 11.7132 13.5537L11.7027 13.5528ZM10.0033 1.66699C12.4483 1.66699 14.4304 3.65752 14.4304 6.11297C14.4304 8.56842 12.4483 10.5589 10.0033 10.5589C7.55823 10.5589 5.57615 8.56842 5.57615 6.11297C5.57615 3.65752 7.55823 1.66699 10.0033 1.66699ZM10.0033 2.87338C8.22167 2.87338 6.77742 4.3238 6.77742 6.11297C6.77742 7.90214 8.22167 9.35256 10.0033 9.35256C11.7848 9.35256 13.2291 7.90214 13.2291 6.11297C13.2291 4.3238 11.7848 2.87338 10.0033 2.87338Z"
													fill="#666C7C"
												/>
											</svg>
											Phụ huynh
										</span>
										<span className="btn-log-reg md-gs">Gia sư</span>
									</div>
								</div>
								<div className="md-em-ph">
									<p>Trực tiếp liên hệ với giáo viên để hẹn lịch</p>
									<p>Chủ động chọn lựa giáo viên phù họp</p>
									<p>Hoàn toàn miễn phí</p>
								</div>
								<div className="md-em-gs">
									<p>Được tiếp cận với hàng ngàn học viên</p>
									<p>Chủ động lựa chọn lớp và mức giá phù hợp</p>
									<p>Có cơ hội được truyền đạt kiến thức của mình</p>
								</div>
							</div>
							<div className="dk-ph-modal-tow text-center">
								<a onClick={() => router.push('/dang-ky-phu-huyng')}>Đăng ký tìm gia sư</a>
							</div>
							<div className="dk-gs-modal-tow text-center">
								<a onClick={() => router.push('/dang-ky-gia-su')}>Đăng ký làm gia sư</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-qtn modal-dn "
				id="qtkModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Quên tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									Vui lòng nhập địa chỉ email bạn đã đăng ký trên giasu.timviec365.vn. Chúng tôi sẽ
									gửi một liên kết đến email của bạn, hãy kiểm tra và làm theo hướng dẫn để lấy lại
									mật khẩu cho tài khoản của mình.
								</div>
								<Form
									autoComplete="off"
									id="vali-qmk"
									encType="multipart/form-data"
									name="vali-qmk"
									action=""
									method="post"
									placeholder="1"
								>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											id="ugs_email_fg"
											placeholder="Nhập địa chỉ email/ hoặc tài khoản"
										/>
										<div className=" error" id="err_email_fg" />
									</div>
									<button
										type="submit"
										className="btn btn-primary forgot_pass"
										id="forgot_pass"
										name="mail_fg_pass"
									>
										GỬI VỀ EMAIL
									</button>
								</Form>
							</div>
						</div>
						<div className="md-tk text-center">
							<p>
								Bạn đã có tài khoản?{' '}
								<span
									data-toggle="modal"
									data-target="#dnModal"
									className="dn-ngay btn_cursor b-dn-ngay"
								>
									Đăng nhập ngay
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-lg menu-show"
				id="exampleModalLong"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<div className="menu_bg">
								<img
									className="lazyload"
									src="/gia-su/img/loader.gif"
									data-src="/gia-su/img/bgmenu.png"
									alt="Anh nen"
								/>
							</div>
							<div className="menu_hd text-center">
								<img
									className="lazyload"
									src="/gia-su/img/loader.gif"
									data-src="/gia-su/img/add.png"
									alt=""
								/>
							</div>
						</div>
						<div className="modal-body">
							<div className="modal_body_one">
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary loginMobile"
										data-toggle="modal"
										data-target="#dnModal"
									>
										Đăng nhập
									</button>
									<button
										type="button"
										className="btn btn-primary regisMobile"
										data-toggle="modal"
										data-target="#dkModal"
									>
										Đăng ký
									</button>
								</div>
								<a
									data-toggle="modal"
									data-target="#dnphModal"
									id="btn_postClass"
									className="class_dangtin b_click_bootstrap btn_cursor dangnhap"
								>
									Đăng tin
								</a>
								<div className="menu_list">
									<ul>
										<li>
											<a onClick={() => router.push('/gia-su')}>Trang chủ gia sư</a>
										</li>
										<li>
											<a onClick={() => router.push('/tim-kiem-gia-su')}>Danh sách gia sư</a>
										</li>
										<li>
											<a onClick={() => router.push('/danh-cho-gia-su')}>Danh sách lớp học</a>
										</li>
										<li>
											<a href="https://timviec365.vn/blog/c235/tai-lieu-gia-su">Blog gia sư</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn"
				id="dmkModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng nhập tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<span className="btn-log-reg md-ph mr-3">
										<svg
											width={20}
											height={20}
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.1914 12.3511C9.39454 12.2449 10.6046 12.2449 11.8078 12.3511L12.1919 12.3836C12.7174 12.4354 13.2391 12.5165 13.7525 12.6261C15.0611 12.8956 16.0114 13.3739 16.432 14.2609C16.7445 14.9209 16.7445 15.6871 16.4318 16.3473C16.0102 17.2367 15.0477 17.7189 13.7622 17.9725L13.3728 18.0533C12.8523 18.1532 12.3274 18.2214 11.806 18.2571C10.8275 18.3404 9.84456 18.3556 8.89636 18.3034C8.79184 18.3034 8.72168 18.303 8.65987 18.3016L8.53966 18.2971C8.3935 18.2896 8.2596 18.2743 8.20341 18.2579C7.54373 18.213 6.88843 18.1175 6.2598 17.9757L6.04656 17.9312C4.85619 17.6667 3.97464 17.1896 3.56687 16.3464C3.41244 16.0192 3.33256 15.6616 3.33302 15.3026C3.33168 14.941 3.41221 14.5838 3.57239 14.2502C3.99707 13.3972 4.99484 12.884 6.24202 12.6271C6.8882 12.4886 7.5433 12.3961 8.1914 12.3511ZM11.7027 13.5528C10.5695 13.4529 9.42971 13.4529 8.28547 13.5537C7.6827 13.5956 7.08364 13.6802 6.48807 13.8079C5.56569 13.9979 4.86046 14.3607 4.65068 14.7819C4.57342 14.9428 4.53363 15.1193 4.53429 15.3011C4.53406 15.4839 4.57439 15.6645 4.64989 15.8245C4.86565 16.2706 5.53111 16.604 6.50615 16.7951L6.79991 16.8573C7.29191 16.9548 7.79863 17.0221 8.36175 17.0646C8.43287 17.0788 8.50961 17.0876 8.60066 17.0923L8.92866 17.0979C9.85381 17.1479 10.7813 17.1336 11.7143 17.0542C12.3156 17.013 12.913 16.9263 13.5159 16.7918L13.7034 16.7521C14.5597 16.5579 15.1521 16.2402 15.3471 15.829C15.5044 15.4968 15.5044 15.1112 15.3473 14.7793C15.1386 14.3392 14.4789 14.0072 13.5069 13.807C12.9156 13.6808 12.3163 13.5961 11.7132 13.5537L11.7027 13.5528ZM10.0033 1.66699C12.4483 1.66699 14.4304 3.65752 14.4304 6.11297C14.4304 8.56842 12.4483 10.5589 10.0033 10.5589C7.55823 10.5589 5.57615 8.56842 5.57615 6.11297C5.57615 3.65752 7.55823 1.66699 10.0033 1.66699ZM10.0033 2.87338C8.22167 2.87338 6.77742 4.3238 6.77742 6.11297C6.77742 7.90214 8.22167 9.35256 10.0033 9.35256C11.7848 9.35256 13.2291 7.90214 13.2291 6.11297C13.2291 4.3238 11.7848 2.87338 10.0033 2.87338Z"
												fill="#666C7C"
											/>
										</svg>
										Phụ huynh
									</span>
									<span className="btn-log-reg md-gs">Gia sư</span>
								</div>
								<Form
									action=""
									method="post"
									id="vali-form-lg"
									encType="multipart/form-data"
									placeholder="1"
								>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											name="ugs_email"
											placeholder="Nhập địa chỉ email"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className="form-control"
											name="ugs_password"
											placeholder="Nhập mật khẩu"
										/>
									</div>
									<button type="submit" className="btn btn-primary" name="dn-tk">
										ĐĂNG NHẬP
									</button>
								</Form>
							</div>
							<div className="md-im-ic">
								<img src="/gia-su/img/icon12.png" />
							</div>
							<div className="md-sh">
								<img src="/gia-su/img/icon13.png" />
							</div>
						</div>
						<div className="md-mk text-center" data-toggle="modal" data-target="#qtkModal">
							Quên mật khẩu?
						</div>
						<div className="md-tk text-center">
							<p>
								Bạn chưa có tài khoản? <a href="">Đăng ký ngay</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn"
				id="dnsModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng nhập tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<span className="btn-log-reg md-ph mr-3">
										<svg
											width={20}
											height={20}
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.1914 12.3511C9.39454 12.2449 10.6046 12.2449 11.8078 12.3511L12.1919 12.3836C12.7174 12.4354 13.2391 12.5165 13.7525 12.6261C15.0611 12.8956 16.0114 13.3739 16.432 14.2609C16.7445 14.9209 16.7445 15.6871 16.4318 16.3473C16.0102 17.2367 15.0477 17.7189 13.7622 17.9725L13.3728 18.0533C12.8523 18.1532 12.3274 18.2214 11.806 18.2571C10.8275 18.3404 9.84456 18.3556 8.89636 18.3034C8.79184 18.3034 8.72168 18.303 8.65987 18.3016L8.53966 18.2971C8.3935 18.2896 8.2596 18.2743 8.20341 18.2579C7.54373 18.213 6.88843 18.1175 6.2598 17.9757L6.04656 17.9312C4.85619 17.6667 3.97464 17.1896 3.56687 16.3464C3.41244 16.0192 3.33256 15.6616 3.33302 15.3026C3.33168 14.941 3.41221 14.5838 3.57239 14.2502C3.99707 13.3972 4.99484 12.884 6.24202 12.6271C6.8882 12.4886 7.5433 12.3961 8.1914 12.3511ZM11.7027 13.5528C10.5695 13.4529 9.42971 13.4529 8.28547 13.5537C7.6827 13.5956 7.08364 13.6802 6.48807 13.8079C5.56569 13.9979 4.86046 14.3607 4.65068 14.7819C4.57342 14.9428 4.53363 15.1193 4.53429 15.3011C4.53406 15.4839 4.57439 15.6645 4.64989 15.8245C4.86565 16.2706 5.53111 16.604 6.50615 16.7951L6.79991 16.8573C7.29191 16.9548 7.79863 17.0221 8.36175 17.0646C8.43287 17.0788 8.50961 17.0876 8.60066 17.0923L8.92866 17.0979C9.85381 17.1479 10.7813 17.1336 11.7143 17.0542C12.3156 17.013 12.913 16.9263 13.5159 16.7918L13.7034 16.7521C14.5597 16.5579 15.1521 16.2402 15.3471 15.829C15.5044 15.4968 15.5044 15.1112 15.3473 14.7793C15.1386 14.3392 14.4789 14.0072 13.5069 13.807C12.9156 13.6808 12.3163 13.5961 11.7132 13.5537L11.7027 13.5528ZM10.0033 1.66699C12.4483 1.66699 14.4304 3.65752 14.4304 6.11297C14.4304 8.56842 12.4483 10.5589 10.0033 10.5589C7.55823 10.5589 5.57615 8.56842 5.57615 6.11297C5.57615 3.65752 7.55823 1.66699 10.0033 1.66699ZM10.0033 2.87338C8.22167 2.87338 6.77742 4.3238 6.77742 6.11297C6.77742 7.90214 8.22167 9.35256 10.0033 9.35256C11.7848 9.35256 13.2291 7.90214 13.2291 6.11297C13.2291 4.3238 11.7848 2.87338 10.0033 2.87338Z"
												fill="#fff"
											/>
										</svg>
										Phụ huynh
									</span>
								</div>
								<Form
									action=""
									method="post"
									id="vali-form-lg2"
									encType="multipart/form-data"
									className="popup__regie_private"
									placeholder="1"
								>
									<div className="form-group oot">
										<input
											type="text"
											className="form-control email__ph__login"
											name="ugs_email_ph_pm"
											id="ugs_email_ph_pm"
											placeholder="Nhập địa chỉ email"
										/>
										<div className=" error" id="err_emailxt_ph_2" />
										<span id="erruser" />
									</div>
									<div className="form-group ott">
										<input
											type="password"
											className="form-control password__ph__login"
											name="ugs_password_ph_pm"
											id="ugs_password_ph_pm"
											placeholder="Nhập mật khẩu"
										/>
										<div className=" error" id="err_pass_phuhuynh" />
										<span id="errpass" />
										<i className="icon-pass-login-ph-1">
											<img src="/gia-su/img/icon12.png" />
										</i>
									</div>
									<button
										type="submit"
										className="btn btn-primary ph-modal-tow"
										id="gs-modal-ph-pm"
										name="dn-tk"
									>
										ĐĂNG NHẬP
									</button>
								</Form>
							</div>
						</div>
						<div className="md-mk text-center">
							<span className="quen_mk btn_cursor text-center">Quên mật khẩu?</span>
						</div>
						<div className="md-tk text-center">
							<p>
								Bạn chưa có tài khoản?{' '}
								<a onClick={() => router.push('/dang-ky-phu-huynh')} className="b-regis-ph">
									Đăng ký ngay
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-dn"
				id="dnphModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Đăng nhập tài khoản</h4>
							<button type="button" className="close" data-dismiss="modal">
								×
							</button>
						</div>
						<div className="modal-body ph">
							<div className="md-ct-cl">
								<div className="md-exp text-center">
									<span className="btn-log-reg md-ph mr-3">Phụ huynh</span>
								</div>
								<Form
									action=""
									method="post"
									id="vali-form-dn-ph"
									className="popup__regie_private"
									placeholder="1"
								>
									<div className="form-group oot">
										<input
											type="text"
											className="form-control ugs_email_ph_dt email__ph__login"
											name="ugs_email_ph_dt"
											id="ugs_email_ph_dt"
											placeholder="Nhập địa chỉ email"
										/>
										<div className=" error" id="err_emailxt_ph_2" />
										<span id="erruser" />
									</div>
									<div className="form-group ott">
										<input
											type="password"
											className="form-control ugs_password_ph_dt password__ph__login"
											name="ugs_password_ph_dt"
											id="ugs_password_ph_dt"
											placeholder="Nhập mật khẩu"
										/>
										<div className=" error" id="err_pass_ph_dt" />
										<span id="errpass" />
										<i className="icon-pass-login-ph-dt icon-pass-login-ph-1">
											<img src="/gia-su/img/icon12.png" />
										</i>
									</div>
									<button
										type="submit"
										className="btn btn-primary ph-modal-tow"
										id="modal-dn-ph-dt"
										name="dn-tk"
									>
										ĐĂNG NHẬP
									</button>
								</Form>
							</div>
						</div>
						<div className="md-mk text-center">
							<span className="quen_mk btn_cursor text-center">Quên mật khẩu?</span>
						</div>
						<div className="md-tk text-center">
							<p>
								Bạn chưa có tài khoản?{' '}
								<a onClick={() => router.push('/dang-ky-phu-huynh')} className="b-regis-ph">
									Đăng ký ngay
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade modal-lg exp_sh"
				id="exp_menu"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document"></div>
			</div>{' '}
		</>
	)
}
