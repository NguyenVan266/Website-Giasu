import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

export interface PostPageProps {
	post: any
}

export default function PostDetailPage({ post }: PostPageProps) {
	const router = useRouter()

	if (router.isFallback) {
		return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
	}

	if (!post) return null

	return (
		<div>
			<h1>Post Detail Page</h1>

			<p>{post.title}</p>
			<p>{post.author}</p>
			<p>{post.description}</p>
		</div>
	)
}
