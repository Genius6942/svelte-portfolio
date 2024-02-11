<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="flex h-full w-full items-center justify-center">
  <div class="rounded-3xl bg-slate-800 p-4">
    {#if $page.data.session}
      <div class="flex items-center">
        <img
          src={$page.data.session.user.image}
          alt="user profile"
          class="h-14 w-14 rounded-full"
        />
        <div class="ml-4">
          <h1 class="text-xl font-semibold">{$page.data.session.user.name || "(no name)"}</h1>
          <p class="text-gray-400">{$page.data.session.user.email || "(no email)"}</p>
        </div>
      </div>
    {:else}
      <a
        href="/login"
        class="flex w-full max-w-md items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
      >
        Sign in
      </a>
    {/if}
  </div>
</main>
