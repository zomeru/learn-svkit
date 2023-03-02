<script lang="ts">
</script>

<main style:background="rgb(145, 70, 85)">
	<h1>Root layout</h1>

	<slot />
	<footer>All rights reserved</footer>
</main>

<style>
	main {
		padding: 10px;
	}

	a {
		color: #e2e2e2;
		text-decoration: none;
	}

	a:hover {
		color: #4972ca;
	}

	/* h1 {
		color: rgb(145, 70, 85);
	} */
</style>
