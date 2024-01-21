import { LayoutProps } from '@/models/index'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting')
		return () => console.log('MainLayout unmounting')
	}, [])

	return (
		<Stack>
			<div>{children}</div>
		</Stack>
	)
}
