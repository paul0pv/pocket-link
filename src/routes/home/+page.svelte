<script lang="ts">

</script>

<nav class="h-16 w-full lg:w-5/6 xl:w-3/4 2xl:w-1/2 rounded-lg text-light-gray bg-steel-gray bg-opacity-75 py-4">
    <ul class="flex justify-evenly">
        <li class="w-16">Dashboard</li>
        <li class="w-16">More tools</li>
        <li class="w-16">Settings</li>
    </ul>
</nav>
<section class="grid w-full lg:w-5/6 xl:w-3/4 2xl:w-1/2" id='app'>
    <aside class="[grid:aside]">
        Aside
    </aside>
    <article class="[grid-area:main]">
        Article
    </article>
</section>

<style>
    #app {
        grid-template-areas: 'aside main';
        grid-template-columns: 350px 1fr;
        grid-template-rows: 1fr;
    }

    .dashboard-main article {

    }

    .dashboard-main aside {

    }

</style>