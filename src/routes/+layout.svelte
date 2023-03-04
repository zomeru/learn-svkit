<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';

	export let data: LayoutData;
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
		<button
			on:click={async () => {
				const res = await fetch('/api/logout', {
					method: 'POST'
				});
				if (res.ok) goto('/', { invalidateAll: true });
			}}>Log out</button
		>
	{/if}
</nav>
<main>
	<slot />
</main>
<footer>
	<p>2023 - Footer</p>
</footer>

<style>
</style>
