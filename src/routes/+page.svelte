<script>
  import { onMount } from 'svelte';
  import {
    defaultSite,
    defaultBeranda,
    defaultBerita,
    defaultTemplates,
    defaultLowongan,
    defaultUmkm,
    defaultStatistik,
    getData,
    tambahKunjungan
  } from '$lib/siteData.js';

  let site = defaultSite;
  let beranda = defaultBeranda;
  let berita = defaultBerita;
  let templates = defaultTemplates;
  let lowongan = defaultLowongan;
  let umkm = defaultUmkm;
  let statistik = defaultStatistik;
  let animatedVisitors = 0;
  let pageReady = false;
  let showSplash = false;
  let splashLeaving = false;

 const profil = [
  { icon: 'sejarah', title: 'Sejarah Dusun', desc: 'Mengenal sejarah dan perkembangan Dusun Krajan.', href: '/profil#sejarah' },
  { icon: 'penduduk', title: 'Kependudukan', desc: 'Informasi data dan kondisi kependudukan dusun.', href: '/profil#kependudukan' },
  { icon: 'bumd', title: 'BUMD', desc: 'Informasi badan usaha milik dusun.', href: '/profil#bumd' },
  { icon: 'visi', title: 'Visi & Misi Dusun', desc: 'Visi dan misi dalam membangun Dusun Krajan.', href: '/profil#visi-misi' },
  { icon: 'keuangan', title: 'Keuangan Dusun', desc: 'Informasi transparansi keuangan dusun.', href: '/profil#keuangan' }
];

  /* ================= ANIMASI (Svelte actions) =================
     Otomatis nonaktif jika pengguna memilih "kurangi gerakan". */
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = () => matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Muncul halus saat masuk layar
  function reveal(node) {
    if (reduce()) return;
    node.classList.add('rv');
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        requestAnimationFrame(() => node.classList.add('in'));
        io.disconnect();
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(node);
    return { destroy: () => io.disconnect() };
  }

  // Anak elemen muncul bergantian + cahaya sorot mengikuti kursor di kartu
  function stagger(node) {
    if (reduce()) return;
    [...node.children].forEach((el) => el.classList.add('stagger-item'));
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        [...node.children].forEach((el, i) => {
          el.style.transitionDelay = i * 90 + 'ms';
          requestAnimationFrame(() => el.classList.add('in'));
          setTimeout(() => {
            el.style.transitionDelay = '';
            el.classList.remove('stagger-item', 'in'); // hover kembali normal
          }, 1000 + i * 90);
        });
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(node);
    const glow = (e) => {
      const c = e.target.closest('.card');
      if (!c || !node.contains(c)) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', e.clientX - r.left + 'px');
      c.style.setProperty('--my', e.clientY - r.top + 'px');
    };
    node.addEventListener('pointermove', glow);
    return {
      destroy() {
        io.disconnect();
        node.removeEventListener('pointermove', glow);
      }
    };
  }

  // Logo miring 3D + kilau
  function tilt(node) {
    if (reduce() || !fine()) return;
    const move = (e) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      node.style.setProperty('--ry', ((x - 0.5) * 18).toFixed(2) + 'deg');
      node.style.setProperty('--rx', ((0.5 - y) * 18).toFixed(2) + 'deg');
      node.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      node.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    };
    const leave = () => {
      node.style.setProperty('--rx', '0deg');
      node.style.setProperty('--ry', '0deg');
    };
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', leave);
    return {
      destroy() {
        node.removeEventListener('pointermove', move);
        node.removeEventListener('pointerleave', leave);
      }
    };
  }

  // Tombol sedikit "tertarik" ke kursor
  function magnetic(node) {
    if (reduce() || !fine()) return;
    const move = (e) => {
      const r = node.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      node.style.translate = `${x * 0.22}px ${y * 0.22}px`;
    };
    const leave = () => (node.style.translate = '');
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', leave);
    return {
      destroy() {
        node.removeEventListener('pointermove', move);
        node.removeEventListener('pointerleave', leave);
      }
    };
  }

  // Orb & chip bergeser mengikuti kursor
  function parallax(node) {
    if (reduce() || !fine()) return;
    const move = (e) => {
      const r = node.getBoundingClientRect();
      node.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      node.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    node.addEventListener('pointermove', move);
    return { destroy: () => node.removeEventListener('pointermove', move) };
  }

  // Angka menghitung naik saat terlihat
  function countUp(node, value) {
    let target = value || 0;
    let shown = 0;
    let started = false;
    let raf;
    const write = (n) => (node.textContent = Math.round(n).toLocaleString('id-ID'));
    if (reduce()) {
      write(target);
      return { update: (v) => write(v || 0) };
    }
    const run = () => {
      cancelAnimationFrame(raf);
      const from = shown;
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1400, 1);
        shown = from + (target - from) * (1 - Math.pow(1 - k, 3));
        write(shown);
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    write(0);
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        started = true;
        io.disconnect();
        run();
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return {
      update(v) {
        target = v || 0;
        if (started) run();
      },
      destroy() {
        io.disconnect();
        cancelAnimationFrame(raf);
      }
    };
  }

  onMount(() => {
    site = getData('krajan_site', defaultSite);
    beranda = getData('krajan_beranda', defaultBeranda);
    berita = getData('krajan_berita', defaultBerita);
    templates = getData('krajan_templates', defaultTemplates);
    lowongan = getData('krajan_lowongan', defaultLowongan);
    umkm = getData('krajan_umkm', defaultUmkm);

    try {
      tambahKunjungan();
    } catch (error) {
      console.log('Statistik kunjungan tidak tersedia.');
    }

    statistik = getData('krajan_statistik', defaultStatistik);

    const targetVisitors = Number(statistik.totalKunjungan || 0);

    // hitung naik angka pengunjung (dipanggil saat halaman dibuka)
    const countVisitors = () => {
      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / 1600, 1);
        animatedVisitors = Math.floor(targetVisitors * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const openPage = () => {
      pageReady = true;
      countVisitors();
    };

    // ===== Intro pembuka: tampil setiap halaman dibuka / di-refresh =====
    const timers = [];
    if (reduce()) {
      openPage();
    } else {
      showSplash = true;
      document.body.style.overflow = 'hidden';
      timers.push(
        setTimeout(() => {
          splashLeaving = true; // tirai terbuka
          openPage(); // animasi hero mulai bersamaan
        }, 2300),
        setTimeout(() => {
          showSplash = false;
          document.body.style.overflow = '';
        }, 3400)
      );
    }

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:head>
  <title>{site.nama || 'KRAJAN DIGITAL'}</title>
  <meta name="description" content="Portal digital Dusun Krajan" />
</svelte:head>

<div class="scroll-progress"></div>

{#if showSplash}
  <div class="splash" class:leaving={splashLeaving} aria-hidden="true">
    <div class="splash-panel top"></div>
    <div class="splash-panel bottom"></div>
    <div class="splash-center">
      <div class="splash-glow"></div>
      <div class="splash-logo">
        <div class="splash-img"><img src="/logo.jpeg" alt="" /></div>
      </div>
      <div class="splash-title">
        <i class="mask"><b>Krajan</b></i>
        <i class="mask"><b class="grad">Digital</b></i>
      </div>
      <p class="splash-sub">Portal Digital Dusun Krajan</p>
      <div class="splash-bar"><i></i></div>
    </div>
  </div>
{/if}

<!-- ===================== BERANDA ===================== -->

<section class="hero" class:page-ready={pageReady} use:parallax>
  <div class="hero-noise"></div>
  <div class="hero-grid container">
    <div class="hero-orb orb-one"></div>
    <div class="hero-orb orb-two"></div>
    <div class="hero-orb orb-three"></div>

    <div class="hero-content">
      <div class="eyebrow hero-eyebrow">{beranda.eyebrow || 'SELAMAT DATANG DI'}</div>

      <h1 class="hero-title">
        <i class="mask"><b>{beranda.judul1 || 'Krajan'}</b></i>
        <i class="mask"><b class="grad">{beranda.judul2 || 'Digital'}</b></i>
      </h1>

      <p class="hero-description">
        {beranda.deskripsi ||
          'Portal digital Dusun Krajan yang menyediakan informasi, pelayanan, kegiatan, dan berbagai informasi untuk warga.'}
      </p>

      <div class="hero-buttons">
        <a class="btn btn-primary" href="/profil" use:magnetic>Profil Dusun →</a>
        <a class="btn btn-light" href="/template" use:magnetic>Template Warga</a>
      </div>

      <div class="krajan-visitor-card">
        <div class="visitor-status"><span></span>LIVE</div>
        <div class="visitor-glow"></div>
        <div class="visitor-icon-box">
          <div class="visitor-pulse"></div>
          <span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="23" height="23"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></span>
        </div>
        <div class="visitor-info">
          <span class="visitor-title">KRAJAN DIGITAL</span>
          <div class="visitor-number">{animatedVisitors.toLocaleString('id-ID')}</div>
          <span class="visitor-label">Pengunjung Website</span>
        </div>
      </div>
    </div>

    <div class="illustration hero-illustration" use:tilt>
      <div class="hero-image-glow"></div>
      <div class="illustration-ring ring-one"></div>
      <div class="illustration-ring ring-two"></div>
      <div class="floating-chip chip-top">✦ DIGITAL DUSUN</div>
      <div class="floating-chip chip-bottom">● ONLINE</div>

      <div class="tilt-3d">
        <div class="logo-frame">
          <img src="/logo.jpeg" alt="KRAJANNET" />
          <span class="glare"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-scroll-cue" aria-hidden="true">
    <span></span>
    <small>Scroll untuk menjelajah</small>
  </div>
</section>

<!-- ===================== BERITA ===================== -->

<section class="section modern-section">
  <div class="container">
    <div class="section-heading" use:reveal>
      <div>
        <span class="eyebrow">INFORMASI TERBARU</span>
        <h2>Berita Dusun</h2>
      </div>
      <a href="/berita">Lihat semua →</a>
    </div>

    {#if berita.length > 0}
  {@const utama = berita[0]}
  {@const lainnya = berita.slice(1, 3)}

  <div class="news-layout" use:reveal>
    <a class="card news-feature" href={`/berita/${utama.id}`}>
      {#if utama.gambar || utama.foto}
        <img src={utama.gambar || utama.foto} alt={utama.judul || 'Berita Dusun'} />
      {:else}
        <div class="news-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 12h7M9 16h7"/></svg></div>
      {/if}
      <div class="news-feature-body">
        <small>{utama.tanggal || 'Berita Dusun'}</small>
        <h3>{utama.judul || 'Berita Dusun'}</h3>
        <p>{utama.deskripsi || utama.isi || 'Informasi terbaru Dusun Krajan.'}</p>
        <strong>Baca selengkapnya →</strong>
      </div>
    </a>

    <div class="news-list">
      {#each lainnya as item}
        <a class="news-row" href={`/berita/${item.id}`}>
          {#if item.gambar || item.foto}
            <img class="news-thumb" src={item.gambar || item.foto} alt="" />
          {:else}
            <div class="news-thumb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 12h7M9 16h7"/></svg></div>
          {/if}
          <div>
            <small>{item.tanggal || 'Berita Dusun'}</small>
            <h3>{item.judul || 'Berita Dusun'}</h3>
            <p>{item.deskripsi || item.isi || ''}</p>
          </div>
        </a>
      {/each}

      <a class="news-all" href="/berita">Lihat semua berita →</a>
    </div>
  </div>
{:else}
  <div class="empty">Belum ada berita tersedia.</div>
{/if}
  </div>
</section>

<!-- ===================== LOWONGAN KERJA ===================== -->

<section class="section soft-section modern-section">
  <div class="container">
    <div class="section-heading" use:reveal>
      <div>
        <span class="eyebrow">INFORMASI PEKERJAAN</span>
        <h2>Lowongan Kerja</h2>
      </div>
      <a href="/lowongan">Lihat semua →</a>
    </div>

    {#if lowongan.length > 0}
      <div class="jobs-grid" use:stagger>
        {#each lowongan.slice(0, 3) as item}
          <a class="card job-card" href="/lowongan">
            <div class="job-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg></div>
            <div>
              <span class="job-type">{item.tipe || 'LOWONGAN'}</span>
              <h3>{item.posisi || 'Posisi Pekerjaan'}</h3>
              <p>{item.perusahaan || 'Perusahaan'}</p>
              <small><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true" style="vertical-align:-2px"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg> {item.lokasi || 'Lokasi tidak tersedia'}</small>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="empty">Belum ada lowongan kerja.</div>
    {/if}
  </div>
</section>

<!-- ===================== UMKM ===================== -->

<section class="section modern-section">
  <div class="container">
    <div class="section-heading" use:reveal>
      <div>
        <span class="eyebrow">EKONOMI WARGA</span>
        <h2>UMKM Dusun</h2>
      </div>
      <a href="/umkm">Lihat semua →</a>
    </div>

    {#if umkm.length > 0}
      <div class="umkm-grid" use:stagger>
        {#each umkm.slice(0, 3) as item}
          <a class="card umkm-card" href="/umkm">
            {#if item.foto}
              <img src={item.foto} alt={item.nama} />
            {:else}
              <div class="umkm-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" aria-hidden="true"><path d="M3 10h18l-2-6H5zM5 10v10h14V10M9 20v-6h6v6M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></svg></div>
            {/if}
            <div class="umkm-content">
              <span>{item.kategori || 'UMKM'}</span>
              <h3>{item.nama || 'Nama UMKM'}</h3>
              <p>{item.deskripsi || 'UMKM warga Dusun Krajan.'}</p>
              <small><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true" style="vertical-align:-2px"><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg> {item.pemilik || '-'}</small>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="empty">Belum ada UMKM tersedia.</div>
    {/if}
  </div>
</section>

<!-- ===================== TEMPLATE WARGA ===================== -->

<section class="section soft-section modern-section">
  <div class="container">
    <div class="section-heading" use:reveal>
      <div>
        <span class="eyebrow">PELAYANAN WARGA</span>
        <h2>Template Warga</h2>
      </div>
      <a href="/template">Lihat semua →</a>
    </div>

    <div class="template-grid" use:stagger>
      {#each templates.slice(0, 4) as item}
        <a class="card template-card" href="/template">
          <div class="template-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="26" height="26" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 12h7M9 16h7"/></svg></div>
          <div>
            <h3>{item.nama || item.judul || 'Template Surat'}</h3>
            <p>{item.deskripsi || 'Template dokumen untuk kebutuhan warga.'}</p>
          </div>
          <span class="arrow">→</span>
        </a>
      {/each}
    </div>
  </div>
</section>
<!-- ===================== PROFIL DUSUN ===================== -->

<section class="section modern-section">
  <div class="container">
    <div class="section-heading" use:reveal>
      <div>
        <span class="eyebrow">TENTANG KRAJAN</span>
        <h2>Profil Dusun</h2>
        <p>Mengenal lebih dekat Dusun Krajan.</p>
      </div>
      <a href="/profil">Selengkapnya →</a>
    </div>

    <div class="profile-grid" use:stagger>
      {#each profil as item}
        <a class="card profile-card" href={item.href}>
          <div class="profile-icon">{#if item.icon === 'sejarah'}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>{:else if item.icon === 'penduduk'}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2"/></svg>{:else if item.icon === 'bumd'}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-3h4v3"/></svg>{:else if item.icon === 'visi'}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>{:else}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M7 14h3M7 17h7"/></svg>{/if}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <span>Selengkapnya →</span>
        </a>
      {/each}
    </div>

    <div class="extra-profile" use:stagger>
      <a href="/fasilitas" class="card extra-card">
        <div class="extra-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true"><path d="m3 9 9-6 9 6M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18M2 10h20"/></svg></div>
        <div>
          <h3>Fasilitas Umum</h3>
          <p>Masjid, TPQ, Mushola, Balai Dusun, dan fasilitas umum lainnya.</p>
        </div>
        <span>→</span>
      </a>
      <a href="/organisasi" class="card extra-card">
        <div class="extra-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true"><path d="m8 12 2.5 2.5a2 2 0 0 0 2.8 0l4.2-4.2M3 9l4-4 4 2 3-1 7 4-3 5-4 4-3-2-3 1-5-5z"/><path d="m7 5-4 4M17 6l4 4"/></svg></div>
        <div>
          <h3>Organisasi Masyarakat</h3>
          <p>Informasi organisasi masyarakat yang ada di Dusun Krajan.</p>
        </div>
        <span>→</span>
      </a>
    </div>
  </div>
</section>

<!-- ===================== STATISTIK ===================== -->

<section class="stats-section">
  <div class="container">
    <div class="stats-grid" use:stagger>
      <div class="stat-item"><strong use:countUp={berita.length}></strong><span>Berita</span></div>
      <div class="stat-item"><strong use:countUp={umkm.length}></strong><span>UMKM</span></div>
      <div class="stat-item"><strong use:countUp={lowongan.length}></strong><span>Lowongan</span></div>
      <div class="stat-item"><strong use:countUp={templates.length}></strong><span>Template</span></div>
    </div>
  </div>
</section>

<style>
  /* ============ GLOBAL ============ */
  :global(html) { scroll-behavior: smooth; }
  :global(body) { margin: 0; background: #f5f8f4; color: #17251c; font-family: Inter, system-ui, sans-serif; overflow-x: hidden; }
  :global(*) { box-sizing: border-box; }
  :global(a) { text-decoration: none; color: inherit; }
  .container { width: min(1120px, calc(100% - 40px)); margin: auto; }

  .scroll-progress { position: fixed; inset: 0 0 auto 0; height: 3px; z-index: 100; pointer-events: none; transform: scaleX(0); transform-origin: left; background: linear-gradient(90deg, #3ba56a, #18a0a8, #2a6fdb); }
  @supports (animation-timeline: scroll()) {
    .scroll-progress { animation: progress linear both; animation-timeline: scroll(root); }
  }

  /* ============ HERO ============ */
  .hero {
    position: relative; overflow: hidden; isolation: isolate;
    min-height: 760px; display: flex; align-items: center; padding: 80px 0 90px;
    background:
      radial-gradient(circle at 8% 18%, rgba(69, 173, 105, 0.16), transparent 27%),
      radial-gradient(circle at 87% 72%, rgba(42, 128, 79, 0.13), transparent 30%),
      linear-gradient(135deg, #f8fcf9 0%, #edf7f0 50%, #f7fbf8 100%);
  }
  .hero::before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: -3; background: radial-gradient(circle at 15% 20%, rgba(31, 122, 77, 0.08), transparent 28%), radial-gradient(circle at 82% 78%, rgba(68, 145, 94, 0.1), transparent 30%); animation: heroBg 10s ease-in-out infinite alternate; }
  .hero::after { content: ''; position: absolute; inset: auto -10% -45% -10%; height: 65%; background: rgba(255, 255, 255, 0.48); filter: blur(50px); border-radius: 50%; z-index: -2; }
  .hero-noise { position: absolute; inset: 0; pointer-events: none; opacity: 0.18; z-index: -1; background-image: radial-gradient(rgba(31, 122, 77, 0.16) 0.7px, transparent 0.7px); background-size: 18px 18px; mask-image: linear-gradient(to bottom, black, transparent 82%); }
  .hero-grid { position: relative; min-height: 650px; display: grid; grid-template-columns: minmax(0, 1fr) minmax(450px, 0.9fr); gap: 70px; align-items: center; }
  .hero-content { position: relative; z-index: 5; padding-right: 20px; }

  .hero-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(1px); opacity: 0.42; z-index: -2; translate: calc(var(--px, 0) * -60px) calc(var(--py, 0) * -60px); transition: translate 0.7s ease-out; }
  .orb-one { width: 230px; height: 230px; top: 6%; left: -75px; background: rgba(91, 177, 117, 0.13); animation: orbA 9s ease-in-out infinite; }
  .orb-two { width: 330px; height: 330px; right: -130px; bottom: -120px; background: rgba(31, 122, 77, 0.1); animation: orbB 11s ease-in-out infinite; }
  .orb-three { width: 160px; height: 160px; top: 52%; left: 38%; background: rgba(42, 111, 219, 0.1); animation: orbA 13s ease-in-out infinite reverse; }

  .eyebrow { color: #1f7a4d; font-size: 13px; font-weight: 800; letter-spacing: 1.8px; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: 9px; padding: 9px 14px; border: 1px solid rgba(31, 122, 77, 0.13); border-radius: 999px; background: rgba(255, 255, 255, 0.68); box-shadow: 0 8px 25px rgba(31, 122, 77, 0.06); backdrop-filter: blur(14px); }
  .hero-eyebrow::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #39a866; box-shadow: 0 0 0 5px rgba(57, 168, 102, 0.12); animation: liveDot 1.8s ease-in-out infinite; }

  .hero-title { max-width: 720px; margin: 22px 0 0; font-family: 'Plus Jakarta Sans', Inter, sans-serif; font-size: clamp(58px, 7vw, 94px); line-height: 0.96; letter-spacing: -5px; font-weight: 800; }
  .mask { display: inline-block; overflow: hidden; vertical-align: top; font-style: normal; padding: 0 0.04em 0.14em; margin-bottom: -0.14em; }
  .mask b { display: inline-block; font-weight: inherit; }
  .mask b.grad { background: linear-gradient(100deg, #1f7a4d 0%, #3ba56a 35%, #18a0a8 55%, #1f7a4d 100%); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; }

  .hero-description { max-width: 600px; margin: 28px 0 0; color: #607267; font-size: 17px; line-height: 1.8; }
  .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }

  .btn { position: relative; overflow: hidden; display: inline-flex; align-items: center; justify-content: center; min-height: 55px; padding: 0 28px; border-radius: 16px; font-weight: 800; transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, translate 0.2s ease-out; }
  .btn:hover { transform: translateY(-4px); }
  .btn-primary { background: linear-gradient(135deg, #207d4e, #155f3b); color: white; box-shadow: 0 15px 35px rgba(31, 122, 77, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.18); }
  .btn-primary:hover { box-shadow: 0 20px 42px rgba(31, 122, 77, 0.27); }
  .btn-primary::before { content: ''; position: absolute; top: 0; bottom: 0; width: 60px; left: -90px; transform: skewX(-20deg); background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.4), transparent); animation: sweep 4.5s 2.2s infinite; }
  .btn-light { background: rgba(255, 255, 255, 0.72); color: #1f7a4d; border: 1px solid #dce7df; backdrop-filter: blur(12px); box-shadow: 0 10px 25px rgba(31, 50, 37, 0.05); }
  .btn-light:hover { background: white; box-shadow: 0 16px 32px rgba(31, 50, 37, 0.1); }

  /* kartu pengunjung */
  .krajan-visitor-card { position: relative; width: fit-content; margin-top: 22px; display: flex; align-items: center; gap: 13px; padding: 13px 17px; overflow: hidden; border-radius: 19px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(235, 248, 240, 0.92)); border: 1px solid rgba(31, 122, 77, 0.16); box-shadow: 0 15px 40px rgba(31, 122, 77, 0.12); backdrop-filter: blur(10px); animation: visitorFloat 4s ease-in-out infinite; transition: box-shadow 0.3s ease; }
  .krajan-visitor-card:hover { box-shadow: 0 20px 50px rgba(31, 122, 77, 0.2); }
  .visitor-glow { position: absolute; width: 120px; height: 120px; left: -60px; top: -60px; border-radius: 50%; background: rgba(31, 122, 77, 0.12); filter: blur(15px); animation: visitorGlow 3s ease-in-out infinite; }
  .visitor-status { position: absolute; right: 13px; top: 9px; display: flex; align-items: center; gap: 5px; color: #719080; font-size: 7px; font-weight: 900; letter-spacing: 1px; }
  .visitor-status span { width: 5px; height: 5px; border-radius: 50%; background: #3db16b; box-shadow: 0 0 0 4px rgba(61, 177, 107, 0.11); animation: liveDot 1.8s ease-in-out infinite; }
  .visitor-icon-box { position: relative; z-index: 2; width: 45px; height: 45px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 14px; background: #1f7a4d; box-shadow: 0 8px 20px rgba(31, 122, 77, 0.25); }
  .visitor-icon-box span { position: relative; z-index: 3; font-size: 22px; animation: visitorEye 2s ease-in-out infinite; }
  .visitor-pulse { position: absolute; inset: 0; border-radius: 14px; border: 2px solid rgba(255, 255, 255, 0.6); animation: visitorPulse 2s ease-out infinite; }
  .visitor-info { position: relative; z-index: 2; display: flex; flex-direction: column; min-width: 125px; }
  .visitor-title { color: #1f7a4d; font-size: 9px; font-weight: 900; letter-spacing: 1.8px; }
  .visitor-number { margin-top: 2px; color: #17231c; font-size: 25px; font-weight: 900; line-height: 1; letter-spacing: -1px; }
  .visitor-label { margin-top: 5px; color: #718078; font-size: 11px; font-weight: 600; }

  /* logo */
  .illustration { position: relative; width: 100%; height: 520px; padding: 30px; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 32px; border: 1px solid rgba(255, 255, 255, 0.78); background: radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.8), transparent 38%), linear-gradient(145deg, rgba(219, 239, 225, 0.92), rgba(198, 228, 207, 0.72)); box-shadow: 0 35px 80px rgba(31, 122, 77, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8); backdrop-filter: blur(15px); }
  .illustration::before { content: ''; position: absolute; inset: 12px; border: 1px solid rgba(31, 122, 77, 0.12); border-radius: 26px; pointer-events: none; animation: framePulse 4s ease-in-out infinite; }
  .hero-image-glow { position: absolute; width: 270px; height: 270px; border-radius: 50%; background: rgba(72, 176, 108, 0.25); filter: blur(55px); animation: imageGlow 5s ease-in-out infinite; }
  .illustration-ring { position: absolute; border: 1px solid rgba(31, 122, 77, 0.15); border-radius: 50%; pointer-events: none; z-index: 1; }
  .ring-one { width: 390px; height: 390px; animation: spin 18s linear infinite; }
  .ring-two { width: 500px; height: 500px; border-style: dashed; opacity: 0.55; animation: spin 26s linear infinite reverse; }
  .tilt-3d { position: relative; z-index: 2; width: 100%; height: 100%; transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)); transition: transform 0.25s ease-out; will-change: transform; }
  .logo-frame { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 20px; border: 8px solid rgba(255, 255, 255, 0.46); box-shadow: 0 25px 55px rgba(20, 74, 43, 0.17), 0 0 0 1px rgba(31, 122, 77, 0.08); animation: logoFloat 5s ease-in-out infinite; }
  .illustration:hover .logo-frame { animation-play-state: paused; }
  .logo-frame img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.38); transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1); }
  .illustration:hover .logo-frame img { transform: scale(1.46); }
  .glare { position: absolute; inset: 0; z-index: 3; pointer-events: none; opacity: 0; transition: opacity 0.3s ease; background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.4), transparent 48%); }
  .illustration:hover .glare { opacity: 1; }

  .floating-chip { position: absolute; z-index: 4; display: flex; align-items: center; gap: 7px; padding: 10px 13px; border-radius: 13px; background: rgba(255, 255, 255, 0.78); border: 1px solid rgba(255, 255, 255, 0.9); box-shadow: 0 14px 30px rgba(31, 75, 47, 0.1); backdrop-filter: blur(16px); color: #286c49; font-size: 10px; font-weight: 900; letter-spacing: 0.8px; translate: calc(var(--px, 0) * 30px) calc(var(--py, 0) * 30px); transition: translate 0.5s ease-out; }
  .chip-top { top: 54px; right: 36px; animation: chipFloat 4s ease-in-out infinite; }
  .chip-bottom { left: 32px; bottom: 48px; color: #5e7066; animation: chipFloat 4.5s 0.5s ease-in-out infinite; }
    .hero-scroll-cue { position: absolute; left: 50%; bottom: 18px; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; color: #668073; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; opacity: 0.8; }
  .hero-scroll-cue span { width: 7px; height: 7px; border-right: 1.5px solid #1f7a4d; border-bottom: 1.5px solid #1f7a4d; transform: rotate(45deg); animation: scrollArrow 1.5s ease-in-out infinite; }

  /* animasi masuk hero (hanya jika gerakan tidak dikurangi) */
  @media (prefers-reduced-motion: no-preference) {
    .hero:not(.page-ready) .hero-content > *,
    .hero:not(.page-ready) .hero-illustration { opacity: 0; }
    .mask b { transform: translateY(108%) rotate(3deg); transform-origin: left bottom; }
    .page-ready .mask b { animation: maskUp 1s cubic-bezier(0.2, 0.9, 0.2, 1) forwards; }
    .page-ready .mask b.grad { animation: maskUp 1s 0.14s cubic-bezier(0.2, 0.9, 0.2, 1) forwards, shimmer 7s 1.3s linear infinite; }
    .page-ready .hero-eyebrow { animation: fadeUp 0.65s 0.15s both; }
    .page-ready .hero-description { animation: fadeUp 0.7s 0.5s both; }
    .page-ready .hero-buttons { animation: fadeUp 0.7s 0.65s both; }
    .page-ready .krajan-visitor-card { animation: fadeUp 0.8s 0.8s both, visitorFloat 4s 1.6s ease-in-out infinite; }
    .page-ready .hero-illustration { animation: illustrationIn 1s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .hero-scroll-cue { animation: fadeIn 1s 1.2s both; }
  }

  /* ============ SECTION ============ */
  .section { position: relative; padding: 80px 0; }
  .soft-section { background: #edf6ef; }
  .section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 35px; }
  .section-heading h2 { position: relative; display: inline-block; margin: 7px 0 0; font-family: 'Plus Jakarta Sans', Inter, sans-serif; font-size: clamp(30px, 4vw, 42px); letter-spacing: -1.7px; }
  .section-heading h2::after { content: ''; position: absolute; left: 0; bottom: -8px; height: 4px; width: 56%; border-radius: 4px; background: linear-gradient(90deg, #3ba56a, #18a0a8); transition: transform 0.9s 0.35s cubic-bezier(0.2, 0.9, 0.2, 1); }
  .section-heading p { color: #708077; margin: 18px 0 0; }
  .section-heading > a { padding: 11px 15px; border-radius: 12px; background: rgba(31, 122, 77, 0.06); color: #1f7a4d; font-weight: 800; white-space: nowrap; transition: 0.25s ease; }
  .section-heading > a:hover { background: rgba(31, 122, 77, 0.11); transform: translateX(4px); }

  /* muncul saat scroll (class ditambah lewat JS) */
  :global(.rv) { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.9, 0.2, 1); }
  :global(.rv.in) { opacity: 1; transform: none; }
  .section-heading:global(.rv) h2::after { transform: scaleX(0); transform-origin: left; }
  .section-heading:global(.rv.in) h2::after { transform: scaleX(1); }
  :global(.stagger-item) { opacity: 0; transform: translateY(32px) scale(0.98); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.9, 0.2, 1) !important; }
  :global(.stagger-item.in) { opacity: 1; transform: none; }

  /* kartu */
  .card { position: relative; overflow: hidden; background: white; border: 1px solid rgba(31, 75, 47, 0.09); border-radius: 20px; box-shadow: 0 8px 30px rgba(23, 50, 29, 0.045), 0 1px 1px rgba(23, 50, 29, 0.03); transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
  .card:hover { transform: translateY(-8px); border-color: rgba(31, 122, 77, 0.16); box-shadow: 0 24px 50px rgba(31, 75, 47, 0.11), 0 4px 10px rgba(31, 75, 47, 0.04); }
  .card::before { content: ''; position: absolute; width: 100px; height: 100px; top: -55px; right: -55px; border-radius: 50%; background: rgba(31, 122, 77, 0.07); transition: transform 0.45s ease; pointer-events: none; }
  .card:hover::before { transform: scale(2.2); }
  .card::after { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; transition: opacity 0.3s ease; background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(31, 122, 77, 0.13), transparent 62%); }
  .card:hover::after { opacity: 1; }
  .card img { transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1); }
  .card:hover img { transform: scale(1.06); }
  .profile-icon, .job-icon, .template-icon, .extra-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: #e8f4eb; transition: transform 0.35s ease, box-shadow 0.35s ease; }
  .card:hover .profile-icon, .card:hover .job-icon, .card:hover .template-icon, .card:hover .extra-icon { transform: translateY(-4px) rotate(-3deg); box-shadow: 0 10px 22px rgba(31, 122, 77, 0.13); }

  .news-grid, .umkm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .jobs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .template-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .profile-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; }
  .extra-profile { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px; }

  .news-card, .umkm-card { border-radius: 24px; }
  .news-card > img, .news-placeholder, .umkm-card > img, .umkm-placeholder { width: 100%; height: 225px; object-fit: cover; display: flex; align-items: center; justify-content: center; }
  .news-placeholder, .umkm-placeholder { background: #eaf5ed; font-size: 55px; }
  .news-content, .umkm-content { position: relative; z-index: 2; padding: 24px; }
  .news-content small { color: #1f7a4d; font-weight: 700; }
  .news-content h3 { margin: 10px 0; font-size: 21px; }
  .news-content p { color: #69776f; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .news-content strong { color: #1f7a4d; }
  .umkm-content > span { color: #1f7a4d; font-size: 12px; font-weight: 800; }
  .umkm-content h3 { margin: 8px 0; }
  .umkm-content p { color: #6d7a72; line-height: 1.6; }
  .umkm-content small { color: #7c8981; }

  .job-card { padding: 25px; display: flex; gap: 18px; align-items: flex-start; }
  .job-icon { width: 52px; height: 52px; border-radius: 15px; font-size: 25px; }
  .job-type { color: #1f7a4d; font-size: 11px; font-weight: 800; letter-spacing: 1px; }
  .job-card h3 { margin: 7px 0; }
  .job-card p { margin: 0 0 7px; color: #68766e; }
  .job-card small { color: #7c8981; }

  .template-card { padding: 23px; display: flex; align-items: center; gap: 17px; }
  .template-icon { width: 50px; height: 50px; border-radius: 14px; font-size: 24px; }
  .template-card h3 { margin: 0 0 6px; font-size: 17px; }
  .template-card p { margin: 0; color: #758179; font-size: 13px; line-height: 1.5; }
  .arrow { margin-left: auto; color: #1f7a4d; font-size: 22px; }

  .profile-card { padding: 25px 18px; text-align: center; border-radius: 22px; }
  .profile-icon { width: 58px; height: 58px; margin: auto; border-radius: 17px; font-size: 27px; }
  .profile-card h3 { margin: 17px 0 8px; font-size: 17px; }
  .profile-card p { color: #718078; font-size: 13px; line-height: 1.6; min-height: 62px; }
  .profile-card span { color: #1f7a4d; font-size: 13px; font-weight: 800; }
  .extra-card { padding: 25px; display: flex; align-items: center; gap: 20px; }
  .extra-icon { width: 58px; height: 58px; border-radius: 16px; font-size: 28px; }
  .extra-card h3 { margin: 0 0 7px; }
  .extra-card p { margin: 0; color: #718078; line-height: 1.5; }
  .extra-card > span { margin-left: auto; color: #1f7a4d; font-size: 25px; }

  .empty { padding: 50px; background: white; border: 1px dashed #d5e2d8; border-radius: 18px; text-align: center; color: #78857d; }

  /* statistik */
  .stats-section { position: relative; overflow: hidden; padding: 65px 0; color: white; background: radial-gradient(circle at 12% 20%, rgba(255, 255, 255, 0.11), transparent 22%), radial-gradient(circle at 88% 80%, rgba(255, 255, 255, 0.08), transparent 25%), linear-gradient(135deg, #145c38, #207a4d 55%, #125331); }
  .stats-section::before { content: ''; position: absolute; width: 430px; height: 430px; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50%; top: -280px; right: -100px; animation: spin 25s linear infinite; }
  .stats-grid { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .stat-item { text-align: center; padding: 15px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.08); background: rgba(255, 255, 255, 0.045); backdrop-filter: blur(10px); transition: background 0.3s ease, transform 0.3s ease; }
  .stat-item:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-4px); }
  .stat-item strong { display: block; font-family: 'Plus Jakarta Sans', Inter, sans-serif; font-size: 44px; text-shadow: 0 8px 25px rgba(0, 0, 0, 0.12); }
  .stat-item span { opacity: 0.8; font-size: 14px; }

  /* ============ INTRO PEMBUKA ============ */
  .splash { position: fixed; inset: 0; z-index: 200; display: grid; place-items: center; overflow: hidden; }
  .splash-panel { position: absolute; left: 0; right: 0; height: 50.5%; background: #0b2c1d; transition: transform 0.9s cubic-bezier(0.77, 0, 0.18, 1); }
  .splash-panel.top { top: 0; }
  .splash-panel.bottom { bottom: 0; }
  .splash.leaving .top { transform: translateY(-101%); }
  .splash.leaving .bottom { transform: translateY(101%); }
  .splash-center { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 18px; padding: 0 24px; text-align: center; color: white; transition: opacity 0.5s ease, transform 0.7s ease; }
  .splash.leaving .splash-center { opacity: 0; transform: scale(1.1) translateY(-14px); }
  .splash-glow { position: absolute; top: -40px; width: 260px; height: 260px; border-radius: 50%; background: rgba(61, 200, 130, 0.35); filter: blur(60px); animation: imageGlow 3s ease-in-out infinite; z-index: -1; }
  .splash-logo { position: relative; padding: 3px; overflow: hidden; border-radius: 32px; animation: splashPop 0.9s cubic-bezier(0.2, 1.2, 0.3, 1) both; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35); }
  .splash-logo::before { content: ''; position: absolute; inset: -60%; background: conic-gradient(from 0deg, transparent 0 55%, #4ff0a8, #3aa0ff, transparent); animation: spin 2.2s linear infinite; }
  .splash-img { position: relative; width: 118px; height: 118px; overflow: hidden; border-radius: 29px; background: #0d3d52; }
  .splash-img img { display: block; width: 100%; height: 100%; object-fit: cover; transform: scale(1.38); }
  .splash-title { margin-top: 6px; font-family: 'Plus Jakarta Sans', Inter, sans-serif; font-size: clamp(38px, 8vw, 62px); font-weight: 800; letter-spacing: -2.5px; line-height: 1; }
  .splash .mask b { animation: maskUp 0.9s 0.55s cubic-bezier(0.2, 0.9, 0.2, 1) forwards; }
  .splash .mask:nth-child(2) b { animation-delay: 0.7s; }
  .splash .mask b.grad { background-image: linear-gradient(100deg, #7be3ae, #39d3c6 55%, #7fb6ff); }
  .splash-sub { margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.35em; text-transform: uppercase; color: #9fdcbc; animation: fadeUp 0.8s 1.1s both; }
  .splash-bar { width: 190px; height: 4px; margin-top: 8px; overflow: hidden; border-radius: 4px; background: rgba(255, 255, 255, 0.14); animation: fadeIn 0.5s 0.9s both; }
  .splash-bar i { display: block; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #3ba56a, #4ff0a8, #3aa0ff); transform-origin: left; animation: barFill 1.3s 0.9s cubic-bezier(0.65, 0, 0.35, 1) both; }

  /* ============ KEYFRAMES ============ */
  @keyframes splashPop { from { opacity: 0; transform: scale(0.6) rotate(-8deg); } }
  @keyframes barFill { from { transform: scaleX(0); } }
  @keyframes progress { to { transform: scaleX(1); } }
  @keyframes heroBg { to { transform: scale(1.08); } }
  @keyframes orbA { 50% { transform: translate(55px, 35px); } }
  @keyframes orbB { 50% { transform: translate(-45px, -35px); } }
  @keyframes liveDot { 50% { transform: scale(0.7); opacity: 0.55; } }
  @keyframes maskUp { to { transform: none; } }
  @keyframes shimmer { to { background-position: -250% 0; } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } }
  @keyframes fadeIn { from { opacity: 0; } }
  @keyframes illustrationIn { from { opacity: 0; transform: translateX(35px) scale(0.97); } }
  @keyframes sweep { 35%, 100% { left: 130%; } }
  @keyframes visitorFloat { 50% { transform: translateY(-5px); } }
  @keyframes visitorPulse { 0% { transform: scale(1); opacity: 0.8; } 70%, 100% { transform: scale(1.35); opacity: 0; } }
  @keyframes visitorEye { 50% { transform: scale(1.15); } }
  @keyframes visitorGlow { 50% { transform: scale(1.5); opacity: 0.9; } }
  @keyframes framePulse { 50% { opacity: 1; transform: scale(1.015); } }
  @keyframes imageGlow { 0%, 100% { transform: scale(0.9); opacity: 0.45; } 50% { transform: scale(1.2); opacity: 0.75; } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes logoFloat { 50% { transform: translateY(-9px); } }
  @keyframes chipFloat { 50% { transform: translateY(-8px) rotate(-1deg); } }
  @keyframes scrollArrow { 50% { transform: translateY(3px) rotate(45deg); } }

  /* ============ RESPONSIVE ============ */
  @media (max-width: 1000px) {
    .hero-grid { grid-template-columns: 1fr 0.9fr; gap: 35px; }
    .illustration { height: 430px; }
    .ring-two { width: 420px; height: 420px; }
    .profile-grid { grid-template-columns: repeat(3, 1fr); }
    .news-grid, .jobs-grid, .umkm-grid, .template-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 700px) {
    .container { width: min(100% - 28px, 1120px); }
    .hero { min-height: auto; padding: 55px 0 70px; }
    .hero-grid { grid-template-columns: 1fr; gap: 40px; min-height: auto; }
    .hero-content { padding: 0; }
    .hero-title { font-size: clamp(46px, 14vw, 66px); letter-spacing: -3px; }
    .hero-eyebrow { font-size: 10px; }
    .hero-scroll-cue, .visitor-status { display: none; }
    .hero-orb { opacity: 0.3; }
    .illustration { height: 330px; padding: 18px; border-radius: 25px; }
    .ring-one { width: 250px; height: 250px; }
    .ring-two { width: 330px; height: 330px; }
    .logo-frame { border-radius: 16px; }
    .logo-frame img { transform: scale(1.32); }
    .chip-top { top: 22px; right: 18px; }
    .chip-bottom { left: 18px; bottom: 25px; }
    .section { padding: 55px 0; }
    .section-heading { align-items: flex-start; flex-direction: column; gap: 10px; }
    .news-grid, .jobs-grid, .umkm-grid, .template-grid, .profile-grid, .extra-profile { grid-template-columns: 1fr; }
    .profile-card { text-align: left; display: grid; grid-template-columns: auto 1fr; column-gap: 17px; align-items: center; }
    .profile-icon { grid-row: span 3; margin: 0; }
    .profile-card h3 { margin: 0; }
    .profile-card p { min-height: auto; margin: 5px 0; }
    .extra-card { align-items: flex-start; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .stat-item strong { font-size: 32px; }
  }

  @media (max-width: 420px) {
    .illustration { height: 280px; }
    .hero-buttons { flex-direction: column; }
    .btn { width: 100%; }
  }

  /* ============ BERITA: satu utama + daftar ============ */
.news-layout { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 28px; align-items: stretch; }
.news-feature { display: flex; flex-direction: column; border-radius: 24px; }
.news-feature > img, .news-feature > .news-placeholder { width: 100%; height: 300px; object-fit: cover; display: flex; align-items: center; justify-content: center; }
.news-feature-body { position: relative; z-index: 2; padding: 24px; }
.news-feature-body small { color: #1f7a4d; font-weight: 700; }
.news-feature-body h3 { margin: 10px 0; font-size: 24px; line-height: 1.3; }
.news-feature-body p { margin: 0 0 12px; color: #69776f; line-height: 1.7; display: -webkit-box; -webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.news-feature-body strong { color: #1f7a4d; }

.news-list { display: flex; flex-direction: column; justify-content: space-between; gap: 18px; }
.news-row { display: flex; gap: 16px; padding-bottom: 18px; border-bottom: 1px solid #dfe9e2; }
.news-thumb { width: 96px; height: 96px; flex-shrink: 0; border-radius: 12px; object-fit: cover; background: #eaf5ed; color: #1f7a4d; display: flex; align-items: center; justify-content: center; }
.news-row small { color: #1f7a4d; font-size: 12px; font-weight: 700; }
.news-row h3 { margin: 4px 0; font-size: 17px; line-height: 1.4; transition: color 0.2s ease; }
.news-row p { margin: 0; color: #69776f; font-size: 13px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.news-row:hover h3 { color: #1f7a4d; }
.news-all { color: #1f7a4d; font-weight: 800; }

@media (max-width: 900px) {
  .news-layout { grid-template-columns: 1fr; }
  .news-feature > img, .news-feature > .news-placeholder { height: 230px; }
}
  
  /* Hormati pengaturan "kurangi gerakan" */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .scroll-progress { display: none; }
  }
</style>