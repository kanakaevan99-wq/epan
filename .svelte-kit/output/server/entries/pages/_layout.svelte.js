import { i as head, o as slot, x as attr } from "../../chunks/server.js";
import { t as page } from "../../chunks/state.js";
//#region src/lib/components/navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<header class="svelte-1qrzhyq"><div class="container nav svelte-1qrzhyq"><a class="brand svelte-1qrzhyq" href="/"><span class="logo svelte-1qrzhyq">K</span> <span class="brand-text svelte-1qrzhyq"><b class="svelte-1qrzhyq">KRAJAN</b> <small class="svelte-1qrzhyq">DIGITAL</small></span></a> <button class="menu svelte-1qrzhyq" type="button"${attr("aria-label", "Buka menu")}${attr("aria-expanded", false)} aria-controls="main-menu">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<svg viewBox="0 0 24 24" aria-hidden="true" class="svelte-1qrzhyq"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`);
		$$renderer.push(`<!--]--></button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></header>`);
	});
}
//#endregion
//#region src/lib/components/footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="svelte-1wlmi2p"><div class="container footer svelte-1wlmi2p"><div><h2 class="svelte-1wlmi2p">KRAJAN DIGITAL</h2> <p class="svelte-1wlmi2p">Pusat informasi dan pelayanan digital
        warga Dusun Krajan.</p></div> <div><h3 class="svelte-1wlmi2p">Navigasi</h3> <a href="/berita" class="svelte-1wlmi2p">Berita</a> <a href="/kegiatan" class="svelte-1wlmi2p">Kegiatan</a> <a href="/template" class="svelte-1wlmi2p">Template Warga</a></div> <div><h3 class="svelte-1wlmi2p">Kontak</h3> <p class="svelte-1wlmi2p">📍 Dusun Krajan</p> <p class="svelte-1wlmi2p">☎️ 08xx-xxxx-xxxx</p> <p class="svelte-1wlmi2p">✉️ info@krajandigital.id</p></div></div> <div class="copyright svelte-1wlmi2p">© 2026 KRAJAN DIGITAL</div></footer>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let isAdmin;
		$: isAdmin = page.url.pathname.startsWith("/admin");
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Portal informasi dan pelayanan digital Dusun Krajan"/>`);
		});
		if (!isAdmin) {
			$$renderer.push("<!--[0-->");
			Navbar($$renderer, {});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <!--[-->`);
		slot($$renderer, $$props, "default", {}, null);
		$$renderer.push(`<!--]--> `);
		if (!isAdmin) {
			$$renderer.push("<!--[0-->");
			Footer($$renderer, {});
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _layout as default };
