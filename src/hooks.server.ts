import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { locals, cookies, isDataRequest, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');
		locals.user = token ? { name: 'zoms', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle = sequence(handle1);

export const handleFetch: HandleFetch = async ({ request, event, fetch }) => {
	if (request.url.startsWith('https://dummyjson.com')) {
		const cookie = event.request.headers.get('cookie');

		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}

	return fetch(request);
};

export const handleError: HandleServerError = async ({ error, event }) => {
	return {
		message: 'An unexpected error has occurred.',
		code: 'UNEXPECTED_ERROR'
	};
};
