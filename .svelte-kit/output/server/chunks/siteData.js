//#region src/lib/siteData.js
var defaultSite = {
	nama: "KRAJAN DIGITAL",
	dusun: "Dusun Krajan",
	desa: "Desa Krajan",
	kecamatan: "",
	kabupaten: "",
	provinsi: "",
	email: "",
	telepon: ""
};
var defaultBeranda = {
	eyebrow: "SELAMAT DATANG DI",
	judul1: "Krajan",
	judul2: "Digital",
	judul3: "",
	deskripsi: "Portal digital Dusun Krajan yang menyediakan informasi, pelayanan, kegiatan, dan berbagai informasi untuk warga.",
	tombol1: "Informasi Dusun",
	tombol2: "Template Warga",
	gambar: "/beranda.png"
};
var defaultBerita = [
	{
		id: 1,
		icon: "📰",
		tanggal: "1 September 2026",
		judul: "Kegiatan Warga Dusun Krajan",
		deskripsi: "Informasi terbaru mengenai kegiatan dan perkembangan Dusun Krajan."
	},
	{
		id: 2,
		icon: "🌱",
		tanggal: "28 Agustus 2026",
		judul: "Kegiatan Penghijauan",
		deskripsi: "Warga bersama-sama melaksanakan kegiatan penghijauan lingkungan dusun."
	},
	{
		id: 3,
		icon: "🤝",
		tanggal: "20 Agustus 2026",
		judul: "Gotong Royong Warga",
		deskripsi: "Kegiatan gotong royong dilaksanakan untuk menjaga kebersihan lingkungan."
	}
];
var defaultPengumuman = [{
	id: 1,
	judul: "Pengumuman Warga",
	tanggal: "1 September 2026",
	isi: "Informasi pengumuman untuk warga Dusun Krajan."
}];
var defaultKegiatan = [
	{
		id: 1,
		judul: "Gotong Royong Warga",
		tanggal: "20 Agustus 2026",
		gambar: "/kegiatan/gotongroyong.jpeg",
		deskripsi: "Kegiatan gotong royong warga Dusun Krajan."
	},
	{
		id: 2,
		judul: "Kegiatan Dusun",
		tanggal: "15 Agustus 2026",
		gambar: "/kegiatan/kegiatandusun.jpeg",
		deskripsi: "Kegiatan bersama warga Dusun Krajan."
	},
	{
		id: 3,
		judul: "Kegiatan Kemerdekaan",
		tanggal: "17 Agustus 2026",
		gambar: "/kegiatan/kegiatankemerdekaan.jpeg",
		deskripsi: "Kegiatan peringatan kemerdekaan bersama warga."
	},
	{
		id: 4,
		judul: "Kegiatan Pemuda",
		tanggal: "10 Agustus 2026",
		gambar: "/kegiatan/kegiatanpemuda.jpeg",
		deskripsi: "Kegiatan kepemudaan Dusun Krajan."
	},
	{
		id: 5,
		judul: "Penghijauan",
		tanggal: "5 Agustus 2026",
		gambar: "/kegiatan/penghijauan.jpeg",
		deskripsi: "Kegiatan penghijauan lingkungan Dusun Krajan."
	},
	{
		id: 6,
		judul: "Rapat Warga",
		tanggal: "1 Agustus 2026",
		gambar: "/kegiatan/rapatwarga.jpeg",
		deskripsi: "Rapat dan musyawarah warga Dusun Krajan."
	}
];
var defaultTemplates = [
	{
		id: 1,
		icon: "📄",
		nama: "Surat Pengantar",
		deskripsi: "Template surat pengantar untuk keperluan warga."
	},
	{
		id: 2,
		icon: "📝",
		nama: "Surat Keterangan",
		deskripsi: "Template surat keterangan warga."
	},
	{
		id: 3,
		icon: "📋",
		nama: "Formulir Warga",
		deskripsi: "Berbagai formulir yang dapat digunakan oleh warga."
	}
];
var defaultGaleri = [
	{
		id: 1,
		gambar: "/kegiatan/gotongroyong.jpeg",
		judul: "Gotong Royong"
	},
	{
		id: 2,
		gambar: "/kegiatan/kegiatandusun.jpeg",
		judul: "Kegiatan Dusun"
	},
	{
		id: 3,
		gambar: "/kegiatan/kegiatankemerdekaan.jpeg",
		judul: "Kegiatan Kemerdekaan"
	},
	{
		id: 4,
		gambar: "/kegiatan/kegiatanpemuda.jpeg",
		judul: "Kegiatan Pemuda"
	},
	{
		id: 5,
		gambar: "/kegiatan/penghijauan.jpeg",
		judul: "Penghijauan"
	},
	{
		id: 6,
		gambar: "/kegiatan/rapatwarga.jpeg",
		judul: "Rapat Warga"
	}
];
var defaultKontak = {
	alamat: "Dusun Krajan",
	telepon: "08XX-XXXX-XXXX",
	email: "krajan@example.com",
	whatsapp: "08XX-XXXX-XXXX"
};
var defaultLowongan = [
	{
		id: 1,
		posisi: "Staff Administrasi",
		perusahaan: "PT Maju Bersama",
		lokasi: "Jakarta",
		tipe: "Full Time",
		deadline: "20 September 2026",
		deskripsi: "Mengelola administrasi dan dokumen perusahaan.",
		syarat: "Minimal SMA/SMK, mampu menggunakan Microsoft Office.",
		kontak: "08XX-XXXX-XXXX",
		link: ""
	},
	{
		id: 2,
		posisi: "Operator Produksi",
		perusahaan: "CV Sejahtera",
		lokasi: "Bandung",
		tipe: "Full Time",
		deadline: "25 September 2026",
		deskripsi: "Membantu proses produksi dan menjaga kualitas produk.",
		syarat: "Minimal SMA/SMK, disiplin, dan bertanggung jawab.",
		kontak: "08XX-XXXX-XXXX",
		link: ""
	},
	{
		id: 3,
		posisi: "Admin Media Sosial",
		perusahaan: "UMKM Krajan",
		lokasi: "Dusun Krajan",
		tipe: "Part Time",
		deadline: "30 September 2026",
		deskripsi: "Mengelola media sosial dan membuat konten promosi UMKM.",
		syarat: "Mampu menggunakan media sosial dan aplikasi desain dasar.",
		kontak: "08XX-XXXX-XXXX",
		link: ""
	}
];
var defaultUmkm = [
	{
		id: 1,
		nama: "Warmindo Krajan",
		kategori: "Kuliner",
		pemilik: "Pak Atin",
		alamat: "Dusun Krajan",
		telepon: "08XX-XXXX-XXXX",
		deskripsi: "Menyediakan berbagai makanan rumahan untuk warga.",
		foto: "/umkm/warmindo-krajan.jpg"
	},
	{
		id: 2,
		nama: "Toko Sembako Krajan",
		kategori: "Sembako",
		pemilik: "Pak Ahmad",
		alamat: "Dusun Krajan",
		telepon: "08XX-XXXX-XXXX",
		deskripsi: "Menyediakan kebutuhan sembako dan kebutuhan sehari-hari.",
		foto: ""
	},
	{
		id: 3,
		nama: "Bengkel Pak Hambali",
		kategori: "Jasa",
		pemilik: "Pak Hambali",
		alamat: "Dusun Krajan",
		telepon: "08XX-XXXX-XXXX",
		deskripsi: "Melayani perbaikan dan perawatan kendaraan warga.",
		foto: "/umkm/bengkel-pak-hambali.png"
	},
	{
		id: 4,
		nama: "Laundry Kak Melani",
		kategori: "Jasa",
		pemilik: "Kak Melani",
		alamat: "Dusun Krajan",
		telepon: "08XX-XXXX-XXXX",
		deskripsi: "Melayani cuci dan setrika pakaian untuk warga.",
		foto: "/umkm/laundry-kak-melani.png"
	}
];
var defaultStatistik = {
	totalKunjungan: 0,
	kunjunganProfil: 0
};
function salin(data) {
	return JSON.parse(JSON.stringify(data));
}
function getData(key, defaultData) {
	if (typeof localStorage === "undefined") return salin(defaultData);
	try {
		const data = localStorage.getItem(key);
		if (!data) return salin(defaultData);
		const hasil = JSON.parse(data);
		if (Array.isArray(defaultData) !== Array.isArray(hasil)) return salin(defaultData);
		return hasil;
	} catch (error) {
		console.error(`Gagal membaca data ${key}:`, error);
		return salin(defaultData);
	}
}
function saveData(key, data) {
	if (typeof localStorage === "undefined") return false;
	try {
		localStorage.setItem(key, JSON.stringify(data));
		return true;
	} catch (error) {
		console.error(`Gagal menyimpan data ${key}:`, error);
		return false;
	}
}
function tambahKunjungan() {
	const statistik = getData("krajan_statistik", defaultStatistik);
	statistik.totalKunjungan = Number(statistik.totalKunjungan || 0) + 1;
	saveData("krajan_statistik", statistik);
	return statistik;
}
//#endregion
export { defaultKontak as a, defaultSite as c, defaultUmkm as d, getData as f, defaultKegiatan as i, defaultStatistik as l, defaultBerita as n, defaultLowongan as o, tambahKunjungan as p, defaultGaleri as r, defaultPengumuman as s, defaultBeranda as t, defaultTemplates as u };
