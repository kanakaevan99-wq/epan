<script>
  import { onMount } from 'svelte';

  import {
    defaultTemplates,
    getData
  } from '$lib/siteData.js';

  let templates = [];

  let selectedTemplate = null;
  let showForm = false;

  let form = {
    nama: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    pekerjaan: '',
    namaUsaha: '',
    jenisUsaha: '',
    keperluan: ''
  };

  onMount(() => {
    templates = getData(
      'krajan_templates',
      defaultTemplates
    );
  });

  function gunakanTemplate(item) {
    selectedTemplate = item;
    showForm = true;

    // Reset form
    form = {
      nama: '',
      nik: '',
      tempatLahir: '',
      tanggalLahir: '',
      jenisKelamin: '',
      alamat: '',
      pekerjaan: '',
      namaUsaha: '',
      jenisUsaha: '',
      keperluan: ''
    };
  }

  function tutupForm() {
    showForm = false;
    selectedTemplate = null;
  }

  function cetak() {
    window.print();
  }
</script>

<svelte:head>
  <title>Template Warga — KRAJAN DIGITAL</title>
</svelte:head>

<section class="page">

  <div class="container">

    <span class="eyebrow">
      PELAYANAN WARGA
    </span>

    <h1>Template Warga</h1>

    <p class="intro">
      Template dokumen yang dapat digunakan oleh warga
      Dusun Krajan.
    </p>

    <div class="grid">

      {#each templates as item}

        <article class="card">

          <div class="icon">
            {item.icon}
          </div>

          <h2>
            {item.nama}
          </h2>

          <p>
            {item.deskripsi}
          </p>

          <button
            type="button"
            onclick={() => gunakanTemplate(item)}
          >
            📄 Gunakan Template
          </button>

        </article>

      {/each}

    </div>

  </div>

</section>


{#if showForm}

  <div class="overlay">

    <div class="modal">

      <div class="modal-header">

        <div>
          <span class="modal-label">
            FORMULIR
          </span>

          <h2>
            {selectedTemplate?.nama}
          </h2>
        </div>

        <button
          class="close"
          type="button"
          onclick={tutupForm}
        >
          ✕
        </button>

      </div>


      <div class="form">

        <div class="field">
          <label>Nama Lengkap</label>

          <input
            type="text"
            bind:value={form.nama}
            placeholder="Masukkan nama lengkap"
          />
        </div>


        <div class="field">
          <label>NIK</label>

          <input
            type="text"
            bind:value={form.nik}
            placeholder="Masukkan NIK"
          />
        </div>


        <div class="row">

          <div class="field">
            <label>Tempat Lahir</label>

            <input
              type="text"
              bind:value={form.tempatLahir}
              placeholder="Tempat lahir"
            />
          </div>


          <div class="field">
            <label>Tanggal Lahir</label>

            <input
              type="date"
              bind:value={form.tanggalLahir}
            />
          </div>

        </div>


        <div class="field">
          <label>Jenis Kelamin</label>

          <select bind:value={form.jenisKelamin}>
            <option value="">
              Pilih jenis kelamin
            </option>

            <option value="Laki-laki">
              Laki-laki
            </option>

            <option value="Perempuan">
              Perempuan
            </option>
          </select>
        </div>


        <div class="field">
          <label>Alamat</label>

          <textarea
            bind:value={form.alamat}
            placeholder="Masukkan alamat lengkap"
          ></textarea>
        </div>


        <div class="field">
          <label>Pekerjaan</label>

          <input
            type="text"
            bind:value={form.pekerjaan}
            placeholder="Masukkan pekerjaan"
          />
        </div>


        {#if selectedTemplate?.nama?.toLowerCase().includes('usaha')}

          <div class="field">
            <label>Nama Usaha</label>

            <input
              type="text"
              bind:value={form.namaUsaha}
              placeholder="Nama usaha"
            />
          </div>


          <div class="field">
            <label>Jenis Usaha</label>

            <input
              type="text"
              bind:value={form.jenisUsaha}
              placeholder="Jenis usaha"
            />
          </div>

        {/if}


        <div class="field">
          <label>Keperluan</label>

          <textarea
            bind:value={form.keperluan}
            placeholder="Jelaskan keperluan"
          ></textarea>
        </div>

      </div>


      <div class="modal-footer">

        <button
          type="button"
          class="btn-secondary"
          onclick={tutupForm}
        >
          Batal
        </button>

        <button
          type="button"
          class="btn-primary"
          onclick={cetak}
        >
          🖨️ Cetak
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
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  padding: 25px;
  border: 1px solid #e4ebe7;
  border-radius: 16px;
  background: white;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.icon {
  font-size: 42px;
}

h2 {
  font-size: 20px;
}

.card p {
  color: #718078;
  line-height: 1.7;
}

.card button {
  border: 0;
  background: #1f7a4d;
  color: white;
  padding: 11px 15px;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
}

.card button:hover {
  background: #17613c;
}


/* =========================
   MODAL
========================= */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 9999;
}

.modal {
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 18px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.25);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid #e8eeeb;
}

.modal-header h2 {
  margin: 6px 0 0;
}

.modal-label {
  color: #1f7a4d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
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

.form {
  padding: 25px;
}

.field {
  margin-bottom: 18px;
}

.field label {
  display: block;
  font-weight: 700;
  margin-bottom: 7px;
  font-size: 14px;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d9e3dd;
  border-radius: 9px;
  padding: 12px;
  font-family: inherit;
  font-size: 14px;
  outline: none;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #1f7a4d;
}

.field textarea {
  min-height: 90px;
  resize: vertical;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px 25px;
  border-top: 1px solid #e8eeeb;
}

.btn-secondary,
.btn-primary {
  border: 0;
  padding: 12px 18px;
  border-radius: 9px;
  cursor: pointer;
  font-weight: 700;
}

.btn-secondary {
  background: #eef2ef;
  color: #333;
}

.btn-primary {
  background: #1f7a4d;
  color: white;
}

.btn-primary:hover {
  background: #17613c;
}


/* =========================
   RESPONSIVE
========================= */

@media(max-width:800px) {

  .grid {
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    font-size: 40px;
  }

}

@media(max-width:520px) {

  .grid {
    grid-template-columns: 1fr;
  }

  .row {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 34px;
  }

}

@media print {

  .overlay {
    position: static;
    background: white;
    padding: 0;
  }

  .modal {
    max-width: none;
    max-height: none;
    box-shadow: none;
    border-radius: 0;
  }

  .close,
  .modal-footer {
    display: none;
  }

}

</style>