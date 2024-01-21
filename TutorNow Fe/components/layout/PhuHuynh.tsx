import { LayoutProps } from '@/models/index'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'
import SlideBarPh from '../common/slide_bar_ph'
import HeaderPh from '../common/header_ph'
import ModalSlideBarPh from '../common/modal_slide_bar_ph'
import FooterPh from '../common/footer_ph'
import { callApiDetailPh } from '@/functions/callApi'
export function PhuHuynhLayout({ children }: LayoutProps) {
	const [detailPh, setDetailPh] = useState([])
	// useEffect(() => {
	// 	console.log('PhuHuynhLayout mounting')
	// 	return () => console.log('PhuHuynhLayout unmounting')
	// }, [])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await callApiDetailPh([])
				setDetailPh(response)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])
	// State hiển thị modal
	const [showModal, setShowModal] = useState(false)
	// Layout dùng cho page Phụ Huynh
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
					<SlideBarPh detailPh={detailPh} />
					<div className="content-wapper">
						<HeaderPh setShowModal={setShowModal} />
						<ModalSlideBarPh showModal={showModal} setShowModal={setShowModal} />
						<div>{children}</div>
					</div>
				</div>
				<FooterPh />
			</div>
		</Stack>
	)
}
