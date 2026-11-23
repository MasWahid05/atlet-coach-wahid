// ============================================================
//  DATA ATLET BINAAN — Coach Syaifudin Wahid, M.Pd
//  Tambah atlet baru: salin satu blok { ... }, ubah isinya,
//  simpan fotonya di folder atlet/foto/ (potret tegak).
//  Waktu ditulis dalam DETIK agar bisa dihitung (5:30 = 330).
// ============================================================
window.ATLET = [
  {
    id: 'afika',
    nama: 'Afika Febriana Edwar',
    panggilan: 'Afika',
    gender: 'Putri',
    lahir: 2012, bulanLahir: 2,        // hanya usia yang ditampilkan (atlet di bawah umur)
    kota: 'Kota Tangerang, Banten',
    sekolah: 'SMPN 32 Kota Tangerang',
    klub: 'SuperNova Atletik',
    sejak: 2024,
    foto: 'foto/afika.jpg',
    nomor: ['800m', '1500m'],
    kategori: 'Middle Distance',
    pb: [
      { nomor: '1500m', detik: 330, tampil: '5:30', event: 'POPDA XII Banten', tempat: 'Cilegon', tahun: 2026 },
      { nomor: '800m', detik: 169.05, tampil: '2:49.05', event: 'SAC Banten', tempat: 'Kota Tangerang', tahun: 2024 }
    ],
    prestasi: [
      { tahun: 2026, event: 'POPDA XII Banten', nomor: '1500m', hasil: 'Juara 3', medali: 'bronze' },
      { tahun: 2026, event: 'POPDA XII Banten', nomor: 'Estafet 4×400m', hasil: 'Juara 3', medali: 'bronze' },
      { tahun: 2024, event: 'SAC', nomor: '800m', hasil: 'Juara 2', medali: 'silver' },
      { tahun: 2024, event: 'Open Kejuaraan Bintar', nomor: '1000m', hasil: 'Juara 2', medali: 'silver' }
    ],
    target: {
      event: 'Benteng Spirit Run 2026',
      waktu: [
        { nomor: '1500m', dari: 330, ke: 300, tampil: '5:00' },
        { nomor: '800m', dari: 169.05, ke: 140, tampil: '2:20' }
      ]
    },
    motto: 'Keringat di latihan hari ini adalah medali di lomba nanti.',
    idola: 'Robi Syianturi',
    instagram: 'afikaedwar',
    tiktok: 'afikaedwar'
  },
  {
    id: 'aydin',
    nama: 'Aydin Khalfani Achmad',
    panggilan: 'Aydin',
    gender: 'Putra',
    lahir: 2009, bulanLahir: 12,
    kota: 'Kota Tangerang, Banten',
    sekolah: 'MAN 2 Kota Tangerang',
    klub: 'SuperNova Atletik',
    sejak: 2026,
    foto: 'foto/aydin.jpg',
    nomor: ['800m', '3000m', '5K', '10K'],
    kategori: 'Long Distance',
    pb: [
      { nomor: '5K', detik: 1190, tampil: '19:50', event: 'KNPI Run', tempat: 'Kota Tangerang', tahun: 2026 }
    ],
    prestasi: [
      { tahun: 2026, event: 'KNPI Run', nomor: '5K', hasil: 'Juara 1 · Kategori Potential', medali: 'gold' }
    ],
    target: {
      event: 'Season 2027',
      waktu: [
        { nomor: '5K', dari: 1190, ke: 1050, tampil: 'sub 17:30' },
        { nomor: '800m', ke: 120, tampil: 'sub 2:00' }
      ]
    },
    motto: 'Pelari yang hebat tidak lahir dalam satu malam.',
    idola: 'Jakob Ingebrigtsen',
    instagram: 'aydnn_2unty',
    tiktok: 'aydnn_2unty'
  },
  {
    id: 'syakira',
    nama: 'Syakira Talita Widiastuti',
    panggilan: 'Syakira',
    gender: 'Putri',
    lahir: 2010, bulanLahir: 12,
    kota: 'Kota Tangerang, Banten',
    sekolah: 'SuperNova Atletik',
    klub: 'SuperNova Atletik',
    sejak: 2019,
    foto: 'foto/syakira.jpg',
    nomor: ['1500m', '3000m', '5K'],
    kategori: 'Long Distance',
    pb: [
      { nomor: '5K', detik: 1367, tampil: '22:47', event: 'Seleksi Duathlon Jakarta', tempat: 'Jakarta', tahun: 2025 }
    ],
    prestasi: [
      { tahun: 2025, event: 'SAC', nomor: '1500m', hasil: 'Juara 3', medali: 'bronze' },
      { tahun: 2025, event: 'POPKOT Kota Tangerang', nomor: '3000m', hasil: 'Juara 1', medali: 'gold' },
      { tahun: 2025, event: 'POPKOT Kota Tangerang', nomor: '1500m', hasil: 'Juara 2', medali: 'silver' }
    ],
    target: {
      event: 'Season 2027',
      waktu: [
        { nomor: '5K', dari: 1367, ke: 1350, tampil: '22:30' }
      ]
    },
    motto: 'Lari bukan tentang mengalahkan orang lain, tapi mengalahkan rasa malas di diri sendiri.',
    idola: 'Robi Syianturi',
    instagram: 'sya_kira._',
    tiktok: 'kira_ajar'
  },
  {
    id: 'idham',
    nama: 'M. Idham Cahyadi',
    panggilan: 'Idham',
    gender: 'Putra',
    lahir: 2010, bulanLahir: 11,
    kota: 'Tangerang, Banten',
    sekolah: 'SuperNova Atletik',
    klub: 'SuperNova Atletik',
    sejak: 2025,
    foto: 'foto/idham.jpg',
    nomor: ['1500m', '3000m', '5K'],
    kategori: 'Long Distance',
    pb: [
      { nomor: '1500m', detik: 280, tampil: '4:40', event: 'Porprov Banten', tempat: 'Banten', tahun: 2026 },
      { nomor: '5K', detik: 1116, tampil: '18:36', event: 'Time Trial', tempat: 'Stadion Benteng', tahun: 2026 },
      { nomor: '3000m', detik: 645, tampil: '10:45', event: 'Time Trial', tempat: 'Stadion Benteng', tahun: 2026 }
    ],
    prestasi: [
      { tahun: 2025, event: 'HUT Bintar', nomor: '800m', hasil: 'Juara 1', medali: 'gold' },
      { tahun: 2025, event: 'Gemilang Fun Run 5K', nomor: '5K', hasil: 'Juara 3 · Kategori SMP Putra', medali: 'bronze' },
      { tahun: 2025, event: 'PORKAB', nomor: 'Estafet 4×400m', hasil: 'Juara 2', medali: 'silver' }
    ],
    target: {
      event: 'KEJURDA',
      waktu: [
        { nomor: '1500m', dari: 280, ke: 260, tampil: '4:20' },
        { nomor: '5K', dari: 1116, ke: 1010, tampil: '16:50' }
      ]
    },
    motto: 'Setiap rintangan adalah kesempatan untuk tumbuh dan belajar.',
    idola: 'Andreas Almgren & Josh Kerr',
    instagram: 'm.idhamcahyadi',
    tiktok: 'm.idham.c_ig'
  }
];
