<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';
	import type { ActionData } from './login/$types';
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';

	export let data: LayoutData;
	let form: ActionData;

	let isLoading = false;
	let error: string;

	const handleLoginEnhance: SubmitFunction = () => {
		isLoading = true;
		error = '';

		return ({ result }) => {
			if (result.type === 'redirect') {
				form = null;
				applyAction(result);
			}

			if (result.type === 'error') {
				error = result.error.message;
			}

			if (result.type === 'failure') {
				form = result.data as ActionData;
			}

			isLoading = false;
		};
	};
</script>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<svelte:head>
	<title>{$page.data?.title || $page.data.product?.title || 'Home - Store'}</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<nav data-sveltekit-preload-data="hover">
	<a href="/">Home</a>
	<a href="/products">Products</a>
	{#if !data.user}
		<a href="/login" data-sveltekit-preload-data="off">Log in</a>
	{:else}
		<!-- <button
			on:click={async () => {
				const res = await fetch('/api/logout', {
					method: 'POST'
				});
				if (res.ok) goto('/', { invalidateAll: true });
			}}>Log out</button
		> -->
		<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
			<button type="submit">Logout</button>
		</form>
	{/if}
</nav>
<main>
	<slot />
</main>
{#if !data.user && $page.url.pathname !== '/login'}
	{#if error}
		<p>{error}</p>
	{/if}
	<form
		method="POST"
		action="/login?/login&redirectTo={$page.url.pathname}"
		use:enhance={handleLoginEnhance}
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
{/if}
<footer>
	<p>2023 - Footer</p>
</footer>

<style>
</style>
