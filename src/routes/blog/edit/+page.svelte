<script lang="ts">
  export let data;
</script>

<div class="bg-slate-800 bg-opacity-90 p-20 rounded-3xl">
  <h1 class="text-4xl firacode mb-5 text-center">Drafts</h1>

  {#each data.posts as item}
    <a href={`/blog/edit/${item._id}`} class="text-2xl hover:underline"> {">"} {item.title}</a>
  {/each}
</div>
