<script>
  import { onMount } from 'svelte';

  import {
    defaultSite,
    defaultGaleri,
    getData
  } from '$lib/siteData.js';

  let site = defaultSite;
  let galeri = defaultGaleri;
  let selected = null;

  onMount(() => {
    site = getData('krajan_site', defaultSite);

    // Admin menyimpan di field "foto", siteData.js di field "gambar".
    // Dua-duanya dibaca supaya foto selalu muncul.
    galeri = getData('krajan_galeri', defaultGaleri).map((g) => ({
      ...g,
      gambar: g.foto || g.gambar || ''
    }));
  });

  function bukaFoto(item) {
    selected = item;
  }

  function tutupFoto() {
    selected = null;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && selected) tutupFoto();
  }

  // Kalau file foto tidak ditemukan, tampilkan ikon pengganti
  function fotoGagal(item) {
    item.rusak = true;
    galeri = galeri;
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Galeri — {site.nama}</title>
</svelte:head>


<!-- HEADER HALAMAN -->

<section class="page-header">
  <div class="container">
    <span class="eyebrow">DOKUMENTASI</span>

    <h1>Galeri Dusun</h1>

    <p>
      Dokumentasi kegiatan dan berbagai aktivitas
      warga Dusun Krajan.
    </p>
  </div>
</section>


<!-- GALERI -->

<section class="section">
  <div class="container">

    {#if galeri.length > 0}

      <div class="gallery-grid">

        {#each galeri as item, i (item.id ?? `${item.judul}-${i}`)}

          <button
            class="gallery-card"
            type="button"
            disabled={!item.gambar || item.rusak}
            onclick={() => bukaFoto(item)}
          >

            <div class="image-wrapper">

              {#if item.gambar && !item.rusak}
                <img
                  src={item.gambar}
                  alt={item.judul}
                  loading="lazy"
                  onerror={() => fotoGagal(item)}
                />

                <div class="image-overlay">
                  <span aria-hidden="true">🔍</span>
                  <small>Lihat foto</small>
                </div>
              {:else}
                <div class="no-photo" aria-hidden="true">🖼️</div>
              {/if}

            </div>

            <div class="gallery-title">
              <h3>{item.judul}</h3>
            </div>

          </button>

        {/each}

      </div>

    {:else}

      <div class="empty">
        <div aria-hidden="true">🖼️</div>
        <h3>Belum ada foto</h3>
        <p>Dokumentasi kegiatan belum tersedia.</p>
      </div>

    {/if}

  </div>
</section>


<!-- MODAL FOTO -->

{#if selected}

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="modal" role="presentation" onclick={tutupFoto}>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class="modal-content"
      role="presentation"
      onclick={(event) => event.stopPropagation()}
    >

      <button
        class="close"
        type="button"
        aria-label="Tutup foto"
        onclick={tutupFoto}
      >
        ✕
      </button>

      <img src={selected.gambar} alt={selected.judul} />

      <div class="modal-caption">
        <h2>{selected.judul}</h2>
      </div>

    </div>

  </div>

{/if}


<style>
  /* HEADER HALAMAN */

  .page-header { padding: 70px 0 65px; background: linear-gradient(135deg, #edf7ef, #f8fbf7); }
  .eyebrow { color: #1f7a4d; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; }
  .page-header h1 { margin: 12px 0; font-family: 'Plus Jakarta Sans'; font-size: clamp(38px, 6vw, 58px); line-height: 1.1; color: #173b28; }
  .page-header p { max-width: 650px; margin: 0; color: #657168; font-size: 16px; line-height: 1.8; }

  /* SECTION */

  .section { padding: 70px 0; }

  /* GRID GALERI */

  .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }

  /* CARD */

  .gallery-card { padding: 0; border: 0; overflow: hidden; border-radius: 18px; background: white; text-align: left; cursor: pointer; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07); transition: transform 0.2s, box-shadow 0.2s; }
  .gallery-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12); }
  .gallery-card:disabled { cursor: default; }
  .gallery-card:disabled:hover { transform: none; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07); }
  .gallery-card:focus-visible, .close:focus-visible { outline: 2px solid #1f7a4d; outline-offset: 3px; }

  /* IMAGE */

  .image-wrapper { position: relative; width: 100%; height: 250px; overflow: hidden; background: #edf5ef; }
  .image-wrapper img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
  .gallery-card:hover .image-wrapper img { transform: scale(1.05); }
  .no-photo { display: grid; place-items: center; width: 100%; height: 100%; font-size: 50px; }

  /* OVERLAY */

  .image-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; background: rgba(31, 122, 77, 0.55); color: white; opacity: 0; transition: opacity 0.2s; }
  .gallery-card:hover .image-overlay, .gallery-card:focus-visible .image-overlay { opacity: 1; }
  .image-overlay span { font-size: 28px; }
  .image-overlay small { font-size: 13px; font-weight: 700; }

  /* TITLE */

  .gallery-title { padding: 18px 20px; }
  .gallery-title h3 { margin: 0; color: #173b28; font-size: 18px; }

  /* EMPTY */

  .empty { padding: 80px 20px; text-align: center; background: #f8fbf8; border-radius: 18px; }
  .empty div { font-size: 50px; }
  .empty h3 { margin: 15px 0 5px; color: #173b28; }
  .empty p { margin: 0; color: #748078; }

  /* MODAL */

  .modal { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 25px; background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(5px); }
  .modal-content { position: relative; max-width: 1000px; max-height: 90vh; width: 100%; }
  .modal-content img { display: block; width: 100%; max-height: 75vh; object-fit: contain; border-radius: 12px; }
  .close { position: absolute; top: -45px; right: 0; width: 38px; height: 38px; border: 0; border-radius: 50%; background: white; color: #173b28; font-size: 18px; cursor: pointer; }
  .modal-caption { margin-top: 12px; text-align: center; color: white; }
  .modal-caption h2 { margin: 0; font-size: 20px; }

  /* TABLET */

  @media (max-width: 900px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* HP */

  @media (max-width: 600px) {
    .page-header { padding: 50px 0; }
    .section { padding: 50px 0; }
    .gallery-grid { grid-template-columns: 1fr; gap: 20px; }
    .image-wrapper { height: 230px; }
    .modal { padding: 15px; }
    .close { top: -48px; }
  }
</style>