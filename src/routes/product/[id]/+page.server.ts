// import { error, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { products } = await (await import('$lib/dummy-products.json')).default;
	const product = products.find((product) => product.id === +params.id);

	if (!product) {
		throw error(404, {
			message: 'Product not found',
			code: 'PRODUCT_NOT_FOUND'
		});
		// throw redirect(301, '/products');
	}

	return {
		product
	};
};
