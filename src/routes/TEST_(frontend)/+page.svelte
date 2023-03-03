<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$components/Button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	on:click={() => {
		goto('/about');
	}}>Go to about page</button
>
<Button />
<a href="/about">about</a>
