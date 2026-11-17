<script>
  import { onMount } from 'svelte';

  let profilDusun = {
    sejarah: '',
    kependudukan: '',
    bumd: '',
    visiMisi: '',
    keuangan: ''
  };

  let fasilitasUmum = [
    {
      id: 1,
      nama: 'Masjid',
      deskripsi: 'Informasi mengenai masjid di Dusun Krajan.',
      alamat: '',
      foto: '',
      icon: '🕌'
    },
    {
      id: 2,
      nama: 'TPQ',
      deskripsi: 'Informasi mengenai TPQ di Dusun Krajan.',
      alamat: '',
      foto: '',
      icon: '📖'
    },
    {
      id: 3,
      nama: 'Mushola',
      deskripsi: 'Informasi mengenai mushola di Dusun Krajan.',
      alamat: '',
      foto: '',
      icon: '🕋'
    },
    {
      id: 4,
      nama: 'Balai Dusun',
      deskripsi: 'Informasi mengenai Balai Dusun Krajan.',
      alamat: '',
      foto: '',
      icon: '🏠'
    }
  ];

  let organisasiMasyarakat = [
    {
      id: 1,
      nama: 'BOUVKA',
      deskripsi: 'Organisasi masyarakat Dusun Krajan.',
      ketua: '',
      kontak: '',
      foto: '',
      icon: '🤝'
    },
    {
      id: 2,
      nama: 'IPPIKA',
      deskripsi: 'Organisasi kepemudaan Dusun Krajan.',
      ketua: '',
      kontak: '',
      foto: '',
      icon: '👥'
    },
    {
      id: 3,
      nama: 'Takmir Masjid',
      deskripsi: 'Organisasi pengelola dan pengurus kegiatan masjid.',
      ketua: '',
      kontak: '',
      foto: '',
      icon: '🕌'
    }
  ];

  let aktif = '';

  onMount(() => {
    try {
      const profil = localStorage.getItem('krajan_profil_dusun');

      if (profil) {
        profilDusun = {
          ...profilDusun,
          ...JSON.parse(profil)
        };
      }

      const fasilitas = localStorage.getItem('krajan_fasilitas_umum');

      if (fasilitas) {
        fasilitasUmum = JSON.parse(fasilitas);
      }

      const organisasi = localStorage.getItem(
        'krajan_organisasi_masyarakat'
      );

      if (organisasi) {
        organisasiMasyarakat = JSON.parse(organisasi);
      }
    } catch (error) {
      console.error('Gagal memuat data profil:', error);
    }
  });

  function bukaDetail(id) {
    aktif = aktif === id ? '' : id;
  }

  function adaIsi(value) {
    return value && value.trim() !== '';
  }
</script>

<svelte:head>
  <title>Profil Dusun — KRAJAN DIGITAL</title>

  <meta
    name="description"
    content="Profil Dusun Krajan, fasilitas umum, dan organisasi masyarakat."
  />
</svelte:head>

