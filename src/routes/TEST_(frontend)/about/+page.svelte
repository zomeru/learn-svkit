<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
</script>

<h1>Welcome to about</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	on:click={() => {
		goto('/');
	}}>Go to home page</button
>
