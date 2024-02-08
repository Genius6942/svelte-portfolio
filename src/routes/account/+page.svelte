<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="flex h-full w-full justify-center items-center">
  <div class="bg-slate-800 p-4 rounded-3xl">
    {#if $page.data.session}
      <div class="flex items-center">
        <img
          src={$page.data.session.user.image}
          alt="user profile"
          class="w-14 h-14 rounded-full"
        />
        <div class="ml-4">
          <h1 class="text-xl font-semibold">{$page.data.session.user.name || "(no name)"}</h1>
          <p class="text-gray-400">{$page.data.session.user.email || "(no email)"}</p>
        </div>
      </div>
    {:else}
      <a
        href="/login"
        class="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Sign in
      </a>
    {/if}
  </div>
</main>
