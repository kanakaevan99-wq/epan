<script>
  import { getData, defaultLowongan } from '$lib/siteData.js';

  let lowongan = [];

  function loadData() {
    lowongan = getData('krajan_lowongan', defaultLowongan);
  }

  loadData();
</script>

<svelte:head>
  <title>Lowongan Kerja - KRAJAN DIGITAL</title>
  <meta
    name="description"
    content="Informasi lowongan kerja untuk warga Dusun Krajan."
  />
</svelte:head>

<div class="page">
  <section class="hero">
    <div class="container">
      <div class="eyebrow">💼 INFORMASI KERJA</div>

      <h1>
        Lowongan Kerja
        <span>untuk Warga</span>
      </h1>

      <p>
        Temukan informasi lowongan pekerjaan terbaru yang
        tersedia untuk warga Dusun Krajan.
      </p>
    </div>
  </section>

  <section class="content">
    <div class="container">

      {#if lowongan.length === 0}
        <div class="empty">
          <div class="empty-icon">💼</div>
          <h2>Belum ada lowongan</h2>
          <p>
            Saat ini belum tersedia informasi lowongan kerja.
          </p>
        </div>
      {:else}

        <div class="grid">
          {#each lowongan as item}
            <article class="card">

              <div class="card-top">
                <div class="job-icon">💼</div>

                <span class="badge">
                  {item.tipe}
                </span>
              </div>

              <h2>{item.posisi}</h2>

              <div class="company">
                🏢 {item.perusahaan}
              </div>

              <div class="info">
                <div>
                  <span>📍</span>
                  <strong>Lokasi</strong>
                  <p>{item.lokasi}</p>
                </div>

                <div>
                  <span>📅</span>
                  <strong>Batas Lamaran</strong>
                  <p>{item.deadline}</p>
                </div>
              </div>

              <div class="description">
                <h3>Deskripsi</h3>
                <p>{item.deskripsi}</p>
              </div>

              <div class="requirements">
                <h3>Syarat</h3>
                <p>{item.syarat}</p>
              </div>

              <div class="contact">
                <span>📞</span>

                <div>
                  <small>Kontak</small>
                  <strong>{item.kontak}</strong>
                </div>
              </div>

              {#if item.link}
                <a
                  class="button"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Lowongan →
                </a>
              {/if}

            </article>
          {/each}
        </div>

      {/if}

    </div>
  </section>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family:
      Inter,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
    background: #f7f8f6;
    color: #172018;
  }

  .page {
    min-height: 100vh;
  }

  .container {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
  }

  .hero {
    padding: 80px 0 70px;
    background: #eef5ed;
  }

  .eyebrow {
    display: inline-block;
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1.5px;
    color: #4d754b;
  }

  h1 {
    margin: 0;
    max-width: 700px;
    font-size: clamp(40px, 6vw, 70px);
    line-height: 1;
    letter-spacing: -2px;
  }

  h1 span {
    display: block;
    color: #5d8b59;
  }

  .hero p {
    max-width: 650px;
    margin-top: 24px;
    color: #667066;
    font-size: 18px;
    line-height: 1.7;
  }

  .content {
    padding: 60px 0 100px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .card {
    padding: 26px;
    background: white;
    border: 1px solid #e5e9e3;
    border-radius: 22px;
    box-shadow: 0 10px 30px rgba(30, 50, 30, 0.06);
  }

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .job-icon {
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    border-radius: 16px;
    background: #eef5ed;
    font-size: 25px;
  }

  .badge {
    padding: 7px 12px;
    border-radius: 50px;
    background: #eef5ed;
    color: #527b4e;
    font-size: 12px;
    font-weight: 700;
  }

  .card h2 {
    margin: 22px 0 8px;
    font-size: 23px;
  }

  .company {
    color: #697269;
    font-size: 14px;
  }

  .info {
    display: grid;
    gap: 12px;
    margin: 25px 0;
    padding: 18px;
    border-radius: 16px;
    background: #f7f9f6;
  }

  .info div {
    position: relative;
    padding-left: 28px;
  }

  .info span {
    position: absolute;
    left: 0;
    top: 0;
  }

  .info strong,
  .info p {
    display: block;
  }

  .info strong {
    font-size: 12px;
    color: #788078;
  }

  .info p {
    margin: 3px 0 0;
    font-size: 14px;
  }

  .description,
  .requirements {
    margin-top: 20px;
  }

  .description h3,
  .requirements h3 {
    margin-bottom: 7px;
    font-size: 14px;
  }

  .description p,
  .requirements p {
    margin: 0;
    color: #687068;
    font-size: 14px;
    line-height: 1.6;
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #edf0eb;
  }

  .contact span {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: #eef5ed;
  }

  .contact small,
  .contact strong {
    display: block;
  }

  .contact small {
    color: #818881;
    font-size: 11px;
  }

  .contact strong {
    margin-top: 3px;
    font-size: 14px;
  }

  .button {
    display: block;
    margin-top: 22px;
    padding: 13px 18px;
    border-radius: 12px;
    background: #5d8b59;
    color: white;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
  }

  .button:hover {
    background: #4d754b;
  }

  .empty {
    padding: 70px 20px;
    text-align: center;
    background: white;
    border: 1px solid #e5e9e3;
    border-radius: 22px;
  }

  .empty-icon {
    font-size: 50px;
  }

  .empty h2 {
    margin-bottom: 8px;
  }

  .empty p {
    margin: 0;
    color: #747b74;
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .container {
      width: min(100% - 28px, 1120px);
    }

    .hero {
      padding: 55px 0;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    h1 {
      letter-spacing: -1px;
    }
  }
</style>