// ============================================================
// KRAJAN DIGITAL
// DATA WEBSITE DUSUN KRAJAN
// ============================================================
//
// Struktur folder foto (di dalam folder static/):
//   static/logo.jpeg
//   static/beranda.png
//   static/umkm/       -> foto UMKM
//   static/kegiatan/   -> foto kegiatan & galeri
//
// Di data, tulis path tanpa kata "static", diawali "/".
// Contoh: static/umkm/warmindo-krajan.jpg  ->  '/umkm/warmindo-krajan.jpg'
// ============================================================


// ============================================================
// DATA SITE
// ============================================================

export const defaultSite = {
  nama: 'KRAJAN DIGITAL',
  dusun: 'Dusun Krajan',
  desa: 'Desa Krajan',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  email: '',
  telepon: ''
};


// ============================================================
// DATA BERANDA
// ============================================================

export const defaultBeranda = {
  eyebrow: 'SELAMAT DATANG DI',
  judul1: 'Krajan',
  judul2: 'Digital',
  judul3: '',
  deskripsi:
    'Portal digital Dusun Krajan yang menyediakan informasi, pelayanan, kegiatan, dan berbagai informasi untuk warga.',
  tombol1: 'Informasi Dusun',
  tombol2: 'Template Warga',
  // Pastikan file static/beranda.png ada
  gambar: '/beranda.png'
};


// ============================================================
// DATA BERITA
// ============================================================

export const defaultBerita = [
  {
    id: 1,
    icon: '📰',
    tanggal: '1 September 2026',
    judul: 'Kegiatan Warga Dusun Krajan',
    deskripsi:
      'Informasi terbaru mengenai kegiatan dan perkembangan Dusun Krajan.'
  },

  {
    id: 2,
    icon: '🌱',
    tanggal: '28 Agustus 2026',
    judul: 'Kegiatan Penghijauan',
    deskripsi:
      'Warga bersama-sama melaksanakan kegiatan penghijauan lingkungan dusun.'
  },

  {
    id: 3,
    icon: '🤝',
    tanggal: '20 Agustus 2026',
    judul: 'Gotong Royong Warga',
    deskripsi:
      'Kegiatan gotong royong dilaksanakan untuk menjaga kebersihan lingkungan.'
  }
];


// ============================================================
// DATA PENGUMUMAN
// ============================================================

export const defaultPengumuman = [
  {
    id: 1,
    judul: 'Pengumuman Warga',
    tanggal: '1 September 2026',
    isi:
      'Informasi pengumuman untuk warga Dusun Krajan.'
  }
];


// ============================================================
// DATA KEGIATAN
// ============================================================

export const defaultKegiatan = [
  {
    id: 1,
    judul: 'Gotong Royong Warga',
    tanggal: '20 Agustus 2026',
    gambar: '/kegiatan/gotongroyong.jpeg',
    deskripsi:
      'Kegiatan gotong royong warga Dusun Krajan.'
  },

  {
    id: 2,
    judul: 'Kegiatan Dusun',
    tanggal: '15 Agustus 2026',
    gambar: '/kegiatan/kegiatandusun.jpeg',
    deskripsi:
      'Kegiatan bersama warga Dusun Krajan.'
  },

  {
    id: 3,
    judul: 'Kegiatan Kemerdekaan',
    tanggal: '17 Agustus 2026',
    gambar: '/kegiatan/kegiatankemerdekaan.jpeg',
    deskripsi:
      'Kegiatan peringatan kemerdekaan bersama warga.'
  },

  {
    id: 4,
    judul: 'Kegiatan Pemuda',
    tanggal: '10 Agustus 2026',
    gambar: '/kegiatan/kegiatanpemuda.jpeg',
    deskripsi:
      'Kegiatan kepemudaan Dusun Krajan.'
  },

  {
    id: 5,
    judul: 'Penghijauan',
    tanggal: '5 Agustus 2026',
    gambar: '/kegiatan/penghijauan.jpeg',
    deskripsi:
      'Kegiatan penghijauan lingkungan Dusun Krajan.'
  },

  {
    id: 6,
    judul: 'Rapat Warga',
    tanggal: '1 Agustus 2026',
    gambar: '/kegiatan/rapatwarga.jpeg',
    deskripsi:
      'Rapat dan musyawarah warga Dusun Krajan.'
  }
];


// ============================================================
// DATA TEMPLATE
// ============================================================

