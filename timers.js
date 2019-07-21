const buttonClick = document.querySelector('button')

buttonClick.disabled = true

const timer = rxjs.timer(4000)

timer.subscribe(
	() => {
		buttonClick.disabled = false
	},
	e => { console.log(e) },
	() => { console.log('complete') }
)

/* const interval = rxjs.interval(2000)

interval.subscribe(
	() => {
		buttonClick.disabled = !buttonClick.disabled
	},
	e => { console.log(e) },
	() => { console.log('complete') }
) */