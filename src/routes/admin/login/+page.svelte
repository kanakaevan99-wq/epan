<script>
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let error = '';
  let loading = false;
  let showPassword = false;

  // ==========================================
  // DATA LOGIN ADMIN
  // ==========================================

  const ADMIN_EMAIL = 'admin@krajandigital.id';
  const ADMIN_PASSWORD = 'admin123';

  // ==========================================
  // CEK SESSION
  // ==========================================

  onMount(() => {
    const session = sessionStorage.getItem(
      'krajan_admin_session'
    );

    if (session === 'true') {
      window.location.href = '/admin';
    }
  });

  // ==========================================
  // LOGIN
  // ==========================================

  function login() {
    error = '';

    const emailInput = email.trim().toLowerCase();

    if (!emailInput) {
      error = 'Silakan masukkan email admin.';
      return;
    }

    if (!password) {
      error = 'Silakan masukkan password.';
      return;
    }

    loading = true;

    setTimeout(() => {
      if (
        emailInput === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
      ) {
        // Buat session login
        sessionStorage.setItem(
          'krajan_admin_session',
          'true'
        );

        // Simpan email admin
        sessionStorage.setItem(
          'krajan_admin_email',
          emailInput
        );

        // Simpan waktu login
        sessionStorage.setItem(
          'krajan_admin_login_time',
          new Date().toISOString()
        );

        // Masuk dashboard
        window.location.href = '/admin';
      } else {
        error = 'Email atau password salah.';
        loading = false;
      }
    }, 600);
  }

  // ==========================================
  // KEMBALI WEBSITE
  // ==========================================

  function kembaliKeWebsite() {
    window.location.href = '/';
  }
</script>

<svelte:head>
  <title>Login Admin — KRAJAN DIGITAL</title>
  <meta
    name="description"
    content="Login administrator KRAJAN DIGITAL"
  />
</svelte:head>

