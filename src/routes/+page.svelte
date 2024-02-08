<script lang="ts">
  // @ts-ignore
  import Fa from "svelte-fa";
  import Fader from "$lib/FadeWrapper.svelte";
  import { onMount } from "svelte";
  import { init } from "$lib/blob.js";
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

<div class="relative p-20 flex flex-col gap-20">
  <Fader className="flex items-center gap-10">
    <div class="flex-grow rounded-3xl bg-slate-800 bg-opacity-90 p-5" bind:this={firstItemRef}>
      <h1 class="text-2xl">Hi! I'm a person!!!!</h1>
      <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti veniam voluptatem dolores,
      voluptatibus architecto cupiditate quae a magnam est molestiae optio omnis? Consequatur mollitia
      expedita sequi accusantium nesciunt ipsum voluptatibus!
    </div>

    <div class="flex gap-2 opacity-60">
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
    </div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="/assets/hippo.png" alt="image of me" width="200" height="200" class="rounded-full" />
  </Fader>
  <Fader className="flex gap-10 items-center">
    <div>
      <div class="rounded-full bg-slate-800 w-36 h-36" />
    </div>

    <div class="flex gap-2 opacity-60">
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
      <div class="bg-white rounded-full w-5 h-2" />
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
