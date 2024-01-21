'use client'
import { Middleware } from 'redux'

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
	const result = next(action)
	const nextState = store.getState()
	localStorage.setItem('reduxState', JSON.stringify(nextState))
	return result
}

export default localStorageMiddleware
