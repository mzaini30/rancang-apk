// new VConsole()

var sekarang = new Date()
var tanggal = sekarang.getDate()
var tahun = sekarang.getFullYear()
var bulan = sekarang.getMonth()

var list_bulan = [
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

var bulan_tahun = `${list_bulan[bulan]} ${tahun}`
var tanggal_bulan_tahun = `${tanggal} ${list_bulan[bulan]} ${tahun}`

var database = new Dexie("database baca buku")
database.version(1).stores({
  data: "++id, judul, penulis, halaman, genre, tahun, bulan_tahun, tanggal_bulan_tahun"
})

!localStorage.bulan ? localStorage.setItem("bulan", "[]") : ""
!localStorage.tahun ? localStorage.setItem("tahun", "[]") : ""
!localStorage.genre ? localStorage.setItem("genre", "[]") : ""

$(".navbar-nav a").click(() => $(".navbar-toggle").click())