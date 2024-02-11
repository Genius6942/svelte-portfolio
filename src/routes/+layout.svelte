<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import Fa from "svelte-fa";

  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
  import { initBG } from "$lib/animations/bg";

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

  // bg thingy
  let canvasRef = null as unknown as HTMLCanvasElement;
  let bg: ReturnType<typeof initBG> | null = null;
  onMount(() => {
    bg = initBG(canvasRef);

    // @ts-ignore
    if (!import.meta.env.DEV && typeof eruda !== "undefined") eruda.destroy();

    return bg?.destroy;
  });
  onMount(() => {
    if ($page.route) {
      if (!$page.route || !$page.route.id) return;
      let route = $page.route.id as string;
      if (route.split("/").length >= 2) route = "/" + route.split("/")[1];
      calculatePositioning(route);

      if (route === "/") {
        if (bg) bg.enableMouse();
      } else {
        if (bg) bg.disableMouse();
      }
    }
  });
  page.subscribe(({ route: link }) => {
    if (link.id === "/" && bg) bg.enableMouse();
    else if (bg) bg.disableMouse();

    if (!link || !link.id) return;
    route = link.id as string;
    if (route.split("/").length >= 2) route = "/" + route.split("/")[1];
    calculatePositioning(route);
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

  let menuOpen = false;

  onMount(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        menuOpen = false;
      }
    };

    const clickListener = () => {
      if (menuOpen) {
        menuOpen = false;
      }
    };

    document.addEventListener("keydown", keyListener);
    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("keydown", keyListener);
      document.removeEventListener("click", clickListener);
    };
  });
</script>

<div class="flex h-screen w-screen flex-col overflow-hidden text-white">
  <div
    class="z-50 flex items-center border-b-2 border-b-gray-600 bg-gray-800 px-5 py-[11px] shadow-sm"
    id="header"
  >
    <a href="/" class="">HAELP</a>
    <div class="relative ml-auto flex gap-3" bind:this={navContainerRef}>
      {#each links as link}
        <a href={link.href} class="ml-3" bind:this={link.ref}>
          {link.name}
        </a>
      {/each}
      <div
        class="absolute -bottom-3 h-1 rounded-full bg-white transition-all"
        style={navBottomLeft !== null && navBottomWidth !== null
          ? `width: ${navBottomWidth}px; left: ${navBottomLeft}px; opacity: 1;`
          : "width: 0; left: 0; opacity: 0"}
      />
    </div>
    <div class="ml-8 mr-2 flex items-center gap-4">
      {#each icons as icon}
        <a href={icon.href} target="_blank">
          <Fa icon={icon.icon} scale={1.1} />
        </a>
      {/each}
      {#if $page.data.session && $page.data.session.user}
        <div class="relative z-10 h-6 w-6">
          <button
            class="h-6 w-6 rounded-full"
            on:click={(e) => {
              menuOpen = !menuOpen;
              e.preventDefault();
              e.stopImmediatePropagation();
              e.stopPropagation();
            }}
          >
            <img src={$page.data.session.user.image} alt="profile" class="rounded-full" />
          </button>
          {#if menuOpen}
            <div
              class="absolute right-0 top-full z-50 mt-4 flex flex-col items-stretch rounded-2xl bg-slate-900"
            >
              <a
                href="/account"
                class="flex cursor-pointer items-center whitespace-nowrap px-3 py-2 hover:bg-slate-700"
              >
                <Fa icon={faUser} class="mr-2" />
                Account
              </a>
              <div class="border-b-[1px] border-[#ffffff30]"></div>
              <a
                href="/logout"
                class="flex cursor-pointer items-center whitespace-nowrap px-3 py-2 hover:bg-slate-700"
              >
                <Fa icon={faSignOut} class="mr-2" />
                Log out
              </a>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
  <div class="flex-grow overflow-y-auto overflow-x-hidden bg-gray-700" id="main">
    <canvas
      bind:this={canvasRef}
      class="pointer-events-none absolute left-0 top-0"
      id="background"
    />
    <div
      class={"relative z-10 h-full " +
        ($page.url.pathname.replaceAll("/", "") === "" ? "" : "backdrop-blur-sm")}
    >
      <slot />
    </div>
  </div>
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
