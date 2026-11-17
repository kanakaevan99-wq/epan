<script>
  import { onMount } from 'svelte';

  import {
    defaultPengumuman,
    getData
  } from '$lib/siteData.js';

  let pengumuman = [];

  // Pengumuman yang sedang dibuka
  let selectedPengumuman = null;

  onMount(() => {
    pengumuman = getData(
      'krajan_pengumuman',
      defaultPengumuman
    );
  });

  // Buka detail pengumuman
  function bukaPengumuman(item) {
    selectedPengumuman = item;
  }

  // Tutup detail
  function tutupPengumuman() {
    selectedPengumuman = null;
  }
</script>

<svelte:head>
  <title>Pengumuman — KRAJAN DIGITAL</title>
</svelte:head>

<section class="page">

  <div class="container">

    <span class="eyebrow">
      PUSAT INFORMASI
    </span>

    <h1>Pengumuman</h1>

    <p class="intro">
      Informasi penting dan pengumuman terbaru untuk warga
      Dusun Krajan.
    </p>

    <div class="announcement-list">

      {#each pengumuman as item}

        <!-- KARTU PENGUMUMAN -->
        <article
          class="announcement card"
          role="button"
          tabindex="0"
          onclick={() => bukaPengumuman(item)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              bukaPengumuman(item);
            }
          }}
        >

          <div class="icon">
            {item.icon || '📢'}
          </div>

          <div class="content">

            <small>
              {item.tanggal}
            </small>

            <h2>
              {item.judul}
            </h2>

            <p>
              {item.deskripsi}
            </p>

            <span class="baca">
              Baca selengkapnya →
            </span>

          </div>

        </article>

      {/each}

    </div>

  </div>

</section>


<!-- =========================
     MODAL DETAIL
========================= -->

{#if selectedPengumuman}

  <div
    class="overlay"
    role="presentation"
    onclick={(e) => {
      if (e.target === e.currentTarget) {
        tutupPengumuman();
      }
    }}
  >

    <div class="modal">

      <!-- HEADER -->
      <div class="modal-header">

        <div class="modal-icon">
          {selectedPengumuman.icon || '📢'}
        </div>

        <button
          type="button"
          class="close"
          onclick={tutupPengumuman}
        >
          ✕
        </button>

      </div>


      <!-- ISI -->
      <div class="modal-body">

        <small class="tanggal">
          {selectedPengumuman.tanggal}
        </small>

        <h2>
          {selectedPengumuman.judul}
        </h2>

        <div class="isi">

          {#if selectedPengumuman.isi}

            {#each selectedPengumuman.isi.split('\n') as paragraf}

              {#if paragraf.trim()}
                <p>
                  {paragraf}
                </p>
              {/if}

            {/each}

          {:else}

            <p>
              {selectedPengumuman.deskripsi}
            </p>

          {/if}

        </div>

      </div>


      <!-- FOOTER -->
      <div class="modal-footer">

        <button
          type="button"
          onclick={tutupPengumuman}
        >
          Tutup
        </button>

      </div>

    </div>

  </div>

{/if}


<style>

.page {
  padding: 75px 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

.eyebrow {
  color: #1f7a4d;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 50px;
  margin: 12px 0;
}

.intro {
  color: #718078;
  line-height: 1.7;
  max-width: 650px;
  margin-bottom: 40px;
}


/* =========================
   LIST
========================= */

.announcement-list {
  max-width: 850px;
  display: grid;
  gap: 18px;
}

.announcement {
  padding: 25px;
  display: flex;
  gap: 20px;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.announcement:hover {
  transform: translateY(-3px);

  border-color: #1f7a4d;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.08);
}

.announcement:focus {
  outline: 3px solid rgba(31,122,77,0.2);
}


.icon {
  width: 60px;
  height: 60px;

  border-radius: 15px;

  background: #edf7ef;

  display: grid;
  place-items: center;

  font-size: 30px;

  flex-shrink: 0;
}


.content {
  flex: 1;
}

small {
  color: #89958d;
}

h2 {
  margin: 5px 0 8px;
  font-size: 21px;
}

.content p {
  color: #718078;
  line-height: 1.7;
  margin-bottom: 8px;
}

.baca {
  color: #1f7a4d;
  font-size: 14px;
  font-weight: 700;
}


/* =========================
   MODAL
========================= */

.overlay {
  position: fixed;
  inset: 0;

  z-index: 9999;

  background: rgba(0,0,0,0.55);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
}


.modal {
  width: 100%;
  max-width: 700px;

  max-height: 90vh;

  overflow-y: auto;

  background: white;

  border-radius: 20px;

  box-shadow:
    0 25px 70px rgba(0,0,0,0.25);
}


/* HEADER */

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 25px;

  border-bottom: 1px solid #e7eee9;
}

.modal-icon {
  width: 50px;
  height: 50px;

  border-radius: 13px;

  background: #edf7ef;

  display: grid;
  place-items: center;

  font-size: 25px;
}


.close {
  width: 40px;
  height: 40px;

  border: 0;

  border-radius: 50%;

  background: #f1f4f2;

  cursor: pointer;

  font-size: 18px;
}

.close:hover {
  background: #e3ebe6;
}


/* BODY */

.modal-body {
  padding: 30px;
}

.tanggal {
  color: #1f7a4d;

  font-size: 13px;

  font-weight: 700;
}

.modal-body h2 {
  font-size: 30px;

  line-height: 1.3;

  margin:
    10px 0 25px;
}


.isi p {
  color: #53615a;

  line-height: 1.9;

  margin-bottom: 15px;
}


/* FOOTER */

.modal-footer {
  display: flex;
  justify-content: flex-end;

  padding: 20px 30px;

  border-top: 1px solid #e7eee9;
}

.modal-footer button {
  border: 0;

  background: #1f7a4d;

  color: white;

  padding: 11px 20px;

  border-radius: 9px;

  cursor: pointer;

  font-weight: 700;
}

.modal-footer button:hover {
  background: #17613c;
}


/* =========================
   MOBILE
========================= */

@media(max-width:600px) {

  .announcement {
    flex-direction: column;
  }

  h1 {
    font-size: 38px;
  }

  .modal-body {
    padding: 22px;
  }

  .modal-body h2 {
    font-size: 24px;
  }

}

</style>