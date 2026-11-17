import "../../../../chunks/index-server.js";
import { S as escape_html, c as unsubscribe_stores, i as head, x as attr } from "../../../../chunks/server.js";
import "../../../../chunks/client.js";
import { c as defaultSite } from "../../../../chunks/siteData.js";
//#endregion
//#region src/routes/berita/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let site = defaultSite;
		head("1nbbil0", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>
    ${escape_html(`Berita — ${site.nama || "KRAJAN DIGITAL"}`)}
  </title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", "Berita Dusun Krajan")}/>`);
		});
		$$renderer.push(`<main class="detail-page svelte-1nbbil0"><div class="background-glow glow-one svelte-1nbbil0"></div> <div class="background-glow glow-two svelte-1nbbil0"></div> <div class="container svelte-1nbbil0"><a class="back-link svelte-1nbbil0" href="/berita">← Kembali ke Berita</a> `);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="state-card svelte-1nbbil0"><div class="loader svelte-1nbbil0"></div> <p class="svelte-1nbbil0">Memuat berita...</p></div>`);
		$$renderer.push(`<!--]--></div></main>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
export { _page as default };
