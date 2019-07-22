const observableCountries = rxjs.of('Peru', 'Colombia', 'Venezuela')
const observableFoods = rxjs.of('Ceviche', 'Arepa', 'Tacos')

const myObservable = rxjs.zip(observableCountries, observableFoods)


myObservable
	.subscribe(data => console.log(data))