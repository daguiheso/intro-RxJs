const myObservable = rxjs.fromEvent(document, 'mousemove')
const notify = rxjs.timer(400)

myObservable
	.pipe(
		rxjs.operators.takeUntil(notify),
		rxjs.operators.finalize(() => console.log('fin'))
	)
	.subscribe(
		data => console.log(data),
		() => {

		},
		() => console.log('termino')
	)

