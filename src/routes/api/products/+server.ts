import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/products');

	if (response.ok) {
		const resJson = await response.json();
		return json(resJson, { status: 200 });
	}

	const errorJSON = await response.json();
	throw error(response.status, errorJSON.message);
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (!product.title) {
		throw error(400, 'Title is required');
	}

	return json(product, { status: 201 });
};
