import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like } from "../../../chunks/server.js";
import "../../../chunks/siteData.js";
//#region src/routes/pengumuman/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let pengumuman = [];
		head("ika6x0", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Pengumuman — KRAJAN DIGITAL</title>`);
			});
		});
		$$renderer.push(`<section class="page svelte-ika6x0"><div class="container svelte-ika6x0"><span class="eyebrow svelte-ika6x0">PUSAT INFORMASI</span> <h1 class="svelte-ika6x0">Pengumuman</h1> <p class="intro svelte-ika6x0">Informasi penting dan pengumuman terbaru untuk warga
      Dusun Krajan.</p> <div class="announcement-list svelte-ika6x0"><!--[-->`);
		const each_array = ensure_array_like(pengumuman);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<article class="announcement card svelte-ika6x0" role="button" tabindex="0"><div class="icon svelte-ika6x0">${escape_html(item.icon || "📢")}</div> <div class="content svelte-ika6x0"><small class="svelte-ika6x0">${escape_html(item.tanggal)}</small> <h2 class="svelte-ika6x0">${escape_html(item.judul)}</h2> <p class="svelte-ika6x0">${escape_html(item.deskripsi)}</p> <span class="baca svelte-ika6x0">Baca selengkapnya →</span></div></article>`);
		}
		$$renderer.push(`<!--]--></div></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
