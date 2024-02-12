<script lang="ts">
  import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let code: string;
  export let className: string = "";

  let copyClearTimeout = 0;

  const copy = () => {
    navigator.clipboard.writeText(code);
    if (copyClearTimeout !== 0) clearTimeout(copyClearTimeout);
    copyClearTimeout = setTimeout(() => {
      copyClearTimeout = 0;
    }, 2000);
  };
</script>

<div
  class={`text-md relative w-full whitespace-pre rounded-2xl bg-slate-700 p-4 font-mono ${className} group !whitespace-pre-wrap`}
>
  <slot />
  <button
    on:click={copy}
    class={`absolute right-[.6rem] top-[.6rem] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-0 opacity-0 duration-100 hover:bg-opacity-10 group-hover:opacity-100 ${copyClearTimeout === 0 ? "text-white" : "text-green-400 !opacity-100"}`}
  >
    {#if copyClearTimeout === 0}
      <Fa icon={faCopy} size="lg" />
    {:else}
      <Fa icon={faCheck} size="lg" />
    {/if}
  </button>
</div>
