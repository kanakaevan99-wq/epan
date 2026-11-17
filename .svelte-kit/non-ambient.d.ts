
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/admin" | "/admin/login" | "/berita" | "/berita/[id]" | "/galeri" | "/kegiatan" | "/kontak" | "/lowongan" | "/pengumuman" | "/profil" | "/template" | "/umkm";
		RouteParams(): {
			"/berita/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string | undefined };
			"/admin": Record<string, never>;
			"/admin/login": Record<string, never>;
			"/berita": { id?: string | undefined };
			"/berita/[id]": { id: string };
			"/galeri": Record<string, never>;
			"/kegiatan": Record<string, never>;
			"/kontak": Record<string, never>;
			"/lowongan": Record<string, never>;
			"/pengumuman": Record<string, never>;
			"/profil": Record<string, never>;
			"/template": Record<string, never>;
			"/umkm": Record<string, never>
		};
		Pathname(): "/" | "/admin" | "/admin/login" | "/berita" | `/berita/${string}` & {} | "/galeri" | "/kegiatan" | "/kontak" | "/lowongan" | "/pengumuman" | "/profil" | "/template" | "/umkm";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/kegiatan/gotongroyong.jpeg" | "/kegiatan/kegiatandusun.jpeg" | "/kegiatan/kegiatankemerdekaan.jpeg" | "/kegiatan/kegiatanpemuda.jpeg" | "/kegiatan/penghijauan.jpeg" | "/kegiatan/rapatwarga.jpeg" | "/logo.jpeg" | "/umkm/bengkel-pak-hambali.png" | "/umkm/laundry-kak-melani.png" | "/umkm/warmindo-krajan.jpg" | string & {};
	}
}