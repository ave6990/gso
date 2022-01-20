<script>
    import { onMount } from 'svelte'
    import GsoTable from './GsoTable.svelte'
    let items

    onMount(async () => {
        await fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                items = data.gsoTable
            })
    })
</script>

{#if items}
    <GsoTable items={[items[0], items[1]]}/>
{:else}
    <p>Waiting...</p>
{/if}

