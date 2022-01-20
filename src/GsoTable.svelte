<script>
    import GsoItem from './GsoItem.svelte'

    export let items
</script>

<main>
    <table>
        {#each items as item}
            <tr><GsoItem registryNumber={item.registryNumber} components={item.components} conc={item.conc}/></tr>
        {/each}
    </table>
</main>

