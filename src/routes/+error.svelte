<script lang="ts">
  import { page } from "$app/stores";

  const error = $page.error!;
  const status = $page.status!;

  const customErrorMessages: { [k: number]: string } = {
    404: "Couln't find that page..."
  };

  const message =
    status in customErrorMessages ? customErrorMessages[status] : error.message || "Page not found";
</script>

<main class="flex items-center justify-center h-full backdrop-blur-xl">
  <div class="max-w-md p-8 bg-slate-800 rounded-lg shadow-lg">
    <h1 class="text-7xl font-bold mb-4">Oh no! A {status} error occured.</h1>
    <p class="">{message}</p>
  </div>
</main>
