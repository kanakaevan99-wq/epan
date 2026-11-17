<script>
  let open = $state(false);

  const links = [
    { icon: 'home', label: 'Beranda', url: '/' },
    { icon: 'newspaper', label: 'Berita', url: '/berita' },
    { icon: 'megaphone', label: 'Pengumuman', url: '/pengumuman' },
    { icon: 'calendar', label: 'Kegiatan', url: '/kegiatan' },
    { icon: 'briefcase', label: 'Lowongan Kerja', url: '/lowongan' },
    { icon: 'store', label: 'UMKM', url: '/umkm' },
    { icon: 'file', label: 'Template Warga', url: '/template' },
    { icon: 'pin', label: 'Profil Dusun', url: '/profil' },
    { icon: 'image', label: 'Galeri', url: '/galeri' },
    { icon: 'phone', label: 'Kontak', url: '/kontak' }
  ];

  function toggleMenu() {
    open = !open;
  }

  function closeMenu() {
    open = false;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && open) closeMenu();
  }

  // Kunci scroll halaman saat menu terbuka
  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<header>
  <div class="container nav">
    <a class="brand" href="/" onclick={closeMenu}>
      <span class="logo">K</span>

      <span class="brand-text">
        <b>KRAJAN</b>
        <small>DIGITAL</small>
      </span>
    </a>

    <button
      class="menu"
      type="button"
      aria-label={open ? 'Tutup menu' : 'Buka menu'}
      aria-expanded={open}
      aria-controls="main-menu"
      onclick={toggleMenu}
    >
      {#if open}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      {:else}
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      {/if}
    </button>
  </div>

  {#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="menu-overlay" role="presentation" onclick={closeMenu}></div>

    <nav class="dropdown" id="main-menu" aria-label="Menu utama">
      <div class="menu-title">
        <span>Menu Utama</span>
        <small>KRAJAN DIGITAL</small>
      </div>

      {#each links as link (link.url)}
        <a href={link.url} onclick={closeMenu}>
          <span class="menu-icon">
            {#if link.icon === 'home'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" /></svg>
            {:else if link.icon === 'newspaper'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" /></svg>
            {:else if link.icon === 'megaphone'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-7v16L3 13zM7 14l2 7h4l-2-9" /></svg>
            {:else if link.icon === 'calendar'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" /></svg>
            {:else if link.icon === 'briefcase'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>
            {:else if link.icon === 'store'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10 5 4h14l2 6M4 10v10h16V10M3 10h18M9 20v-6h6v6M7 7h.01M12 7h.01M17 7h.01" /></svg>
            {:else if link.icon === 'file'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l5 5v13H6zM14 3v5h5M9 12h7M9 16h7" /></svg>
            {:else if link.icon === 'pin'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
            {:else if link.icon === 'image'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="m21 15-5-5L5 20" /></svg>
            {:else if link.icon === 'phone'}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.9L7.1 10.5a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.9-.6l3 .5a2 2 0 0 1 2.1 2.4z" /></svg>
            {/if}
          </span>

          <span class="menu-text">{link.label}</span>

          <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      {/each}
    </nav>
  {/if}
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255,255,255,.94);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e4ebe6;
  }

  .nav {
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #173b28;
    text-decoration: none;
  }

  .logo {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: #1f7a4d;
    color: white;
    font-size: 18px;
    font-weight: 800;
    box-shadow: 0 5px 15px rgba(31,122,77,.2);
  }

  .brand-text b {
    display: block;
    font-size: 15px;
    letter-spacing: .3px;
  }

  .brand-text small {
    display: block;
    margin-top: 2px;
    font-size: 10px;
    letter-spacing: 2.5px;
    color: #718078;
  }

  .menu {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 12px;
    background: #edf6f0;
    color: #1f7a4d;
    cursor: pointer;
    transition: background .2s, transform .2s;
    position: relative;
    z-index: 102;
  }

  .menu svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .menu:hover {
    background: #dceee2;
    transform: scale(1.04);
  }

  .menu:active {
    transform: scale(.96);
  }

  .menu:focus-visible,
  .brand:focus-visible,
  .dropdown a:focus-visible {
    outline: 2px solid #1f7a4d;
    outline-offset: 2px;
  }

  .menu-overlay {
    position: fixed;
    inset: 76px 0 0;
    background: rgba(0,0,0,.12);
    backdrop-filter: blur(2px);
    z-index: 98;
  }

  .dropdown {
    position: fixed;
    top: 86px;
    right: 20px;
    width: 300px;
    max-height: calc(100vh - 105px);
    overflow-y: auto;
    padding: 12px;
    background: white;
    border: 1px solid #e4ebe6;
    border-radius: 18px;
    box-shadow: 0 18px 50px rgba(0,0,0,.15);
    z-index: 101;
    animation: menuOpen .2s ease;
  }

  @keyframes menuOpen {
    from { opacity: 0; transform: translateY(-8px) scale(.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .menu-title {
    padding: 10px 12px 14px;
    margin-bottom: 7px;
    border-bottom: 1px solid #edf1ee;
  }

  .menu-title span {
    display: block;
    color: #173b28;
    font-size: 16px;
    font-weight: 800;
  }

  .menu-title small {
    display: block;
    margin-top: 3px;
    color: #8a958e;
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  .dropdown a {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 11px 12px;
    border-radius: 11px;
    color: #526058;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: background .15s, color .15s, transform .15s;
  }

  .dropdown a:hover {
    background: #edf6f0;
    color: #1f7a4d;
    transform: translateX(3px);
  }

  .menu-icon {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    background: #f2f7f3;
    border-radius: 10px;
    color: #1f7a4d;
  }

  .menu-icon svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.65;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .menu-text {
    flex: 1;
  }

  .arrow {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: #9aa79e;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex-shrink: 0;
  }

  @media (min-width: 901px) {
    .dropdown {
      right: max(20px, calc((100vw - 1200px) / 2));
    }
  }

  @media (max-width: 900px) {
    .nav { min-height: 72px; }
    .menu-overlay { inset: 72px 0 0; }
    .dropdown { top: 82px; right: 15px; width: 300px; }
  }

  @media (max-width: 600px) {
    .nav { min-height: 68px; }
    .logo { width: 40px; height: 40px; }
    .brand-text b { font-size: 14px; }
    .brand-text small { font-size: 9px; }
    .menu { width: 43px; height: 43px; }
    .menu-overlay { inset: 68px 0 0; }
    .dropdown {
      top: 78px;
      left: 12px;
      right: 12px;
      width: auto;
      max-height: calc(100vh - 92px);
      border-radius: 16px;
    }
  }

  @media (max-width: 380px) {
    .dropdown { padding: 9px; }
    .dropdown a { padding: 10px; }
    .menu-icon { width: 30px; height: 30px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown { animation: none; }
    .menu,
    .dropdown a { transition: none; }
    .menu:hover,
    .menu:active,
    .dropdown a:hover { transform: none; }
  }
</style>