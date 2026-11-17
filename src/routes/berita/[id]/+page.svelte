<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import {
    defaultSite,
    defaultBerita,
    getData
  } from '$lib/siteData.js';

  let site = defaultSite;
  let berita = defaultBerita;
  let item = null;
  let loading = true;

  onMount(() => {
    site = getData('krajan_site', defaultSite);
    berita = getData('krajan_berita', defaultBerita);

    const id = String($page.params.id);

    item = berita.find((beritaItem) => String(beritaItem.id) === id);

    loading = false;
  });
</script>

<svelte:head>
  <title>
    {item?.judul ? `${item.judul} — ${site.nama || 'KRAJAN DIGITAL'}` : `Berita — ${site.nama || 'KRAJAN DIGITAL'}`}
  </title>

  <meta
    name="description"
    content={item?.deskripsi || item?.isi || 'Berita Dusun Krajan'}
  />
</svelte:head>

<main class="detail-page">

  <div class="background-glow glow-one"></div>
  <div class="background-glow glow-two"></div>

  <div class="container">

    <a class="back-link" href="/berita">
      ← Kembali ke Berita
    </a>

    {#if loading}

      <div class="state-card">
        <div class="loader"></div>
        <p>Memuat berita...</p>
      </div>

    {:else if item}

      <article class="article-card">

        {#if item.gambar || item.foto}

          <div class="article-image">
            <img
              src={item.gambar || item.foto}
              alt={item.judul || 'Berita Dusun'}
            />
          </div>

        {:else}

          <div class="article-placeholder">
            <span>{item.icon || '📰'}</span>
          </div>

        {/if}

        <div class="article-body">

          <div class="article-meta">
            <span class="category">
              📰 BERITA DUSUN
            </span>

            {#if item.tanggal}
              <span class="date">
                {item.tanggal}
              </span>
            {/if}
          </div>

          <h1>
            {item.judul || 'Berita Dusun'}
          </h1>

          {#if item.deskripsi}
            <p class="lead">
              {item.deskripsi}
            </p>
          {/if}

          {#if item.isi}

            <div class="article-content">
              {#each item.isi.split('\n') as paragraph}
                {#if paragraph.trim()}
                  <p>{paragraph}</p>
                {/if}
              {/each}
            </div>

          {:else if item.deskripsi}

            <div class="article-content">
              <p>{item.deskripsi}</p>
            </div>

          {:else}

            <div class="article-content empty-content">
              <p>
                Isi berita belum tersedia.
              </p>
            </div>

          {/if}

        </div>

      </article>

      <div class="article-footer">
        <a class="back-button" href="/berita">
          ← Lihat Berita Lainnya
        </a>
      </div>

    {:else}

      <div class="state-card not-found">

        <div class="not-found-icon">
          📰
        </div>

        <h1>Berita Tidak Ditemukan</h1>

        <p>
          Berita yang kamu buka tidak tersedia atau sudah dihapus.
        </p>

        <a class="back-button" href="/berita">
          Kembali ke Berita
        </a>

      </div>

    {/if}

  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    background: #f6faf8;
  }

  .detail-page {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 120px 20px 80px;
    background:
      radial-gradient(circle at 10% 10%, rgba(22, 163, 74, 0.10), transparent 30%),
      radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.08), transparent 28%),
      #f6faf8;
  }

  .container {
    width: min(980px, 100%);
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .background-glow {
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    opacity: 0.45;
  }

  .glow-one {
    top: 80px;
    left: -180px;
    background: rgba(34, 197, 94, 0.16);
  }

  .glow-two {
    right: -180px;
    top: 420px;
    background: rgba(16, 185, 129, 0.13);
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    color: #166534;
    font-weight: 700;
    text-decoration: none;
    transition: 0.25s ease;
  }

  .back-link:hover {
    transform: translateX(-4px);
    color: #15803d;
  }

  .article-card {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(22, 101, 52, 0.10);
    border-radius: 28px;
    box-shadow: 0 25px 70px rgba(15, 23, 42, 0.10);
    backdrop-filter: blur(18px);
    animation: articleIn 0.65s ease both;
  }

  .article-image {
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    background: #eaf5ee;
  }

  .article-image img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  .article-placeholder {
    min-height: 300px;
    display: grid;
    place-items: center;
    background:
      linear-gradient(135deg, #dcfce7, #ecfdf5);
  }

  .article-placeholder span {
    font-size: 90px;
    filter: drop-shadow(0 15px 25px rgba(22, 101, 52, 0.15));
  }

  .article-body {
    padding: 42px 52px 50px;
  }

  .article-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 18px;
    font-size: 0.86rem;
    font-weight: 700;
  }

  .category {
    padding: 8px 13px;
    border-radius: 999px;
    background: #dcfce7;
    color: #166534;
  }

  .date {
    color: #64748b;
  }

  h1 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(2rem, 5vw, 3.7rem);
    line-height: 1.08;
    letter-spacing: -0.045em;
  }

  .lead {
    margin: 24px 0 0;
    color: #475569;
    font-size: 1.18rem;
    line-height: 1.75;
    font-weight: 500;
  }

  .article-content {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #e2e8f0;
  }

  .article-content p {
    margin: 0 0 20px;
    color: #334155;
    font-size: 1.06rem;
    line-height: 1.9;
    white-space: normal;
  }

  .article-content p:last-child {
    margin-bottom: 0;
  }

  .empty-content p {
    color: #64748b;
  }

  .article-footer {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 20px;
    border-radius: 14px;
    background: #166534;
    color: white;
    font-weight: 800;
    text-decoration: none;
    box-shadow: 0 12px 25px rgba(22, 101, 52, 0.18);
    transition: 0.25s ease;
  }

  .back-button:hover {
    transform: translateY(-2px);
    background: #15803d;
  }

  .state-card {
    min-height: 300px;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 12px;
    padding: 40px;
    text-align: center;
    background: white;
    border-radius: 28px;
    box-shadow: 0 25px 70px rgba(15, 23, 42, 0.08);
  }

  .state-card p {
    margin: 0 0 12px;
    color: #64748b;
  }

  .loader {
    width: 42px;
    height: 42px;
    border: 4px solid #dcfce7;
    border-top-color: #16a34a;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .not-found-icon {
    font-size: 64px;
  }

  .not-found h1 {
    font-size: 2rem;
  }

  .not-found {
    gap: 8px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes articleIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 700px) {
    .detail-page {
      padding: 100px 14px 50px;
    }

    .article-card {
      border-radius: 20px;
    }

    .article-body {
      padding: 30px 22px 34px;
    }

    .article-image,
    .article-image img {
      max-height: 320px;
    }

    .article-placeholder {
      min-height: 230px;
    }

    .article-placeholder span {
      font-size: 70px;
    }

    .lead {
      font-size: 1.05rem;
    }

    .article-content p {
      font-size: 1rem;
      line-height: 1.75;
    }
  }
</style>
