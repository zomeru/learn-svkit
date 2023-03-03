<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<nav>
	<a href="/">Home</a>
	<a href="/products">Products</a>
</nav>
<main>
	<slot />
</main>
<footer>
	<p>2023 - Footer</p>
</footer>

<style>
</style>
