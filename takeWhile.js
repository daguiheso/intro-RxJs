const myObservable = rxjs.of('Hello World', ['Date 1', 123], 23, 1994, true, { fav: 'start_selected' })

myObservable
	.pipe(
		rxjs.operators.takeWhile(value => {
			if (value !== 23) {
				console.log('Value', value)
				return value
			}
		}),
		rxjs.operators.finalize(() => console.log('OK'))
	)
	.subscribe(data => console.log(data))
