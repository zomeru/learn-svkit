import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, cookies, url, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		await new Promise((resolve) => setTimeout(resolve, 2000));

		if (!username || !password) {
			return fail(400, {
				message: 'Missing username or password',
				username,
				password
			});
		}

		cookies.set('token', 'token_value', {
			path: '/'
		});

		locals.user = { name: 'zoms', id: 1 };

		// return {
		// 	success: true
		// };

		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},
	logout: async ({ cookies, url, locals }) => {
		cookies.delete('token', { path: '/' });
		locals.user = undefined;

		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
};
