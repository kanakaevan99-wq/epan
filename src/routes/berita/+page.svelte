<script>
  import { onMount } from 'svelte';
  import { defaultBerita, getData } from '$lib/siteData.js';

  let berita = [];

  onMount(() => {
    berita = getData('krajan_berita', defaultBerita);
  });
</script>

<svelte:head>
  <title>Berita - KRAJAN DIGITAL</title>
</svelte:head>

<section class="page">
  <div class="container">

    <span class="eyebrow">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"/>
        <path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"/>
        <path d="M8 7h8M8 10h8"/>
      </svg>
      INFORMASI TERBARU
    </span>

    <h1>Berita Dusun</h1>

    <p class="intro">
      Berita dan informasi terbaru seputar kegiatan Dusun Krajan.
    </p>

    {#if berita.length === 0}

      <div class="empty">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"/>
          <path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"/>
          <path d="M8 7h8M8 10h6"/>
        </svg>
        <span>Belum ada berita tersedia.</span>
      </div>

    {:else}

      <div class="news-grid">

        {#each berita as item}

          <a class="news-card" href={`/berita/${item.id}`}>

            <div class="icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"/>
                <path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"/>
                <path d="M8 7h8M8 10h8M8 17h5"/>
              </svg>
            </div>

            <div class="date">
              {item.tanggal}
            </div>

            <h2>
              {item.judul}
            </h2>

            <p>
              {item.deskripsi}
            </p>

            <span class="read">
              Baca selengkapnya
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </span>

          </a>

        {/each}

      </div>

    {/if}

  </div>
</section>

<style>
  .page {
    padding: 75px 0;
  }

  .container {
    width: min(1100px, calc(100% - 40px));
    margin: auto;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #1f7a4d;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  .eyebrow svg {
    width: 19px;
    height: 19px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  h1 {
    font-size: 50px;
    margin: 12px 0;
  }

  .intro {
    color: #718078;
    line-height: 1.7;
    max-width: 650px;
    margin-bottom: 40px;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .news-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: white;
    border: 1px solid #e1e9e4;
    border-radius: 16px;
    padding: 24px;
    transition: .25s;
  }

  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,.08);
    border-color: #1f7a4d;
  }

  .icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #edf7ef;
    border-radius: 14px;
    margin-bottom: 18px;
  }

  .icon svg {
    width: 30px;
    height: 30px;
    fill: none;
    stroke: #1f7a4d;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .date {
    color: #8a968e;
    font-size: 13px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 21px;
    margin: 0 0 10px;
  }

  .news-card p {
    color: #718078;
    line-height: 1.7;
  }

  .read {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 10px;
    color: #1f7a4d;
    font-weight: bold;
  }

  .read svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform .2s;
  }

  .news-card:hover .read svg {
    transform: translateX(4px);
  }

  .empty {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 30px;
    background: white;
    border-radius: 14px;
    border: 1px solid #e1e9e4;
    color: #718078;
  }

  .empty svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    fill: none;
    stroke: #1f7a4d;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media(max-width: 900px) {
    .news-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media(max-width: 600px) {
    .page {
      padding: 50px 0;
    }

    h1 {
      font-size: 38px;
    }

    .news-grid {
      grid-template-columns: 1fr;
    }
  }
</style>