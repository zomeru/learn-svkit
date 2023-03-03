<script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});

		const resJSON = await response.json();

		if (response.ok) {
			goto('/', {
				invalidateAll: true
			});
		} else {
			alert(resJSON.message);
		}
	};
</script>

<form on:submit|preventDefault={login}>
	<br />
	<label for="username">Username</label><br />
	<input bind:value={username} type="text" name="username" id="username" />
	<br /><br />
	<label for="password">Password</label><br />
	<input bind:value={password} type="password" name="password" id="password" />
	<br /><br />
	<button type="submit">Log in</button>
</form>
