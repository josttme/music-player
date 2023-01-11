let isInteracted = false

document.querySelector('body').addEventListener('click', () => {
	isInteracted = true
})
const useScroll = (entries, observer) => {
	entries.forEach((entry) => {
		const video = entry.target.querySelector('video')
		const audio = entry.target.querySelector('audio')
		if (entry.isIntersecting && isInteracted) {
			// Item player is visibility
			video.play()
			audio.play()
		} else {
			// Item player is not visibility
			video.pause()
			audio.pause()
			audio.currentTime = 0
			video.currentTime = 0
		}
	})
}

// Function Observer
const loadPlayer = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const video = entry.target.querySelector('video')
			const audio = entry.target.querySelector('audio')
			video.poster === '' ? (video.poster = video.dataset.poster) : ''
			audio.src === '' ? (audio.src = audio.dataset.src) : ''
			video.src === '' ? (video.src = video.dataset.src) : ''

			// Skips to the next music at the end
			audio.addEventListener('ended', function () {
				const wrapper = document.querySelector('josttme-music-container').shadowRoot.children[0]
				// Scroll to do
				let autoScroll = window.innerHeight / 2 + 100

				wrapper.scrollTo({
					top: wrapper.scrollTop + autoScroll,
					behavior: 'smooth',
				})
			})
			observer.unobserve(entry.target)
		}
	})
}

const optionsPlayer = {
	root: null,
	rootMargin: '100px 0px 1000px 0px',
	threshold: 0,
}
const optionsScroll = {
	root: null,
	rootMargin: '0px 0px 0px 0px ',
	threshold: 0.5,
}

// Create instance of observer
const observerPlayer = new IntersectionObserver(loadPlayer, optionsPlayer)
const observerScroll = new IntersectionObserver(useScroll, optionsScroll)

// Register Observer
export function registerPlayer(target) {
	observerPlayer.observe(target)
	observerScroll.observe(target)
}
