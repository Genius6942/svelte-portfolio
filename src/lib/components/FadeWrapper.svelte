<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let className = "";
  let ref = null as HTMLDivElement | null;
  let show = false;
  const listener = () => {
    if (!ref) return;
    if (ref?.getBoundingClientRect().y <= window.innerHeight + window.scrollY) show = true;
    else show = false;
  };
  onMount(() => {
    window.addEventListener("scroll", listener, true);

    return () => document.removeEventListener("scroll", listener);
  });
</script>

<div
  class={className +
    " transition-all duration-1000 " +
    (show ? "mb-0 mt-0 opacity-100" : "-mb-12 mt-12 opacity-0")}
  bind:this={ref}
>
  <slot />
</div>
