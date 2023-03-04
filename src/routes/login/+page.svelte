<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance, applyAction } from '$app/forms';

	// import { goto } from '$app/navigation';

	// let username = '';
	// let password = '';

	// const login = async () => {
	// 	const response = await fetch('/api/login', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			username,
	// 			password
	// 		})
	// 	});

	// 	const resJSON = await response.json();

	// 	if (response.ok) {
	// 		goto('/', {
	// 			invalidateAll: true
	// 		});
	// 	} else {
	// 		alert(resJSON.message);
	// 	}
	// };

	export let form: ActionData;
	let isLoading = false;
	let error: string;

	$: console.log(form);
</script>

<form
	method="POST"
	action="?/login"
	use:enhance={({ form, data, action, cancel }) => {
		console.log({
			form,
			data,
			action,
			cancel
		});
		isLoading = true;

		return ({ result, update }) => {
			console.log({
				result,
				update
			});
			if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result);
			}

			if (result.type === 'error') {
				error = result.error.message;
			}
			isLoading = false;
			update();
		};
	}}
>
	<br />
	<label for="username">Username</label><br />
	<input type="text" name="username" id="username" value={form?.username || ''} />
	<br /><br />
	<label for="password">Password</label><br />
	<input type="password" name="password" id="password" value={form?.password || ''} />
	<br /><br />
	{#if form?.message}
		<div class="error">{form?.message}</div>
		<br /><br />
	{/if}
	<button type="submit" disabled={isLoading}>Log in</button>
</form>

{#if isLoading}
	<div>Loading...</div>
{/if}
