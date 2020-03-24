$(".form-control").on("keyup", () => {
  var total = (Number($(".kilo").val()) * Number($(".harga").val()) * 1000).toLocaleString("id")
  $(".total").val(total)
})