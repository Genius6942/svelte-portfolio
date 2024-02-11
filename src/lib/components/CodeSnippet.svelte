<script lang="ts">
  export let code: string;
  export let className: string = "";

  const copy = () => navigator.clipboard.writeText(code);
</script>

<div
  class={`text-md whitespace-pre rounded-2xl bg-slate-700 p-4 font-mono ${className} !whitespace-pre-wrap`}
>
  <slot />
</div>
