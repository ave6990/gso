<script>
    import { onMount } from 'svelte'
    import GsoTable from './GsoTable.svelte'
    export let header
    let content

    onMount(async () => {
        await fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(data => {
                content = JSON.parse(data.gsoTable)
            })
    })
</script>

<header>
    <p>{header}</p>
</header>
<main>
    {#if content}
        <GsoTable items={[content[0], content[1]]}/>
    {:else}
        <p>Waiting...</p>
    {/if}
</main>
<footer>
    <copyright>Copyright © 2022 Александр Ермолаев</copyright>
    <address>e-mail: ave6990@ya.ru</address>
</footer>

<style>
    header, footer {
        font-size: 18px;
        padding: 6px;
        /*background: #034769;
        color: #fafafa;*/
        border: solid 1px #034769;
        border-radius: 4px;
        color: #034769;
    }

    header {
        grid-row: 1;
        grid-column: 1 / 4;
        padding: 0px;
    }

    footer {
        grid-row: 3;
        grid-column: 1 / 4;
        padding: 0px;
        text-align: center;
    }

	main {
        grid-row: 2;
        grid-column: 1 / 4;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
