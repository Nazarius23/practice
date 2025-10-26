// 'use strict'
// let documentAction = e => {
// 	const targetElement = e.target
// 	if (targetElement.closest('.icon-menu')) {
// 		document.documentElement.classList.toggle('open-menu')
// 	}
// }
// document.addEventListener('click', documentAction)

'use strict'
let documentAction = e => {
	const targetElement = e.target
	if (targetElement.closest('.phone-contact__list')) {
		document.documentElement.classList.toggle('open-list')
	}
}
document.addEventListener('click', documentAction)