<section class="page">

  <div class="container">

    <!-- HEADER -->
    <div class="header">

      <span class="eyebrow">
        KENALI DUSUN
      </span>

      <h1>
        Profil Dusun
      </h1>

      <p class="intro">
        Mengenal lebih dekat sejarah, kependudukan, fasilitas,
        serta organisasi masyarakat Dusun Krajan.
      </p>

    </div>


    <!-- =========================================
         PROFIL DUSUN
    ========================================== -->

    <section class="section">

      <div class="section-title">

        <div class="section-icon">
          🏘️
        </div>

        <div>
          <span>PROFIL</span>
          <h2>Profil Dusun</h2>
        </div>

      </div>


      <div class="profil-grid">

        <!-- SEJARAH -->
        <button
          type="button"
          class="profil-card"
          class:open={aktif === 'sejarah'}
          onclick={() => bukaDetail('sejarah')}
        >

          <div class="card-icon">
            📜
          </div>

          <div class="card-content">

            <h3>
              Sejarah
            </h3>

            <p>
              Sejarah dan perjalanan terbentuknya Dusun Krajan.
            </p>

          </div>

          <span class="arrow">
            {aktif === 'sejarah' ? '⌃' : '›'}
          </span>

        </button>


        {#if aktif === 'sejarah'}

          <div class="detail">

            <h3>
              Sejarah Dusun
            </h3>

            {#if adaIsi(profilDusun.sejarah)}

              <p class="detail-text">
                {profilDusun.sejarah}
              </p>

            {:else}

              <p class="empty">
                Informasi sejarah belum tersedia.
              </p>

            {/if}

          </div>

        {/if}


        <!-- KEPENDUDUKAN -->
        <button
          type="button"
          class="profil-card"
          class:open={aktif === 'kependudukan'}
          onclick={() => bukaDetail('kependudukan')}
        >

          <div class="card-icon">
            👨‍👩‍👧‍👦
          </div>

          <div class="card-content">

            <h3>
              Kependudukan
            </h3>

            <p>
              Informasi mengenai data dan kondisi penduduk.
            </p>

          </div>

          <span class="arrow">
            {aktif === 'kependudukan' ? '⌃' : '›'}
          </span>

        </button>


        {#if aktif === 'kependudukan'}

          <div class="detail">

            <h3>
              Data Kependudukan
            </h3>

            {#if adaIsi(profilDusun.kependudukan)}

              <p class="detail-text">
                {profilDusun.kependudukan}
              </p>

            {:else}

              <p class="empty">
                Informasi kependudukan belum tersedia.
              </p>

            {/if}

          </div>

        {/if}


        <!-- BUMD -->
        <button
          type="button"
          class="profil-card"
          class:open={aktif === 'bumd'}
          onclick={() => bukaDetail('bumd')}
        >

          <div class="card-icon">
            🏢
          </div>

          <div class="card-content">

            <h3>
              BUMD
            </h3>

            <p>
              Informasi mengenai badan usaha milik dusun.
            </p>

          </div>

          <span class="arrow">
            {aktif === 'bumd' ? '⌃' : '›'}
          </span>

        </button>


        {#if aktif === 'bumd'}

          <div class="detail">

            <h3>
              BUMD
            </h3>

            {#if adaIsi(profilDusun.bumd)}

              <p class="detail-text">
                {profilDusun.bumd}
              </p>

            {:else}

              <p class="empty">
                Informasi BUMD belum tersedia.
              </p>

            {/if}

          </div>

        {/if}


        <!-- VISI MISI -->
        <button
          type="button"
          class="profil-card"
          class:open={aktif === 'visiMisi'}
          onclick={() => bukaDetail('visiMisi')}
        >

          <div class="card-icon">
            🎯
          </div>

          <div class="card-content">

            <h3>
              Visi Misi Dusun
            </h3>

            <p>
              Visi dan misi pembangunan Dusun Krajan.
            </p>

          </div>

          <span class="arrow">
            {aktif === 'visiMisi' ? '⌃' : '›'}
          </span>

        </button>


        {#if aktif === 'visiMisi'}

          <div class="detail">

            <h3>
              Visi Misi Dusun
            </h3>

            {#if adaIsi(profilDusun.visiMisi)}

              <p class="detail-text">
                {profilDusun.visiMisi}
              </p>

            {:else}

              <p class="empty">
                Informasi visi dan misi belum tersedia.
              </p>

            {/if}

          </div>

        {/if}


        <!-- KEUANGAN -->
        <button
          type="button"
          class="profil-card"
          class:open={aktif === 'keuangan'}
          onclick={() => bukaDetail('keuangan')}
        >

          <div class="card-icon">
            💰
          </div>

          <div class="card-content">

            <h3>
              Keuangan Dusun
            </h3>

            <p>
              Informasi mengenai keuangan dan anggaran dusun.
            </p>

          </div>

          <span class="arrow">
            {aktif === 'keuangan' ? '⌃' : '›'}
          </span>

        </button>


        {#if aktif === 'keuangan'}

          <div class="detail">

            <h3>
              Keuangan Dusun
            </h3>

            {#if adaIsi(profilDusun.keuangan)}

              <p class="detail-text">
                {profilDusun.keuangan}
              </p>

            {:else}

              <p class="empty">
                Informasi keuangan belum tersedia.
              </p>

            {/if}

          </div>

        {/if}

      </div>

    </section>


    <!-- =========================================
         FASILITAS UMUM
    ========================================== -->

    <section class="section">

      <div class="section-title">

        <div class="section-icon">
          🏫
        </div>

        <div>
          <span>FASILITAS</span>
          <h2>Fasilitas Umum</h2>
        </div>

      </div>


      <div class="facility-grid">

        {#each fasilitasUmum as item}

          <div class="facility-card">

            {#if item.foto}

              <div class="facility-image">

                <img
                  src={item.foto}
                  alt={item.nama}
                />

              </div>

            {:else}

              <div class="facility-image no-image">

                <span>
                  {item.icon || '🏠'}
                </span>

              </div>

            {/if}


            <div class="facility-body">

              <div class="facility-icon">
                {item.icon || '🏠'}
              </div>

              <h3>
                {item.nama}
              </h3>

              {#if item.deskripsi}

                <p>
                  {item.deskripsi}
                </p>

              {/if}


              {#if item.alamat}

                <div class="address">

                  <span>📍</span>

                  <span>
                    {item.alamat}
                  </span>

                </div>

              {/if}

            </div>

          </div>

        {/each}

      </div>

    </section>


    <!-- =========================================
         ORGANISASI MASYARAKAT
    ========================================== -->

    <section class="section">

      <div class="section-title">

        <div class="section-icon">
          🤝
        </div>

        <div>
          <span>MASYARAKAT</span>
          <h2>Organisasi Masyarakat</h2>
        </div>

      </div>


      <div class="organization-grid">

        {#each organisasiMasyarakat as item}

          <div class="organization-card">

            <div class="organization-top">

              {#if item.foto}

                <img
                  src={item.foto}
                  alt={item.nama}
                />

              {:else}

                <div class="organization-icon">
                  {item.icon || '🤝'}
                </div>

              {/if}


              <div>

                <h3>
                  {item.nama}
                </h3>

                <span>
                  Organisasi Masyarakat
                </span>

              </div>

            </div>


            {#if item.deskripsi}

              <p>
                {item.deskripsi}
              </p>

            {/if}


            {#if item.ketua}

              <div class="info-row">

                <span class="label">
                  Ketua
                </span>

                <span>
                  {item.ketua}
                </span>

              </div>

            {/if}


            {#if item.kontak}

              <div class="info-row">

                <span class="label">
                  Kontak
                </span>

                <span>
                  {item.kontak}
                </span>

              </div>

            {/if}

          </div>

        {/each}

      </div>

    </section>

  </div>

</section>


<style>

:global(body) {
  background: #f8faf9;
}

.page {
  padding: 75px 0 100px;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: auto;
}


/* =========================
   HEADER
========================= */

.header {
  margin-bottom: 65px;
}

.eyebrow {
  display: inline-block;
  color: #1f7a4d;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
  margin-bottom: 8px;
}

h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(38px, 6vw, 58px);
  line-height: 1.1;
  margin: 5px 0 15px;
  color: #14231c;
}

.intro {
  max-width: 650px;
  color: #718078;
  font-size: 16px;
  line-height: 1.8;
}


/* =========================
   SECTION
========================= */

.section {
  margin-top: 70px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.section-icon {
  width: 52px;
  height: 52px;
  border-radius: 15px;
  background: #e6f4ec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.section-title span {
  color: #1f7a4d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.4px;
}

.section-title h2 {
  margin: 3px 0 0;
  font-size: 27px;
  color: #17231d;
}


/* =========================
   PROFIL
========================= */

.profil-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.profil-card {
  width: 100%;
  border: 1px solid #e2eae5;
  background: white;
  border-radius: 18px;
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 17px;
  text-align: left;
  cursor: pointer;
  transition: .25s;
  font-family: inherit;
}

.profil-card:hover,
.profil-card.open {
  border-color: #8bc6a5;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(31, 122, 77, .08);
}

.card-icon {
  width: 52px;
  min-width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #edf8f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  margin: 0 0 5px;
  font-size: 18px;
  color: #17231d;
}

.card-content p {
  margin: 0;
  color: #7a8780;
  font-size: 13px;
  line-height: 1.6;
}

.arrow {
  font-size: 27px;
  color: #1f7a4d;
  font-weight: 500;
}


/* =========================
   DETAIL
========================= */

.detail {
  grid-column: 1 / -1;
  background: white;
  border: 1px solid #dce9e1;
  border-radius: 18px;
  padding: 25px;
  margin-top: -2px;
  animation: show .2s ease;
}

.detail h3 {
  margin: 0 0 12px;
  color: #17231d;
  font-size: 20px;
}

.detail-text {
  white-space: pre-line;
  color: #68766e;
  line-height: 1.8;
  margin: 0;
}

.empty {
  color: #9aa69f;
  font-style: italic;
  margin: 0;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =========================
   FASILITAS
========================= */

.facility-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.facility-card {
  background: white;
  border: 1px solid #e3ebe6;
  border-radius: 18px;
  overflow: hidden;
  transition: .25s;
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(20, 50, 35, .08);
}

.facility-image {
  height: 160px;
  overflow: hidden;
  background: #e9f5ed;
}

.facility-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-image span {
  font-size: 55px;
}

.facility-body {
  padding: 20px;
}

.facility-icon {
  font-size: 25px;
  margin-bottom: 7px;
}

.facility-body h3 {
  margin: 0 0 7px;
  color: #17231d;
  font-size: 18px;
}

.facility-body p {
  margin: 0 0 14px;
  color: #77837d;
  font-size: 13px;
  line-height: 1.7;
}

.address {
  display: flex;
  gap: 7px;
  color: #66736c;
  font-size: 12px;
  line-height: 1.5;
}


/* =========================
   ORGANISASI
========================= */

.organization-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.organization-card {
  background: white;
  border: 1px solid #e3ebe6;
  border-radius: 18px;
  padding: 22px;
  transition: .25s;
}

.organization-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(20, 50, 35, .07);
}

.organization-top {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.organization-top img {
  width: 58px;
  height: 58px;
  border-radius: 15px;
  object-fit: cover;
}

.organization-icon {
  width: 58px;
  height: 58px;
  border-radius: 15px;
  background: #edf8f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.organization-top h3 {
  margin: 0 0 4px;
  font-size: 18px;
  color: #17231d;
}

.organization-top span {
  font-size: 11px;
  color: #1f7a4d;
  font-weight: 700;
}

.organization-card > p {
  color: #77837d;
  font-size: 13px;
  line-height: 1.7;
  margin: 0 0 18px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-top: 1px solid #edf1ee;
  padding-top: 12px;
  margin-top: 10px;
  color: #4e5c54;
  font-size: 13px;
}

.label {
  color: #8a958f;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .facility-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .organization-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}

@media (max-width: 650px) {

  .page {
    padding: 50px 0 70px;
  }

  .container {
    width: min(100% - 28px, 1120px);
  }

  .header {
    margin-bottom: 45px;
  }

  .profil-grid {
    grid-template-columns: 1fr;
  }

  .facility-grid {
    grid-template-columns: 1fr;
  }

  .organization-grid {
    grid-template-columns: 1fr;
  }

  .section-title h2 {
    font-size: 23px;
  }

}

</style>