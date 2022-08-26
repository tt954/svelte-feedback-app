<script>
  import { v4 as uuidv4 } from 'uuid';
  import Card from './Card.svelte';
  import RatingSelect from './RatingSelect.svelte';
  import Button from './Button.svelte';

  let rating = 5;
  let text = '';
  let min = 10;
  let message;
  let btnDisabled = true;

  const handleValidation = () => {
    if (text.trim().length <= min) {
      message = `Text must at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleSubmit = () => {
    if (!btnDisabled) {
      const newFeedback = {
        id: uuidv4(),
        rating: +rating,
        text,
      };
      console.log(newFeedback);
    }
  };
</script>

<Card>
  <header>Give feedback</header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div>
      <input
        type="text"
        on:input={handleValidation}
        bind:value={text}
        placeholder="What are the main reasons for your ratings?"
      />
      <Button disabled={btnDisabled}>Send</Button>
      <p>{rating}</p>
    </div>
    {#if message}
      <p>{message}</p>
    {/if}
  </form>
</Card>

<style>
</style>
