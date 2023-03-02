<script lang="ts">
	import { page } from '$app/stores';

	$: console.log($page);

	function random() {
		return Math.random() * 100;
	}
</script>

<h1>product</h1>
<p>id: {$page.params.id}</p>
<a href={`/product/${random()}`}>asdad</a>
