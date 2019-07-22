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
		rxjs.operators.map(players => {
			console.log('antes: ', players)
			let state = players.every(player => player.edad >= 30)
			players = players.filter(player => player.edad >= 30)
			return {
				state,
				players
			}
		})
	)
	.subscribe(
		result => {
			console.log('despues: ', result)
			if (result.state)
				console.log('OK Team')
			else
				console.log('Sorry Team')

		},
		error => {
			console.log('ERROR: ')
			throw error
		}
	)