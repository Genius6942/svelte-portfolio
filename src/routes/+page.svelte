<script lang="ts">
  // @ts-ignore
  import Fa from "svelte-fa";
  import Fader from "$lib/components/FadeWrapper.svelte";
  import { onMount } from "svelte";
  import { init } from "$lib/animations/blob";
  import Typewriter from "svelte-typewriter";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
  let canvasRef = null as unknown as HTMLCanvasElement;

  onMount(() => {
    const blob = init(canvasRef);
    blob.radius = (Math.min(window.innerWidth, window.innerHeight) - 100) / 2;

    return blob.destroy.bind(blob);
  });

  // const intervals = [100, 100, 100, 100, 100, 100, 300, 100, 100, 100] as unknown as number;
  let firstItemRef = null as unknown as HTMLDivElement;

  const scrollDown = () => firstItemRef.scrollIntoView({ behavior: "smooth" });
</script>

<div class="relative h-screen">
  <canvas bind:this={canvasRef} class="-mt-6" />
  <div
    class="pointer-events-none absolute left-0 top-0 flex h-screen w-screen items-center justify-center"
    style="--cursor-width: 4px; --cursor-color: #fff;"
  >
    <div class="text-4xl text-white">
      <Typewriter interval={100}>
        hi, i'm <span class="bungee text-6xl">HAELP</span>
      </Typewriter>
    </div>
  </div>
  <button
    class="absolute left-1/2 top-[80%] flex -translate-x-1/2 cursor-pointer flex-col items-center justify-center gap-[2px] text-white hover:gap-[5px] hover:font-bold"
    on:click={scrollDown}
  >
    Lets see some stuff
    <Fa icon={faChevronDown} />
  </button>
</div>

<div class="relative flex flex-col gap-20 p-20">
  <Fader className="flex items-center gap-10">
    <div class="flex-grow rounded-3xl bg-slate-800 bg-opacity-90 p-5" bind:this={firstItemRef}>
      <h1 class="text-2xl">Hi! I'm a person!!!!</h1>
      <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti veniam voluptatem dolores,
      voluptatibus architecto cupiditate quae a magnam est molestiae optio omnis? Consequatur mollitia
      expedita sequi accusantium nesciunt ipsum voluptatibus!
    </div>

    <div class="flex gap-2 opacity-60">
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
    </div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="/assets/hippo.png" alt="image of me" width="200" height="200" class="rounded-full" />
  </Fader>
  <Fader className="flex gap-10 items-center">
    <div>
      <div class="h-36 w-36 rounded-full bg-slate-800" />
    </div>

    <div class="flex gap-2 opacity-60">
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
      <div class="h-2 w-5 rounded-full bg-white" />
    </div>
    <div class="flex-grow rounded-3xl bg-slate-800 bg-opacity-90 p-5">
      <h1 class="text-2xl">View my blog</h1>
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente perspiciatis quos, nam inventore
      at ipsum deserunt enim repudiandae a saepe nesciunt, obcaecati iusto exercitationem mollitia. Nam
      quidem reprehenderit doloribus consequatur! Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Assumenda, quidem? Deleniti ipsam inventore cumque, aliquam dicta nostrum doloribus provident
      quis laboriosam neque consectetur! In quasi quae minima delectus tenetur totam?
    </div>
  </Fader>
</div>
