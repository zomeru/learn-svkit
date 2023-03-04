import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// import { env } from '$env/dynamic/private';
// import { API_KEY } from '$env/static/private';

// Evaluated dynamically at runtime
// console.log('$env/dynamic/private', env.API_KEY);

// Evaluated statically at build time and injected into the bundle
// console.log('$env/static/private', API_KEY);

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/products');

	if (response.ok) {
		return {
			products: response.json()
		};
	}

	throw error(response.status, response.statusText);
};
