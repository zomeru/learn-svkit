<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>+error.svelte in product page</h1>
<h2>{$page.status}: {$page.error?.message}</h2>
<h2>CODE: {$page.error?.code}</h2>
