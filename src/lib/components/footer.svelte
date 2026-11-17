<footer>

  <div class="container footer">

    <div>
      <h2>KRAJAN DIGITAL</h2>

      <p>
        Pusat informasi dan pelayanan digital
        warga Dusun Krajan.
      </p>
    </div>

    <div>
      <h3>Navigasi</h3>

      <a href="/berita">Berita</a>
      <a href="/kegiatan">Kegiatan</a>
      <a href="/template">Template Warga</a>
    </div>

    <div>
      <h3>Kontak</h3>

      <p>📍 Dusun Krajan</p>
      <p>☎️ 08xx-xxxx-xxxx</p>
      <p>✉️ info@krajandigital.id</p>
    </div>

  </div>

  <div class="copyright">
    © 2026 KRAJAN DIGITAL
  </div>

</footer>

<style>
footer {
  background: #173b28;
  color: #dbe9df;
  margin-top: 60px;
}

.footer {
  padding: 45px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 35px;
}

.footer h2,
.footer h3 {
  color: white;
}

.footer p,
.footer a {
  color: #b8cbbf;
  line-height: 1.7;
}

.footer a {
  display: block;
  margin: 8px 0;
}

.copyright {
  text-align: center;
  border-top: 1px solid #2c513d;
  padding: 17px;
  color: #8fa99a;
}

@media(max-width:700px) {
  .footer {
    grid-template-columns: 1fr;
  }
}
</style>