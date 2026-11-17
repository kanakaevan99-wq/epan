import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like, x as attr } from "../../../chunks/server.js";
import { c as defaultSite, r as defaultGaleri } from "../../../chunks/siteData.js";
//#region src/routes/galeri/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let site = defaultSite;
		let galeri = defaultGaleri;
		head("1aefun", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Galeri — ${escape_html(site.nama)}</title>`);
			});
		});
		$$renderer.push(`<section class="page-header svelte-1aefun"><div class="container"><span class="eyebrow svelte-1aefun">DOKUMENTASI</span> <h1 class="svelte-1aefun">Galeri Dusun</h1> <p class="svelte-1aefun">Dokumentasi kegiatan dan berbagai aktivitas
      warga Dusun Krajan.</p></div></section> <section class="section svelte-1aefun"><div class="container">`);
		if (galeri.length > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="gallery-grid svelte-1aefun"><!--[-->`);
			const each_array = ensure_array_like(galeri);
			for (let i = 0, $$length = each_array.length; i < $$length; i++) {
				let item = each_array[i];
				$$renderer.push(`<button class="gallery-card svelte-1aefun" type="button"${attr("disabled", !item.gambar || item.rusak, true)}><div class="image-wrapper svelte-1aefun">`);
				if (item.gambar && !item.rusak) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<img${attr("src", item.gambar)}${attr("alt", item.judul)} loading="lazy" class="svelte-1aefun" onerror="this.__e=event"/> <div class="image-overlay svelte-1aefun"><span aria-hidden="true" class="svelte-1aefun">🔍</span> <small class="svelte-1aefun">Lihat foto</small></div>`);
				} else {
					$$renderer.push("<!--[-1-->");
					$$renderer.push(`<div class="no-photo svelte-1aefun" aria-hidden="true">🖼️</div>`);
				}
				$$renderer.push(`<!--]--></div> <div class="gallery-title svelte-1aefun"><h3 class="svelte-1aefun">${escape_html(item.judul)}</h3></div></button>`);
			}
			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="empty svelte-1aefun"><div aria-hidden="true" class="svelte-1aefun">🖼️</div> <h3 class="svelte-1aefun">Belum ada foto</h3> <p class="svelte-1aefun">Dokumentasi kegiatan belum tersedia.</p></div>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
