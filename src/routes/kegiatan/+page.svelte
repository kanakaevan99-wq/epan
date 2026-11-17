<script>
  import { onMount } from 'svelte';

  import {
    defaultSite,
    defaultKegiatan,
    getData
  } from '$lib/siteData.js';

  let site = defaultSite;
  let kegiatan = defaultKegiatan;
  let selectedKegiatan = null;

  onMount(() => {
    site = getData('krajan_site', defaultSite);
    kegiatan = getData('krajan_kegiatan', defaultKegiatan);
  });

  function bukaDetail(item) {
    selectedKegiatan = item;
    document.body.style.overflow = 'hidden';
  }

  function tutupDetail() {
    selectedKegiatan = null;
    document.body.style.overflow = '';
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      tutupDetail();
    }
  }
</script>

<svelte:head>
  <title>Kegiatan — KRAJAN DIGITAL</title>
  <meta
    name="description"
    content="Jadwal dan kegiatan warga Dusun Krajan."
  />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<section class="page">
  <div class="container">

    <div class="page-header">
      <span class="eyebrow">AGENDA DUSUN</span>

      <h1>Jadwal & Kegiatan</h1>

      <p class="intro">
        Jadwal kegiatan dan agenda warga Dusun Krajan.
      </p>
    </div>

    {#if kegiatan.length > 0}

      <div class="kegiatan-grid">

        {#each kegiatan as item}
          <article class="kegiatan-card">

            <!-- FOTO -->
            <div class="image-wrapper">
              <img
                src={item.gambar}
                alt={item.judul}
                loading="lazy"
              />

              <div class="image-overlay">
                <span>📅 Kegiatan Dusun</span>
              </div>
            </div>

            <!-- ISI -->
            <div class="card-content">

              <div class="tanggal">
                📅 {item.tanggal}
              </div>

              <h2>{item.judul}</h2>

              <p>
                {item.deskripsi}
              </p>

              <button
                class="read-more"
                type="button"
                onclick={() => bukaDetail(item)}
              >
                Baca selengkapnya
                <span>→</span>
              </button>

            </div>

          </article>
        {/each}

      </div>

    {:else}

      <div class="empty">
        <div class="empty-icon">📅</div>
        <h2>Belum ada kegiatan</h2>
        <p>
          Data kegiatan dusun belum tersedia.
        </p>
      </div>

    {/if}

  </div>
</section>


<!-- =========================
     POPUP DETAIL
========================= -->

{#if selectedKegiatan}

  <div
    class="modal-backdrop"
    role="presentation"
    onclick={(event) => {
      if (event.target === event.currentTarget) {
        tutupDetail();
      }
    }}
  >

    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-label={selectedKegiatan.judul}
    >

      <!-- TOMBOL CLOSE -->
      <button
        class="close-button"
        type="button"
        aria-label="Tutup"
        onclick={tutupDetail}
      >
        ✕
      </button>

      <!-- FOTO BESAR -->
      <div class="modal-image">
        <img
          src={selectedKegiatan.gambar}
          alt={selectedKegiatan.judul}
        />
      </div>

      <!-- DETAIL -->
      <div class="modal-content">

        <div class="modal-date">
          📅 {selectedKegiatan.tanggal}
        </div>

        <h2>
          {selectedKegiatan.judul}
        </h2>

        <div class="divider"></div>

        <p>
          {selectedKegiatan.deskripsi}
        </p>

        <button
          class="close-detail"
          type="button"
          onclick={tutupDetail}
        >
          Tutup
        </button>

      </div>

    </div>

  </div>

{/if}


<style>
  .page {
    padding: 75px 0 90px;
  }

  .page-header {
    margin-bottom: 40px;
  }

  .eyebrow {
    display: inline-block;
    color: #1f7a4d;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  h1 {
    margin: 12px 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 50px;
    line-height: 1.1;
    color: #173b28;
  }

  .intro {
    max-width: 650px;
    margin: 0;
    color: #718078;
    line-height: 1.7;
  }


  /* =========================
     GRID
  ========================= */

  .kegiatan-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .kegiatan-card {
    overflow: hidden;
    background: white;
    border: 1px solid #e6ece8;
    border-radius: 18px;
    box-shadow: 0 8px 25px rgba(24, 59, 40, 0.06);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .kegiatan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(24, 59, 40, 0.12);
  }


  /* =========================
     IMAGE
  ========================= */

  .image-wrapper {
    position: relative;
    height: 210px;
    overflow: hidden;
    background: #edf3ee;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .kegiatan-card:hover .image-wrapper img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    left: 12px;
    bottom: 12px;
    padding: 7px 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.92);
    color: #1f7a4d;
    font-size: 11px;
    font-weight: 700;
    backdrop-filter: blur(5px);
  }


  /* =========================
     CONTENT
  ========================= */

  .card-content {
    padding: 20px;
  }

  .tanggal {
    margin-bottom: 8px;
    color: #89958d;
    font-size: 12px;
    font-weight: 600;
  }

  .card-content h2 {
    margin: 0 0 9px;
    color: #173b28;
    font-size: 20px;
    line-height: 1.35;
  }

  .card-content p {
    min-height: 70px;
    margin: 0 0 18px;
    color: #718078;
    font-size: 14px;
    line-height: 1.7;
  }


  /* =========================
     BACA SELENGKAPNYA
  ========================= */

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #1f7a4d;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: gap 0.2s ease;
  }

  .read-more span {
    font-size: 17px;
    transition: transform 0.2s ease;
  }

  .read-more:hover {
    gap: 12px;
  }

  .read-more:hover span {
    transform: translateX(3px);
  }


  /* =========================
     EMPTY
  ========================= */

  .empty {
    padding: 60px 20px;
    text-align: center;
    background: white;
    border: 1px solid #e6ece8;
    border-radius: 18px;
  }

  .empty-icon {
    margin-bottom: 12px;
    font-size: 45px;
  }

  .empty h2 {
    margin: 0 0 8px;
    color: #173b28;
  }

  .empty p {
    margin: 0;
    color: #718078;
  }


  /* =========================
     MODAL BACKDROP
  ========================= */

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    background: rgba(12, 25, 18, 0.65);
    backdrop-filter: blur(6px);

    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }


  /* =========================
     MODAL
  ========================= */

  .modal {
    position: relative;

    width: min(800px, 100%);
    max-height: 90vh;

    overflow-y: auto;

    background: white;
    border-radius: 22px;

    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);

    animation: modalOpen 0.25s ease;
  }

  @keyframes modalOpen {
    from {
      opacity: 0;
      transform: translateY(15px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }


  /* =========================
     CLOSE BUTTON
  ========================= */

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 5;

    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border: 0;
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.94);
    color: #173b28;

    font-size: 18px;
    font-weight: 700;

    cursor: pointer;

    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);

    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .close-button:hover {
    background: white;
    transform: scale(1.08);
  }


  /* =========================
     MODAL IMAGE
  ========================= */

  .modal-image {
    width: 100%;
    height: 380px;
    background: #edf3ee;
  }

  .modal-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }


  /* =========================
     MODAL CONTENT
  ========================= */

  .modal-content {
    padding: 30px 35px 35px;
  }

  .modal-date {
    margin-bottom: 8px;
    color: #1f7a4d;
    font-size: 13px;
    font-weight: 700;
  }

  .modal-content h2 {
    margin: 0;
    color: #173b28;
    font-size: 30px;
    line-height: 1.3;
  }

  .divider {
    width: 55px;
    height: 3px;
    margin: 18px 0;
    border-radius: 10px;
    background: #1f7a4d;
  }

  .modal-content p {
    margin: 0;
    color: #59665e;
    font-size: 15px;
    line-height: 1.9;
  }

  .close-detail {
    margin-top: 25px;
    padding: 11px 18px;

    border: 0;
    border-radius: 10px;

    background: #edf6f0;
    color: #1f7a4d;

    font-size: 13px;
    font-weight: 800;

    cursor: pointer;
  }

  .close-detail:hover {
    background: #dceee2;
  }


  /* =========================
     TABLET
  ========================= */

  @media (max-width: 950px) {
    .kegiatan-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }


  /* =========================
     MOBILE
  ========================= */

  @media (max-width: 600px) {
    .page {
      padding: 50px 0 70px;
    }

    h1 {
      font-size: 38px;
    }

    .kegiatan-grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .image-wrapper {
      height: 220px;
    }

    .modal-backdrop {
      padding: 12px;
    }

    .modal {
      max-height: 94vh;
      border-radius: 18px;
    }

    .modal-image {
      height: 240px;
    }

    .modal-content {
      padding: 24px 22px 25px;
    }

    .modal-content h2 {
      font-size: 24px;
    }

    .close-button {
      width: 36px;
      height: 36px;
      top: 10px;
      right: 10px;
    }
  }
</style>