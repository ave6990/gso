<script>
    import { onMount } from 'svelte'

    let content

    onMount(async () => {
        await fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                content = data.gsoTable
            })
    })
</script>

<p>
    {#if content}
        {content}
    {:else}
        waiting...
    {/if}
</p>

