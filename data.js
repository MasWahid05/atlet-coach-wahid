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
    lahir: 2012,                       // hanya tahun yang ditampilkan (atlet di bawah umur)
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
  }
];
