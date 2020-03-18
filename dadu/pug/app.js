var buat_tengah = () => $(".canvas").height($(window).height())
buat_tengah()
$(window).resize(() => buat_tengah())
var angka = [1, 2, 3, 4, 5, 6]
var olah_angka = () => {
  var angkanya = angka[Math.floor(Math.random() * angka.length)]
  var ukurannya = angka[Math.floor(Math.random() * angka.length)]
  $(".angka").html(`<h${ukurannya}>${angkanya}</h${ukurannya}>`)
}
olah_angka()
$(".canvas").click(() => olah_angka())
$(".navbar-nav a").click(() => $(".navbar-toggle").click())