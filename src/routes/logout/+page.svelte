<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  import Fa from "svelte-fa";
  import { faSignOut } from "@fortawesome/free-solid-svg-icons";
</script>

<main class="flex h-full w-full justify-center items-center">
  <div class="bg-slate-800 p-20 rounded-3xl">
    <h1 class="text-4xl firacode mb-5 text-center">Log Out</h1>

    {#if !$page.data.session}
      <p>You are not signed in.</p>
    {:else}
      <button
        on:click={() => signOut()}
        type="button"
        class="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <Fa icon={faSignOut} scale={1.1} class="mr-2" />
        Log out
      </button>
    {/if}
  </div>
</main>