export const defaultTemplates = [
  {
    id: 1,
    icon: '📄',
    nama: 'Surat Pengantar',
    deskripsi:
      'Template surat pengantar untuk keperluan warga.'
  },

  {
    id: 2,
    icon: '📝',
    nama: 'Surat Keterangan',
    deskripsi:
      'Template surat keterangan warga.'
  },

  {
    id: 3,
    icon: '📋',
    nama: 'Formulir Warga',
    deskripsi:
      'Berbagai formulir yang dapat digunakan oleh warga.'
  }
];


// ============================================================
// DATA INFORMASI
// ============================================================

export const defaultInformasi = [
  {
    id: 1,
    icon: '🏘️',
    nama: 'Profil Dusun',
    deskripsi:
      'Informasi mengenai Dusun Krajan.',
    link: '/informasi'
  },

  {
    id: 2,
    icon: '👥',
    nama: 'Pemerintahan Dusun',
    deskripsi:
      'Informasi perangkat dan pemerintahan dusun.',
    link: '/informasi'
  },

  {
    id: 3,
    icon: '📍',
    nama: 'Lokasi Dusun',
    deskripsi:
      'Informasi lokasi dan wilayah Dusun Krajan.',
    link: '/informasi'
  },

  {
    id: 4,
    icon: '📞',
    nama: 'Kontak',
    deskripsi:
      'Hubungi pengelola Dusun Krajan.',
    link: '/kontak'
  }
];


// ============================================================
// DATA GALERI
// ============================================================

export const defaultGaleri = [
  {
    id: 1,
    gambar: '/kegiatan/gotongroyong.jpeg',
    judul: 'Gotong Royong'
  },

  {
    id: 2,
    gambar: '/kegiatan/kegiatandusun.jpeg',
    judul: 'Kegiatan Dusun'
  },

  {
    id: 3,
    gambar: '/kegiatan/kegiatankemerdekaan.jpeg',
    judul: 'Kegiatan Kemerdekaan'
  },

  {
    id: 4,
    gambar: '/kegiatan/kegiatanpemuda.jpeg',
    judul: 'Kegiatan Pemuda'
  },

  {
    id: 5,
    gambar: '/kegiatan/penghijauan.jpeg',
    judul: 'Penghijauan'
  },

  {
    id: 6,
    gambar: '/kegiatan/rapatwarga.jpeg',
    judul: 'Rapat Warga'
  }
];


// ============================================================
// DATA KONTAK
// ============================================================

export const defaultKontak = {
  alamat: 'Dusun Krajan',
  telepon: '08XX-XXXX-XXXX',
  email: 'krajan@example.com',
  whatsapp: '08XX-XXXX-XXXX'
};


// ============================================================
// LOWONGAN KERJA
// ============================================================

export const defaultLowongan = [
  {
    id: 1,
    posisi: 'Staff Administrasi',
    perusahaan: 'PT Maju Bersama',
    lokasi: 'Jakarta',
    tipe: 'Full Time',
    deadline: '20 September 2026',
    deskripsi:
      'Mengelola administrasi dan dokumen perusahaan.',
    syarat:
      'Minimal SMA/SMK, mampu menggunakan Microsoft Office.',
    kontak: '08XX-XXXX-XXXX',
    link: ''
  },

  {
    id: 2,
    posisi: 'Operator Produksi',
    perusahaan: 'CV Sejahtera',
    lokasi: 'Bandung',
    tipe: 'Full Time',
    deadline: '25 September 2026',
    deskripsi:
      'Membantu proses produksi dan menjaga kualitas produk.',
    syarat:
      'Minimal SMA/SMK, disiplin, dan bertanggung jawab.',
    kontak: '08XX-XXXX-XXXX',
    link: ''
  },

  {
    id: 3,
    posisi: 'Admin Media Sosial',
    perusahaan: 'UMKM Krajan',
    lokasi: 'Dusun Krajan',
    tipe: 'Part Time',
    deadline: '30 September 2026',
    deskripsi:
      'Mengelola media sosial dan membuat konten promosi UMKM.',
    syarat:
      'Mampu menggunakan media sosial dan aplikasi desain dasar.',
    kontak: '08XX-XXXX-XXXX',
    link: ''
  }
];


// ============================================================
// UMKM
// ============================================================
// Ganti telepon dengan nomor asli (contoh: '081234567890'),
// karena tombol "Hubungi Pemilik" memakai nomor ini untuk WhatsApp.

