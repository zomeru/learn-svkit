import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	console.log('Products load function');

	// Parent data must be awaited LAST if you are not depending on it
	const parentData = await parent();

	console.log('Parent data', parentData);

	const products = await (await import('$lib/dummy-products.json')).default;
	return {
		products
	};
};
