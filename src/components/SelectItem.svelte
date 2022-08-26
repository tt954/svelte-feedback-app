<script>
  import { createEventDispatcher } from 'svelte';

  export let numRating;
  const dispatch = createEventDispatcher();

  const handleChange = (e) => {
    numRating = e.currentTarget.value;
    dispatch('rating-select', numRating);
  };
</script>

<input
  type="radio"
  id={`rating-${numRating}`}
  name="rating"
  value={numRating}
  on:change={handleChange}
/>
<label for={`rating-${numRating}`}>{numRating}</label>

<style>
  input {
    display: none;
  }
  label:before {
    display: inline-block;
    content: '\f005';
    font-family: FontAwesome;
    font-size: 1em;
    margin: 0.25em;
  }
</style>
