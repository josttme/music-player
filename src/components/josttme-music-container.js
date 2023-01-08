import { LitElement, html, css } from 'lit'
import { songs } from '../api/baseApi'

export class JosttmeMusicContainer extends LitElement {
	static properties = {
		title: {},
		artista: {},
		audio_src: {},
		cover_image: {},
	}
	constructor() {
		super()
		this.isPlaying = false
		this.title
		this.artista
		this.audio_src
	}

	static styles = [
		css`
			:host {
				display: block;
				overflow: hidden;
			}
			div {
				overflow-y: auto;
				scroll-snap-type: y mandatory;
				scroll-behavior: smooth;
				scrollbar-width: none;
			}
			div::-webkit-scrollbar {
				display: none;
			}
			:host,
			div {
				width: 100%;
				height: 100%;
			}
		`,
	]

	firstUpdated() {
		const songsList = this.songsList()
		const wrapper = this.renderRoot?.querySelector('div') ?? null
		wrapper.insertAdjacentHTML('beforeend', songsList.join(' '))
		let isInteracted = false
		// Define una función para comprobar si un elemento está visible

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			)
		}
		wrapper.addEventListener('scroll', function () {
			// Recorre todos los elementos <video>
			if (isInteracted) {
				wrapper.querySelectorAll('josttme-music-player').forEach((musicPlayer) => {
					const video = musicPlayer.shadowRoot.querySelector('video')
					const audio = musicPlayer.shadowRoot.querySelector('audio')
					if (isElementInViewport(musicPlayer)) {
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
		})
		document.querySelector('body').addEventListener('click', () => {
			isInteracted = true
		})
	}

	songsList() {
		return songs.map((song) => {
			return `
				<josttme-music-player
					id=${song.id}
					title="${song.title}"
					artista="${song.artista}"
					audio_src=${song.music}
					video_src=${song.video}
					preload=${song.preload}
					cover_image=${song.cover_image}
				></josttme-music-player>
			`
		})
	}

	render() {
		return html` <div></div> `
	}
}
customElements.define('josttme-music-container', JosttmeMusicContainer)
