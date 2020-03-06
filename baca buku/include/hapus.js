$(".hapus-aja").click(() => {
  database.data.where({
    id: Number(localStorage.id)
  }).delete().then(() => location.href = "index.html")
})