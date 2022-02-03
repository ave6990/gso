<script>
    import { onMount } from 'svelte'
    import GsoTable from './GsoTable.svelte'
    export let header

    let uploadFiles
    let content

    onMount(async () => {
        await fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(data => {
                content = JSON.parse(data.gsoTable)
            })
    })

    const submitForm = (event) {
        event.preventDefault()
        const data = new FormData()
        data.append('files', {type: 'test_message', value: true})

        fetch('http://localhost:8081/', {
            method: 'POST',
            headers: [['Content-Type', 'multipart/form-data']],
            body: data,
        })
        .then(response => {
        })
        .catch(error => {
        })
    }
</script>

<header>
    {header}
</header>
<nav>

</nav>
<main>
    <form on:submit={submitForm}>
        <input type='file' bind:files={uploadFiles}/>
        <input type='submit'/>
    </form>
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
        font-weight: bold;
        padding: 0px;
        border: solid 1px #034780;
        border-radius: 4px;
        background: #034780;
        color: white;
    }

    header {
        grid-row: 1;
        grid-column: 1 / 4;
        padding-left: 10px;
    }

    footer {
        grid-row: 3;
        grid-column: 1 / 4;
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
