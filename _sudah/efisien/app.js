db_efektif = new Dexie("database efisien")
db_efektif.version(1).stores({
  data: "++id, quest, waktu_mulai, waktu_selesai"
})

olah_selisih = (sekarang, sebelumnya) => {
  n = sekarang - sebelumnya
  detik = Math.round(n / 1000)
  menit = Math.round(detik / 60)
  jam = Math.round(menit / 60)
  hari = Math.round(jam / 24)
  minggu = Math.round(hari / 7)
  bulan = Math.round(minggu / 4)
  tahun = Math.round(bulan / 12)
  if (detik < 60){
    return `${detik} detik`
  } else if (menit < 60){
    return `${menit} menit`
  } else if (jam < 24){
    return `${jam} jam`
  } else if (hari < 7){
    return `${hari} hari`
  } else if (minggu < 4){
    return `${minggu} minggu`
  } else if (bulan < 12){
    return `${bulan} bulan`
  } else {
    return `${tahun} tahun`
  }
}

olah_data = () => {
  isinya = ""
  isi_selesai = ""
  db_efektif.data.reverse().each(x => {
    if (x.waktu_selesai == false){
      isinya += `
        <tr>
          <td><div class="btn btn-danger efektif-hapus" data-hapus="${x.id}">&times;</div></td>
          <td>
            ${x.quest}<br>
            <small>(<span class="waktu-${x.id}">${moment(x.waktu_mulai).locale("id").fromNow()}</span>)</small>
          </td>
          <td><div class="btn btn-success yes-selesai" data-selesai="${x.id}">Selesai</div></td>
        </tr>`
      setInterval(() => $(`.waktu-${x.id}`).html(moment(x.waktu_mulai).locale("id").fromNow()), 1000)
    }
  }).then(() => {
    $(".isi-quest").html(isinya)
  })
  db_efektif.data.orderBy("waktu_selesai").reverse().each(x => {
    if (x.waktu_selesai != false){
      isi_selesai += `
        <tr>
          <td>${x.quest}</td>
          <td>${olah_selisih(x.waktu_selesai, x.waktu_mulai)}</td>
        </tr>`
    }
  }).then(() => {
    $(".quest-selesai").html(isi_selesai)
  })
}
olah_data()

$(".mulai").click(() => {
  if ($(".questnya").val() == ""){
    $(".pesan").html(`
      <div class="alert alert-warning alert-dismissible">
        <div class="close" data-dismiss="alert">&times;</div>
        Apa questnya?
      </div>`)
  } else {
    db_efektif.data.add({
      quest: $(".questnya").val(),
      waktu_mulai: new Date(),
      waktu_selesai: false
    }).then(() => {
      $(".tombol-beranda").click()
      $(".questnya").val("")
      olah_data()
    })
  }
})

$(".tombol-selesai").click(() => olah_data())

$(document).on("click", ".yes-selesai", function(){
  db_efektif.data.where({
    id: Number($(this).data("selesai"))
  }).modify({
    waktu_selesai: new Date()
  }).then(() => {
    $(".tombol-selesai").click()
  })
})

$(document).on("click", ".efektif-hapus", function(){
  db_efektif.data.where({
    id: Number($(this).data("hapus"))
  }).delete().then(() => {
    olah_data()
  })
})