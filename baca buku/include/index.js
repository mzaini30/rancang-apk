var olah_data = () => {
  var isi_semua = ""
  var data_semua = []
  database.data.reverse().each(x => {
    data_semua.push({
      bulan: `${x.bulan_tahun}`,
      tahun: `${x.tahun}`,
      genre: `${x.genre}`,
      banyak: `${x.halaman}`
    })
    
    isi_semua += `
      <tr>
        <td>
          <strong>${x.judul}</strong><br>
          <em>${x.penulis}</em>
        </td>
        <td>${x.tanggal_bulan_tahun}</td>
        <td>${Number(x.halaman).toLocaleString("id")}</td>
        <td>
          <div data-id=${x.id} class="hapus btn btn-danger">&times;</div>
        </td>
      </tr>`
  }).then(() => {
    var data_tahun = []
    var tahun_tertinggi = 0
    var semua_tahun = JSON.parse(localStorage.tahun)
    for (var x of semua_tahun){
      var banyak = 0
      for (var y of data_semua){
        y.tahun == x ? banyak += Number(y.banyak) : ""
      }
      data_tahun.push({
        tahun: `${x}`,
        banyak: `${banyak}`
      })
    }
    for (var z of data_tahun){
      Number(z.banyak) > tahun_tertinggi ? tahun_tertinggi = z.banyak : ""
    }
    var isi_tahun = ""
    data_tahun.reverse()
    for (var q of data_tahun){
      isi_tahun += `
        <tr>
          <td>${q.tahun}</td>
          <td>${Number(q.banyak).toLocaleString("id")}</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-bar-default" style="width: ${100 * Number(q.banyak) / tahun_tertinggi}%"></div>
            </div>
          </td>
        </tr>`
    }
    $(".isi-tahun").html(isi_tahun)
    
    var data_bulan = []
    var bulan_tertinggi = 0
    var semua_bulan = JSON.parse(localStorage.bulan)
    for (var x of semua_bulan){
      var banyak = 0
      for (var y of data_semua){
        y.bulan == x ? banyak += Number(y.banyak) : ""
      }
      data_bulan.push({
        bulan: `${x}`,
        banyak: `${banyak}`
      })
    }
    for (var z of data_bulan){
      Number(z.banyak) > bulan_tertinggi ? bulan_tertinggi = z.banyak : ""
    }
    var isi_bulan = ""
    data_bulan.reverse()
    for (var q of data_bulan){
      isi_bulan += `
        <tr>
          <td>${q.bulan}</td>
          <td>${Number(q.banyak).toLocaleString("id")}</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-bar-default" style="width: ${100 * Number(q.banyak) / bulan_tertinggi}%"></div>
            </div>
          </td>
        </tr>`
    }
    $(".isi-bulan").html(isi_bulan)
    
    var data_genre = []
    var genre_tertinggi = 0
    var semua_genre = JSON.parse(localStorage.genre).sort()
    for (var x of semua_genre){
      var banyak = 0
      for (var y of data_semua){
        y.genre == x ? banyak += Number(y.banyak) : ""
      }
      data_genre.push({
        genre: `${x}`,
        banyak: `${banyak}`
      })
    }
    for (var z of data_genre){
      Number(z.banyak) > genre_tertinggi ? genre_tertinggi = z.banyak : ""
    }
    var isi_genre = ""
    for (var q of data_genre){
      isi_genre += `
        <tr>
          <td>${q.genre}</td>
          <td>${Number(q.banyak).toLocaleString("id")}</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-bar-default" style="width: ${100 * Number(q.banyak) / genre_tertinggi}%"></div>
            </div>
          </td>
        </tr>`
    }
    $(".isi-genre").html(isi_genre)
    
    $(".isi-semua").html(isi_semua)
    
    $("td").filter(function(){
      return $(this).html() == "0"
    }).parent().addClass("sembunyi")
  })
  
  $(document).on("click", ".hapus", function(){
    localStorage.setItem("id", $(this).data("id"))
    location.href = "hapus.html"
  })
}
olah_data()