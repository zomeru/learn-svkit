<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
	$: console.log(product);
</script>

<!-- <svelte:head>
	<title>{product.title}</title>
	<meta name="description" content={product.description} />
</svelte:head> -->

<!-- 
{#if product}
	<div>
		<img src={product.thumbnail} alt={product.title} />
		<h3>
			<a href="/product/{product.id}">{product.title}</a>
		</h3>
		<p>{product.description}</p>
	</div>
{:else}
	<p>Product not found</p>
{/if} -->

<div>
	<img src={product.thumbnail} alt={product.title} />
	<h3>
		<a href="/product/{product.id}">{product.title}</a>
	</h3>
	<p>{product.description}</p>
</div>
