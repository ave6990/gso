<script>
    import { onMount } from 'svelte'
    import Main from './Main.svelte'

	export let name

    let content

    console.info('hello')
</script>

<Main header='БД ГСО'/>

<style>
    :global(body) {
        margin: 0px;
        padding: 0px;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 150px 1fr 150px;
        grid-template-rows: min-content 1fr min-content;
    }
</style>


