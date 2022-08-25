<script>
    import Card from './Card.svelte'       
    import Button from './Button.svelte'
    
    let text = '';
    let btnDisabled = true;
    let min = 10;
    let message;
    
    const handleValidation = () => {
        if (text.trim().length <= min) {
            message = `Text must at least ${min} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    }
</script>

<Card>
    <header>Give feedback</header>
    <form>
        <!--Rating select-->
        <div>
            <input type='text' on:input={handleValidation} bind:value={text} placeholder="What are the main reasons for your ratings?">
            <Button disabled={btnDisabled}>Send</Button>
        </div>
        {#if message}
            <p>{message}</p>
        {/if}
    </form>
</Card>

<style>
</style>