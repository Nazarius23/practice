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
;('use strict')

let toggleFaq = e => {
	const item = e.target.closest('.drop-list-faqs__item')
	if (!item) return

	const text = item.querySelector('.drop-list-faqs__text')

	if (item.classList.contains('open')) {
		text.style.height = text.scrollHeight + 'px'
		requestAnimationFrame(() => {
			text.style.height = '0'
			item.classList.remove('open')
		})
	} else {
		item.classList.add('open')
		text.style.height = text.scrollHeight + 'px'
		text.addEventListener(
			'transitionend',
			() => {
				text.style.height = 'auto'
			},
			{ once: true }
		)
	}
}

document.addEventListener('click', toggleFaq)

/*====================================================================================*/
/*====================================================================================*/

/* Появлення БГ в ховера при пертені якогось контейнера================================*/

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	if (!header) return

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			header.classList.add('header--bg')
		} else {
			header.classList.remove('header--bg')
		}
	})
})
/*========================================================*/
const animBlocks = document.querySelectorAll('.anim-left, .anim-right, .anim-bottom')

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		}
	})
})

animBlocks.forEach(block => observer.observe(block))
