<script>
    import SelectItem from './SelectItem'
</script>

<fieldset class="rating-select">
    {#each {length: 5} as _, i}
        <div><SelectItem numRating={i + 1} /></div>
    {/each}
</fieldset>

<style>
    .rating-select {
        margin: 2em auto;
    }
    input {
        display: none;
    } 
    label:before {
        display: inline-block;
        content: "\f005";
        font-family: FontAwesome;
        font-size: 1em;
        margin: 0.25em;
    }
</style>