<script lang="ts">
  import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from "@milkdown/core";
  import { commonmark } from "@milkdown/preset-commonmark";

  import { history } from "@milkdown/plugin-history";
  import { nord } from "@milkdown/theme-nord";

  // You should import these predefined prosemirror css styles.
  // import "prosemirror-view/style/prosemirror.css";

  // // If you need to style tables, you should import this css file.
  // import "prosemirror-tables/style/tables.css";

  // // Your css file.
  // // import "./milkdown.css";

  // // Your config.

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
      .create();

    editr.then((e) => {
      editor = e;
    });
  };
</script>

<div class="bg-slate-800 bg-opacity-90 p-20 rounded-3xl">
  <h1 class="text-4xl firacode mb-5 text-center">Edit Post</h1>

  <div
    use:domEditor
    class="prose prose-invert prose-slate outline-none w-full max-w-full box-border overflow-hidden p-4"
  ></div>
</div>
