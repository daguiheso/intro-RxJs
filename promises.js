const promise = new Promise((resolve, reject) => {
	fetch('http://httpstat.us/500')
		.then(data => data.json())
		.then(players => {
			resolve(players)
		})
		.catch(error => {
			reject(error)
		})
})

const myObservable = rxjs.from(promise)
	.subscribe(
		result => {
			console.log('result: ', result)
		},
		error => {
			console.log('ERROR: ')
			throw error
		}
	)