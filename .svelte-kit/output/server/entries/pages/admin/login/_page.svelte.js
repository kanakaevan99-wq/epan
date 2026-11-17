import "../../../../chunks/index-server.js";
import { i as head, x as attr } from "../../../../chunks/server.js";
//#region src/routes/admin/login/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let email = "";
		let password = "";
		let loading = false;
		head("18c6u1m", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Login Admin — KRAJAN DIGITAL</title>`);
			});
			$$renderer.push(`<meta name="description" content="Login administrator KRAJAN DIGITAL"/>`);
		});
		$$renderer.push(`<div class="login-page svelte-18c6u1m"><div class="login-card svelte-18c6u1m"><div class="logo svelte-18c6u1m">KD</div> <div class="header svelte-18c6u1m"><span class="eyebrow svelte-18c6u1m">KRAJAN DIGITAL</span> <h1 class="svelte-18c6u1m">Login Admin</h1> <p class="svelte-18c6u1m">Silakan masuk untuk mengelola
        website KRAJAN DIGITAL.</p></div> <form><div class="form-group svelte-18c6u1m"><label for="email" class="svelte-18c6u1m">Email Admin</label> <div class="input-wrapper svelte-18c6u1m"><span class="input-icon svelte-18c6u1m"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg></span> <input id="email" type="email"${attr("value", email)} placeholder="admin@krajandigital.id" autocomplete="email"${attr("disabled", loading, true)} class="svelte-18c6u1m"/></div></div> <div class="form-group svelte-18c6u1m"><label for="password" class="svelte-18c6u1m">Password</label> <div class="input-wrapper svelte-18c6u1m"><span class="input-icon svelte-18c6u1m"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg></span> <input id="password"${attr("type", "password")}${attr("value", password)} placeholder="Masukkan password" autocomplete="current-password"${attr("disabled", loading, true)} class="svelte-18c6u1m"/> <button type="button" class="show-password svelte-18c6u1m" aria-label="Tampilkan password">`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>`);
		$$renderer.push(`<!--]--></button></div></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <button type="submit" class="login-button svelte-18c6u1m"${attr("disabled", loading, true)}>`);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg> Masuk ke Dashboard`);
		$$renderer.push(`<!--]--></button></form> <button class="back-button svelte-18c6u1m">← Kembali ke Website</button> <div class="login-footer svelte-18c6u1m"><span><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg></span> <span>Halaman khusus administrator</span></div></div></div>`);
	});
}
//#endregion
export { _page as default };
