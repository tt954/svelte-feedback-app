<script>
  // example of a component: includes logic (js), style (css), output (html)
  import FeedbackForm from "./components/FeedbackForm.svelte"
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";

  let feedback = [
    { id: 1, rating: 4, text: "Amazing food" },
    { id: 2, rating: 5, text: "Chick is so tender" }
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0) / count;

  const deleteFeedback = e => {
    // fetch itemId from event param
    const itemId = e.detail;
    feedback = feedback.filter(item => item.id !== itemId);
  };
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    max-width: 75vw;
    margin: 75px auto;
  }
</style>

<main>
  <FeedbackForm />
  <FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>