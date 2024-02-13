<script lang="ts">
  export let data;

  $: data = {
    ...data,
    recent: data.recent.map((post) => ({ ...post, timestamp: new Date(post.timestamp) }))
  };
</script>

<div class="firacode rounded-3xl bg-slate-800 bg-opacity-90 p-20">
  <h1 class="mb-10 border-b-2 border-slate-300 pb-10 text-center text-6xl font-bold">haelp blog</h1>
  <div class="flex flex-col gap-10">
    {#each data.recent as post}
      <a
        href={`blog/post/${post._id}`}
        class="mb-10 flex cursor-pointer items-stretch rounded-3xl bg-slate-700 p-5 hover:bg-slate-600 hover:has-[.tag:hover]:bg-slate-700"
        ><div>
          <h2 class="text-4xl font-bold">{post.title}</h2>
          <div class="mt-1 flex items-center">
            <p class="text-slate-400">{post.author}</p>
            <div class="mx-3 border-r-2 border-r-slate-300" />
            <div class="flex items-center gap-2">
              {#each post.tags as tag}
                <a
                  href={`blog/tag/${tag}`}
                  class="tag rounded-full bg-slate-500 px-2 py-[.15rem] text-slate-300 hover:bg-slate-300 hover:text-slate-600"
                  >{tag}</a
                >
              {/each}
            </div>
          </div>
        </div>
        <div class="ml-auto flex items-center">
          <p class="text-slate-400">{post.timestamp.toLocaleDateString()}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
