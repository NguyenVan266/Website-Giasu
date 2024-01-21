import SlideBarGs from "@/components/common/slide_bar_gs"
import { GiaSuLayout } from "@/components/layout"
import TabLink from "./TabLink"

const CapNhatTaiKhoanGS = () => {
  return <>   
    <div className="ad-ari">
      <p>
        <a href="">Trang chủ &gt;</a>
        <span>Thông tin gia sư &gt; Cập nhật tài khoản</span>
      </p>
    </div>
    <TabLink />
  </>
}

CapNhatTaiKhoanGS.Layout = GiaSuLayout
export default CapNhatTaiKhoanGS