<div class="login-page">

  <div class="login-card">

    <!-- LOGO -->
    <div class="logo">
      KD
    </div>

    <!-- HEADER -->
    <div class="header">
      <span class="eyebrow">
        KRAJAN DIGITAL
      </span>

      <h1>
        Login Admin
      </h1>

      <p>
        Silakan masuk untuk mengelola
        website KRAJAN DIGITAL.
      </p>
    </div>

    <!-- FORM -->
    <form
      onsubmit={(event) => {
        event.preventDefault();
        login();
      }}
    >

      <!-- EMAIL -->
      <div class="form-group">

        <label for="email">
          Email Admin
        </label>

        <div class="input-wrapper">

          <span class="input-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>
          </span>

          <input
            id="email"
            type="email"
            bind:value={email}
            placeholder="admin@krajandigital.id"
            autocomplete="email"
            disabled={loading}
          />

        </div>

      </div>

      <!-- PASSWORD -->
      <div class="form-group">

        <label for="password">
          Password
        </label>

        <div class="input-wrapper">

          <span class="input-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
          </span>

          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            bind:value={password}
            placeholder="Masukkan password"
            autocomplete="current-password"
            disabled={loading}
          />

          <button
            type="button"
            class="show-password"
            onclick={() => {
              showPassword = !showPassword;
            }}
            aria-label="Tampilkan password"
          >
            {#if showPassword}<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A11.5 11.5 0 0 1 12 5c5.2 0 8.7 4.4 9.5 6-.4.8-1.5 2.4-3.5 3.8M6.2 6.2C3.9 7.6 2.7 9.6 2.5 11c.8 1.6 4.3 6 9.5 6 1 0 1.9-.2 2.8-.5"/></svg>{:else}<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>{/if}
          </button>

        </div>

      </div>

      <!-- ERROR -->
      {#if error}

        <div class="error-box">
          <span><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.3 3.8 2.5 17.3A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 3h.01"/></svg></span>

          <span>
            {error}
          </span>
        </div>

      {/if}

      <!-- LOGIN BUTTON -->
      <button
        type="submit"
        class="login-button"
        disabled={loading}
      >

        {#if loading}

          <span class="spinner"></span>

          Memeriksa...

        {:else}

          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg> Masuk ke Dashboard

        {/if}

      </button>

    </form>

    <!-- BACK -->
    <button
      class="back-button"
      onclick={kembaliKeWebsite}
    >
      ← Kembali ke Website
    </button>

    <!-- FOOTER -->
    <div class="login-footer">

      <span>
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
      </span>

      <span>
        Halaman khusus administrator
      </span>

    </div>

  </div>

</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  :global(body) {
    font-family:
      Inter,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

    background: #f4f7f5;
  }

  /* ==========================================
     PAGE
     ========================================== */

  .login-page {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px 20px;

    background:
      radial-gradient(
        circle at 10% 10%,
        rgba(31, 122, 77, 0.12),
        transparent 30%
      ),
      radial-gradient(
        circle at 90% 90%,
        rgba(31, 122, 77, 0.09),
        transparent 30%
      ),
      #f4f7f5;
  }

  /* ==========================================
     CARD
     ========================================== */

  .login-card {
    width: 100%;
    max-width: 440px;

    padding: 42px;

    background: white;

    border: 1px solid #e5ebe7;

    border-radius: 26px;

    box-shadow:
      0 25px 70px rgba(21, 49, 35, 0.10);
  }

  /* ==========================================
     LOGO
     ========================================== */

  .logo {
    width: 68px;
    height: 68px;

    margin: 0 auto 22px;

    display: grid;
    place-items: center;

    border-radius: 20px;

    background:
      linear-gradient(
        135deg,
        #1f7a4d,
        #155c39
      );

    color: white;

    font-size: 21px;
    font-weight: 900;

    box-shadow:
      0 12px 25px rgba(31, 122, 77, 0.22);
  }

  /* ==========================================
     HEADER
     ========================================== */

  .header {
    text-align: center;

    margin-bottom: 30px;
  }

  .eyebrow {
    display: inline-block;

    margin-bottom: 8px;

    color: #1f7a4d;

    font-size: 11px;
    font-weight: 900;

    letter-spacing: 1.7px;
  }

  h1 {
    margin: 0;

    color: #18231d;

    font-size: 31px;
    font-weight: 850;
  }

  .header p {
    margin: 10px auto 0;

    max-width: 330px;

    color: #7a867f;

    font-size: 14px;

    line-height: 1.7;
  }

  /* ==========================================
     FORM
     ========================================== */

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;

    margin-bottom: 8px;

    color: #27342d;

    font-size: 14px;
    font-weight: 750;
  }

  .input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;

    left: 15px;
    top: 50%;

    transform: translateY(-50%);

    font-size: 16px;

    pointer-events: none;
  }

  input {
    width: 100%;

    padding: 14px 45px;

    border: 1px solid #dce5df;

    border-radius: 13px;

    outline: none;

    background: #fff;

    color: #26332c;

    font-size: 14px;

    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }

  input::placeholder {
    color: #a1aaa5;
  }

  input:focus {
    border-color: #1f7a4d;

    box-shadow:
      0 0 0 4px rgba(31, 122, 77, 0.08);
  }

  input:disabled {
    opacity: 0.65;

    cursor: not-allowed;
  }

  .show-password {
    position: absolute;

    right: 10px;
    top: 50%;

    transform: translateY(-50%);

    width: 35px;
    height: 35px;

    border: none;

    background: transparent;

    cursor: pointer;

    border-radius: 8px;
  }

  .show-password:hover {
    background: #f1f5f2;
  }

  /* ==========================================
     ERROR
     ========================================== */

  .error-box {
    display: flex;
    align-items: center;

    gap: 9px;

    margin-bottom: 18px;

    padding: 12px 14px;

    border: 1px solid #ffd9d9;

    border-radius: 11px;

    background: #fff4f4;

    color: #c0392b;

    font-size: 13px;
    font-weight: 600;
  }

  /* ==========================================
     LOGIN BUTTON
     ========================================== */

  .login-button {
    width: 100%;

    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 9px;

    border: none;

    border-radius: 13px;

    background:
      linear-gradient(
        135deg,
        #1f7a4d,
        #17643f
      );

    color: white;

    font-size: 14px;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
      0 10px 22px rgba(31, 122, 77, 0.18);

    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }

  .login-button:hover:not(:disabled) {
    transform: translateY(-1px);

    box-shadow:
      0 14px 28px rgba(31, 122, 77, 0.24);
  }

  .login-button:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }

  /* ==========================================
     SPINNER
     ========================================== */

  .spinner {
    width: 17px;
    height: 17px;

    border: 2px solid rgba(255,255,255,0.35);

    border-top-color: white;

    border-radius: 50%;

    animation:
      spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* ==========================================
     BACK BUTTON
     ========================================== */

  .back-button {
    width: 100%;

    margin-top: 18px;

    padding: 12px;

    border: none;

    background: transparent;

    color: #707c75;

    font-size: 13px;
    font-weight: 650;

    cursor: pointer;
  }

  .back-button:hover {
    color: #1f7a4d;
  }

  /* ==========================================
     FOOTER
     ========================================== */

  .login-footer {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 7px;

    margin-top: 24px;
    padding-top: 20px;

    border-top: 1px solid #edf1ee;

    color: #9aa49e;

    font-size: 11px;
  }

  /* ==========================================
     MOBILE
     ========================================== */

  @media (max-width: 520px) {

    .login-page {
      padding: 18px;
    }

    .login-card {
      padding: 32px 22px;

      border-radius: 21px;
    }

    h1 {
      font-size: 27px;
    }

  }
</style>