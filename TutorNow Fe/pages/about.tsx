import { toggleSidebar } from '@/actions/actions'
import Header from '@/components/common/header'
import { AdminLayout } from '@/components/layout'
import { RootState } from '@/reducers'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'
// import dynamic from 'next/dynamic'

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	const [postList, setPostList] = useState([])
	const router = useRouter()

	console.log('About query: ', router.query)
	const page = router.query?.page

	useEffect(() => {
		if (!page) return
		;(async () => {
			const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
			const data = await response.json()

			setPostList(data.data)
		})()
	}, [page])
	const dispatch = useDispatch()
	const handleToggleSidebar = () => {
		dispatch(toggleSidebar())
	}
	const isOpen = useSelector((state: RootState) => state?.sidebar?.isOpen)
	if (router.isFallback) {
		return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
	}
	console.log(isOpen)
	return (
		<>
			{isOpen ? 'test' : 'k test'}
			<Box>
				<h1></h1>
				<Typography component="h1" variant="h3" color="primary.main">
					About Page
				</Typography>
			</Box>
			<div onClick={handleToggleSidebar}>click</div>
			<Header />
		</>
	)
}

AboutPage.Layout = AdminLayout
