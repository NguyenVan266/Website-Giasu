import * as React from 'react'
import Modal from "react-bootstrap/Modal"
import { useRouter } from "next/router";

export default function Modal_dang_ky({ showModal, setShowModal }: any) {
    const [isParentMode, setIsParentMode] = React.useState(true);
    const close = () => {
        setShowModal(false);
    }
    const router = useRouter();
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}
                className="modal fade modal-dn modal-dk"
                id="dkModal"
            >
                <div className="modal-header">
                    <h4 className="modal-title">Đăng ký tài khoản</h4>
                    <button type="button" className="close" onClick={close}>
                        ×
                    </button>
                </div>
                <div className={`modal-body ${isParentMode ? 'ph' : 'gs'}`}>
                    <div className="dk-modal-one">
                        <div className="md-ct-cl">
                            <div className="md-exp text-center">
                                <span
                                    className='btn-log-reg md-ph mr-3'
                                    onClick={() => setIsParentMode(true)}
                                >
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
                                <span
                                    className='btn-log-reg md-gs'
                                    onClick={() => setIsParentMode(false)}
                                >
                                    Gia sư
                                </span>
                            </div>
                        </div>
                        <div className={isParentMode ? 'md-em-ph' : 'md-em-gs'}>
                            {isParentMode ? (
                                <>
                                    <p>Trực tiếp liên hệ với giáo viên để hẹn lịch</p>
                                    <p>Chủ động chọn lựa giáo viên phù hợp</p>
                                    <p>Hoàn toàn miễn phí</p>
                                </>
                            ) : (
                                <>
                                    <p>Được tiếp cận với hàng ngàn học viên</p>
                                    <p>Chủ động lựa chọn lớp và mức giá phù hợp</p>
                                    <p>Có cơ hội được truyền đạt kiến thức của mình</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="dk-ph-modal-tow text-center" style={{ display: isParentMode ? 'block' : 'none' }}>
                        <a onClick={() => router.push("/dang-ky-phu-huynh")}>Đăng ký tìm gia sư</a>
                    </div>
                    <div className="dk-gs-modal-tow text-center" style={{ display: !isParentMode ? 'block' : 'none' }}>
                        <a onClick={() => router.push("/dang-ky-gia-su")} >Đăng ký làm gia sư</a>
                    </div>
                </div>
            </Modal>
        </>
    )
}