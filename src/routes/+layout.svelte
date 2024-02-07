<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  // @ts-ignore
  import Fa from "svelte-fa/src/fa.svelte";

  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import { initBG } from "$lib/bg";

  const links: { name: string; href: string; ref: null | HTMLAnchorElement }[] = [
    { name: "Home", href: "/", ref: null },
    { name: "About", href: "/about", ref: null },
    { name: "Blog", href: "/blog", ref: null },
    { name: "Projects", href: "/projects", ref: null },
    { name: "Contact", href: "/contact", ref: null }
  ];

  const icons = [
    { name: "Github", href: "https://github.com/genius6942", icon: faGithub },
    { name: "Email", href: "mailto:haelpf@gmail.com", icon: faEnvelope }
  ];

  let route = null as unknown as string;
  let navContainerRef = null as unknown as HTMLDivElement;
  let navBottomWidth = null as unknown as number;
  let navBottomLeft = null as unknown as number;
  const calculatePositioning = (link: string) => {
    if (!navContainerRef) return;
    const containerBounds = navContainerRef.getBoundingClientRect();
    const linkBounds = links
      .find(({ href }) => href === link)
      ?.ref?.getBoundingClientRect() as DOMRect;
    if (!linkBounds) {
      navBottomLeft = null as unknown as number;
      navBottomWidth = null as unknown as number;
      return;
    }
    navBottomLeft = linkBounds.left - containerBounds.left;
    navBottomWidth = linkBounds.width;
  };
  page.subscribe(({ route: link }) => {
    if (!link || !link.id) return;
    route = link.id as string;
    calculatePositioning(route);
  });
  onMount(() => {
    if ($page.route) calculatePositioning($page.route.id as string);
  });

  // bg thingy
  let canvasRef = null as unknown as HTMLCanvasElement;
  onMount(() => {
    const destroy = initBG(canvasRef);

    // @ts-ignore
    if (!import.meta.env.DEV) eruda.destroy();

    return destroy;
  });

  // view transitions stuff
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    // @ts-expect-error
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      // @ts-expect-error
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="h-screen w-screen overflow-hidden flex flex-col text-white">
  <div
    class="px-5 py-[11px] flex items-center shadow-sm border-b-2 border-b-gray-600 bg-gray-800 z-10"
    id="header"
  >
    <a href="/" class="">HAELP</a>
    <div class="ml-auto flex gap-3 relative" bind:this={navContainerRef}>
      {#each links as link}
        <a href={link.href} class="ml-3" bind:this={link.ref}>
          {link.name}
        </a>
      {/each}
      <div
        class="h-1 absolute -bottom-3 bg-white rounded-full transition-all"
        style={navBottomLeft !== null && navBottomWidth !== null
          ? `width: ${navBottomWidth}px; left: ${navBottomLeft}px; opacity: 1;`
          : "width: 0; left: 0; opacity: 0"}
      />
    </div>
    <div class="mr-3 flex gap-4 ml-8">
      {#each icons as icon}
        <a href={icon.href} target="_blank">
          <Fa icon={icon.icon} scale={1.1} />
        </a>
      {/each}
    </div>
  </div>
  <main class="flex-grow overflow-y-auto overflow-x-hidden bg-gray-700" id="main">
    <canvas bind:this={canvasRef} class="absolute top-0 left-0" id="background" />
    <div
      class={"z-10 relative h-full " +
        ($page.url.pathname.replaceAll("/", "") === "" ? "" : "backdrop-blur-md")}
    >
      <slot />
    </div>
  </main>
</div>

<style>
  /* view transitions */
  /* @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  } */

  /* disable header transition */
  #header {
    view-transition-name: header;
  }
</style>
