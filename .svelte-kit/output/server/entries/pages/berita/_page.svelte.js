import "../../../chunks/index-server.js";
import { S as escape_html, i as head, r as ensure_array_like, x as attr } from "../../../chunks/server.js";
import "../../../chunks/siteData.js";
//#region src/routes/berita/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let berita = [];
		head("djpnf0", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Berita - KRAJAN DIGITAL</title>`);
			});
		});
		$$renderer.push(`<section class="page svelte-djpnf0"><div class="container svelte-djpnf0"><span class="eyebrow svelte-djpnf0"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-djpnf0"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"></path><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"></path><path d="M8 7h8M8 10h8"></path></svg> INFORMASI TERBARU</span> <h1 class="svelte-djpnf0">Berita Dusun</h1> <p class="intro svelte-djpnf0">Berita dan informasi terbaru seputar kegiatan Dusun Krajan.</p> `);
		if (berita.length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="empty svelte-djpnf0"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-djpnf0"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"></path><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"></path><path d="M8 7h8M8 10h6"></path></svg> <span>Belum ada berita tersedia.</span></div>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div class="news-grid svelte-djpnf0"><!--[-->`);
			const each_array = ensure_array_like(berita);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<a class="news-card svelte-djpnf0"${attr("href", `/berita/${item.id}`)}><div class="icon svelte-djpnf0"><svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-djpnf0"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 1 4 16.5z"></path><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20"></path><path d="M8 7h8M8 10h8M8 17h5"></path></svg></div> <div class="date svelte-djpnf0">${escape_html(item.tanggal)}</div> <h2 class="svelte-djpnf0">${escape_html(item.judul)}</h2> <p class="svelte-djpnf0">${escape_html(item.deskripsi)}</p> <span class="read svelte-djpnf0">Baca selengkapnya <svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-djpnf0"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></a>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
export { _page as default };
