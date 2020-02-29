termux = new Dexie("database termux path")
termux.version(1).stores({
  data: "++id, judul, perintah"
})