export const defaultUmkm = [
  {
    id: 1,
    nama: 'Warmindo Krajan',
    kategori: 'Kuliner',
    pemilik: 'Pak Atin',
    alamat: 'Dusun Krajan',
    telepon: '08XX-XXXX-XXXX',
    deskripsi:
      'Menyediakan berbagai makanan rumahan untuk warga.',
    foto: '/umkm/warmindo-krajan.jpg'
  },

  {
    id: 2,
    nama: 'Toko Sembako Krajan',
    kategori: 'Sembako',
    pemilik: 'Pak Ahmad',
    alamat: 'Dusun Krajan',
    telepon: '08XX-XXXX-XXXX',
    deskripsi:
      'Menyediakan kebutuhan sembako dan kebutuhan sehari-hari.',
    // Belum ada fotonya. Kosongkan dulu agar tampil ikon pengganti.
    // Kalau sudah ada: foto: '/umkm/toko-sembako-krajan.jpg'
    foto: ''
  },

  {
    id: 3,
    nama: 'Bengkel Pak Hambali',
    kategori: 'Jasa',
    pemilik: 'Pak Hambali',
    alamat: 'Dusun Krajan',
    telepon: '08XX-XXXX-XXXX',
    deskripsi:
      'Melayani perbaikan dan perawatan kendaraan warga.',
    foto: '/umkm/bengkel-pak-hambali.png'
  },

  {
    id: 4,
    nama: 'Laundry Kak Melani',
    kategori: 'Jasa',
    pemilik: 'Kak Melani',
    alamat: 'Dusun Krajan',
    telepon: '08XX-XXXX-XXXX',
    deskripsi:
      'Melayani cuci dan setrika pakaian untuk warga.',
    foto: '/umkm/laundry-kak-melani.png'
  }
];


// ============================================================
// STATISTIK
// ============================================================

export const defaultStatistik = {
  totalKunjungan: 0,
  kunjunganProfil: 0
};


// ============================================================
// GET DATA
// ============================================================
// Mengembalikan SALINAN dari defaultData, supaya objek default
// tidak ikut berubah saat data diubah (misalnya statistik).

function salin(data) {
  return JSON.parse(JSON.stringify(data));
}

export function getData(key, defaultData) {
  if (typeof localStorage === 'undefined') {
    return salin(defaultData);
  }

  try {
    const data = localStorage.getItem(key);

    if (!data) {
      return salin(defaultData);
    }

    const hasil = JSON.parse(data);

    // Kalau bentuk data tersimpan tidak sama dengan default
    // (misalnya default array tapi tersimpan bukan array), pakai default.
    if (Array.isArray(defaultData) !== Array.isArray(hasil)) {
      return salin(defaultData);
    }

    return hasil;
  } catch (error) {
    console.error(`Gagal membaca data ${key}:`, error);

    return salin(defaultData);
  }
}


// ============================================================
// SAVE DATA
// ============================================================
// Mengembalikan true kalau berhasil, false kalau gagal
// (misalnya penyimpanan penuh karena foto base64 terlalu besar).

export function saveData(key, data) {
  if (typeof localStorage === 'undefined') {
    return false;
  }

  try {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    );

    return true;
  } catch (error) {
    console.error(`Gagal menyimpan data ${key}:`, error);

    return false;
  }
}


// ============================================================
// REMOVE DATA
// ============================================================

export function removeData(key) {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage.removeItem(key);
}


// ============================================================
// TAMBAH KUNJUNGAN WEBSITE
// ============================================================

export function tambahKunjungan() {
  const statistik = getData(
    'krajan_statistik',
    defaultStatistik
  );

  statistik.totalKunjungan =
    Number(statistik.totalKunjungan || 0) + 1;

  saveData(
    'krajan_statistik',
    statistik
  );

  return statistik;
}


// ============================================================
// TAMBAH KUNJUNGAN PROFIL
// ============================================================

export function tambahKunjunganProfil() {
  const statistik = getData(
    'krajan_statistik',
    defaultStatistik
  );

  statistik.kunjunganProfil =
    Number(statistik.kunjunganProfil || 0) + 1;

  saveData(
    'krajan_statistik',
    statistik
  );

  return statistik;
}


// ============================================================
// RESET STATISTIK
// ============================================================

export function resetStatistik() {
  const baru = salin(defaultStatistik);

  saveData(
    'krajan_statistik',
    baru
  );

  return baru;
}