<script lang="ts">
  import Fa from "svelte-fa";
  import { faAdd } from "@fortawesome/free-solid-svg-icons";
</script>

<main class="flex w-full p-20 gap-5 items-stretch relative">
  <!-- main content -->
  <div class="flex-grow relative">
    <slot />
  </div>

  <div class="bg-slate-800"><div class="h-full w-1" /></div>

  <!-- Side panel -->
  <div class="w-60 flex flex-col gap-8">
    <!-- search box -->
    <div class="bg-slate-800 rounded-3xl px-5 py-3">
      <input
        type="text"
        class="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search..."
      />
    </div>
    <!-- tags filter -->
    <div class="bg-slate-800 rounded-3xl px-5 py-3">
      <h1 class="text-xl mb-2">Tags</h1>
      <div class="flex flex-wrap gap-2">
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >svelte</span
        >
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >javascript</span
        >
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >typescript</span
        >
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >webdev</span
        >
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >css</span
        >
        <span class="bg-slate-700 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600"
          >html</span
        >
      </div>
    </div>

    <!-- recent posts -->
    <div class="bg-slate-800 rounde`qd-3xl px-5 py-3">
      <h1 class="text-xl mb-2">Recent Posts</h1>
      <div class="flex flex-col gap-2">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="hover:underline">How to make a svelte app</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="hover:underline">How to make a svelte app</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="hover:underline">How to make a svelte app</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="hover:underline">How to make a svelte app</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="hover:underline">How to make a svelte app</a>
      </div>
    </div>
  </div>
  <a
    href="/blog/new"
    class="absolute bottom-6 right-4 w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-500 transition-all duration-300"
  >
    <Fa icon={faAdd} />
  </a>
</main>
