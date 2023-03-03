<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products.products;
	$: console.log(products);
</script>

<h2>{data.title}</h2>
<button
	on:click={() => {
		// invalidate('app:products');
		invalidate((url) => {
			console.log(url);
		});
	}}>Re-run load fucntion</button
>
{#if products && products.length}
	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
				<h3>
					<a href="/product/{product.id}">{product.title}</a>
				</h3>
				<p>{product.description}</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 30px;
	}

	img {
		width: 100%;
		max-height: 150px;
		object-fit: cover;
	}
</style>
