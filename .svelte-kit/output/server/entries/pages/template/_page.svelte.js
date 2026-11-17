import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like } from "../../../chunks/server.js";
import "../../../chunks/siteData.js";
//#region src/routes/template/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let templates = [];
		head("1mmxgxr", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Template Warga — KRAJAN DIGITAL</title>`);
			});
		});
		$$renderer.push(`<section class="page svelte-1mmxgxr"><div class="container svelte-1mmxgxr"><span class="eyebrow svelte-1mmxgxr">PELAYANAN WARGA</span> <h1 class="svelte-1mmxgxr">Template Warga</h1> <p class="intro svelte-1mmxgxr">Template dokumen yang dapat digunakan oleh warga
      Dusun Krajan.</p> <div class="grid svelte-1mmxgxr"><!--[-->`);
		const each_array = ensure_array_like(templates);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let item = each_array[$$index];
			$$renderer.push(`<article class="card svelte-1mmxgxr"><div class="icon svelte-1mmxgxr">${escape_html(item.icon)}</div> <h2 class="svelte-1mmxgxr">${escape_html(item.nama)}</h2> <p class="svelte-1mmxgxr">${escape_html(item.deskripsi)}</p> <button type="button" class="svelte-1mmxgxr">📄 Gunakan Template</button></article>`);
		}
		$$renderer.push(`<!--]--></div></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
