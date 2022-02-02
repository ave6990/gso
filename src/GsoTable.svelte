<script>
    export let items
</script>

<main>
    <table>
        <tr>
            <th>Components</th>
            <th>Concentration</th>
            <th>Registry Number</th>
        </tr>
        {#each items as item}
            <tr>
            <td>{item.components}</td>
            <td>{item.conc}</td>
            <td>{item.registryNumber}</td>
        {/each}
    </table>
</main>

<style>
    table {
        border-collapse: collapse;
        background: white;
        margin-top: 10px;
        overflow: scroll;
    }

    th {
        background: #034769;
        color: white;
    }

    td {
        background: #d8e6f3;
    }

    td, th {
        font-size: 12pt;
        border-width: 1px;
        border-style: solid;
        border-color: white;
        padding: 3px;
        margin: 0;
    }
</style>
