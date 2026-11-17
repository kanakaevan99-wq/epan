<script>
  import { onMount } from 'svelte';

  let statistik = {
    totalKunjungan: 0
  };

  // ============================================================
  // STATE
  // ============================================================

  let activeMenu = 'dashboard';
  let sidebarOpen = false;
  let message = '';
  let messageType = 'success';

  // ============================================================
  // DEFAULT DATA
  // Tidak bergantung pada siteData.js supaya file admin ini
  // tidak error karena export yang kurang.
  // ============================================================

  let site = {
    nama: 'KRAJAN DIGITAL',
    tagline: 'Portal Digital Dusun Krajan',
    alamat: 'Dusun Krajan, Desa Krajan, Kecamatan, Kabupaten',
    telepon: '08xxxxxxxxxx',
    email: 'krajandigital@gmail.com'
  };

  let beranda = {
    eyebrow: 'SELAMAT DATANG DI',
    judul1: 'KRAJAN',
    judul2: 'DIGITAL',
    judul3: 'Portal Informasi Dusun Krajan',
    deskripsi:
      'Media informasi digital untuk masyarakat Dusun Krajan. Dapatkan informasi berita, kegiatan, pengumuman, pelayanan, dan berbagai informasi lainnya.',
    tombol1: 'Lihat Berita',
    tombol2: 'Profil Dusun',
    gambar: '/beranda.png'
  };

  let berita = [
    {
      id: 1,
      judul: 'Kegiatan Gotong Royong Dusun Krajan',
      tanggal: '2026-01-10',
      kategori: 'Kegiatan',
      isi: 'Warga Dusun Krajan melaksanakan kegiatan gotong royong bersama untuk menjaga kebersihan lingkungan dusun.',
      gambar: '/kegiatan/gotongroyong.jpeg'
    }
  ];

  let pengumuman = [
    {
      id: 1,
      judul: 'Pengumuman Kerja Bakti',
      tanggal: '2026-01-12',
      isi: 'Diberitahukan kepada seluruh warga Dusun Krajan untuk mengikuti kegiatan kerja bakti.'
    }
  ];

  let kegiatan = [
    {
      id: 1,
      judul: 'Rapat Warga',
      tanggal: '2026-01-15',
      waktu: '19:30',
      tempat: 'Balai Dusun Krajan',
      deskripsi: 'Rapat koordinasi warga Dusun Krajan.'
    }
  ];

  let templates = [
    { id: 1, nama: 'Surat Domisili', deskripsi: 'Template surat keterangan domisili.', file: '#' },
    { id: 2, nama: 'Surat Usaha', deskripsi: 'Template surat keterangan usaha.', file: '#' },
    { id: 3, nama: 'Surat Tidak Mampu', deskripsi: 'Template surat keterangan tidak mampu.', file: '#' },
    { id: 4, nama: 'Pengantar SKCK', deskripsi: 'Template surat pengantar SKCK.', file: '#' },
    { id: 5, nama: 'Surat Kelahiran', deskripsi: 'Template surat keterangan kelahiran.', file: '#' },
    { id: 6, nama: 'Surat Kematian', deskripsi: 'Template surat keterangan kematian.', file: '#' }
  ];

  let profilDusun = {
    sejarah:
      'Dusun Krajan merupakan salah satu wilayah yang memiliki kehidupan masyarakat yang aktif dan menjunjung tinggi semangat gotong royong.',
    kependudukan:
      'Data kependudukan Dusun Krajan dapat diperbarui oleh admin sesuai dengan data terbaru.',
    bumd:
      'Informasi mengenai BUMD atau kegiatan ekonomi desa dapat ditampilkan di bagian ini.',
    visiMisi:
      'Visi: Mewujudkan Dusun Krajan yang maju, mandiri, aman, dan sejahtera.\n\nMisi:\n1. Meningkatkan pelayanan masyarakat.\n2. Mendorong kegiatan ekonomi warga.\n3. Meningkatkan kebersamaan masyarakat.',
    keuangan:
      'Informasi transparansi keuangan dan kegiatan pembangunan dapat ditampilkan di halaman ini.',
    foto: '/beranda.png'
  };

  let fasilitasUmum = [
    { id: 1, nama: 'Masjid', lokasi: 'Dusun Krajan', deskripsi: 'Tempat ibadah masyarakat Dusun Krajan.', gambar: '' },
    { id: 2, nama: 'TPQ', lokasi: 'Dusun Krajan', deskripsi: 'Tempat pendidikan Al-Quran bagi anak-anak.', gambar: '' },
    { id: 3, nama: 'Mushola', lokasi: 'Dusun Krajan', deskripsi: 'Tempat ibadah masyarakat.', gambar: '' },
    { id: 4, nama: 'Balai Dusun', lokasi: 'Dusun Krajan', deskripsi: 'Tempat kegiatan dan pertemuan masyarakat.', gambar: '' }
  ];

  let organisasiMasyarakat = [
    { id: 1, nama: 'BOUVKA', ketua: '', deskripsi: 'Organisasi masyarakat Dusun Krajan.', gambar: '' },
    { id: 2, nama: 'IPPIKA', ketua: '', deskripsi: 'Organisasi kepemudaan masyarakat.', gambar: '' },
    { id: 3, nama: 'Takmir Masjid', ketua: '', deskripsi: 'Pengelola kegiatan masjid.', gambar: '' }
  ];

  let galeri = [
    { id: 1, judul: 'Gotong Royong', deskripsi: 'Kegiatan gotong royong warga.', foto: '/kegiatan/gotongroyong.jpeg' },
    { id: 2, judul: 'Kegiatan Dusun', deskripsi: 'Kegiatan masyarakat Dusun Krajan.', foto: '/kegiatan/kegiatandusun.jpeg' },
    { id: 3, judul: 'Rapat Warga', deskripsi: 'Rapat warga Dusun Krajan.', foto: '/kegiatan/rapatwarga.jpeg' },
    { id: 4, judul: 'Kegiatan Pemuda', deskripsi: 'Kegiatan pemuda Dusun Krajan.', foto: '/kegiatan/kegiatanpemuda.jpeg' },
    { id: 5, judul: 'Penghijauan', deskripsi: 'Kegiatan penghijauan lingkungan.', foto: '/kegiatan/penghijauan.jpeg' },
    { id: 6, judul: 'Kegiatan Kemerdekaan', deskripsi: 'Dokumentasi kegiatan kemerdekaan.', foto: '/kegiatan/kegiatankemerdekaan.jpeg' }
  ];

  let kontak = {
    alamat: 'Dusun Krajan, Desa Krajan, Kecamatan, Kabupaten',
    telepon: '08xxxxxxxxxx',
    email: 'krajandigital@gmail.com',
    whatsapp: '08xxxxxxxxxx',
    facebook: '',
    instagram: ''
  };

  let umkm = [
    {
      id: 1,
      nama: 'Contoh UMKM',
      pemilik: 'Nama Pemilik',
      kategori: 'Makanan',
      deskripsi: 'Deskripsi UMKM.',
      alamat: 'Dusun Krajan',
      telepon: '08xxxxxxxxxx',
      foto: ''
    }
  ];

  let lowongan = [
    {
      id: 1,
      posisi: 'Contoh Lowongan',
      perusahaan: 'Nama Perusahaan',
      lokasi: 'Kabupaten',
      tipe: 'Full Time',
      deskripsi: 'Deskripsi pekerjaan.',
      syarat: 'Syarat dan ketentuan.',
      kontak: '08xxxxxxxxxx'
    }
  ];

  // ============================================================
  // FORM UMKM
  // ============================================================

  let formUmkm = {
    nama: '',
    pemilik: '',
    kategori: '',
    deskripsi: '',
    alamat: '',
    telepon: '',
    foto: ''
  };

  // ============================================================
  // FORM LOWONGAN
  // ============================================================

  let formLowongan = {
    posisi: '',
    perusahaan: '',
    lokasi: '',
    tipe: '',
    deskripsi: '',
    syarat: '',
    kontak: ''
  };

  // ============================================================
  // LOAD DATA
  // ============================================================

  function getLocal(key, fallback) {
    try {
      const data = localStorage.getItem(key);

      if (!data) {
        return fallback;
      }

      return JSON.parse(data);
    } catch (error) {
      console.error(`Gagal membaca ${key}:`, error);
      return fallback;
    }
  }

  function loadData() {
    site = getLocal('krajan_site', site);
    beranda = getLocal('krajan_beranda', beranda);
    berita = getLocal('krajan_berita', berita);
    pengumuman = getLocal('krajan_pengumuman', pengumuman);
    kegiatan = getLocal('krajan_kegiatan', kegiatan);
    templates = getLocal('krajan_templates', templates);

    profilDusun = getLocal('krajan_profil_dusun', profilDusun);
    fasilitasUmum = getLocal('krajan_fasilitas_umum', fasilitasUmum);
    organisasiMasyarakat = getLocal(
      'krajan_organisasi_masyarakat',
      organisasiMasyarakat
    );

    galeri = getLocal('krajan_galeri', galeri);
    kontak = getLocal('krajan_kontak', kontak);

    umkm = getLocal('krajan_umkm', umkm);
    // Data lama memakai field "gambar", sekarang "foto"
    umkm = umkm.map((u) => ({ ...u, foto: u.foto || u.gambar || '' }));

    lowongan = getLocal('krajan_lowongan', lowongan);
    statistik = getLocal('krajan_statistik', statistik);
  }

  // ============================================================
  // SAVE ALL
  // ============================================================

  function saveAll() {
    try {
      localStorage.setItem('krajan_site', JSON.stringify(site));
      localStorage.setItem('krajan_beranda', JSON.stringify(beranda));
      localStorage.setItem('krajan_berita', JSON.stringify(berita));
      localStorage.setItem('krajan_pengumuman', JSON.stringify(pengumuman));
      localStorage.setItem('krajan_kegiatan', JSON.stringify(kegiatan));
      localStorage.setItem('krajan_templates', JSON.stringify(templates));
      localStorage.setItem('krajan_profil_dusun', JSON.stringify(profilDusun));
      localStorage.setItem('krajan_fasilitas_umum', JSON.stringify(fasilitasUmum));
      localStorage.setItem(
        'krajan_organisasi_masyarakat',
        JSON.stringify(organisasiMasyarakat)
      );
      localStorage.setItem('krajan_galeri', JSON.stringify(galeri));
      localStorage.setItem('krajan_kontak', JSON.stringify(kontak));
      localStorage.setItem('krajan_umkm', JSON.stringify(umkm));
      localStorage.setItem('krajan_lowongan', JSON.stringify(lowongan));

      showMessage('Semua perubahan berhasil disimpan.');
    } catch (error) {
      console.error(error);
      showMessage(
        'Gagal menyimpan data. Penyimpanan browser mungkin penuh, coba pakai foto yang lebih kecil.',
        'error'
      );
    }
  }

  // ============================================================
  // MESSAGE
  // ============================================================

  function showMessage(text, type = 'success') {
    message = text;
    messageType = type;

    setTimeout(() => {
      message = '';
    }, 3000);
  }

  // ============================================================
  // SESSION
  // ============================================================

  function logout() {
    sessionStorage.removeItem('krajan_admin_session');
    window.location.href = '/admin/login';
  }

  // ============================================================
  // MENU
  // ============================================================

  function setMenu(menu) {
    activeMenu = menu;
    sidebarOpen = false;
  }

  function getMenuTitle() {
    const titles = {
      dashboard: 'Dashboard',
      beranda: 'Beranda',
      berita: 'Berita Dusun',
      pengumuman: 'Pengumuman',
      kegiatan: 'Jadwal & Kegiatan',
      templates: 'Template Warga',
      informasi: 'Profil Dusun',
      galeri: 'Galeri Kegiatan',
      kontak: 'Kontak',
      umkm: 'UMKM',
      lowongan: 'Lowongan Kerja'
    };

    return titles[activeMenu] || 'Dashboard';
  }

  // ============================================================
  // UPLOAD IMAGE
  // Foto otomatis diperkecil supaya penyimpanan browser
  // tidak cepat penuh.
  // ============================================================

  function fileToBase64(file, maxSize = 900, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;

      reader.onload = () => {
        const img = new Image();

        img.onerror = reject;

        img.onload = () => {
          const skala = Math.min(1, maxSize / Math.max(img.width, img.height));
          const canvas = document.createElement('canvas');

          canvas.width = Math.round(img.width * skala);
          canvas.height = Math.round(img.height * skala);

          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          resolve(canvas.toDataURL('image/jpeg', quality));
        };

        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    });
  }

  async function uploadBeranda(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      beranda.gambar = await fileToBase64(file);
      showMessage('Gambar beranda berhasil dipilih.');
    } catch (error) {
      showMessage('Gagal membaca gambar.', 'error');
    }
  }

  async function uploadProfilFoto(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      profilDusun.foto = await fileToBase64(file);
      showMessage('Foto profil berhasil dipilih.');
    } catch (error) {
      showMessage('Gagal membaca foto.', 'error');
    }
  }

  async function uploadGaleri(event, index) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      galeri[index].foto = await fileToBase64(file);
      galeri = [...galeri];

      showMessage('Foto galeri berhasil dipilih.');
    } catch (error) {
      showMessage('Gagal membaca foto.', 'error');
    }
  }

  async function uploadFasilitas(event, index) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      fasilitasUmum[index].gambar = await fileToBase64(file);
      fasilitasUmum = [...fasilitasUmum];

      showMessage('Foto fasilitas berhasil dipilih.');
    } catch (error) {
      showMessage('Gagal membaca foto.', 'error');
    }
  }

  async function uploadOrganisasi(event, index) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      organisasiMasyarakat[index].gambar = await fileToBase64(file);
      organisasiMasyarakat = [...organisasiMasyarakat];

      showMessage('Foto organisasi berhasil dipilih.');
    } catch (error) {
      showMessage('Gagal membaca foto.', 'error');
    }
  }

  // ============================================================
  // TAMBAH DATA
  // ============================================================

  function tambahBerita() {
    berita = [
      ...berita,
      {
        id: Date.now(),
        judul: 'Berita Baru',
        tanggal: new Date().toISOString().slice(0, 10),
        kategori: 'Umum',
        isi: '',
        gambar: ''
      }
    ];
  }

  function tambahPengumuman() {
    pengumuman = [
      ...pengumuman,
      {
        id: Date.now(),
        judul: 'Pengumuman Baru',
        tanggal: new Date().toISOString().slice(0, 10),
        isi: ''
      }
    ];
  }

  function tambahKegiatan() {
    kegiatan = [
      ...kegiatan,
      {
        id: Date.now(),
        judul: 'Kegiatan Baru',
        tanggal: new Date().toISOString().slice(0, 10),
        waktu: '',
        tempat: '',
        deskripsi: ''
      }
    ];
  }

  function tambahTemplate() {
    templates = [
      ...templates,
      {
        id: Date.now(),
        nama: 'Template Baru',
        deskripsi: '',
        file: '#'
      }
    ];
  }

  function tambahGaleri() {
    galeri = [
      ...galeri,
      {
        id: Date.now(),
        judul: 'Foto Baru',
        deskripsi: '',
        foto: ''
      }
    ];
  }

  function tambahFasilitas() {
    fasilitasUmum = [
      ...fasilitasUmum,
      {
        id: Date.now(),
        nama: 'Fasilitas Baru',
        lokasi: '',
        deskripsi: '',
        gambar: ''
      }
    ];
  }

  function tambahOrganisasi() {
    organisasiMasyarakat = [
      ...organisasiMasyarakat,
      {
        id: Date.now(),
        nama: 'Organisasi Baru',
        ketua: '',
        deskripsi: '',
        gambar: ''
      }
    ];
  }

  // ============================================================
  // DELETE
  // ============================================================

  function hapusItem(arrayName, index) {
    if (!confirm('Yakin ingin menghapus data ini?')) {
      return;
    }

    if (arrayName === 'berita') {
      berita = berita.filter((_, i) => i !== index);
    }

    if (arrayName === 'pengumuman') {
      pengumuman = pengumuman.filter((_, i) => i !== index);
    }

    if (arrayName === 'kegiatan') {
      kegiatan = kegiatan.filter((_, i) => i !== index);
    }

    if (arrayName === 'templates') {
      templates = templates.filter((_, i) => i !== index);
    }

    if (arrayName === 'galeri') {
      galeri = galeri.filter((_, i) => i !== index);
    }

    if (arrayName === 'fasilitas') {
      fasilitasUmum = fasilitasUmum.filter((_, i) => i !== index);
    }

    if (arrayName === 'organisasi') {
      organisasiMasyarakat = organisasiMasyarakat.filter(
        (_, i) => i !== index
      );
    }

    if (arrayName === 'umkm') {
      umkm = umkm.filter((_, i) => i !== index);
    }

    if (arrayName === 'lowongan') {
      lowongan = lowongan.filter((_, i) => i !== index);
    }
  }

  // ============================================================
  // UMKM
  // ============================================================

  function tambahUmkm() {
    if (!formUmkm.nama.trim()) {
      showMessage('Nama UMKM harus diisi.', 'error');
      return;
    }

    umkm = [
      ...umkm,
      {
        id: Date.now(),
        ...formUmkm
      }
    ];

    formUmkm = {
      nama: '',
      pemilik: '',
      kategori: '',
      deskripsi: '',
      alamat: '',
      telepon: '',
      foto: ''
    };

    saveAll();
  }

  async function uploadUmkm(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      formUmkm.foto = await fileToBase64(file);
      formUmkm = { ...formUmkm };
    } catch (error) {
      showMessage('Gagal membaca gambar.', 'error');
    }
  }

  async function uploadUmkmItem(event, index) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      umkm[index].foto = await fileToBase64(file);
      umkm = [...umkm];
      saveAll();
    } catch (error) {
      showMessage('Gagal membaca gambar.', 'error');
    }
  }

  function hapusFotoUmkm(index) {
    umkm[index].foto = '';
    umkm = [...umkm];
    saveAll();
  }

  // ============================================================
  // LOWONGAN
  // ============================================================

  function tambahLowongan() {
    if (!formLowongan.posisi.trim()) {
      showMessage('Posisi pekerjaan harus diisi.', 'error');
      return;
    }

    lowongan = [
      ...lowongan,
      {
        id: Date.now(),
        ...formLowongan
      }
    ];

    formLowongan = {
      posisi: '',
      perusahaan: '',
      lokasi: '',
      tipe: '',
      deskripsi: '',
      syarat: '',
      kontak: ''
    };

    showMessage('Lowongan berhasil ditambahkan.');
  }

  // ============================================================
  // RESET DATA
  // ============================================================

  function resetData() {
    const yakin = confirm(
      'PERINGATAN!\n\nSemua data yang tersimpan di browser akan dihapus dan dikembalikan ke data awal.\n\nLanjutkan?'
    );

    if (!yakin) return;

    const keys = [
      'krajan_site',
      'krajan_beranda',
      'krajan_berita',
      'krajan_pengumuman',
      'krajan_kegiatan',
      'krajan_templates',
      'krajan_informasi',
      'krajan_profil_dusun',
      'krajan_fasilitas_umum',
      'krajan_organisasi_masyarakat',
      'krajan_galeri',
      'krajan_kontak',
      'krajan_umkm',
      'krajan_lowongan',
      'krajan_statistik'
    ];

    keys.forEach((key) => localStorage.removeItem(key));

    location.reload();
  }

  // ============================================================
  // SESSION CHECK
  // ============================================================

  onMount(() => {
    const session = sessionStorage.getItem('krajan_admin_session');

    if (session !== 'true') {
      window.location.href = '/admin/login';
      return;
    }

    loadData();
  });
