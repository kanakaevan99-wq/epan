import { S as escape_html, i as head, r as ensure_array_like, x as attr } from "../../../chunks/server.js";
import { f as getData, o as defaultLowongan } from "../../../chunks/siteData.js";
//#region src/routes/lowongan/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let lowongan = [];
		function loadData() {
			lowongan = getData("krajan_lowongan", defaultLowongan);
		}
		loadData();
		head("1lwdbc", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Lowongan Kerja - KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Informasi lowongan kerja untuk warga Dusun Krajan."/>`);
		});
		$$renderer.push(`<div class="page svelte-1lwdbc"><section class="hero svelte-1lwdbc"><div class="container svelte-1lwdbc"><div class="eyebrow svelte-1lwdbc">💼 INFORMASI KERJA</div> <h1 class="svelte-1lwdbc">Lowongan Kerja <span class="svelte-1lwdbc">untuk Warga</span></h1> <p class="svelte-1lwdbc">Temukan informasi lowongan pekerjaan terbaru yang
        tersedia untuk warga Dusun Krajan.</p></div></section> <section class="content svelte-1lwdbc"><div class="container svelte-1lwdbc">`);
		if (lowongan.length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="empty svelte-1lwdbc"><div class="empty-icon svelte-1lwdbc">💼</div> <h2 class="svelte-1lwdbc">Belum ada lowongan</h2> <p class="svelte-1lwdbc">Saat ini belum tersedia informasi lowongan kerja.</p></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="grid svelte-1lwdbc"><!--[-->`);
			const each_array = ensure_array_like(lowongan);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<article class="card svelte-1lwdbc"><div class="card-top svelte-1lwdbc"><div class="job-icon svelte-1lwdbc">💼</div> <span class="badge svelte-1lwdbc">${escape_html(item.tipe)}</span></div> <h2 class="svelte-1lwdbc">${escape_html(item.posisi)}</h2> <div class="company svelte-1lwdbc">🏢 ${escape_html(item.perusahaan)}</div> <div class="info svelte-1lwdbc"><div class="svelte-1lwdbc"><span class="svelte-1lwdbc">📍</span> <strong class="svelte-1lwdbc">Lokasi</strong> <p class="svelte-1lwdbc">${escape_html(item.lokasi)}</p></div> <div class="svelte-1lwdbc"><span class="svelte-1lwdbc">📅</span> <strong class="svelte-1lwdbc">Batas Lamaran</strong> <p class="svelte-1lwdbc">${escape_html(item.deadline)}</p></div></div> <div class="description svelte-1lwdbc"><h3 class="svelte-1lwdbc">Deskripsi</h3> <p class="svelte-1lwdbc">${escape_html(item.deskripsi)}</p></div> <div class="requirements svelte-1lwdbc"><h3 class="svelte-1lwdbc">Syarat</h3> <p class="svelte-1lwdbc">${escape_html(item.syarat)}</p></div> <div class="contact svelte-1lwdbc"><span class="svelte-1lwdbc">📞</span> <div><small class="svelte-1lwdbc">Kontak</small> <strong class="svelte-1lwdbc">${escape_html(item.kontak)}</strong></div></div> `);
				if (item.link) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<a class="button svelte-1lwdbc"${attr("href", item.link)} target="_blank" rel="noopener noreferrer">Lihat Lowongan →</a>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></article>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></section></div>`);
	});
}
//#endregion
export { _page as default };
