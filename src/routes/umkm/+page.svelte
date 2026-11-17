<script>
  import { onMount } from 'svelte';
  import { getData, defaultUmkm } from '$lib/siteData.js';

  let umkm = $state([]);
  let kategoriAktif = $state('Semua');
  let siap = $state(false);

  // Data dibaca hanya di browser, supaya tidak ada "kedipan"
  // dari data bawaan (defaultUmkm) yang dirender di server.
  onMount(() => {
    // Admin lama menyimpan foto di field "gambar", data baru di "foto"
    umkm = getData('krajan_umkm', defaultUmkm).map((u) => ({
      ...u,
      foto: u.foto || u.gambar || ''
    }));
    siap = true;
  });

  const kategori = $derived([
    'Semua',
    ...new Set(umkm.map((item) => item.kategori).filter(Boolean))
  ]);

  const umkmTampil = $derived(
    kategoriAktif === 'Semua'
      ? umkm
      : umkm.filter((item) => item.kategori === kategoriAktif)
  );

  // Ubah 0812... menjadi 62812... agar link WhatsApp valid
  function waLink(telepon) {
    let angka = String(telepon).replace(/\D/g, '');
    if (angka.startsWith('0')) angka = '62' + angka.slice(1);
    return `https://wa.me/${angka}`;
  }

  // Kalau foto gagal dimuat, tampilkan ikon pengganti
  function fotoGagal(item) {
    item.fotoGagal = true;
  }
</script>

<svelte:head>
  <title>UMKM Krajan - KRAJAN DIGITAL</title>
  <meta
    name="description"
    content="Direktori UMKM dan usaha warga Dusun Krajan."
  />
</svelte:head>

<div class="page">
  <section class="hero">
    <div class="container">
      <div class="eyebrow"><span aria-hidden="true">🏪</span> EKONOMI WARGA</div>

      <h1>
        UMKM
        <span>Dusun Krajan</span>
      </h1>

      <p>
        Kenali dan dukung berbagai usaha milik warga Dusun Krajan.
      </p>
    </div>
  </section>

  <section class="content">
    <div class="container">
      {#if !siap}
        <div class="empty">
          <p>Memuat data UMKM...</p>
        </div>
      {:else}
        <div class="filter">
          {#each kategori as item (item)}
            <button
              type="button"
              class:active={kategoriAktif === item}
              aria-pressed={kategoriAktif === item}
              onclick={() => (kategoriAktif = item)}
            >
              {item}
            </button>
          {/each}
        </div>

        {#if umkmTampil.length === 0}
          <div class="empty">
            <div class="empty-icon" aria-hidden="true">🏪</div>

            <h2>Belum ada UMKM</h2>

            <p>Belum ada data UMKM untuk kategori ini.</p>
          </div>
        {:else}
          <div class="grid">
            {#each umkmTampil as item, i (item.id ?? `${item.nama}-${i}`)}
              <article class="card">
                <div class="photo">
                  {#if item.foto && !item.fotoGagal}
                    <img
                      src={item.foto}
                      alt={item.nama}
                      loading="lazy"
                      onerror={() => fotoGagal(item)}
                    />
                  {:else}
                    <div class="no-photo" aria-hidden="true">🏪</div>
                  {/if}
                </div>

                <div class="card-body">
                  {#if item.kategori}
                    <span class="category">{item.kategori}</span>
                  {/if}

                  <h2>{item.nama}</h2>

                  {#if item.pemilik}
                    <div class="owner">
                      <span aria-hidden="true">👤</span> {item.pemilik}
                    </div>
                  {/if}

                  {#if item.alamat}
                    <div class="detail">
                      <span aria-hidden="true">📍</span>
                      <p>{item.alamat}</p>
                    </div>
                  {/if}

                  {#if item.telepon}
                    <div class="detail">
                      <span aria-hidden="true">📞</span>
                      <p>{item.telepon}</p>
                    </div>
                  {/if}

                  {#if item.deskripsi}
                    <p class="description">{item.deskripsi}</p>
                  {/if}

                  {#if item.telepon}
                    <a
                      class="button"
                      href={waLink(item.telepon)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hubungi Pemilik
                    </a>
                  {/if}
                </div>
              </article>
            {/each}
          </div>
        {/if}
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

  .container {
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
  }

  .hero {
    padding: 80px 0 70px;
    background: #eef5ed;
  }

  .eyebrow {
    margin-bottom: 18px;
    color: #4d754b;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  h1 {
    margin: 0;
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
    padding: 55px 0 100px;
  }

  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
  }

  .filter button {
    padding: 10px 17px;
    border: 1px solid #dfe5dc;
    border-radius: 50px;
    background: white;
    color: #536053;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  }

  .filter button:hover {
    border-color: #5d8b59;
  }

  .filter button.active {
    background: #5d8b59;
    border-color: #5d8b59;
    color: white;
  }

  .filter button:focus-visible,
  .button:focus-visible {
    outline: 2px solid #1f7a4d;
    outline-offset: 2px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .card {
    overflow: hidden;
    background: white;
    border: 1px solid #e5e9e3;
    border-radius: 22px;
    box-shadow: 0 10px 30px rgba(30, 50, 30, 0.06);
  }

  .photo {
    height: 210px;
    overflow: hidden;
    background: #eef5ed;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .no-photo {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    font-size: 55px;
  }

  .card-body {
    padding: 24px;
  }

  .category {
    display: inline-block;
    padding: 6px 11px;
    border-radius: 50px;
    background: #eef5ed;
    color: #527b4e;
    font-size: 11px;
    font-weight: 800;
  }

  .card h2 {
    margin: 15px 0 7px;
    font-size: 22px;
  }

  .owner {
    margin-bottom: 20px;
    color: #727a72;
    font-size: 14px;
  }

  .detail {
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }

  .detail span {
    flex-shrink: 0;
  }

  .detail p {
    margin: 0;
    color: #626a62;
    font-size: 14px;
  }

  .description {
    margin: 20px 0 0;
    padding-top: 18px;
    border-top: 1px solid #edf0eb;
    color: #687068;
    font-size: 14px;
    line-height: 1.6;
  }

  .button {
    display: block;
    margin-top: 20px;
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
      width: calc(100% - 28px);
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