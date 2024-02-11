<script lang="ts">
  export let data;
  import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
  import { commonmark } from "@milkdown/preset-commonmark";

  import { history } from "@milkdown/plugin-history";
  import { clipboard } from "@milkdown/plugin-clipboard";
  import { prism } from "@milkdown/plugin-prism";
  import { indent } from "@milkdown/plugin-indent";
  import { upload } from "@milkdown/plugin-upload";

  import { nord } from "@milkdown/theme-nord";
  import { listener, listenerCtx } from "@milkdown/plugin-listener";
  import type { BlogPost } from "$lib/types/index.js";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import Fa from "svelte-fa";
  import { faCheck, faCloud, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
  import "prism-themes/themes/prism-nord.css";

  import Tags from "$lib/components/Tags.svelte";

  let editor: Editor | null = null;
  let loaded = false;
  let saving = false;

  $: (() => {
    if (typeof window === "undefined") return;
    if (saving) window.onbeforeunload = () => true;
    else window.onbeforeunload = null;
  })();

  onMount(() => {
    if (loaded) return;
    loaded = true;
  });

  const post: BlogPost = JSON.parse(JSON.stringify(data.post));

  $: (() => {
    if (!loaded) return;
    const current = JSON.stringify(post);
    saving = true;
    setTimeout(async () => {
      if (current === JSON.stringify(post)) {
        try {
          const res = await fetch(`/blog/edit/${post._id}/update`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
          }).then((r) => r.json());
          if (!res.success) throw new Error(res.message);
        } catch (error) {
          console.error(error);
          alert("Failed to update post");
        }
        saving = false;
      } else {
        saving = true;
      }
    }, 1000);
  })();

  const domEditor = (dom: any) => {
    const editr = Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, dom);
        ctx.set(defaultValueCtx, post.content);
        const l = ctx.get(listenerCtx);
        l.markdownUpdated((ctx, markdown, prevMarkdown) => {
          if (markdown !== prevMarkdown) {
            post.content = markdown;
          }
        });
      })
      // nord breaks styling in the dark theme and bypasses tailwind prose
      .config(nord)
      // .config((ctx) => {
      //   ctx.update(editorViewOptionsCtx, (prev) => ({
      //     ...prev,
      //     attributes: {
      //       class: "milkdown milkdown-theme-haelp"
      //     }
      //   }));
      // })
      .use(commonmark)
      .use(history)
      .use(clipboard)
      .use(prism)
      .use(indent)
      .use(upload)
      .use(listener)
      .create();

    editr.then((e) => {
      editor = e;
    });
  };
</script>

<div class="relative w-full rounded-3xl bg-slate-800 bg-opacity-90 p-20">
  <div class="mb-2 flex items-center">
    <h1 class="firacode my-2 mr-auto text-4xl">Edit Post</h1>
    <div class="flex items-center gap-3">
      <button
        class="flex items-center justify-center gap-2 rounded-full border-2 border-white px-3 py-1 hover:bg-slate-700"
      >
        Publish
        <Fa icon={faUpload} />
      </button>
      <button
        on:click={() => {
          if (confirm("Are you sure you want to delete this post?")) {
            fetch(`/blog/edit/${post._id}/update`, {
              method: "DELETE"
            }).then(() => {
              goto("/blog");
            });
          }
        }}
        class="flex items-center justify-center gap-2 rounded-full border-2 border-white px-3 py-1 hover:bg-slate-700"
      >
        Delete
        <Fa icon={faTrash} />
      </button>
      <div
        class={`flex items-center gap-2 transition-none ${saving ? "text-blue-400" : "text-green-500"}`}
      >
        {#if saving}
          <Fa icon={faCloud} /> Saving...
        {:else}
          <Fa icon={faCheck} /> Saved!
        {/if}
      </div>
    </div>
  </div>

  <div class="flex items-center gap-2 text-2xl">
    Title:
    <input
      bind:value={post.title}
      type="text"
      class="focus-visible:bg- w-full rounded-lg border-2 border-dashed border-gray-300 bg-transparent px-4 py-1 focus-visible:border-solid"
    />
  </div>
  <div class="mt-2 flex items-center gap-2 text-lg">
    Tags:
    <Tags bind:tags={post.tags} autocomplete={data.tags} placeholder="Enter some tags..." />
  </div>

  <div class="mt-7 border-t-2 border-gray-400" />

  <div use:domEditor class="box-border w-full max-w-full overflow-hidden p-4 outline-none"></div>
</div>
