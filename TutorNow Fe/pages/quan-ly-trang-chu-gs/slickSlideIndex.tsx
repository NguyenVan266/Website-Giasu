import { useEffect, useState } from "react";
import Slider from "react-slick"

const SlickSlideIndex = (props: any) => {
    const [chageSlide, setChageSlide] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setChageSlide(true);
            } else {
                setChageSlide(false);
            }
        };

        window.addEventListener('resize', handleResize);
        // Gọi hàm handleResize lần đầu tiên để thiết lập giá trị ban đầu
        handleResize();
        // Cleanup: loại bỏ sự kiện lắng nghe khi component bị unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const settings = {
        dots: false, // Hiển thị các điểm đại diện cho từng slide
        slidesToShow: 2, // Số slide hiển thị cùng một lúc
        slidesToScroll: 1, // Số slide được chuyển khi người dùng tua
        speed: 500, // Tốc độ chuyển slide (milliseconds),
        responsive: [
        ]
    };
    return (
        chageSlide ?
            <Slider {...settings} className="   adgs-sld">
                <div className="sl-adgs">
                    <div className="gt-ad">
                        <p>{props.classInvite}</p>
                        <p className="gsph">Lớp mời dạy</p>
                    </div>
                </div>
                <div className="sl-adgs">
                    <div className="gt-ad">
                        <p>{props.countClassTeaching}</p>
                        <p className="gsph">Lớp nhận dạy</p>
                    </div>
                </div>
                <div className="sl-adgs">
                    <div className="gt-ad">
                        <p>{props.countSuggestions}</p>
                        <p className="gsph">Lớp đã đề nghị dạy</p>
                    </div>
                </div>
                <div className="sl-adgs">
                    <div className="gt-ad">
                        <p>{props.countClassSave}</p>
                        <p className="gsph">Lớp đã lưu</p>
                    </div>
                </div>
                <div className="sl-adgs">
                    <div className="gt-ad">
                        <p>{props.countViews}</p>
                        <p className="gsph">Lượt xem hồ sơ</p>
                    </div>
                </div>
            </Slider>
            :
            <>
                <div className="adgs-qlc">
                    <div className="adgs-sld">
                        <div className="sl-adgs">
                            <div className="gt-ad">
                                <p>{props.classInvite}</p>
                                <p className="gsph">Lớp mời dạy</p>
                            </div>
                        </div>
                        <div className="sl-adgs">
                            <div className="gt-ad">
                                <p>{props.countClassTeaching}</p>
                                <p className="gsph">Lớp nhận dạy</p>
                            </div>
                        </div>
                        <div className="sl-adgs">
                            <div className="gt-ad">
                                <p>{props.countSuggestions}</p>
                                <p className="gsph">Lớp đã đề nghị dạy</p>
                            </div>
                        </div>
                        <div className="sl-adgs">
                            <div className="gt-ad">
                                <p>{props.countClassSave}</p>
                                <p className="gsph">Lớp đã lưu</p>
                            </div>
                        </div>
                        <div className="sl-adgs">
                            <div className="gt-ad">
                                <p>{props.countViews}</p>
                                <p className="gsph">Lượt xem hồ sơ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default SlickSlideIndex