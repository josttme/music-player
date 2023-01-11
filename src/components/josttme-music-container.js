import { LitElement, html, css } from 'lit'
import api from '../api/baseApi.json'
import './josttme-music-player'
export class JosttmeMusicContainer extends LitElement {
	static properties = {
		title: {},
		artista: {},
		audio_src: {},
		video_src: {},
		cover_image: {},
	}

	static styles = [
		css`
			:host {
				display: block;
				overflow: hidden;
			}
			div {
				display: block;
				overflow-y: scroll;
				overflow-x: hidden;
				scroll-snap-stop: always;
				scroll-snap-type: y mandatory;
				scroll-behavior: smooth;
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

	render() {
		return html`
			<div>
				${api.map(
					(item) => html` <josttme-music-player
						title="${item.title}"
						artista="${item.artista}"
						audio_src=${item.music}
						video_src=${item.video}
						cover_image=${item.cover_image}
					></josttme-music-player>`
				)}
			</div>
		`
	}
}
customElements.define('josttme-music-container', JosttmeMusicContainer)
