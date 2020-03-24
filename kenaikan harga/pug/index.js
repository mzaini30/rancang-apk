var cari_total = () => {
  var totalnya = 0
  $(".data-akhir").each(function(){
    totalnya += Number($(this).html())
  })
  $(".total").html(totalnya.toLocaleString("id"))
}

$(".tambah").click(() => {
  $(".data").append(`
    <tr>
      <td>
        <input class="form-control awal" type="tel">
      </td>
      <td class="sembunyi">
        <div class="data-akhir">0</div>
      </td>
      <td>
        <span class="akhir">0</span>
      </td>
      <td>
        <div class="btn btn-danger hapus">&times;</div>
      </td>
    </tr>
  `)
})

$(document).on("click", ".hapus", function(){
  $(this).parent().parent().remove()
  cari_total()
})

$(document).on("keyup", ".form-control", function(){
  var persenan = 1 + Number($(".persenan").val()) * 0.01
  $(".awal").each(function(){
    var nilai = Number($(this).val()) * persenan
    $(this).parent().parent().find(".akhir").html(nilai.toLocaleString("id"))
    $(this).parent().parent().find(".data-akhir").html(nilai)
  })
  cari_total()
})