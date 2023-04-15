<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { onMount } from 'svelte';
	import { init } from '$lib/blob.js';
	import Typewriter from 'svelte-typewriter/Typewriter.svelte';
	import Parallax from '$lib/Parallax.svelte';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	let canvasRef = null as unknown as HTMLCanvasElement;

	onMount(() => {
		init(canvasRef);
	});

	// const intervals = [100, 100, 100, 100, 100, 100, 300, 100, 100, 100] as unknown as number;
	let firstItemRef = null as unknown as HTMLDivElement;

	const scrollDown = () => firstItemRef.scrollIntoView({ behavior: 'smooth' });
</script>

<div class="h-screen relative">
	<canvas bind:this={canvasRef} />
	<div
		class="h-screen w-screen absolute top-0 left-0 flex items-center justify-center pointer-events-none"
		style="--cursor-width: 4px; --cursor-color: #fff;"
	>
		<div class="text-white text-4xl">
			<Typewriter interval={100}>
				Hi, I'm <span class="text-6xl bungee">Joshua Liu,</span>
			</Typewriter>
			<div class="text-3xl mt-5">
				<!-- <ListTypewriter items={['An Engineer', 'A Web Developer', 'A Student']} /> -->
				<Typewriter interval={30} delay={1500}>a person who enjoys developing things.</Typewriter>
			</div>
		</div>
	</div>
	<button
		class="absolute left-1/2 -transform-1/2 top-[80%] text-white flex justify-center flex-col items-center gap-[2px] hover:gap-[5px] hover:font-bold cursor-pointer"
		on:click={scrollDown}
	>
		Lets see some stuff
		<Fa icon={faChevronDown} />
	</button>
</div>
<Parallax
	image="https://images.unsplash.com/photo-1587410131477-f01b22c59e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbCUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
>
	<h1 class="text-6xl">Who am I?</h1>
	<div>I am a person</div>
</Parallax>
<Parallax
	image="https://images.unsplash.com/photo-1587410131477-f01b22c59e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbCUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
	side="left"
>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore cumque iusto laboriosam?
	Accusantium cupiditate minus temporibus. Nesciunt, eius molestiae optio doloribus rerum commodi
	quod, tenetur odit labore inventore aspernatur. Iusto molestiae at officia, aperiam eos ducimus
	sapiente distinctio culpa sequi, rerum rem provident! Omnis provident obcaecati ipsam dolorum
	sequi iste sunt eos quae? Dignissimos eum a molestiae obcaecati eligendi! Suscipit nesciunt porro
	quam accusantium obcaecati exercitationem harum consequuntur molestiae eius, incidunt impedit quo
	mollitia, adipisci tenetur natus eum ea quas iste aliquam laborum modi dolore quisquam, temporibus
	recusandae. Commodi? Veritatis, iusto distinctio? Eius libero minus doloremque aperiam maxime
	veritatis a illum quaerat expedita ex corrupti similique assumenda, provident omnis unde voluptate
	sed amet beatae aliquam, inventore reiciendis deleniti suscipit. Laudantium porro commodi
	aspernatur iste natus in, placeat, optio iusto reprehenderit corrupti voluptatem dolor recusandae.
	Architecto, nostrum autem? Hic minima velit dolore necessitatibus distinctio eius illum culpa
	molestiae accusantium repudiandae. Sapiente ab quibusdam velit distinctio consequuntur vero,
	doloremque repellat aliquid! Alias totam, possimus, qui consectetur praesentium illo debitis quae
	saepe quaerat illum voluptas dolore reprehenderit rerum dolorem voluptatum exercitationem enim.
	Odit sapiente voluptatem eum sequi iste asperiores id temporibus, repellendus modi quaerat,
	recusandae nemo alias. Illo eligendi facere assumenda omnis minus voluptate ab, quos eius ex unde
	blanditiis porro facilis!
</Parallax>
<Parallax
	image="https://images.unsplash.com/photo-1587410131477-f01b22c59e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbCUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore cumque iusto laboriosam?
	Accusantium cupiditate minus temporibus. Nesciunt, eius molestiae optio doloribus rerum commodi
	quod, tenetur odit labore inventore aspernatur. Iusto molestiae at officia, aperiam eos ducimus
	sapiente distinctio culpa sequi, rerum rem provident! Omnis provident obcaecati ipsam dolorum
	sequi iste sunt eos quae? Dignissimos eum a molestiae obcaecati eligendi! Suscipit nesciunt porro
	quam accusantium obcaecati exercitationem harum consequuntur molestiae eius, incidunt impedit quo
	mollitia, adipisci tenetur natus eum ea quas iste aliquam laborum modi dolore quisquam, temporibus
	recusandae. Commodi? Veritatis, iusto distinctio? Eius libero minus doloremque aperiam maxime
	veritatis a illum quaerat expedita ex corrupti similique assumenda, provident omnis unde voluptate
	sed amet beatae aliquam, inventore reiciendis deleniti suscipit. Laudantium porro commodi
	aspernatur iste natus in, placeat, optio iusto reprehenderit corrupti voluptatem dolor recusandae.
	Architecto, nostrum autem? Hic minima velit dolore necessitatibus distinctio eius illum culpa
	molestiae accusantium repudiandae. Sapiente ab quibusdam velit distinctio consequuntur vero,
	doloremque repellat aliquid! Alias totam, possimus, qui consectetur praesentium illo debitis quae
	saepe quaerat illum voluptas dolore reprehenderit rerum dolorem voluptatum exercitationem enim.
	Odit sapiente voluptatem eum sequi iste asperiores id temporibus, repellendus modi quaerat,
	recusandae nemo alias. Illo eligendi facere assumenda omnis minus voluptate ab, quos eius ex unde
	blanditiis porro facilis!
</Parallax>
<div class="h-screen" />
