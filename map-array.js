const numbers = rxjs.from([10, 100, 1000]);

numbers
	.pipe(rxjs.operators.map(num => {
		console.log('Antes: ', num)
		return num + 5
	}))
	.subscribe(data => console.log('Despues: ', data))
