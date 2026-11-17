import "../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like, t as attr_class, x as attr } from "../../chunks/server.js";
import { c as defaultSite, d as defaultUmkm, n as defaultBerita, o as defaultLowongan, t as defaultBeranda, u as defaultTemplates } from "../../chunks/siteData.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let site = defaultSite;
		let beranda = defaultBeranda;
		let berita = defaultBerita;
		let templates = defaultTemplates;
		let lowongan = defaultLowongan;
		let umkm = defaultUmkm;
		let animatedVisitors = 0;
		let pageReady = false;
		const profil = [
			{
				icon: "sejarah",
				title: "Sejarah Dusun",
				desc: "Mengenal sejarah dan perkembangan Dusun Krajan.",
				href: "/profil#sejarah"
			},
			{
				icon: "penduduk",
				title: "Kependudukan",
				desc: "Informasi data dan kondisi kependudukan dusun.",
				href: "/profil#kependudukan"
			},
			{
				icon: "bumd",
				title: "BUMD",
				desc: "Informasi badan usaha milik dusun.",
				href: "/profil#bumd"
			},
			{
				icon: "visi",
				title: "Visi & Misi Dusun",
				desc: "Visi dan misi dalam membangun Dusun Krajan.",
				href: "/profil#visi-misi"
			},
			{
				icon: "keuangan",
				title: "Keuangan Dusun",
				desc: "Informasi transparansi keuangan dusun.",
				href: "/profil#keuangan"
			}
		];
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(site.nama || "KRAJAN DIGITAL")}</title>`);
			});
			$$renderer.push(`<meta name="description" content="Portal digital Dusun Krajan" class="svelte-1uha8ag"/>`);
		});
		$$renderer.push(`<div class="scroll-progress svelte-1uha8ag"></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section${attr_class("hero svelte-1uha8ag", void 0, { "page-ready": pageReady })}><div class="hero-noise svelte-1uha8ag"></div> <div class="hero-grid container svelte-1uha8ag"><div class="hero-orb orb-one svelte-1uha8ag"></div> <div class="hero-orb orb-two svelte-1uha8ag"></div> <div class="hero-orb orb-three svelte-1uha8ag"></div> <div class="hero-content svelte-1uha8ag"><div class="eyebrow hero-eyebrow svelte-1uha8ag">${escape_html(beranda.eyebrow || "SELAMAT DATANG DI")}</div> <h1 class="hero-title svelte-1uha8ag"><i class="mask svelte-1uha8ag"><b class="svelte-1uha8ag">${escape_html(beranda.judul1 || "Krajan")}</b></i> <i class="mask svelte-1uha8ag"><b class="grad svelte-1uha8ag">${escape_html(beranda.judul2 || "Digital")}</b></i></h1> <p class="hero-description svelte-1uha8ag">${escape_html(beranda.deskripsi || "Portal digital Dusun Krajan yang menyediakan informasi, pelayanan, kegiatan, dan berbagai informasi untuk warga.")}</p> <div class="hero-buttons svelte-1uha8ag"><a class="btn btn-primary svelte-1uha8ag" href="/profil">Profil Dusun →</a> <a class="btn btn-light svelte-1uha8ag" href="/template">Template Warga</a></div> <div class="krajan-visitor-card svelte-1uha8ag"><div class="visitor-status svelte-1uha8ag"><span class="svelte-1uha8ag"></span>LIVE</div> <div class="visitor-glow svelte-1uha8ag"></div> <div class="visitor-icon-box svelte-1uha8ag"><div class="visitor-pulse svelte-1uha8ag"></div> <span aria-hidden="true" class="svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="23" height="23" class="svelte-1uha8ag"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" class="svelte-1uha8ag"></path><circle cx="12" cy="12" r="3" class="svelte-1uha8ag"></circle></svg></span></div> <div class="visitor-info svelte-1uha8ag"><span class="visitor-title svelte-1uha8ag">KRAJAN DIGITAL</span> <div class="visitor-number svelte-1uha8ag">${escape_html(animatedVisitors.toLocaleString("id-ID"))}</div> <span class="visitor-label svelte-1uha8ag">Pengunjung Website</span></div></div></div> <div class="illustration hero-illustration svelte-1uha8ag"><div class="hero-image-glow svelte-1uha8ag"></div> <div class="illustration-ring ring-one svelte-1uha8ag"></div> <div class="illustration-ring ring-two svelte-1uha8ag"></div> <div class="floating-chip chip-top svelte-1uha8ag">✦ DIGITAL DUSUN</div> <div class="floating-chip chip-bottom svelte-1uha8ag">● ONLINE</div> <div class="tilt-3d svelte-1uha8ag"><div class="logo-frame svelte-1uha8ag"><img src="/logo.jpeg" alt="KRAJANNET" class="svelte-1uha8ag"/> <span class="glare svelte-1uha8ag"></span></div></div></div></div> <div class="hero-scroll-cue svelte-1uha8ag" aria-hidden="true"><span class="svelte-1uha8ag"></span> <small class="svelte-1uha8ag">Scroll untuk menjelajah</small></div></section> <section class="section modern-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="section-heading svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">INFORMASI TERBARU</span> <h2 class="svelte-1uha8ag">Berita Dusun</h2></div> <a href="/berita" class="svelte-1uha8ag">Lihat semua →</a></div> `);
		if (berita.length > 0) {
			$$renderer.push("<!--[0-->");
			const utama = berita[0];
			const lainnya = berita.slice(1, 3);
			$$renderer.push(`<div class="news-layout svelte-1uha8ag"><a class="card news-feature svelte-1uha8ag"${attr("href", `/berita/${utama.id}`)}>`);
			if (utama.gambar || utama.foto) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<img${attr("src", utama.gambar || utama.foto)}${attr("alt", utama.judul || "Berita Dusun")} class="svelte-1uha8ag"/>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="news-placeholder svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" aria-hidden="true" class="svelte-1uha8ag"><path d="M6 3h9l4 4v14H6z" class="svelte-1uha8ag"></path><path d="M15 3v5h4M9 12h7M9 16h7" class="svelte-1uha8ag"></path></svg></div>`);
			}
			$$renderer.push(`<!--]--> <div class="news-feature-body svelte-1uha8ag"><small class="svelte-1uha8ag">${escape_html(utama.tanggal || "Berita Dusun")}</small> <h3 class="svelte-1uha8ag">${escape_html(utama.judul || "Berita Dusun")}</h3> <p class="svelte-1uha8ag">${escape_html(utama.deskripsi || utama.isi || "Informasi terbaru Dusun Krajan.")}</p> <strong class="svelte-1uha8ag">Baca selengkapnya →</strong></div></a> <div class="news-list svelte-1uha8ag"><!--[-->`);
			const each_array = ensure_array_like(lainnya);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<a class="news-row svelte-1uha8ag"${attr("href", `/berita/${item.id}`)}>`);
				if (item.gambar || item.foto) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<img class="news-thumb svelte-1uha8ag"${attr("src", item.gambar || item.foto)} alt=""/>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="news-thumb svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true" class="svelte-1uha8ag"><path d="M6 3h9l4 4v14H6z" class="svelte-1uha8ag"></path><path d="M15 3v5h4M9 12h7M9 16h7" class="svelte-1uha8ag"></path></svg></div>`);
				}
				$$renderer.push(`<!--]--> <div class="svelte-1uha8ag"><small class="svelte-1uha8ag">${escape_html(item.tanggal || "Berita Dusun")}</small> <h3 class="svelte-1uha8ag">${escape_html(item.judul || "Berita Dusun")}</h3> <p class="svelte-1uha8ag">${escape_html(item.deskripsi || item.isi || "")}</p></div></a>`);
			}
			$$renderer.push(`<!--]--> <a class="news-all svelte-1uha8ag" href="/berita">Lihat semua berita →</a></div></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty svelte-1uha8ag">Belum ada berita tersedia.</div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section soft-section modern-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="section-heading svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">INFORMASI PEKERJAAN</span> <h2 class="svelte-1uha8ag">Lowongan Kerja</h2></div> <a href="/lowongan" class="svelte-1uha8ag">Lihat semua →</a></div> `);
		if (lowongan.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="jobs-grid svelte-1uha8ag"><!--[-->`);
			const each_array_1 = ensure_array_like(lowongan.slice(0, 3));
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_1[$$index_1];
				$$renderer.push(`<a class="card job-card svelte-1uha8ag" href="/lowongan"><div class="job-icon svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true" class="svelte-1uha8ag"><rect x="3" y="7" width="18" height="13" rx="2" class="svelte-1uha8ag"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" class="svelte-1uha8ag"></path></svg></div> <div class="svelte-1uha8ag"><span class="job-type svelte-1uha8ag">${escape_html(item.tipe || "LOWONGAN")}</span> <h3 class="svelte-1uha8ag">${escape_html(item.posisi || "Posisi Pekerjaan")}</h3> <p class="svelte-1uha8ag">${escape_html(item.perusahaan || "Perusahaan")}</p> <small class="svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true" style="vertical-align:-2px" class="svelte-1uha8ag"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" class="svelte-1uha8ag"></path><circle cx="12" cy="10" r="2.5" class="svelte-1uha8ag"></circle></svg> ${escape_html(item.lokasi || "Lokasi tidak tersedia")}</small></div></a>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty svelte-1uha8ag">Belum ada lowongan kerja.</div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section modern-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="section-heading svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">EKONOMI WARGA</span> <h2 class="svelte-1uha8ag">UMKM Dusun</h2></div> <a href="/umkm" class="svelte-1uha8ag">Lihat semua →</a></div> `);
		if (umkm.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="umkm-grid svelte-1uha8ag"><!--[-->`);
			const each_array_2 = ensure_array_like(umkm.slice(0, 3));
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let item = each_array_2[$$index_2];
				$$renderer.push(`<a class="card umkm-card svelte-1uha8ag" href="/umkm">`);
				if (item.foto) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<img${attr("src", item.foto)}${attr("alt", item.nama)} class="svelte-1uha8ag"/>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="umkm-placeholder svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" aria-hidden="true" class="svelte-1uha8ag"><path d="M3 10h18l-2-6H5zM5 10v10h14V10M9 20v-6h6v6M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" class="svelte-1uha8ag"></path></svg></div>`);
				}
				$$renderer.push(`<!--]--> <div class="umkm-content svelte-1uha8ag"><span class="svelte-1uha8ag">${escape_html(item.kategori || "UMKM")}</span> <h3 class="svelte-1uha8ag">${escape_html(item.nama || "Nama UMKM")}</h3> <p class="svelte-1uha8ag">${escape_html(item.deskripsi || "UMKM warga Dusun Krajan.")}</p> <small class="svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="14" height="14" aria-hidden="true" style="vertical-align:-2px" class="svelte-1uha8ag"><circle cx="12" cy="8" r="3.5" class="svelte-1uha8ag"></circle><path d="M5 21v-2a7 7 0 0 1 14 0v2" class="svelte-1uha8ag"></path></svg> ${escape_html(item.pemilik || "-")}</small></div></a>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty svelte-1uha8ag">Belum ada UMKM tersedia.</div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section soft-section modern-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="section-heading svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">PELAYANAN WARGA</span> <h2 class="svelte-1uha8ag">Template Warga</h2></div> <a href="/template" class="svelte-1uha8ag">Lihat semua →</a></div> <div class="template-grid svelte-1uha8ag"><!--[-->`);
		const each_array_3 = ensure_array_like(templates.slice(0, 4));
		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let item = each_array_3[$$index_3];
			$$renderer.push(`<a class="card template-card svelte-1uha8ag" href="/template"><div class="template-icon svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="26" height="26" aria-hidden="true" class="svelte-1uha8ag"><path d="M6 3h9l4 4v14H6z" class="svelte-1uha8ag"></path><path d="M15 3v5h4M9 12h7M9 16h7" class="svelte-1uha8ag"></path></svg></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(item.nama || item.judul || "Template Surat")}</h3> <p class="svelte-1uha8ag">${escape_html(item.deskripsi || "Template dokumen untuk kebutuhan warga.")}</p></div> <span class="arrow svelte-1uha8ag">→</span></a>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="section modern-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="section-heading svelte-1uha8ag"><div class="svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">TENTANG KRAJAN</span> <h2 class="svelte-1uha8ag">Profil Dusun</h2> <p class="svelte-1uha8ag">Mengenal lebih dekat Dusun Krajan.</p></div> <a href="/profil" class="svelte-1uha8ag">Selengkapnya →</a></div> <div class="profile-grid svelte-1uha8ag"><!--[-->`);
		const each_array_4 = ensure_array_like(profil);
		for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
			let item = each_array_4[$$index_4];
			$$renderer.push(`<a class="card profile-card svelte-1uha8ag"${attr("href", item.href)}><div class="profile-icon svelte-1uha8ag">`);
			if (item.icon === "sejarah") {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true" class="svelte-1uha8ag"><circle cx="12" cy="12" r="9" class="svelte-1uha8ag"></circle><path d="M12 7v5l3 2" class="svelte-1uha8ag"></path></svg>`);
			} else if (item.icon === "penduduk") {
				$$renderer.push("<!--[1-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true" class="svelte-1uha8ag"><circle cx="9" cy="8" r="3" class="svelte-1uha8ag"></circle><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" class="svelte-1uha8ag"></path></svg>`);
			} else if (item.icon === "bumd") {
				$$renderer.push("<!--[2-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true" class="svelte-1uha8ag"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1M14 10h1M9 14h1M14 14h1M10 21v-3h4v3" class="svelte-1uha8ag"></path></svg>`);
			} else if (item.icon === "visi") {
				$$renderer.push("<!--[3-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true" class="svelte-1uha8ag"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" class="svelte-1uha8ag"></path><circle cx="12" cy="12" r="3" class="svelte-1uha8ag"></circle></svg>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="29" height="29" aria-hidden="true" class="svelte-1uha8ag"><rect x="3" y="5" width="18" height="15" rx="2" class="svelte-1uha8ag"></rect><path d="M16 3v4M8 3v4M3 10h18M7 14h3M7 17h7" class="svelte-1uha8ag"></path></svg>`);
			}
			$$renderer.push(`<!--]--></div> <h3 class="svelte-1uha8ag">${escape_html(item.title)}</h3> <p class="svelte-1uha8ag">${escape_html(item.desc)}</p> <span class="svelte-1uha8ag">Selengkapnya →</span></a>`);
		}
		$$renderer.push(`<!--]--></div> <div class="extra-profile svelte-1uha8ag"><a href="/fasilitas" class="card extra-card svelte-1uha8ag"><div class="extra-icon svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true" class="svelte-1uha8ag"><path d="m3 9 9-6 9 6M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18M2 10h20" class="svelte-1uha8ag"></path></svg></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">Fasilitas Umum</h3> <p class="svelte-1uha8ag">Masjid, TPQ, Mushola, Balai Dusun, dan fasilitas umum lainnya.</p></div> <span class="svelte-1uha8ag">→</span></a> <a href="/organisasi" class="card extra-card svelte-1uha8ag"><div class="extra-icon svelte-1uha8ag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="27" height="27" aria-hidden="true" class="svelte-1uha8ag"><path d="m8 12 2.5 2.5a2 2 0 0 0 2.8 0l4.2-4.2M3 9l4-4 4 2 3-1 7 4-3 5-4 4-3-2-3 1-5-5z" class="svelte-1uha8ag"></path><path d="m7 5-4 4M17 6l4 4" class="svelte-1uha8ag"></path></svg></div> <div class="svelte-1uha8ag"><h3 class="svelte-1uha8ag">Organisasi Masyarakat</h3> <p class="svelte-1uha8ag">Informasi organisasi masyarakat yang ada di Dusun Krajan.</p></div> <span class="svelte-1uha8ag">→</span></a></div></div></section> <section class="stats-section svelte-1uha8ag"><div class="container svelte-1uha8ag"><div class="stats-grid svelte-1uha8ag"><div class="stat-item svelte-1uha8ag"><strong class="svelte-1uha8ag"></strong><span class="svelte-1uha8ag">Berita</span></div> <div class="stat-item svelte-1uha8ag"><strong class="svelte-1uha8ag"></strong><span class="svelte-1uha8ag">UMKM</span></div> <div class="stat-item svelte-1uha8ag"><strong class="svelte-1uha8ag"></strong><span class="svelte-1uha8ag">Lowongan</span></div> <div class="stat-item svelte-1uha8ag"><strong class="svelte-1uha8ag"></strong><span class="svelte-1uha8ag">Template</span></div></div></div></section>`);
	});
}
//#endregion
export { _page as default };
