/*====================================================================================*/
/*====================================================================================*/

/* Меню бургер========================================================================*/

'use strict'
let documentAction = e => {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}
document.addEventListener('click', documentAction)

/*====================================================================================*/
/*====================================================================================*/

/* Появлення БГ в ховера при пертені якогось контейнера================================*/

// document.addEventListener('DOMContentLoaded', () => {
// 	const header = document.querySelector('.header')
// 	if (!header) return

// 	window.addEventListener('scroll', () => {
// 		if (window.scrollY > window.innerHeight) {
// 			header.classList.add('header--bg')
// 		} else {
// 			header.classList.remove('header--bg')
// 		}
// 	})
// })
