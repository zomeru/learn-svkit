<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>+error.svelte</h1>
<h2>{$page.status}: {$page.error?.message}</h2>
