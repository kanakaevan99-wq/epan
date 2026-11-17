import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like, t as attr_class, x as attr } from "../../../chunks/server.js";
//#region src/routes/profil/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let fasilitasUmum = [
			{
				id: 1,
				nama: "Masjid",
				deskripsi: "Informasi mengenai masjid di Dusun Krajan.",
				alamat: "",
				foto: "",
				icon: "🕌"
			},
			{
				id: 2,
				nama: "TPQ",
				deskripsi: "Informasi mengenai TPQ di Dusun Krajan.",
				alamat: "",
				foto: "",
				icon: "📖"
			},
			{
				id: 3,
				nama: "Mushola",
				deskripsi: "Informasi mengenai mushola di Dusun Krajan.",
				alamat: "",
				foto: "",
				icon: "🕋"
			},
			{
				id: 4,
				nama: "Balai Dusun",
				deskripsi: "Informasi mengenai Balai Dusun Krajan.",
				alamat: "",
				foto: "",
				icon: "🏠"
			}
		];
		let organisasiMasyarakat = [
			{
				id: 1,
				nama: "BOUVKA",
				deskripsi: "Organisasi masyarakat Dusun Krajan.",
				ketua: "",
				kontak: "",
				foto: "",
				icon: "🤝"
			},
			{
				id: 2,
				nama: "IPPIKA",
				deskripsi: "Organisasi kepemudaan Dusun Krajan.",
				ketua: "",
				kontak: "",
				foto: "",
				icon: "👥"
			},
			{
				id: 3,
				nama: "Takmir Masjid",
				deskripsi: "Organisasi pengelola dan pengurus kegiatan masjid.",
				ketua: "",
				kontak: "",
				foto: "",
				icon: "🕌"
			}
		];
		head("kwz0d7", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Profil Dusun — KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Profil Dusun Krajan, fasilitas umum, dan organisasi masyarakat."/>`);
		});
		$$renderer.push(`<section class="page svelte-kwz0d7"><div class="container svelte-kwz0d7"><div class="header svelte-kwz0d7"><span class="eyebrow svelte-kwz0d7">KENALI DUSUN</span> <h1 class="svelte-kwz0d7">Profil Dusun</h1> <p class="intro svelte-kwz0d7">Mengenal lebih dekat sejarah, kependudukan, fasilitas,
        serta organisasi masyarakat Dusun Krajan.</p></div> <section class="section svelte-kwz0d7"><div class="section-title svelte-kwz0d7"><div class="section-icon svelte-kwz0d7">🏘️</div> <div><span class="svelte-kwz0d7">PROFIL</span> <h2 class="svelte-kwz0d7">Profil Dusun</h2></div></div> <div class="profil-grid svelte-kwz0d7"><button type="button"${attr_class("profil-card svelte-kwz0d7", void 0, { "open": false })}><div class="card-icon svelte-kwz0d7">📜</div> <div class="card-content svelte-kwz0d7"><h3 class="svelte-kwz0d7">Sejarah</h3> <p class="svelte-kwz0d7">Sejarah dan perjalanan terbentuknya Dusun Krajan.</p></div> <span class="arrow svelte-kwz0d7">${escape_html("›")}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <button type="button"${attr_class("profil-card svelte-kwz0d7", void 0, { "open": false })}><div class="card-icon svelte-kwz0d7">👨‍👩‍👧‍👦</div> <div class="card-content svelte-kwz0d7"><h3 class="svelte-kwz0d7">Kependudukan</h3> <p class="svelte-kwz0d7">Informasi mengenai data dan kondisi penduduk.</p></div> <span class="arrow svelte-kwz0d7">${escape_html("›")}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <button type="button"${attr_class("profil-card svelte-kwz0d7", void 0, { "open": false })}><div class="card-icon svelte-kwz0d7">🏢</div> <div class="card-content svelte-kwz0d7"><h3 class="svelte-kwz0d7">BUMD</h3> <p class="svelte-kwz0d7">Informasi mengenai badan usaha milik dusun.</p></div> <span class="arrow svelte-kwz0d7">${escape_html("›")}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <button type="button"${attr_class("profil-card svelte-kwz0d7", void 0, { "open": false })}><div class="card-icon svelte-kwz0d7">🎯</div> <div class="card-content svelte-kwz0d7"><h3 class="svelte-kwz0d7">Visi Misi Dusun</h3> <p class="svelte-kwz0d7">Visi dan misi pembangunan Dusun Krajan.</p></div> <span class="arrow svelte-kwz0d7">${escape_html("›")}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <button type="button"${attr_class("profil-card svelte-kwz0d7", void 0, { "open": false })}><div class="card-icon svelte-kwz0d7">💰</div> <div class="card-content svelte-kwz0d7"><h3 class="svelte-kwz0d7">Keuangan Dusun</h3> <p class="svelte-kwz0d7">Informasi mengenai keuangan dan anggaran dusun.</p></div> <span class="arrow svelte-kwz0d7">${escape_html("›")}</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></section> <section class="section svelte-kwz0d7"><div class="section-title svelte-kwz0d7"><div class="section-icon svelte-kwz0d7">🏫</div> <div><span class="svelte-kwz0d7">FASILITAS</span> <h2 class="svelte-kwz0d7">Fasilitas Umum</h2></div></div> <div class="facility-grid svelte-kwz0d7"><!--[-->`);
		const each_array = ensure_array_like(fasilitasUmum);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<div class="facility-card svelte-kwz0d7">`);
			if (item.foto) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="facility-image svelte-kwz0d7"><img${attr("src", item.foto)}${attr("alt", item.nama)} class="svelte-kwz0d7"/></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="facility-image no-image svelte-kwz0d7"><span class="svelte-kwz0d7">${escape_html(item.icon || "🏠")}</span></div>`);
			}
			$$renderer.push(`<!--]--> <div class="facility-body svelte-kwz0d7"><div class="facility-icon svelte-kwz0d7">${escape_html(item.icon || "🏠")}</div> <h3 class="svelte-kwz0d7">${escape_html(item.nama)}</h3> `);
			if (item.deskripsi) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="svelte-kwz0d7">${escape_html(item.deskripsi)}</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (item.alamat) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="address svelte-kwz0d7"><span>📍</span> <span>${escape_html(item.alamat)}</span></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section svelte-kwz0d7"><div class="section-title svelte-kwz0d7"><div class="section-icon svelte-kwz0d7">🤝</div> <div><span class="svelte-kwz0d7">MASYARAKAT</span> <h2 class="svelte-kwz0d7">Organisasi Masyarakat</h2></div></div> <div class="organization-grid svelte-kwz0d7"><!--[-->`);
		const each_array_1 = ensure_array_like(organisasiMasyarakat);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let item = each_array_1[$$index_1];
			$$renderer.push(`<div class="organization-card svelte-kwz0d7"><div class="organization-top svelte-kwz0d7">`);
			if (item.foto) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<img${attr("src", item.foto)}${attr("alt", item.nama)} class="svelte-kwz0d7"/>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="organization-icon svelte-kwz0d7">${escape_html(item.icon || "🤝")}</div>`);
			}
			$$renderer.push(`<!--]--> <div><h3 class="svelte-kwz0d7">${escape_html(item.nama)}</h3> <span class="svelte-kwz0d7">Organisasi Masyarakat</span></div></div> `);
			if (item.deskripsi) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="svelte-kwz0d7">${escape_html(item.deskripsi)}</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (item.ketua) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="info-row svelte-kwz0d7"><span class="label svelte-kwz0d7">Ketua</span> <span>${escape_html(item.ketua)}</span></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (item.kontak) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="info-row svelte-kwz0d7"><span class="label svelte-kwz0d7">Kontak</span> <span>${escape_html(item.kontak)}</span></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></section></div></section>`);
	});
}
//#endregion
export { _page as default };
