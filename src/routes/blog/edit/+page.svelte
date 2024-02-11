<script lang="ts">
  export let data;
</script>

<div class="rounded-3xl bg-slate-800 bg-opacity-90 p-20">
  <h1 class="firacode mb-5 text-center text-4xl">Drafts</h1>

  {#each data.posts as item}
    <a href={`/blog/edit/${item._id}`} class="text-2xl hover:underline"> {">"} {item.title}</a><br
    />
  {/each}
</div>
