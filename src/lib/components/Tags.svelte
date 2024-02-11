<script lang="ts">
  export let tags: string[] = [];
  export let placeholder = "Enter some tags...";
  export let autocomplete: string[] = [];

  $: tags = [...new Set(tags)];

  let currentInput = "";

  let focused = false;

  const handleAdd = () => {
    if (currentInput === "") return;
    tags = [...tags, currentInput];
    currentInput = "";
    selectedSuggestion = -1;
  };

  const getCaretIndex = (element: HTMLElement) => {
    let position = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection = window.getSelection()!;
      if (selection.rangeCount !== 0) {
        const range = window.getSelection()?.getRangeAt(0)!;
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        position = preCaretRange.toString().length;
      }
    }
    return position;
  };

  const handleKeydown = (e: KeyboardEvent) => {
    focused = true;
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      if (autocompletedInput.length > 0 && selectedSuggestion >= 0) {
        currentInput = autocompletedInput[selectedSuggestion];
      }
      handleAdd();
    } else if (e.key === "Backspace" && e.target && getCaretIndex(e.target as HTMLElement) === 0) {
      e.preventDefault();
      tags = tags.slice(0, -1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedSuggestion -= 1;
      if (selectedSuggestion < 0) selectedSuggestion = autocompletedInput.length - 1;
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedSuggestion = (selectedSuggestion + 1) % autocompletedInput.length;
    } else if (e.key === "Escape") {
      e.preventDefault();
      selectedSuggestion = -1;
      focused = false;
    } else {
      selectedSuggestion = -1;
    }
  };

  $: autocompletedInput = autocomplete
    .filter((tag) => tag.includes(currentInput) && !tags.includes(tag))
    .sort((a, b) => a.indexOf(currentInput) - b.indexOf(currentInput));

  let selectedSuggestion = -1;
</script>

<div
  class="flex w-full max-w-full flex-wrap items-center gap-2 rounded-[24px] border-2 border-dashed border-white p-1"
>
  {#each tags as tag, index}
    <div
      class="flex items-center gap-2 whitespace-nowrap rounded-full bg-slate-700 px-2 py-1 text-white"
    >
      {tag}
      <button
        class="text-red-500"
        on:click={() => {
          tags = tags.filter((_, i) => i !== index);
        }}>×</button
      >
    </div>
  {/each}
  <div class="relative flex-grow">
    <div
      role="textbox"
      tabindex="0"
      contenteditable="true"
      class="w-full rounded-[24px] border-none bg-transparent px-2 outline-none focus-visible:border-none focus-visible:outline-none"
      bind:innerText={currentInput}
      on:keydown={handleKeydown}
      on:focus={() => (focused = true)}
      on:blur={() => (focused = false)}
      placeholder={tags.length === 0 ? placeholder : ""}
    />

    {#if focused && autocompletedInput.length > 0}
      <div
        class="absolute left-0 top-full flex flex-col items-stretch whitespace-nowrap rounded-lg border-2 border-slate-300 bg-slate-900 text-left"
      >
        {#each autocompletedInput.slice(0, Math.min(5, autocompletedInput.length)) as tag, index}
          <button
            class={`px-2 py-1 text-left hover:bg-slate-700 ${index !== 0 ? "border-t border-slate-700" : ""} ${
              selectedSuggestion === index ? "bg-slate-700" : ""
            } ${index === 0 ? "rounded-t-lg" : ""} ${index === autocompletedInput.length - 1 ? "rounded-b-lg" : ""}`}
            on:mousedown={(e) => {
              e.stopImmediatePropagation();
              e.stopPropagation();
              e.preventDefault();
              tags = [...tags, tag];
              currentInput = "";
            }}
          >
            {tag}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>
