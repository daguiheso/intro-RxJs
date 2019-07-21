// FromEvent Click
let counter = 0;
const clicks = rxjs.fromEvent(document, 'click')
.subscribe(
	v => {
		console.log(counter)
		counter++
	},
	e => { console.log(e) },
	() => { console.log('complete') }
);

// FromEvent Button
const button = document.querySelector('button')
rxjs.fromEvent(button,'click')
.subscribe(
	v => {
		const myObservable = rxjs.Observable.create(subscriber => {
			subscriber.next('Hello');
			subscriber.next('World');
			// subscriber.complete();
		})
			.subscribe(
				v => { console.log('Observable value: ', v) },
				e => { console.log(e) },
				() => { console.log('complete') }
			);
	},
	e => { console.log(e) },
	() => { console.log('complete') }
);


