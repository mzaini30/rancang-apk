pug_playground = new Dexie('database pug playground')
pug_playground.version(1).stores({
	data: '++id, judul, pug, stylus, jquery'
})