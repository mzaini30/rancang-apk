$(".ke-tambah").click(() => $(".submit-tambah").click())

/*
 database.version(1).stores({
  data: "++id, judul, penulis, halaman, genre, tahun, bulan_tahun, tanggal_bulan_tahun"
})
*/

var list_genre = JSON.parse(localStorage.genre).sort()
var pilihan_genre = ""
for (var x of list_genre){
  pilihan_genre += `
    <div class="pilihan-genre-item btn btn-default">${x}</div>`
}
$(".pilihan-genre").html(pilihan_genre)

$(document).on("click", ".pilihan-genre-item", function(){
  $(".genre").val($(this).html())
})

$(".form-tambah").on("submit", x => {
  x.preventDefault()
  var data_judul = $(".judul").val()
  var data_penulis = $(".penulis").val()
  var data_halaman = $(".halaman").val()
  var data_genre = $(".genre").val()
  
  var ambil_bulan = JSON.parse(localStorage.bulan)
  var ambil_tahun = JSON.parse(localStorage.tahun)
  var ambil_genre = JSON.parse(localStorage.genre)
  
  if ($.inArray(bulan_tahun, ambil_bulan) == -1){
    ambil_bulan.push(bulan_tahun)
    localStorage.setItem("bulan", JSON.stringify(ambil_bulan))
  }
  if ($.inArray(tahun, ambil_tahun) == -1){
    ambil_tahun.push(tahun)
    localStorage.setItem("tahun", JSON.stringify(ambil_tahun))
  }
  if ($.inArray(data_genre, ambil_genre) == -1){
    ambil_genre.push(data_genre)
    localStorage.setItem("genre", JSON.stringify(ambil_genre))
  }
  
  database.data.add({
    judul: data_judul,
    penulis: data_penulis,
    halaman: data_halaman,
    genre: data_genre,
    tahun: tahun,
    bulan_tahun: bulan_tahun,
    tanggal_bulan_tahun: tanggal_bulan_tahun
  }).then(() => location.href = "index.html")
})