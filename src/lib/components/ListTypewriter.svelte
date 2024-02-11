<script lang="ts">
  import Typewriter from "svelte-typewriter/Typewriter.svelte";

  export let items: string[];

  let item = 0;

  setInterval(() => {
    item++;
  }, 4000);
</script>

{#key item}
  <Typewriter keepCursorOnFinish showCursorOnDelay interval={100} delay={1000}>
    {items[item % items.length]}
  </Typewriter>
{/key}
