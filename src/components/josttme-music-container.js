import { LitElement, html, css } from 'lit'
import { songs } from '../api/baseApi'

export class JosttmeMusicContainer extends LitElement {
	static properties = {
		title: {},
		artista: {},
		audio_src: {},
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
	}

	songsList() {
		return songs.map((song) => {
			return /*HTML */ `
				<josttme-music-player
					id=${song.id}
					title="${song.title}"
					artista="${song.artista}"
					audio_src=${song.music}
					video_src=${song.video}
					preload=${song.preload}
				></josttme-music-player>
			`
		})
	}

	render() {
		return html` <div></div> `
	}
}
customElements.define('josttme-music-container', JosttmeMusicContainer)
