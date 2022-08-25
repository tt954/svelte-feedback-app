<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const handleClick = dispatch("on-click");
</script>

<button on:click={handleClick}>
  <slot></slot>
</button>

<style>
</style>