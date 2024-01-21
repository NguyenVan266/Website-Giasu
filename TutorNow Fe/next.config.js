/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/tim-kiem-gia-su.html',
				destination: '/tim-kiem-gia-su',
			},
			{
				source: '/danh-cho-gia-su.html',
				destination: '/danh-cho-gia-su',
			},
			{
				source: '/dang-tin-tim-gia-su.html',
				destination: '/dang-tin-tim-gia-su',
			},
			{
				source: '/cap-nhat-tai-khoan-phu-huynh.html',
				destination: '/cap-nhat-tai-khoan-phu-huynh',
			},
			{
				source: '/cap-nhat-tai-khoan-gia-su.html',
				destination: '/cap-nhat-tai-khoan-gia-su',
			},
			{
				source: '/doi-mat-khau.html',
				destination: '/doi-mat-khau',
			},
			{
				source: '/doi-mat-khau-gs.html',
				destination: '/doi-mat-khau-gs',
			},
			{
				source: '/quan-ly-trang-chu-gs.html',
				destination: '/quan-ly-trang-chu-gs',
			},
			{
				source: '/quan-ly-trang-chu-ph.html',
				destination: '/quan-ly-trang-chu-ph',
			},
			{
				source: '/phu-huynh-moi-day.html',
				destination: '/phu-huynh-moi-day',
			},
			{
				source: '/phu-huynh-da-luu.html',
				destination: '/phu-huynh-da-luu',
			},
			{
				source: '/lop-da-nhan-day.html',
				destination: '/lop-da-nhan-day',
			},
			{
				source: '/lop-da-de-nghi-day.html',
				destination: '/lop-da-de-nghi-day',
			},
			{
				source: '/lop-da-luu.html',
				destination: '/lop-da-luu',
			},
			{
				source: '/gia-su-moi-day.html',
				destination: '/gia-su-moi-day',
			},
			{
				source: '/gia-su-de-nghi-day.html',
				destination: '/gia-su-de-nghi-day',
			},
			{
				source: '/gia-su-dang-day.html',
				destination: '/gia-su-dang-day',
			},
			{
				source: '/gia-su-tu-diem-loc.html',
				destination: '/gia-su-tu-diem-loc',
			},
			{
				source: '/gia-su-da-luu.html',
				destination: '/gia-su-da-luu',
			},
			{
				source: '/dang-ky-phu-huynh.html',
				destination: '/dangkyphuhuynh',
			},
			{
				source: '/dang-ky-gia-su.html',
				destination: '/dangkygiasu',
			},
			{
				source: '/dang-nhap-gia-su.html',
				destination: '/dang-nhap-gia-su',
			},
			{
				source: '/dang-nhap-phu-huynh.html',
				destination: '/dang-nhap-phu-huynh',
			},
			{
				source: '/dang-ky-gia-su2.html',
				destination: '/dangkygiasu2',
			},
			
		]
	},
	images: {
		domains: ['timviec365.vn'],
	},

	basePath: '/gia-su',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/gia-su/' : undefined,
	    typescript: {
      ignoreBuildErrors: true,
    },
	typescript: {
		ignoreBuildErrors: true,
	  },
}

module.exports = nextConfig
