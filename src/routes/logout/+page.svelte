<script lang="ts">
  import { signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  import Fa from "svelte-fa";
  import { faSignOut } from "@fortawesome/free-solid-svg-icons";
</script>

<main class="flex h-full w-full items-center justify-center">
  <div class="rounded-3xl bg-slate-800 p-20">
    <h1 class="firacode mb-5 text-center text-4xl">Log Out</h1>

    {#if !$page.data.session}
      <p>You are not signed in.</p>
    {:else}
      <button
        on:click={() => signOut()}
        type="button"
        class="flex w-full max-w-md items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200"
      >
        <Fa icon={faSignOut} scale={1.1} class="mr-2" />
        Log out
      </button>
    {/if}
  </div>
</main>