</script>

<svelte:head>
  <title>Admin - KRAJAN DIGITAL</title>
</svelte:head>

<div class="admin-layout">

  <!-- SIDEBAR -->

  <aside class:open={sidebarOpen} class="sidebar">

    <div class="sidebar-header">
      <div class="brand-icon">KD</div>

      <div class="brand-text">
        <strong>KRAJAN</strong>
        <span>DIGITAL</span>
      </div>
    </div>

    <nav class="sidebar-nav">

      <button class:active={activeMenu === 'dashboard'} on:click={() => setMenu('dashboard')}>
        <span>🏠</span>
        <span>Dashboard</span>
      </button>

      <button class:active={activeMenu === 'beranda'} on:click={() => setMenu('beranda')}>
        <span>🌐</span>
        <span>Beranda</span>
      </button>

      <button class:active={activeMenu === 'berita'} on:click={() => setMenu('berita')}>
        <span>📰</span>
        <span>Berita Dusun</span>
      </button>

      <button class:active={activeMenu === 'pengumuman'} on:click={() => setMenu('pengumuman')}>
        <span>📢</span>
        <span>Pengumuman</span>
      </button>

      <button class:active={activeMenu === 'kegiatan'} on:click={() => setMenu('kegiatan')}>
        <span>📅</span>
        <span>Jadwal & Kegiatan</span>
      </button>

      <button class:active={activeMenu === 'templates'} on:click={() => setMenu('templates')}>
        <span>📄</span>
        <span>Template Warga</span>
      </button>

      <button class:active={activeMenu === 'informasi'} on:click={() => setMenu('informasi')}>
        <span>🏘️</span>
        <span>Profil Dusun</span>
      </button>

      <button class:active={activeMenu === 'galeri'} on:click={() => setMenu('galeri')}>
        <span>📸</span>
        <span>Galeri Kegiatan</span>
      </button>

      <button class:active={activeMenu === 'kontak'} on:click={() => setMenu('kontak')}>
        <span>☎️</span>
        <span>Kontak</span>
      </button>

      <div class="nav-divider"></div>

      <button class:active={activeMenu === 'umkm'} on:click={() => setMenu('umkm')}>
        <span>🏪</span>
        <span>UMKM</span>
      </button>

      <button class:active={activeMenu === 'lowongan'} on:click={() => setMenu('lowongan')}>
        <span>💼</span>
        <span>Lowongan Kerja</span>
      </button>

    </nav>

    <div class="sidebar-bottom">

      <button class="website-button" on:click={() => (window.location.href = '/')}>
        🌐 Lihat Website
      </button>

      <button class="logout-button" on:click={logout}>
        🚪 Logout
      </button>

    </div>

  </aside>


  <!-- MAIN -->

  <main class="main-content">

    <header class="topbar">

      <button class="mobile-menu" on:click={() => (sidebarOpen = !sidebarOpen)}>
        ☰
      </button>

      <div>
        <h1>{getMenuTitle()}</h1>
        <p>Kelola konten website KRAJAN DIGITAL</p>
      </div>

      <div class="topbar-actions">

        <button class="save-button" on:click={saveAll}>
          💾 Simpan Semua
        </button>

        <button class="reset-button" on:click={resetData}>
          ↻
        </button>

      </div>

    </header>


    {#if message}
      <div class:error={messageType === 'error'} class="alert">
        {message}
      </div>
    {/if}


    <div class="content">


      <!-- DASHBOARD -->

      {#if activeMenu === 'dashboard'}

        <section class="page-section">

          <div class="welcome-card">

            <div>
              <span class="welcome-label">ADMIN PANEL</span>

              <h2>
                Selamat Datang di<br />
                <strong>KRAJAN DIGITAL</strong>
              </h2>

              <p>
                Kelola seluruh informasi website Dusun Krajan
                melalui panel admin ini.
              </p>
            </div>

            <div class="welcome-icon">
              🏘️
            </div>

          </div>


          <div class="stats-grid">

            <div class="stat-card">
              <div class="stat-icon">📰</div>
              <div>
                <strong>{berita.length}</strong>
                <span>Berita</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">📢</div>
              <div>
                <strong>{pengumuman.length}</strong>
                <span>Pengumuman</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">📅</div>
              <div>
                <strong>{kegiatan.length}</strong>
                <span>Kegiatan</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">📸</div>
              <div>
                <strong>{galeri.length}</strong>
                <span>Foto Galeri</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">🏪</div>
              <div>
                <strong>{umkm.length}</strong>
                <span>UMKM</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">💼</div>
              <div>
                <strong>{lowongan.length}</strong>
                <span>Lowongan</span>
              </div>
            </div>

            <div class="stat-card">
              <div class="stat-icon">👁️</div>
              <div>
                <strong>{statistik.totalKunjungan || statistik.kunjungan || 0}</strong>
                <span>Pengunjung Web</span>
              </div>
            </div>

          </div>


          <div class="dashboard-grid">

            <div class="panel">

              <div class="panel-header">
                <div>
                  <h3>Informasi Website</h3>
                  <p>Data utama KRAJAN DIGITAL</p>
                </div>
              </div>

              <div class="info-list">

                <div>
                  <span>Nama Website</span>
                  <strong>{site.nama}</strong>
                </div>

                <div>
                  <span>Tagline</span>
                  <strong>{site.tagline}</strong>
                </div>

                <div>
                  <span>Telepon</span>
                  <strong>{site.telepon}</strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>{site.email}</strong>
                </div>

              </div>

            </div>


            <div class="panel quick-panel">

              <div class="panel-header">
                <div>
                  <h3>Akses Cepat</h3>
                  <p>Kelola bagian website</p>
                </div>
              </div>

              <div class="quick-buttons">

                <button on:click={() => setMenu('berita')}>
                  📰 Kelola Berita
                </button>

                <button on:click={() => setMenu('kegiatan')}>
                  📅 Kelola Kegiatan
                </button>

                <button on:click={() => setMenu('galeri')}>
                  📸 Kelola Galeri
                </button>

                <button on:click={() => setMenu('informasi')}>
                  🏘️ Profil Dusun
                </button>

              </div>

            </div>

          </div>

        </section>


      <!-- BERANDA -->

      {:else if activeMenu === 'beranda'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Pengaturan Beranda</h2>
              <p>Edit tampilan utama website.</p>
            </div>

          </div>


          <div class="panel">

            <div class="form-grid">

              <div class="form-group">
                <label>Eyebrow</label>
                <input bind:value={beranda.eyebrow} />
              </div>

              <div class="form-group">
                <label>Judul 1</label>
                <input bind:value={beranda.judul1} />
              </div>

              <div class="form-group">
                <label>Judul 2</label>
                <input bind:value={beranda.judul2} />
              </div>

              <div class="form-group">
                <label>Judul 3</label>
                <input bind:value={beranda.judul3} />
              </div>

              <div class="form-group full">
                <label>Deskripsi</label>
                <textarea rows="5" bind:value={beranda.deskripsi}></textarea>
              </div>

              <div class="form-group">
                <label>Tombol 1</label>
                <input bind:value={beranda.tombol1} />
              </div>

              <div class="form-group">
                <label>Tombol 2</label>
                <input bind:value={beranda.tombol2} />
              </div>

            </div>


            <div class="image-editor">

              <div>
                <label>Gambar Beranda</label>

                <input type="file" accept="image/*" on:change={uploadBeranda} />

                <small>Bisa menggunakan gambar dari komputer.</small>
              </div>

              {#if beranda.gambar}
                <img src={beranda.gambar} alt="Preview Beranda" class="preview-image" />
              {/if}

            </div>


            <div class="save-row">
              <button class="primary-button" on:click={saveAll}>
                💾 Simpan Beranda
              </button>
            </div>

          </div>


          <div class="panel">

            <div class="panel-header">
              <div>
                <h3>Informasi Website</h3>
                <p>Data identitas website.</p>
              </div>
            </div>

            <div class="form-grid">

              <div class="form-group">
                <label>Nama Website</label>
                <input bind:value={site.nama} />
              </div>

              <div class="form-group">
                <label>Tagline</label>
                <input bind:value={site.tagline} />
              </div>

              <div class="form-group">
                <label>Alamat</label>
                <input bind:value={site.alamat} />
              </div>

              <div class="form-group">
                <label>Telepon</label>
                <input bind:value={site.telepon} />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input bind:value={site.email} />
              </div>

            </div>

          </div>

        </section>


      <!-- BERITA -->

      {:else if activeMenu === 'berita'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Berita Dusun</h2>
              <p>Kelola berita yang tampil di website.</p>
            </div>

            <button class="primary-button" on:click={tambahBerita}>
              + Tambah Berita
            </button>

          </div>


          {#if berita.length === 0}

            <div class="empty-state">
              <div>📰</div>
              <h3>Belum ada berita</h3>
              <p>Klik tombol Tambah Berita untuk membuat berita.</p>
            </div>

          {:else}

            {#each berita as item, index}

              <div class="panel item-panel">

                <div class="item-top">

                  <div class="item-number">#{index + 1}</div>

                  <button class="delete-button" on:click={() => hapusItem('berita', index)}>
                    🗑️ Hapus
                  </button>

                </div>


                <div class="form-grid">

                  <div class="form-group">
                    <label>Judul Berita</label>
                    <input bind:value={item.judul} />
                  </div>

                  <div class="form-group">
                    <label>Tanggal</label>
                    <input type="date" bind:value={item.tanggal} />
                  </div>

                  <div class="form-group">
                    <label>Kategori</label>
                    <input bind:value={item.kategori} />
                  </div>

                  <div class="form-group">
                    <label>Gambar</label>
                    <input bind:value={item.gambar} />
                  </div>

                  <div class="form-group full">
                    <label>Isi Berita</label>
                    <textarea rows="7" bind:value={item.isi}></textarea>
                  </div>

                </div>

              </div>

            {/each}

          {/if}

        </section>


      <!-- PENGUMUMAN -->

      {:else if activeMenu === 'pengumuman'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Pengumuman</h2>
              <p>Kelola pengumuman untuk masyarakat.</p>
            </div>

            <button class="primary-button" on:click={tambahPengumuman}>
              + Tambah Pengumuman
            </button>

          </div>


          {#if pengumuman.length === 0}

            <div class="empty-state">
              <div>📢</div>
              <h3>Belum ada pengumuman</h3>
            </div>

          {:else}

            {#each pengumuman as item, index}

              <div class="panel item-panel">

                <div class="item-top">

                  <div class="item-number">#{index + 1}</div>

                  <button class="delete-button" on:click={() => hapusItem('pengumuman', index)}>
                    🗑️ Hapus
                  </button>

                </div>


                <div class="form-grid">

                  <div class="form-group">
                    <label>Judul</label>
                    <input bind:value={item.judul} />
                  </div>

                  <div class="form-group">
                    <label>Tanggal</label>
                    <input type="date" bind:value={item.tanggal} />
                  </div>

                  <div class="form-group full">
                    <label>Isi Pengumuman</label>
                    <textarea rows="6" bind:value={item.isi}></textarea>
                  </div>

                </div>

              </div>

            {/each}

          {/if}

        </section>


      <!-- KEGIATAN -->

      {:else if activeMenu === 'kegiatan'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Jadwal & Kegiatan</h2>
              <p>Kelola agenda kegiatan Dusun Krajan.</p>
            </div>

            <button class="primary-button" on:click={tambahKegiatan}>
              + Tambah Kegiatan
            </button>

          </div>


          {#if kegiatan.length === 0}

            <div class="empty-state">
              <div>📅</div>
              <h3>Belum ada kegiatan</h3>
            </div>

          {:else}

            {#each kegiatan as item, index}

              <div class="panel item-panel">

                <div class="item-top">

                  <div class="item-number">#{index + 1}</div>

                  <button class="delete-button" on:click={() => hapusItem('kegiatan', index)}>
                    🗑️ Hapus
                  </button>

                </div>


                <div class="form-grid">

                  <div class="form-group">
                    <label>Nama Kegiatan</label>
                    <input bind:value={item.judul} />
                  </div>

                  <div class="form-group">
                    <label>Tanggal</label>
                    <input type="date" bind:value={item.tanggal} />
                  </div>

                  <div class="form-group">
                    <label>Waktu</label>
                    <input type="time" bind:value={item.waktu} />
                  </div>

                  <div class="form-group">
                    <label>Tempat</label>
                    <input bind:value={item.tempat} />
                  </div>

                  <div class="form-group full">
                    <label>Deskripsi</label>
                    <textarea rows="5" bind:value={item.deskripsi}></textarea>
                  </div>

                </div>

              </div>

            {/each}

          {/if}

        </section>


      <!-- TEMPLATE -->

      {:else if activeMenu === 'templates'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Template Warga</h2>
              <p>Kelola template dokumen yang tersedia untuk warga.</p>
            </div>

            <button class="primary-button" on:click={tambahTemplate}>
              + Tambah Template
            </button>

          </div>


          {#each templates as item, index}

            <div class="panel item-panel">

              <div class="item-top">

                <div class="item-number">#{index + 1}</div>

                <button class="delete-button" on:click={() => hapusItem('templates', index)}>
                  🗑️ Hapus
                </button>

              </div>


              <div class="form-grid">

                <div class="form-group">
                  <label>Nama Template</label>
                  <input bind:value={item.nama} />
                </div>

                <div class="form-group">
                  <label>Link / File</label>
                  <input bind:value={item.file} />
                </div>

                <div class="form-group full">
                  <label>Deskripsi</label>
                  <textarea rows="4" bind:value={item.deskripsi}></textarea>
                </div>

              </div>

            </div>

          {/each}

        </section>


      <!-- PROFIL DUSUN -->

      {:else if activeMenu === 'informasi'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Profil Dusun</h2>
              <p>Kelola informasi lengkap mengenai Dusun Krajan.</p>
            </div>

          </div>


          <div class="panel">

            <div class="form-group">
              <label>Sejarah Dusun</label>
              <textarea rows="8" bind:value={profilDusun.sejarah}></textarea>
            </div>

            <div class="form-group">
              <label>Kependudukan</label>
              <textarea rows="8" bind:value={profilDusun.kependudukan}></textarea>
            </div>

            <div class="form-group">
              <label>BUMD</label>
              <textarea rows="8" bind:value={profilDusun.bumd}></textarea>
            </div>

            <div class="form-group">
              <label>Visi & Misi</label>
              <textarea rows="10" bind:value={profilDusun.visiMisi}></textarea>
            </div>

            <div class="form-group">
              <label>Keuangan</label>
              <textarea rows="8" bind:value={profilDusun.keuangan}></textarea>
            </div>


            <div class="image-editor">

              <div>

                <label>Foto Profil Dusun</label>

                <input type="file" accept="image/*" on:change={uploadProfilFoto} />

                <small>Pilih foto profil Dusun dari komputer.</small>

              </div>

              {#if profilDusun.foto}
                <img src={profilDusun.foto} alt="Profil Dusun" class="preview-image" />
              {/if}

            </div>


            <div class="save-row">

              <button class="primary-button" on:click={saveAll}>
                💾 Simpan Profil Dusun
              </button>

            </div>

          </div>


          <!-- FASILITAS -->

          <div class="section-heading subsection-heading">

            <div>
              <h2>Fasilitas Umum</h2>
              <p>Kelola fasilitas yang ada di Dusun Krajan.</p>
            </div>

            <button class="primary-button" on:click={tambahFasilitas}>
              + Tambah Fasilitas
            </button>

          </div>


          {#each fasilitasUmum as item, index}

            <div class="panel item-panel">

              <div class="item-top">

                <div class="item-number">#{index + 1}</div>

                <button class="delete-button" on:click={() => hapusItem('fasilitas', index)}>
                  🗑️ Hapus
                </button>

              </div>


              <div class="form-grid">

                <div class="form-group">
                  <label>Nama Fasilitas</label>
                  <input bind:value={item.nama} />
                </div>

                <div class="form-group">
                  <label>Lokasi</label>
                  <input bind:value={item.lokasi} />
                </div>

                <div class="form-group full">
                  <label>Deskripsi</label>
                  <textarea rows="4" bind:value={item.deskripsi}></textarea>
                </div>

              </div>


              <div class="image-editor">

                <div>

                  <label>Foto Fasilitas</label>

                  <input
                    type="file"
                    accept="image/*"
                    on:change={(event) => uploadFasilitas(event, index)}
                  />

                </div>

                {#if item.gambar}
                  <img src={item.gambar} alt={item.nama} class="small-preview" />
                {/if}

              </div>

            </div>

          {/each}


          <!-- ORGANISASI -->

          <div class="section-heading subsection-heading">

            <div>
              <h2>Organisasi Masyarakat</h2>
              <p>Kelola organisasi masyarakat Dusun Krajan.</p>
            </div>

            <button class="primary-button" on:click={tambahOrganisasi}>
              + Tambah Organisasi
            </button>

          </div>


          {#each organisasiMasyarakat as item, index}

            <div class="panel item-panel">

              <div class="item-top">

                <div class="item-number">#{index + 1}</div>

                <button class="delete-button" on:click={() => hapusItem('organisasi', index)}>
                  🗑️ Hapus
                </button>

              </div>


              <div class="form-grid">

                <div class="form-group">
                  <label>Nama Organisasi</label>
                  <input bind:value={item.nama} />
                </div>

                <div class="form-group">
                  <label>Ketua</label>
                  <input bind:value={item.ketua} />
                </div>

                <div class="form-group full">
                  <label>Deskripsi</label>
                  <textarea rows="4" bind:value={item.deskripsi}></textarea>
                </div>

              </div>


              <div class="image-editor">

                <div>

                  <label>Foto Organisasi</label>

                  <input
                    type="file"
                    accept="image/*"
                    on:change={(event) => uploadOrganisasi(event, index)}
                  />

                </div>

                {#if item.gambar}
                  <img src={item.gambar} alt={item.nama} class="small-preview" />
                {/if}

              </div>

            </div>

          {/each}

        </section>


      <!-- GALERI -->

      {:else if activeMenu === 'galeri'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Galeri Kegiatan</h2>
              <p>Kelola foto kegiatan Dusun Krajan.</p>
            </div>

            <button class="primary-button" on:click={tambahGaleri}>
              + Tambah Foto
            </button>

          </div>


          {#if galeri.length === 0}

            <div class="empty-state">
              <div>📸</div>
              <h3>Belum ada foto</h3>
            </div>

          {:else}

            <div class="gallery-admin-grid">

              {#each galeri as item, index}

                <div class="gallery-admin-card">

                  {#if item.foto}
                    <img src={item.foto} alt={item.judul} />
                  {:else}
                    <div class="gallery-placeholder">📸</div>
                  {/if}


                  <div class="gallery-card-content">

                    <div class="form-group">
                      <label>Judul</label>
                      <input bind:value={item.judul} />
                    </div>

                    <div class="form-group">
                      <label>Deskripsi</label>
                      <textarea rows="3" bind:value={item.deskripsi}></textarea>
                    </div>

                    <div class="form-group">
                      <label>Ganti Foto</label>
                      <input
                        type="file"
                        accept="image/*"
                        on:change={(event) => uploadGaleri(event, index)}
                      />
                    </div>

                    <button
                      class="delete-button full-button"
                      on:click={() => hapusItem('galeri', index)}
                    >
                      🗑️ Hapus Foto
                    </button>

                  </div>

                </div>

              {/each}

            </div>

          {/if}

        </section>


      <!-- KONTAK -->

      {:else if activeMenu === 'kontak'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Kontak</h2>
              <p>Kelola informasi kontak Dusun Krajan.</p>
            </div>

          </div>


          <div class="panel">

            <div class="form-grid">

              <div class="form-group full">
                <label>Alamat</label>
                <textarea rows="4" bind:value={kontak.alamat}></textarea>
              </div>

              <div class="form-group">
                <label>Telepon</label>
                <input bind:value={kontak.telepon} />
              </div>

              <div class="form-group">
                <label>WhatsApp</label>
                <input bind:value={kontak.whatsapp} />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input bind:value={kontak.email} />
              </div>

              <div class="form-group">
                <label>Facebook</label>
                <input bind:value={kontak.facebook} />
              </div>

              <div class="form-group">
                <label>Instagram</label>
                <input bind:value={kontak.instagram} />
              </div>

            </div>


            <div class="save-row">

              <button class="primary-button" on:click={saveAll}>
                💾 Simpan Kontak
              </button>

            </div>

          </div>

        </section>


      <!-- UMKM -->

      {:else if activeMenu === 'umkm'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>UMKM</h2>
              <p>Kelola daftar UMKM masyarakat Dusun Krajan.</p>
            </div>

          </div>


          <div class="panel">

            <div class="panel-header">

              <div>
                <h3>Tambah UMKM</h3>
                <p>Masukkan informasi usaha masyarakat.</p>
              </div>

            </div>


            <div class="form-grid">

              <div class="form-group">
                <label>Nama UMKM</label>
                <input bind:value={formUmkm.nama} />
              </div>

              <div class="form-group">
                <label>Nama Pemilik</label>
                <input bind:value={formUmkm.pemilik} />
              </div>

              <div class="form-group">
                <label>Kategori</label>
                <input bind:value={formUmkm.kategori} />
              </div>

              <div class="form-group">
                <label>Telepon</label>
                <input bind:value={formUmkm.telepon} />
              </div>

              <div class="form-group">
                <label>Alamat</label>
                <input bind:value={formUmkm.alamat} />
              </div>

              <div class="form-group">
                <label>Foto</label>
                <input type="file" accept="image/*" on:change={uploadUmkm} />
              </div>

              <div class="form-group full">
                <label>Deskripsi</label>
                <textarea rows="5" bind:value={formUmkm.deskripsi}></textarea>
              </div>

            </div>


            {#if formUmkm.foto}
              <img src={formUmkm.foto} alt="Preview UMKM" class="small-preview" />
            {/if}


            <div class="save-row">

              <button class="primary-button" on:click={tambahUmkm}>
                + Tambahkan UMKM
              </button>

            </div>

          </div>


          {#each umkm as item, index}

            <div class="panel item-panel">

              <div class="item-top">

                <div class="item-number">#{index + 1}</div>

                <button class="delete-button" on:click={() => hapusItem('umkm', index)}>
                  🗑️ Hapus
                </button>

              </div>


              <div class="form-grid">

                <div class="form-group">
                  <label>Nama UMKM</label>
                  <input bind:value={item.nama} />
                </div>

                <div class="form-group">
                  <label>Pemilik</label>
                  <input bind:value={item.pemilik} />
                </div>

                <div class="form-group">
                  <label>Kategori</label>
                  <input bind:value={item.kategori} />
                </div>

                <div class="form-group">
                  <label>Telepon</label>
                  <input bind:value={item.telepon} />
                </div>

                <div class="form-group">
                  <label>Alamat</label>
                  <input bind:value={item.alamat} />
                </div>

                <div class="form-group">
                  <label>Path Foto</label>
                  <input bind:value={item.foto} placeholder="/umkm/nama-file.jpg" />
                </div>

                <div class="form-group full">
                  <label>Deskripsi</label>
                  <textarea rows="5" bind:value={item.deskripsi}></textarea>
                </div>

              </div>


              <div class="image-editor">

                <div>

                  <label>Ganti Foto</label>

                  <input
                    type="file"
                    accept="image/*"
                    on:change={(event) => uploadUmkmItem(event, index)}
                  />

                  <small>
                    Foto diperkecil otomatis. Atau isi Path Foto di atas,
                    misalnya /umkm/warmindo-krajan.jpg
                  </small>

                  {#if item.foto}
                    <button
                      class="delete-button"
                      style="align-self: flex-start"
                      on:click={() => hapusFotoUmkm(index)}
                    >
                      🗑️ Hapus Foto
                    </button>
                  {/if}

                </div>

                {#if item.foto}
                  <img src={item.foto} alt={item.nama} class="small-preview" />
                {/if}

              </div>

            </div>

          {/each}

        </section>


      <!-- LOWONGAN -->

      {:else if activeMenu === 'lowongan'}

        <section class="page-section">

          <div class="section-heading">

            <div>
              <h2>Lowongan Kerja</h2>
              <p>Kelola informasi lowongan pekerjaan.</p>
            </div>

          </div>


          <div class="panel">

            <div class="panel-header">

              <div>
                <h3>Tambah Lowongan</h3>
                <p>Masukkan informasi pekerjaan.</p>
              </div>

            </div>


            <div class="form-grid">

              <div class="form-group">
                <label>Posisi</label>
                <input bind:value={formLowongan.posisi} />
              </div>

              <div class="form-group">
                <label>Perusahaan</label>
                <input bind:value={formLowongan.perusahaan} />
              </div>

              <div class="form-group">
                <label>Lokasi</label>
                <input bind:value={formLowongan.lokasi} />
              </div>

              <div class="form-group">
                <label>Tipe Pekerjaan</label>
                <input bind:value={formLowongan.tipe} />
              </div>

              <div class="form-group">
                <label>Kontak</label>
                <input bind:value={formLowongan.kontak} />
              </div>

              <div class="form-group full">
                <label>Deskripsi</label>
                <textarea rows="5" bind:value={formLowongan.deskripsi}></textarea>
              </div>

              <div class="form-group full">
                <label>Syarat</label>
                <textarea rows="6" bind:value={formLowongan.syarat}></textarea>
              </div>

            </div>


            <div class="save-row">

              <button class="primary-button" on:click={tambahLowongan}>
                + Tambahkan Lowongan
              </button>

            </div>

          </div>


          {#each lowongan as item, index}

            <div class="panel item-panel">

              <div class="item-top">

                <div class="item-number">#{index + 1}</div>

                <button class="delete-button" on:click={() => hapusItem('lowongan', index)}>
                  🗑️ Hapus
                </button>

              </div>


              <div class="form-grid">

                <div class="form-group">
                  <label>Posisi</label>
                  <input bind:value={item.posisi} />
                </div>

                <div class="form-group">
                  <label>Perusahaan</label>
                  <input bind:value={item.perusahaan} />
                </div>

                <div class="form-group">
                  <label>Lokasi</label>
                  <input bind:value={item.lokasi} />
                </div>

                <div class="form-group">
                  <label>Tipe</label>
                  <input bind:value={item.tipe} />
                </div>

                <div class="form-group">
                  <label>Kontak</label>
                  <input bind:value={item.kontak} />
                </div>

                <div class="form-group full">
                  <label>Deskripsi</label>
                  <textarea rows="5" bind:value={item.deskripsi}></textarea>
                </div>

                <div class="form-group full">
                  <label>Syarat</label>
                  <textarea rows="6" bind:value={item.syarat}></textarea>
                </div>

              </div>

            </div>

          {/each}

        </section>

      {/if}

    </div>

  </main>

</div>


<style>

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: #f5f7fb;
    color: #172033;
  }


  .admin-layout {
    min-height: 100vh;
    display: flex;
    background: #f5f7fb;
  }


  /* SIDEBAR */

  .sidebar {
    width: 260px;
    min-width: 260px;
    min-height: 100vh;
    background: #ffffff;
    border-right: 1px solid #e6e9ef;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 100vh;
    z-index: 100;
  }

  .sidebar-header {
    height: 82px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #edf0f4;
  }

  .brand-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #173b75;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 14px;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .brand-text strong {
    font-size: 17px;
    letter-spacing: 0.5px;
  }

  .brand-text span {
    font-size: 11px;
    color: #718096;
    margin-top: 4px;
    letter-spacing: 1.5px;
  }

  .sidebar-nav {
    flex: 1;
    padding: 15px 12px;
    overflow-y: auto;
  }

  .sidebar-nav button {
    width: 100%;
    border: none;
    background: transparent;
    padding: 12px 14px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #5d687a;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 3px;
    transition: 0.2s;
  }

  .sidebar-nav button:hover {
    background: #f0f4fa;
    color: #173b75;
  }

  .sidebar-nav button.active {
    background: #eaf0fa;
    color: #173b75;
    font-weight: 700;
  }

  .sidebar-nav button span:first-child {
    width: 22px;
    text-align: center;
    font-size: 17px;
  }

  .nav-divider {
    height: 1px;
    background: #edf0f4;
    margin: 12px 8px;
  }

  .sidebar-bottom {
    padding: 14px;
    border-top: 1px solid #edf0f4;
  }

  .website-button,
  .logout-button {
    width: 100%;
    border: none;
    padding: 11px 13px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 13px;
    margin-top: 7px;
  }

  .website-button {
    background: #f1f4f8;
    color: #344054;
  }

  .logout-button {
    background: #fff0f0;
    color: #c53030;
  }


  /* MAIN */

  .main-content {
    flex: 1;
    min-width: 0;
  }

  .topbar {
    min-height: 82px;
    background: white;
    border-bottom: 1px solid #e6e9ef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .topbar h1 {
    margin: 0;
    font-size: 21px;
    color: #172033;
  }

  .topbar p {
    margin: 4px 0 0;
    color: #7b8494;
    font-size: 13px;
  }

  .topbar-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .save-button,
  .reset-button {
    border: none;
    cursor: pointer;
    border-radius: 9px;
  }

  .save-button {
    background: #173b75;
    color: white;
    padding: 11px 17px;
    font-weight: 700;
  }

  .reset-button {
    width: 42px;
    height: 42px;
    background: #f1f4f8;
    color: #344054;
    font-size: 18px;
  }

  .mobile-menu {
    display: none;
    border: none;
    background: #f1f4f8;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 12px;
  }


  /* CONTENT */

  .content {
    padding: 28px;
    max-width: 1500px;
    margin: 0 auto;
  }

  .page-section {
    width: 100%;
  }

  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .section-heading h2 {
    margin: 0;
    font-size: 22px;
  }

  .section-heading p {
    margin: 5px 0 0;
    color: #7b8494;
    font-size: 13px;
  }

  .subsection-heading {
    margin-top: 35px;
  }


  /* ALERT */

  .alert {
    position: fixed;
    right: 25px;
    top: 100px;
    background: #173b75;
    color: white;
    padding: 13px 18px;
    border-radius: 10px;
    z-index: 999;
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    font-size: 14px;
    max-width: 360px;
  }

  .alert.error {
    background: #c53030;
  }


  /* PANEL */

  .panel {
    background: white;
    border: 1px solid #e7eaf0;
    border-radius: 14px;
    padding: 22px;
    margin-bottom: 20px;
    box-shadow: 0 3px 12px rgba(15, 23, 42, 0.025);
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .panel-header h3 {
    margin: 0;
    font-size: 17px;
  }

  .panel-header p {
    margin: 5px 0 0;
    font-size: 13px;
    color: #7b8494;
  }


  /* DASHBOARD */

  .welcome-card {
    background: #173b75;
    color: white;
    border-radius: 18px;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
    overflow: hidden;
  }

  .welcome-label {
    font-size: 11px;
    letter-spacing: 2px;
    opacity: 0.75;
  }

  .welcome-card h2 {
    font-size: 29px;
    margin: 10px 0;
    line-height: 1.2;
  }

  .welcome-card p {
    max-width: 600px;
    margin: 0;
    opacity: 0.85;
    line-height: 1.7;
  }

  .welcome-icon {
    font-size: 80px;
    opacity: 0.25;
    padding-right: 30px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 14px;
    margin-bottom: 22px;
  }

  .stat-card {
    background: white;
    border: 1px solid #e7eaf0;
    border-radius: 13px;
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .stat-icon {
    width: 42px;
    height: 42px;
    background: #f1f4f8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
  }

  .stat-card div:last-child {
    display: flex;
    flex-direction: column;
  }

  .stat-card strong {
    font-size: 21px;
  }

  .stat-card span {
    color: #7b8494;
    font-size: 12px;
    margin-top: 2px;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .info-list {
    display: flex;
    flex-direction: column;
  }

  .info-list > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 0;
    border-bottom: 1px solid #edf0f4;
  }

  .info-list > div:last-child {
    border-bottom: none;
  }

  .info-list span {
    color: #7b8494;
    font-size: 13px;
  }

  .info-list strong {
    text-align: right;
    font-size: 13px;
  }

  .quick-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .quick-buttons button {
    padding: 14px;
    border: 1px solid #e2e7ee;
    background: #fafbfc;
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    font-size: 13px;
  }


  /* FORM */

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 17px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .form-group.full {
    grid-column: 1 / -1;
  }

  .form-group label,
  .image-editor label {
    font-size: 13px;
    font-weight: 700;
    color: #3d4655;
  }

  input,
  textarea,
  select {
    width: 100%;
    border: 1px solid #dce1e8;
    border-radius: 9px;
    padding: 11px 12px;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    background: white;
    color: #172033;
    transition: 0.2s;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #173b75;
    box-shadow: 0 0 0 3px rgba(23, 59, 117, 0.08);
  }

  textarea {
    resize: vertical;
    line-height: 1.6;
  }

  .form-group small,
  .image-editor small {
    color: #8a94a5;
    font-size: 11px;
  }


  /* BUTTONS */

  .primary-button {
    border: none;
    background: #173b75;
    color: white;
    padding: 11px 17px;
    border-radius: 9px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
  }

  .primary-button:hover {
    opacity: 0.9;
  }

  .delete-button {
    border: none;
    background: #fff0f0;
    color: #c53030;
    padding: 9px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
  }

  .full-button {
    width: 100%;
    margin-top: 10px;
  }

  .save-row {
    margin-top: 22px;
    display: flex;
    justify-content: flex-end;
  }


  /* ITEM */

  .item-panel {
    position: relative;
  }

  .item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .item-number {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: #edf2f8;
    color: #173b75;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
  }


  /* IMAGE */

  .image-editor {
    margin-top: 22px;
    padding-top: 20px;
    border-top: 1px solid #edf0f4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 25px;
  }

  .image-editor > div:first-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .preview-image {
    width: 250px;
    max-height: 170px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #e2e6ed;
  }

  .small-preview {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 9px;
    border: 1px solid #e2e6ed;
    margin-top: 12px;
  }


  /* GALLERY */

  .gallery-admin-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .gallery-admin-card {
    background: white;
    border: 1px solid #e4e8ee;
    border-radius: 13px;
    overflow: hidden;
  }

  .gallery-admin-card > img,
  .gallery-placeholder {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .gallery-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f4f7;
    font-size: 45px;
  }

  .gallery-card-content {
    padding: 16px;
  }


  /* EMPTY */

  .empty-state {
    background: white;
    border: 1px dashed #d6dce5;
    border-radius: 14px;
    padding: 55px 20px;
    text-align: center;
  }

  .empty-state > div {
    font-size: 40px;
  }

  .empty-state h3 {
    margin: 12px 0 5px;
  }

  .empty-state p {
    margin: 0;
    color: #7b8494;
    font-size: 13px;
  }


  /* RESPONSIVE */

  @media (max-width: 1200px) {
    .stats-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .gallery-admin-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .sidebar {
      position: fixed;
      left: -270px;
      transition: 0.25s;
      box-shadow: 10px 0 30px rgba(0,0,0,0.08);
    }

    .sidebar.open {
      left: 0;
    }

    .mobile-menu {
      display: block;
    }

    .topbar {
      padding: 14px 18px;
    }

    .topbar h1 {
      font-size: 18px;
    }

    .topbar p {
      display: none;
    }

    .content {
      padding: 18px;
    }

    .dashboard-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 650px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-group.full {
      grid-column: auto;
    }

    .gallery-admin-grid {
      grid-template-columns: 1fr;
    }

    .section-heading {
      align-items: flex-start;
      flex-direction: column;
    }

    .welcome-card {
      padding: 23px;
    }

    .welcome-card h2 {
      font-size: 23px;
    }

    .welcome-icon {
      display: none;
    }

    .image-editor {
      flex-direction: column;
    }

    .preview-image {
      width: 100%;
      max-width: 300px;
    }

    .save-button {
      padding: 10px 12px;
      font-size: 12px;
    }

    .topbar-actions {
      gap: 5px;
    }
  }

  @media (max-width: 420px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .content {
      padding: 12px;
    }

    .panel {
      padding: 16px;
    }

    .topbar {
      padding: 12px;
    }
  }

</style>