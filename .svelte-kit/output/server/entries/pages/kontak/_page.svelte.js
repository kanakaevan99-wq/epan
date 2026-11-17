import "../../../chunks/index-server.js";
import { S as escape_html, i as head } from "../../../chunks/server.js";
import { a as defaultKontak } from "../../../chunks/siteData.js";
//#region src/routes/kontak/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let kontak = defaultKontak;
		head("1d7y4bx", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Kontak — KRAJAN DIGITAL</title>`);
			});
		});
		$$renderer.push(`<section class="page svelte-1d7y4bx"><div class="container"><span class="eyebrow svelte-1d7y4bx">HUBUNGI KAMI</span> <h1 class="svelte-1d7y4bx">Kontak</h1> <p class="intro svelte-1d7y4bx">Hubungi pengelola KRAJAN DIGITAL.</p> <div class="contact-grid svelte-1d7y4bx"><div class="card svelte-1d7y4bx"><div class="icon svelte-1d7y4bx">📍</div> <h2 class="svelte-1d7y4bx">Alamat</h2> <p class="svelte-1d7y4bx">${escape_html(kontak.alamat)}</p></div> <div class="card svelte-1d7y4bx"><div class="icon svelte-1d7y4bx">☎️</div> <h2 class="svelte-1d7y4bx">Telepon</h2> <p class="svelte-1d7y4bx">${escape_html(kontak.telepon)}</p></div> <div class="card svelte-1d7y4bx"><div class="icon svelte-1d7y4bx">✉️</div> <h2 class="svelte-1d7y4bx">Email</h2> <p class="svelte-1d7y4bx">${escape_html(kontak.email)}</p></div> <div class="card svelte-1d7y4bx"><div class="icon svelte-1d7y4bx">💬</div> <h2 class="svelte-1d7y4bx">WhatsApp</h2> <p class="svelte-1d7y4bx">${escape_html(kontak.whatsapp)}</p></div></div></div></section>`);
	});
}
//#endregion
export { _page as default };
