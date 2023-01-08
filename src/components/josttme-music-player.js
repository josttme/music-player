import { LitElement, html, unsafeCSS } from 'lit'
import { registerPlayer } from '../utils/observer'
import music_player from '../styles/music_player.scss?inline'
export class JosttmeMusicPlayer extends LitElement {
	static properties = {
		isPlaying: { type: Boolean },
		id: {},
		title: {},
		artista: {},
		audio_src: {},
		video_src: {},
		preload: {},
		cover_image: {},
	}
	constructor() {
		super()
		this.isPlaying = false
	}
	static styles = [unsafeCSS(music_player)]

	get music() {
		return this.renderRoot?.querySelector('audio') ?? null
	}
	get play() {
		return this.renderRoot?.querySelector('.play') ?? null
	}
	get pause() {
		return this.renderRoot?.querySelector('.pause') ?? null
	}
	get video() {
		return this.renderRoot?.querySelector('video') ?? null
	}
	get currentTimeEl() {
		return this.renderRoot?.querySelector('#current-time') ?? null
	}
	get durationEl() {
		return this.renderRoot?.querySelector('#duration') ?? null
	}
	get progressContainer() {
		return this.renderRoot?.querySelector('#progress-container') ?? null
	}
	get progress() {
		return this.renderRoot?.querySelector('#progress') ?? null
	}
	firstUpdated() {
		const previousThis = this
		const mainContainerPlayer = this.renderRoot?.querySelector('.container-music-player') ?? null
		const posterContainer = this.renderRoot?.querySelector('.poster-container') ?? null

		function updateProgressBar(e) {
			if (!e.target.paused) {
				previousThis.pause.classList.remove('hidden')
				previousThis.play.classList.add('hidden')
			} else {
				previousThis.pause.classList.add('hidden')
				previousThis.play.classList.remove('hidden')
			}
			const { duration, currentTime } = e.srcElement
			// Update Pregress bar with
			const progressPercent = (currentTime / duration) * 100
			previousThis.progress.style.width = `${progressPercent}%`
			// Calculate display for duration
			const durationMinutes = Math.floor(duration / 60)
			let durationSeconds = Math.floor(duration % 60)
			durationSeconds < 10 && (durationSeconds = `0${durationSeconds}`)
			//Delate switch duration Element to avoid NaN
			durationSeconds &&
				(previousThis.durationEl.textContent = `${durationMinutes}:${durationSeconds}`)
			// Calculate display for current
			const currentMinutes = Math.floor(currentTime / 60)
			let currentSeconds = Math.floor(currentTime % 60)
			currentSeconds < 10 && (currentSeconds = `0${currentSeconds}`)
			previousThis.currentTimeEl.textContent = `0${currentMinutes}:${currentSeconds}`
		}
		// Set Progress Bar
		function setProgressBar(e) {
			const width = this.clientWidth
			const clickX = e.offsetX
			const { duration } = previousThis.music
			previousThis.music.currentTime = (clickX / width) * duration
		}
		// Events Listeners
		this.music.addEventListener('timeupdate', updateProgressBar)
		this.progressContainer.addEventListener('click', setProgressBar)
		registerPlayer(mainContainerPlayer)

		//posterContainer.addEventListener('click', this.togglePlay)
	}

	// Play
	playSong() {
		if (this.music.paused) {
			this.play.classList.add('hidden')
			this.pause.classList.remove('hidden')
			this.music.play()
			this.video.play()
		}
	}

	// Pause
	pauseSong() {
		this.play.classList.remove('hidden')
		this.pause.classList.add('hidden')
		this.music.pause()
		this.video.pause()
	}
	togglePlay() {
		!this.music.paused ? this.pauseSong() : this.playSong()
	}

	render() {
		return html`
			<div id=${this.id} class="container-music-player width-height">
				<div
					class="container-music-player__video-container width-height "
					@click=${this.togglePlay}
				>
					<video
						preload=${this.preload}
						data-src=${this.video_src}
						data-poster=${this.cover_image}
						type="video/mp4"
						loop
						muted
					></video>
				</div>
				<div class="container-music-player__player-container padding-item">
					<div class="container-music-player__player-container__details padding-item">
						<h2>${this.title}</h2>
						<h3>${this.artista}</h3>
						<audio preload=${this.preload} data-src=${this.audio_src} type="audio/mpeg"></audio>
					</div>
					<!-- Duration -->
					<div class="container-music-player__duration-wrapper padding-item">
						<span id="current-time">00:00</span>
						<span id="duration">00:00</span>
					</div>
					<!-- Progress -->
					<div class="container-music-player__progress-container" id="progress-container">
						<div class="container-music-player__progress-container__progress" id="progress"></div>
					</div>
					<!-- Controls -->
					<div class="container-music-player__player-controls">
						<svg width="22" height="22" viewBox="0 0 24 24">
							<path
								d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
							></path>
						</svg>
						<div id="container-music-player__player-controls__play-btn" @click=${this.togglePlay}>
							<svg class="play " title="Play" width="50" height="40" viewBox="0 0 24 24">
								<path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7z" />
							</svg>

							<svg class="pause hidden" title="Pause" width="40" height="40" viewBox="0 0 100 100">
								<path
									d="M46.667 70c0 3.665-3.002 6.667-6.667 6.667h-6.667c-3.665 0-6.666-3.002-6.666-6.667V30c0-3.665 3.001-6.667 6.666-6.667H40c3.665 0 6.667 3.002 6.667 6.667v40zM73.333 70c0 3.665-3.001 6.667-6.666 6.667H60c-3.665 0-6.667-3.002-6.667-6.667V30c0-3.665 3.002-6.667 6.667-6.667h6.667c3.665 0 6.666 3.002 6.666 6.667v40z"
								/>
							</svg>
						</div>
						<svg id="user-perfil" width="30" height="30" viewBox="0 0 24 24">
							<path
								d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		`
	}
}
customElements.define('josttme-music-player', JosttmeMusicPlayer)
