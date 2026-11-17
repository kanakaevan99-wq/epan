
<script>
  import { page } from '$app/state';
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';
  import '../app.css';

  $: isAdmin = page.url.pathname.startsWith('/admin');
</script>

<svelte:head>
  <title>KRAJAN DIGITAL</title>

  <meta
    name="description"
    content="Portal informasi dan pelayanan digital Dusun Krajan"
  />
</svelte:head>

{#if !isAdmin}
  <Navbar />
{/if}

<slot />

{#if !isAdmin}
  <Footer />
{/if}
