<script lang="ts">
  import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from "@milkdown/core";
  import { commonmark } from "@milkdown/preset-commonmark";

  import { history } from "@milkdown/plugin-history";
  import { clipboard } from "@milkdown/plugin-clipboard";
  import { prism } from "@milkdown/plugin-prism";
  import { indent } from "@milkdown/plugin-indent";
  import { upload } from "@milkdown/plugin-upload";

  import { nord } from "@milkdown/theme-nord";

  const markdown = `# Hello, Milkdown!`;

  let editor: Editor | null = null;

  const domEditor = (dom: any) => {
    const editr = Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, dom);
        ctx.set(defaultValueCtx, markdown);
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
      .create();

    editr.then((e) => {
      editor = e;
    });
  };
</script>

<div class="bg-slate-800 bg-opacity-90 p-20 rounded-3x w-full relative">
  <h1 class="text-4xl firacode mb-5 text-center">Edit Post</h1>

  <div use:domEditor class="outline-none w-full max-w-full box-border overflow-hidden p-4"></div>
</div>
