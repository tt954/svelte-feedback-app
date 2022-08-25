<script>
  export let count;
  export let average;
</script>

<div class="stats">
  <p>{count} Reviews</p>
  <p>{average} out of 5</p>
</div>

<style>
  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>