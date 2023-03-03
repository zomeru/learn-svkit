import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('Products load function');
	const products = await (await import('$lib/dummy-products.json')).default;
	return {
		products
	};
};
