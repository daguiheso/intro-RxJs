const promise = new Promise((resolve, reject) => {
	fetch('https://api-mi-liga.now.sh/api/jugadores')
		.then(data => data.json())
		.then(players => {
			resolve(players)
		})
		.catch(error => {
			reject(error)
		})
})

const myObservable = rxjs.from(promise)
	.pipe(
		rxjs.operators.filter(players => {
			return players.length >= 10
		})
	)
	.subscribe(
		result => console.log('despues: ', result),
		error => {
			console.log('ERROR: ')
			throw error
		},
		() => console.log('Terminado')
	)