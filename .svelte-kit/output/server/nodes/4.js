

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D8gsbLgR.js","_app/immutable/chunks/BlfrD5uO.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/DFzkr7Z3.js"];
export const stylesheets = ["_app/immutable/assets/4.kzTH0AFg.css"];
export const fonts = [];
