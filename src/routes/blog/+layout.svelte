<script lang="ts">
  import { page } from "$app/stores";
  import Fa from "svelte-fa";
  import { faAdd, faEdit, faSignIn } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";

  export let data;
  const { tags } = data;
  let width: number | null = null;
  onMount(() => {
    if (typeof window === "undefined") return;
    width = window.innerWidth;
    const handleResize = () => {
      width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
</script>

<main class="relative flex h-full w-full items-stretch gap-5 overflow-auto overflow-x-hidden p-20">
  <!-- main content -->
  <div
    class="relative flex-grow"
    style={`max-width: ${typeof window !== undefined && width ? width - 240 - 80 * 2 - 20 * 2 : "none"}px`}
  >
    <slot />
  </div>

  <div class="bg-slate-800"><div class="h-full w-1" /></div>

  <!-- Side panel -->
  <div class="flex w-60 min-w-60 flex-col gap-8">
    <!-- login button -->
    {#if !$page.data.session || !$page.data.session.user}
      <a
        href="/login"
        class="flex items-center justify-center gap-2 rounded-3xl bg-slate-800 px-5 py-2 text-center text-xl hover:bg-slate-700"
      >
        Sign In <Fa icon={faSignIn} class="-mb-1" />
      </a>
    {/if}
    <!-- link to edit page -->
    {#if $page.data.session && $page.data.session.user.type === "admin"}
      <a
        href="/blog/edit"
        class="flex items-center justify-center gap-2 rounded-3xl bg-slate-800 px-5 py-2 text-center text-xl hover:bg-slate-700"
      >
        Edit Posts <Fa icon={faEdit} />
      </a>
    {/if}
    <!-- search box -->
    <div class="rounded-3xl bg-slate-800 px-5 py-3">
      <input
        type="text"
        class="w-full border-none bg-transparent focus:outline-none"
        placeholder="Search..."
      />
    </div>
    <!-- tags filter -->
    <div class="rounded-3xl bg-slate-800 px-5 py-3">
      <h1 class="mb-2 text-xl">Tags</h1>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <span class="cursor-pointer rounded-full bg-slate-700 px-3 py-1 hover:bg-slate-600">
            {tag}
          </span>
        {/each}
      </div>
    </div>

    <!-- recent posts -->
    <div class="rounded-3xl bg-slate-800 px-5 py-3">
      <h1 class="mb-2 text-xl">Recent Posts</h1>
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
    class="absolute bottom-6 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-600 transition-all duration-300 hover:bg-slate-500"
  >
    <Fa icon={faAdd} />
  </a>
</main>
