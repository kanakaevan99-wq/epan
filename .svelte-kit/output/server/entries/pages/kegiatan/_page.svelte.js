import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like, x as attr } from "../../../chunks/server.js";
import { i as defaultKegiatan } from "../../../chunks/siteData.js";
//#region src/routes/kegiatan/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let kegiatan = defaultKegiatan;
		head("113orkr", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Kegiatan — KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Jadwal dan kegiatan warga Dusun Krajan."/>`);
		});
		$$renderer.push(`<section class="page svelte-113orkr"><div class="container"><div class="page-header svelte-113orkr"><span class="eyebrow svelte-113orkr">AGENDA DUSUN</span> <h1 class="svelte-113orkr">Jadwal &amp; Kegiatan</h1> <p class="intro svelte-113orkr">Jadwal kegiatan dan agenda warga Dusun Krajan.</p></div> `);
		if (kegiatan.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="kegiatan-grid svelte-113orkr"><!--[-->`);
			const each_array = ensure_array_like(kegiatan);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<article class="kegiatan-card svelte-113orkr"><div class="image-wrapper svelte-113orkr"><img${attr("src", item.gambar)}${attr("alt", item.judul)} loading="lazy" class="svelte-113orkr"/> <div class="image-overlay svelte-113orkr"><span>📅 Kegiatan Dusun</span></div></div> <div class="card-content svelte-113orkr"><div class="tanggal svelte-113orkr">📅 ${escape_html(item.tanggal)}</div> <h2 class="svelte-113orkr">${escape_html(item.judul)}</h2> <p class="svelte-113orkr">${escape_html(item.deskripsi)}</p> <button class="read-more svelte-113orkr" type="button">Baca selengkapnya <span class="svelte-113orkr">→</span></button></div></article>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty svelte-113orkr"><div class="empty-icon svelte-113orkr">📅</div> <h2 class="svelte-113orkr">Belum ada kegiatan</h2> <p class="svelte-113orkr">Data kegiatan dusun belum tersedia.</p></div>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
