<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";
  export let item;

  const dispatch = createEventDispatcher();

  const handleDelete = itemId => {
    // need to delete an item in the feedback list in the parent App component
    // create event dispatcher, dispatch(customEvent, data)
    dispatch("delete-feedback", itemId);
  };
</script>

<Card>
  <div class="rating">{item.rating}</div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text">{item.text}</p>
</Card>

<style>
.rating {
  position: absolute;
}
.close {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  top: 20px; right: 20px;
}
</style>