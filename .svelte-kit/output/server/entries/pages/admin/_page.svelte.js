import "../../../chunks/index-server.js";
import { S as escape_html, i as head, t as attr_class } from "../../../chunks/server.js";
//#region src/routes/admin/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let statistik = { totalKunjungan: 0 };
		let activeMenu = "dashboard";
		let sidebarOpen = false;
		let site = {
			nama: "KRAJAN DIGITAL",
			tagline: "Portal Digital Dusun Krajan",
			alamat: "Dusun Krajan, Desa Krajan, Kecamatan, Kabupaten",
			telepon: "08xxxxxxxxxx",
			email: "krajandigital@gmail.com"
		};
		let berita = [{
			id: 1,
			judul: "Kegiatan Gotong Royong Dusun Krajan",
			tanggal: "2026-01-10",
			kategori: "Kegiatan",
			isi: "Warga Dusun Krajan melaksanakan kegiatan gotong royong bersama untuk menjaga kebersihan lingkungan dusun.",
			gambar: "/kegiatan/gotongroyong.jpeg"
		}];
		let pengumuman = [{
			id: 1,
			judul: "Pengumuman Kerja Bakti",
			tanggal: "2026-01-12",
			isi: "Diberitahukan kepada seluruh warga Dusun Krajan untuk mengikuti kegiatan kerja bakti."
		}];
		let kegiatan = [{
			id: 1,
			judul: "Rapat Warga",
			tanggal: "2026-01-15",
			waktu: "19:30",
			tempat: "Balai Dusun Krajan",
			deskripsi: "Rapat koordinasi warga Dusun Krajan."
		}];
		let galeri = [
			{
				id: 1,
				judul: "Gotong Royong",
				deskripsi: "Kegiatan gotong royong warga.",
				foto: "/kegiatan/gotongroyong.jpeg"
			},
			{
				id: 2,
				judul: "Kegiatan Dusun",
				deskripsi: "Kegiatan masyarakat Dusun Krajan.",
				foto: "/kegiatan/kegiatandusun.jpeg"
			},
			{
				id: 3,
				judul: "Rapat Warga",
				deskripsi: "Rapat warga Dusun Krajan.",
				foto: "/kegiatan/rapatwarga.jpeg"
			},
			{
				id: 4,
				judul: "Kegiatan Pemuda",
				deskripsi: "Kegiatan pemuda Dusun Krajan.",
				foto: "/kegiatan/kegiatanpemuda.jpeg"
			},
			{
				id: 5,
				judul: "Penghijauan",
				deskripsi: "Kegiatan penghijauan lingkungan.",
				foto: "/kegiatan/penghijauan.jpeg"
			},
			{
				id: 6,
				judul: "Kegiatan Kemerdekaan",
				deskripsi: "Dokumentasi kegiatan kemerdekaan.",
				foto: "/kegiatan/kegiatankemerdekaan.jpeg"
			}
		];
		let umkm = [{
			id: 1,
			nama: "Contoh UMKM",
			pemilik: "Nama Pemilik",
			kategori: "Makanan",
			deskripsi: "Deskripsi UMKM.",
			alamat: "Dusun Krajan",
			telepon: "08xxxxxxxxxx",
			foto: ""
		}];
		let lowongan = [{
			id: 1,
			posisi: "Contoh Lowongan",
			perusahaan: "Nama Perusahaan",
			lokasi: "Kabupaten",
			tipe: "Full Time",
			deskripsi: "Deskripsi pekerjaan.",
			syarat: "Syarat dan ketentuan.",
			kontak: "08xxxxxxxxxx"
		}];
		function getMenuTitle() {
			return {
				dashboard: "Dashboard",
				beranda: "Beranda",
				berita: "Berita Dusun",
				pengumuman: "Pengumuman",
				kegiatan: "Jadwal & Kegiatan",
				templates: "Template Warga",
				informasi: "Profil Dusun",
				galeri: "Galeri Kegiatan",
				kontak: "Kontak",
				umkm: "UMKM",
				lowongan: "Lowongan Kerja"
			}[activeMenu] || "Dashboard";
		}
		head("1jef3w8", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Admin - KRAJAN DIGITAL</title>`);
			});
		});
		$$renderer.push(`<div class="admin-layout svelte-1jef3w8"><aside${attr_class("sidebar svelte-1jef3w8", void 0, { "open": sidebarOpen })}><div class="sidebar-header svelte-1jef3w8"><div class="brand-icon svelte-1jef3w8">KD</div> <div class="brand-text svelte-1jef3w8"><strong class="svelte-1jef3w8">KRAJAN</strong> <span class="svelte-1jef3w8">DIGITAL</span></div></div> <nav class="sidebar-nav svelte-1jef3w8"><button${attr_class("svelte-1jef3w8", void 0, { "active": true })}><span class="svelte-1jef3w8">🏠</span> <span class="svelte-1jef3w8">Dashboard</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">🌐</span> <span class="svelte-1jef3w8">Beranda</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">📰</span> <span class="svelte-1jef3w8">Berita Dusun</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">📢</span> <span class="svelte-1jef3w8">Pengumuman</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">📅</span> <span class="svelte-1jef3w8">Jadwal &amp; Kegiatan</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">📄</span> <span class="svelte-1jef3w8">Template Warga</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">🏘️</span> <span class="svelte-1jef3w8">Profil Dusun</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">📸</span> <span class="svelte-1jef3w8">Galeri Kegiatan</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">☎️</span> <span class="svelte-1jef3w8">Kontak</span></button> <div class="nav-divider svelte-1jef3w8"></div> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">🏪</span> <span class="svelte-1jef3w8">UMKM</span></button> <button${attr_class("svelte-1jef3w8", void 0, { "active": false })}><span class="svelte-1jef3w8">💼</span> <span class="svelte-1jef3w8">Lowongan Kerja</span></button></nav> <div class="sidebar-bottom svelte-1jef3w8"><button class="website-button svelte-1jef3w8">🌐 Lihat Website</button> <button class="logout-button svelte-1jef3w8">🚪 Logout</button></div></aside> <main class="main-content svelte-1jef3w8"><header class="topbar svelte-1jef3w8"><button class="mobile-menu svelte-1jef3w8">☰</button> <div><h1 class="svelte-1jef3w8">${escape_html(getMenuTitle())}</h1> <p class="svelte-1jef3w8">Kelola konten website KRAJAN DIGITAL</p></div> <div class="topbar-actions svelte-1jef3w8"><button class="save-button svelte-1jef3w8">💾 Simpan Semua</button> <button class="reset-button svelte-1jef3w8">↻</button></div></header> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="content svelte-1jef3w8">`);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<section class="page-section svelte-1jef3w8"><div class="welcome-card svelte-1jef3w8"><div><span class="welcome-label svelte-1jef3w8">ADMIN PANEL</span> <h2 class="svelte-1jef3w8">Selamat Datang di<br/> <strong>KRAJAN DIGITAL</strong></h2> <p class="svelte-1jef3w8">Kelola seluruh informasi website Dusun Krajan
                melalui panel admin ini.</p></div> <div class="welcome-icon svelte-1jef3w8">🏘️</div></div> <div class="stats-grid svelte-1jef3w8"><div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">📰</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(berita.length)}</strong> <span class="svelte-1jef3w8">Berita</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">📢</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(pengumuman.length)}</strong> <span class="svelte-1jef3w8">Pengumuman</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">📅</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(kegiatan.length)}</strong> <span class="svelte-1jef3w8">Kegiatan</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">📸</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(galeri.length)}</strong> <span class="svelte-1jef3w8">Foto Galeri</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">🏪</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(umkm.length)}</strong> <span class="svelte-1jef3w8">UMKM</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">💼</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(lowongan.length)}</strong> <span class="svelte-1jef3w8">Lowongan</span></div></div> <div class="stat-card svelte-1jef3w8"><div class="stat-icon svelte-1jef3w8">👁️</div> <div class="svelte-1jef3w8"><strong class="svelte-1jef3w8">${escape_html(statistik.totalKunjungan || statistik.kunjungan || 0)}</strong> <span class="svelte-1jef3w8">Pengunjung Web</span></div></div></div> <div class="dashboard-grid svelte-1jef3w8"><div class="panel svelte-1jef3w8"><div class="panel-header svelte-1jef3w8"><div><h3 class="svelte-1jef3w8">Informasi Website</h3> <p class="svelte-1jef3w8">Data utama KRAJAN DIGITAL</p></div></div> <div class="info-list svelte-1jef3w8"><div class="svelte-1jef3w8"><span class="svelte-1jef3w8">Nama Website</span> <strong class="svelte-1jef3w8">${escape_html(site.nama)}</strong></div> <div class="svelte-1jef3w8"><span class="svelte-1jef3w8">Tagline</span> <strong class="svelte-1jef3w8">${escape_html(site.tagline)}</strong></div> <div class="svelte-1jef3w8"><span class="svelte-1jef3w8">Telepon</span> <strong class="svelte-1jef3w8">${escape_html(site.telepon)}</strong></div> <div class="svelte-1jef3w8"><span class="svelte-1jef3w8">Email</span> <strong class="svelte-1jef3w8">${escape_html(site.email)}</strong></div></div></div> <div class="panel quick-panel svelte-1jef3w8"><div class="panel-header svelte-1jef3w8"><div><h3 class="svelte-1jef3w8">Akses Cepat</h3> <p class="svelte-1jef3w8">Kelola bagian website</p></div></div> <div class="quick-buttons svelte-1jef3w8"><button class="svelte-1jef3w8">📰 Kelola Berita</button> <button class="svelte-1jef3w8">📅 Kelola Kegiatan</button> <button class="svelte-1jef3w8">📸 Kelola Galeri</button> <button class="svelte-1jef3w8">🏘️ Profil Dusun</button></div></div></div></section>`);
		$$renderer.push(`<!--]--></div></main></div>`);
	});
}
//#endregion
export { _page as default };
