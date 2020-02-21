$(".teks").on("keyup", function(){
  teks = $(this).val()
  teks == "" ? $(".isi").hide() : $(".isi").show()
  ubah_a = teks.replace(/[aiuoe]/g, "a").replace(/[AIUEO]/g, "A")
  ubah_i = teks.replace(/[iauoe]/g, "i").replace(/[AIUEO]/g, "I")
  ubah_u = teks.replace(/[aiuoe]/g, "u").replace(/[AIUEO]/g, "U")
  ubah_e = teks.replace(/[aiuoe]/g, "e").replace(/[AIUEO]/g, "E")
  ubah_o = teks.replace(/[aiuoe]/g, "o").replace(/[AIUEO]/g, "O")
  balik_teks = teks.split("").reverse().join("")
  besar_semua = teks.toUpperCase()
  kecil_semua = teks.toLowerCase()
  
  pisah_kata = teks.split(" ")
  pisah_kata = pisah_kata.map(x => x.split("").reverse().join(""))
  balik_kata = pisah_kata.join(" ")
  $(".isi").html(`
    <label>Serba A</label>
    <p>${ubah_a}</p>
    <label>Serba I</label>
    <p>${ubah_i}</p>
    <label>Serba U</label>
    <p>${ubah_u}</p>
    <label>Serba E</label>
    <p>${ubah_e}</p>
    <label>Serba O</label>
    <p>${ubah_o}</p>
    <label>Balik Teks</label>
    <p>${balik_teks}</p>
    <label>Balik per Kata</label>
    <p>${balik_kata}</p>
    <label>Besar Semua</label>
    <p>${besar_semua}</p>
    <label>Kecil Semua</label>
    <p>${kecil_semua}</p>`)
})