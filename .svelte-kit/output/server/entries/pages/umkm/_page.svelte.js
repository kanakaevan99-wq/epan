import "../../../chunks/index-server.js";
import { i as head, n as derived } from "../../../chunks/server.js";
import "../../../chunks/siteData.js";
//#region src/routes/umkm/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let umkm = [];
		derived(() => ["Semua", ...new Set(umkm.map((item) => item.kategori).filter(Boolean))]);
		derived(() => umkm);
		head("17l8hz", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>UMKM Krajan - KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Direktori UMKM dan usaha warga Dusun Krajan."/>`);
		});
		$$renderer.push(`<div class="page"><section class="hero svelte-17l8hz"><div class="container svelte-17l8hz"><div class="eyebrow svelte-17l8hz"><span aria-hidden="true">🏪</span> EKONOMI WARGA</div> <h1 class="svelte-17l8hz">UMKM <span class="svelte-17l8hz">Dusun Krajan</span></h1> <p class="svelte-17l8hz">Kenali dan dukung berbagai usaha milik warga Dusun Krajan.</p></div></section> <section class="content svelte-17l8hz"><div class="container svelte-17l8hz">`);
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="empty svelte-17l8hz"><p class="svelte-17l8hz">Memuat data UMKM...</p></div>`);
		$$renderer.push(`<!--]--></div></section></div>`);
	});
}
//#endregion
export { _page as default };
