<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback /> 
  <!--event forwarding, delete-feedback is forwarded to parent -->
{/each}