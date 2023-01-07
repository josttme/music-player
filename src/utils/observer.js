// Function Observer
const loadPlayer = (entries, observer) => {
	entries
		.filter((entry) => entry.isIntersecting)
		.forEach((entry) => {
			const video = entry.target.querySelector('video')
			const audio = entry.target.querySelector('audio')
			audio.src = audio.dataset.src
			video.src = video.dataset.src
			video.poster = video.dataset.poster

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
		})
}

const optionsPlayer = {
	root: null,
	rootMargin: '1000px 0px 2000px 0px ',
	threshold: 0.0,
}

// Create instance of observer
const observerPlayer = new IntersectionObserver(loadPlayer, optionsPlayer)

// Register Observer
export function registerPlayer(target) {
	observerPlayer.observe(target)
}
