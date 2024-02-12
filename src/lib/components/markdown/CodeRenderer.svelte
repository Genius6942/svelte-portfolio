<script lang="ts">
  import CodeSnippet from "./CodeSnippet.svelte";

  import Prism from "prismjs";
  import "../../../styles/prism-one-dark.css";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-bash";
  import "prismjs/components/prism-css";
  import "prismjs/components/prism-csv";
  import "prismjs/components/prism-git";
  import "prismjs/components/prism-javascript";
  import "prismjs/components/prism-jsx";
  import "prismjs/components/prism-markdown";
  import "prismjs/components/prism-powershell";
  import "prismjs/components/prism-scss";
  import "prismjs/components/prism-brainfuck";

  export let lang: string;
  export let text: string;
  let formatted = "";

  if (Prism.languages[lang]) {
    formatted = Prism.highlight(text, Prism.languages[lang], lang);
  }
</script>

{#if formatted == ""}
  <CodeSnippet code={text}>{text}</CodeSnippet>
{:else}
  <CodeSnippet code={text}>{@html formatted}</CodeSnippet>
{/if}
