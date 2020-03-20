$(".reset").click(() => {
  localStorage.removeItem("tasbih")
  location.href = "index.html"
})