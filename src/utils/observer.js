// Function Observer
const loadPlayer = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log(entry)
			const target = entry.target
			identifyEntry(entry, 'audio').play()
			identifyEntry(entry, 'video').play()
			target.querySelector('audio').addEventListener('ended', function () {
				const wrapper = document.querySelector('josttme-music-container').shadowRoot.children[0]
				let autoScroll = window.innerHeight / 2 + 100

				wrapper.scrollTo({
					top: wrapper.scrollTop + autoScroll,
					behavior: 'smooth',
				})
			})
		} else {
			identifyEntry(entry, 'audio').pause()
			identifyEntry(entry, 'video').pause()
			identifyEntry(entry, 'audio').currentTime = 0
			identifyEntry(entry, 'video').currentTime = 0
		}
	})
}

const optionsPlayer = {
	root: null,
	rootMargin: '500px 0px 500px 0px ',
	threshold: 0.5,
}

function identifyEntry(entry, identify) {
	return entry.target.querySelector(identify)
}
// Create instance of observer
const observerPlayer = new IntersectionObserver(loadPlayer, optionsPlayer)

// Register Observer
export function registerPlayer(target) {
	document.querySelector('body').addEventListener('click', () => {
		observerPlayer.observe(target)
	})
}
