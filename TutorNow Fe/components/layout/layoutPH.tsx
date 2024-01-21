import React from 'react'
import Footer from '../common/footer'
import HeaderPh from '../common/header_ph'

export default function LayoutPH( childern: any ) {
	return (
		<>
			<HeaderPh />
			{childern}

			<Footer />
		</>
	)
}
