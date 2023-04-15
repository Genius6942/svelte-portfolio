<script lang="ts">
	import { onMount } from 'svelte';

	export let image: string;
	export let side = 'right';
	export let ref = null as null | HTMLDivElement;
	console.log(ref)

	let imageEl = null as unknown as HTMLImageElement;

	let imageRef = null as unknown as HTMLDivElement;
	

	let scrollContainerTop = 0;
	let offset = 0;
	let main = null as unknown as HTMLDivElement;
	let headerHeight = 0;

	const onScroll = () => {
		if (!imageRef) return;

		if (
			imageEl.naturalWidth / imageEl.naturalHeight > imageRef.offsetWidth / imageRef.offsetHeight ||
			!scrollContainerTop ||
			!offset
		) {
			// browser expands to match height, parallax is not an option ig oof
			return;
		} else {
			// browser expands to match width, parallax is possible
			const scale = imageRef.offsetWidth / imageEl.naturalWidth;
			const scrollablePixels = scale * imageEl.naturalHeight - imageRef.offsetHeight - headerHeight;

			// scroll those pixels over full scrolling period (window height + displayed height)
			const scrolled = main.scrollTop - offset + window.innerHeight - headerHeight;
			// console.clear();
			const factor = scrollablePixels / (window.innerHeight + imageRef.offsetHeight);
			// console.log(scrollablePixels);

			const scrollTop = (-scrolled * factor) / scale;
			// console.log(factor, scrolled, scrollTop)
			const x = 'center';
			const y = scrollTop * factor;
			imageRef.style.backgroundPosition = x + ' ' + y + 'px';
		}
	};
	onMount(() => {
		main = document.querySelector('#main') as HTMLDivElement;
		headerHeight = (document.querySelector('#header') as HTMLDivElement).offsetHeight;
		scrollContainerTop = main.offsetTop as number;
		offset = imageRef.getBoundingClientRect().top - scrollContainerTop;
		document.querySelector('#main')?.addEventListener('scroll', onScroll);
	});
</script>

<div class="grid relative grid-cols-2">
	{#if side === 'right'}
		<div class="p-6 relative" bind:this={ref}>
			<slot />
		</div>
		<div
			bind:this={imageRef}
			class=""
			style={`background-image: url(${image}); background-position: top center; background-attachment: scroll; background-size: cover; height: 100%;`}
		/>
	{:else}
		<div
			bind:this={imageRef}
			class=""
			style={`background-image: url(${image}); background-position: top center; background-attachment: scroll; background-size: cover; height: 100%;`}
		/>
		<div class="p-6">
			<slot />
		</div>
	{/if}
	<img src={image} bind:this={imageEl} class="hidden" alt="Parallax placeholder" />
</div>
