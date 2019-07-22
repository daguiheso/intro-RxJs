const myObservable = rxjs.of('Hello World', ['Date 1', 123], 23, 1994, { fav: 'start_selected'})

myObservable.pipe(rxjs.operators.first())
	.subscribe(
		v => { console.log('One: ', v) },
		e => { console.log(e) },
		() => { console.log('complete') }
);

myObservable.pipe(rxjs.operators.last())
	.subscribe(
		v => { console.log('Last: ', v) },
		e => { console.log(e) },
		() => { console.log('complete') }
	);