import { LayoutProps } from '@/models/index'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'
import FooterPh from '../common/footer_ph'
import SlideBarGs from '../common/slide_bar_gs'
import HeaderGs from '../common/header_gs'
import ModalSlideBarGs from '../common/modal_slide_bar_gs'

export function GiaSuLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('GiaSuLayout mounting')
		return () => console.log('GiaSuLayout unmounting')
	}, [])
	// State hiển thị modal
	const [showModal, setShowModal] = useState(false)
	// Layout dùng cho page Gia Sư
	return (
		<Stack>
			<meta charSet="UTF-8" />
			<meta name="robots" content="noindex,nofollow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff2" as="font" />
			<link rel="preload" href="/fonts/Roboto-Bold.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Medium.woff" as="font" />
			<link rel="preload" href="/fonts/Roboto-Regular.woff" as="font" />
			<link href="/gia-su/css/bootstrap.min.css" rel="stylesheet" />
			<link href="/gia-su/css/includes/slick.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/gia-su/css/slick-theme.css" />
			<link rel="stylesheet" href="/gia-su/css/select2.min.css" />
			<link href="/gia-su/css/style.css" rel="stylesheet" />
			<div className="wrapper">
				<div className="ql_ad">
					<SlideBarGs />
					<div className="content-wapper">
						<HeaderGs setShowModal={setShowModal} />
						<ModalSlideBarGs showModal={showModal} setShowModal={setShowModal} />
						<div>{children}</div>
					</div>
				</div>
				<FooterPh />
			</div>
		</Stack>
	)
}
