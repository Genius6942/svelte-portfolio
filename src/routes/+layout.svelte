<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	// @ts-ignore
	import Fa from 'svelte-fa/src/fa.svelte';

	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	const links: { name: string; href: string; ref: null | HTMLAnchorElement }[] = [
		{ name: 'Home', href: '/', ref: null },
		{ name: 'About', href: '/about', ref: null },
		{ name: 'Blog', href: '/blog', ref: null },
		{ name: 'Projects', href: '/projects', ref: null },
		{ name: 'Contact', href: '/contact', ref: null }
	];

	const icons = [
		{ name: 'Github', href: 'https://github.com/genius6942', icon: faGithub },
		{ name: 'Email', href: 'mailto:mathmanjosh@gmail.com', icon: faEnvelope }
	];

	let route = null as unknown as string;
	let navContainerRef = null as unknown as HTMLDivElement;
	let navBottomWidth = null as unknown as number;
	let navBottomLeft = null as unknown as number;
	const calculatePositioning = (link: string) => {
		if (!navContainerRef) return;
		const containerBounds = navContainerRef.getBoundingClientRect();
		const linkBounds = links
			.find(({ href }) => href === link)
			?.ref?.getBoundingClientRect() as DOMRect;
		if (!linkBounds) {
			navBottomLeft = null as unknown as number;
			navBottomWidth = null as unknown as number;
			return;
		}
		navBottomLeft = linkBounds.left - containerBounds.left;
		navBottomWidth = linkBounds.width;
	};
	page.subscribe(({ route: link }) => {
		if (!link || !link.id) return;
		route = link.id as string;
		calculatePositioning(route);
	});
	onMount(() => {
		if ($page.route) calculatePositioning($page.route.id as string);
	});
</script>

<div class="h-screen w-screen overflow-hidden flex flex-col">
	<div class="px-5 py-[11px] flex items-center shadow-sm border-b-2 border-b-gray-200">
		<a href="/">Website Name</a>
		<div class="ml-auto flex gap-3 relative" bind:this={navContainerRef}>
			{#each links as link}
				<a href={link.href} class="ml-3" bind:this={link.ref}>
					{link.name}
				</a>
			{/each}
			<div
				class="h-1 absolute -bottom-3 bg-black rounded-full transition-all"
				style={navBottomLeft !== null && navBottomWidth !== null
					? `width: ${navBottomWidth}px; left: ${navBottomLeft}px; opacity: 1;`
					: 'width: 0; left: 0; opacity: 0'}
			/>
		</div>
		<div class="mr-3 flex gap-4 ml-8">
			{#each icons as icon}
				<a href={icon.href} target="_blank">
					<Fa icon={icon.icon} scale={1.1} />
				</a>
			{/each}
		</div>
	</div>
	<main class="flex-grow overflow-auto">
		<slot />
	</main>
</div>

<!-- top navigation bar -->
<!-- <div class="z-50">
	<div class="w-screen fixed top-0 left-0 h-12 px-14 flex items-center shadow-md z-[100000]">
		<a href="/">Website Name</a>
		<div class="ml-auto flex gap-3 relative" bind:this={navContainerRef}>
			{#each links as link}
				<a href={link.href} class="ml-3" bind:this={link.ref}>
					{link.name}
				</a>
			{/each}
			<div
				class="h-1 absolute -bottom-3 bg-black rounded-full transition-all"
				style={navBottomLeft !== null && navBottomWidth !== null
					? `width: ${navBottomWidth}px; left: ${navBottomLeft}px; opacity: 1;`
					: 'width: 0; left: 0; opacity: 0'}
			/>
		</div>
		<div class="mr-3 flex gap-4 ml-8">
			{#each icons as icon}
				<a href={icon.href} target="_blank">
					<Fa icon={icon.icon} scale={1.1} />
				</a>
			{/each}
		</div>
	</div>
</div> -->
