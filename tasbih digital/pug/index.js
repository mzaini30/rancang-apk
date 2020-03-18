var tinggi = () => $(".canvas").height($(window).height() - 100)
tinggi()
$(window).resize(() => tinggi())

!localStorage.tasbih ? localStorage.setItem("tasbih", "0") : 0

var ubah_angka = () => $(".angka").html(localStorage.tasbih)
ubah_angka()
$(".canvas").click(() => {
  var angkanya = Number(localStorage.tasbih)
  var tambah = angkanya + 1
  localStorage.setItem("tasbih", tambah)
  ubah_angka()
})