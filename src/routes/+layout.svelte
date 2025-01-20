<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header.svelte'
  	import Footer from '../lib/components/Footer.svelte'

	let { children } = $props();
</script>

    <Header />
	<main class="grid justify-center items-center absolute top-16 bottom-16 px-8 border-t-[1px] border-solid border-steel-gray w-full">
		{@render children()}       
	</main>
    <Footer />
