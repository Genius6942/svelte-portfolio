<script lang="ts">
  import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
  import { commonmark } from "@milkdown/preset-commonmark";
  import { nord } from "@milkdown/theme-nord";
  import { history } from "@milkdown/plugin-history";

  const markdown = `# Hello, Milkdown!`;

  const editor = (dom: any) => {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, dom);
        ctx.set(defaultValueCtx, markdown);
      })
      .config(nord)
      .use(commonmark)
      .use(history)
      .create();
  };
</script>

<div class="bg-slate-800 bg-opacity-90 p-20 rounded-3xl">
  <h1 class="text-4xl firacode mb-5 text-center">Edit Post</h1>
</div>
