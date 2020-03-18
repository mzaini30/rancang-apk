// main tanggal

tanggalan = new Date()
tanggal = tanggalan.getDate()
bulan = tanggalan.getMonth()
tahun = tanggalan.getFullYear()

nama_bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

// main database

ubudiyyah = new Dexie('database ubudiyyah')
ubudiyyah.version(1).stores({
	data: '++id, tepat_waktu_subuh, tepat_waktu_dzuhur, tepat_waktu_ashar, tepat_waktu_maghrib, tepat_waktu_isya, berjamaah_pertama, berjamaah_kedua, berjamaah_ketiga, rawatib_pertama, rawatib_kedua, rawatib_ketiga, nafilah, tanggal, bulan'
})