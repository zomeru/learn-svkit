import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();

	if (!data.username || !data.password) {
		throw error(400, 'Email and password are required');
	}

	cookies.set('token', 'token_value', {
		path: '/',
		httpOnly: process.env.NODE_ENV === 'production'
	});

	return json({ name: data.username, id: 1 }, { status: 201 });
};
