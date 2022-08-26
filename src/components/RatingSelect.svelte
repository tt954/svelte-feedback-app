<script>
  import SelectItem from './SelectItem.svelte';
</script>

<fieldset class="rating-select">
  {#each { length: 5 } as _, i}
    <div><SelectItem numRating={i + 1} on:rating-select /></div>
  {/each}
</fieldset>

<style>
  .rating-select {
    margin: 2em auto;
  }
</style>
