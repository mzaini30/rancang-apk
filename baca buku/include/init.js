// new VConsole()

var database

database = new Dexie("database baca buku")
database.version(1).stores({
  data: "++id, judul, tanggal_bulan_tahun, bulan_tahun, tahun"
})

var sekarang, tanggal, bulan, tahun, list_bulan

sekarang = new Date()
tanggal = sekarang.getDate()
bulan = sekarang.getMonth()
tahun = sekarang.getFullYear()

list_bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
]

$(".navbar-nav a").click(() => $(".navbar-toggle").click())