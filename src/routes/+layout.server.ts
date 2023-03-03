import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('token');
	console.log(`token: ${token}`);
	return {
		user: token ? { name: 'zoms', id: 1 } : null
	};
};
