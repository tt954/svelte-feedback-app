<script>
  export let disabled = false;
</script>

<button {disabled}>
  <slot></slot>
</button>

<style>
    button {
        background-color: #F870A0;
        border-radius: 5px;
        color: #f4f4f6;
        cursor: pointer;
        width: 5em;
    }
    button:disabled {
        background-color: #ccc;
        cursor: auto;
    }
</style>