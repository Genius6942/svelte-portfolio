<script lang="ts">
  import CodeRenderer from "$lib/components/markdown/CodeRenderer.svelte";
  import CodeInline from "$lib/components/markdown/CodeInline.svelte";

  import SvelteMarkdown from "svelte-markdown";
  export let data;

  $: data.post.timestamp = new Date(data.post.timestamp);

  let width = 0;
</script>

<svelte:head>
  <title>haelp blog | {data.post.title}</title>
</svelte:head>

<div class="relative flex w-full justify-center">
  <div class="relative w-full max-w-[1000px] rounded-3xl bg-slate-800 bg-opacity-90 p-20">
    <h1 class="text-center text-4xl">{data.post.title}</h1>

    <div class="text-md mt-3 flex items-center gap-2 text-gray-300">
      <span class="mr-auto text-xl">Author: {data.post.author}</span>
      <div class="text-md flex flex-col items-end gap-1">
        <div>
          Published: {data.post.timestamp.getDate()}/{data.post.timestamp.getMonth()}/{data.post.timestamp.getFullYear()}
        </div>
        <div>
          {Math.ceil(data.post.content.split("\n").length / 200)} minute read
        </div>
      </div>
    </div>

    <div class="my-3 h-[2px] bg-gray-300" bind:offsetWidth={width} />

    <div class="markdown prose prose-slate prose-invert" style={`min-width: ${width}px`}>
      <SvelteMarkdown
        source={data.post.content}
        renderers={{ code: CodeRenderer, codespan: CodeInline }}
      />
    </div>
  </div>
</div>
