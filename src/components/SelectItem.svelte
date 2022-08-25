<script>
    export let numRating;
</script>

<input type="radio" id={`rating-${numRating}`} name="rating" value={numRating}>
<label for={`rating-${numRating}`}>{numRating}</label>
