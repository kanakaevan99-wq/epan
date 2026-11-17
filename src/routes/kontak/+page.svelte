<script>
  import { onMount } from 'svelte';

  import {
    defaultKontak,
    getData
  } from '$lib/siteData.js';

  let kontak = defaultKontak;

  onMount(() => {
    kontak = getData(
      'krajan_kontak',
      defaultKontak
    );
  });
</script>

<svelte:head>
  <title>Kontak — KRAJAN DIGITAL</title>
</svelte:head>

<section class="page">

  <div class="container">

    <span class="eyebrow">
      HUBUNGI KAMI
    </span>

    <h1>Kontak</h1>

    <p class="intro">
      Hubungi pengelola KRAJAN DIGITAL.
    </p>

    <div class="contact-grid">

      <div class="card">

        <div class="icon">📍</div>

        <h2>Alamat</h2>

        <p>
          {kontak.alamat}
        </p>

      </div>


      <div class="card">

        <div class="icon">☎️</div>

        <h2>Telepon</h2>

        <p>
          {kontak.telepon}
        </p>

      </div>


      <div class="card">

        <div class="icon">✉️</div>

        <h2>Email</h2>

        <p>
          {kontak.email}
        </p>

      </div>


      <div class="card">

        <div class="icon">💬</div>

        <h2>WhatsApp</h2>

        <p>
          {kontak.whatsapp}
        </p>

      </div>

    </div>

  </div>

</section>

<style>

.page {
  padding: 75px 0;
}

.eyebrow {
  color: #1f7a4d;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

h1 {
  font-family: 'Plus Jakarta Sans';
  font-size: 50px;
  margin: 12px 0;
}

.intro {
  color: #718078;
  margin-bottom: 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.card {
  padding: 30px;
}

.icon {
  font-size: 40px;
}

h2 {
  font-size: 21px;
}

p {
  color: #718078;
  line-height: 1.7;
}

@media(max-width:600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

</style>