<script lang="ts">
	// @ts-ignore
	import Fa from 'svelte-fa/src/fa.svelte';
	import { onMount } from 'svelte';
	import { init } from '$lib/blob.js';
	import Typewriter from 'svelte-typewriter/Typewriter.svelte';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	let canvasRef = null as unknown as HTMLCanvasElement;

	onMount(() => {
		const blob = init(canvasRef);
		blob.radius = (Math.min(window.innerWidth, window.innerHeight) - 100) / 2;
	});

	// const intervals = [100, 100, 100, 100, 100, 100, 300, 100, 100, 100] as unknown as number;
	let firstItemRef = null as unknown as HTMLDivElement;

	const scrollDown = () => firstItemRef.scrollIntoView({ behavior: 'smooth' });
</script>

<div class="h-screen relative">
	<canvas bind:this={canvasRef} class="-mt-6" />
	<div
		class="h-screen w-screen absolute top-0 left-0 flex items-center justify-center pointer-events-none"
		style="--cursor-width: 4px; --cursor-color: #fff;"
	>
		<div class="text-white text-4xl">
			<Typewriter interval={100}>
				hi, i'm <span class="text-6xl bungee">HAELP</span>
			</Typewriter>
		</div>
	</div>
	<button
		class="absolute left-1/2 -translate-x-1/2 top-[80%] text-white flex justify-center flex-col items-center gap-[2px] hover:gap-[5px] hover:font-bold cursor-pointer"
		on:click={scrollDown}
	>
		Lets see some stuff
		<Fa icon={faChevronDown} />
	</button>
</div>

<div class="h-screen relative" />
