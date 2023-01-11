import { LitElement, html, unsafeCSS } from 'lit'
import { registerPlayer } from '../utils/observer'

import music_player from '../styles/music_player.scss?inline'
export class JosttmeMusicPlayer extends LitElement {
	static properties = {
		title: {},
		artista: {},
		audio_src: {},
		video_src: {},
		cover_image: {},
	}
	render() {
		return html`
			<div class="container-music-player width-height">
				<div
					class="container-music-player__video-container width-height "
					@click=${this.togglePlay}
				>
					<video
						data-poster=${this.cover_image}
						data-src=${this.video_src}
						type="video/mp4"
						loop
						muted
					></video>
				</div>
				<div class="container-music-player__player-container padding-item">
					<div class="container-music-player__player-container__details padding-item">
						<h2>${this.title}</h2>
						<h3>${this.artista}</h3>
						<audio data-src=${this.audio_src} type="audio/mpeg"></audio>
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
						<svg width="22" height="22" viewBox="0 0 24 24" class="opacity">
							<path
								d="M7.5 2.25c3 0 4.5 2 4.5 2s1.5-2 4.5-2c3.5 0 6 2.75 6 6.25 0 4-3.269 7.566-6.25 10.25C14.41 20.407 13 21.5 12 21.5s-2.45-1.101-4.25-2.75C4.82 16.066 1.5 12.5 1.5 8.5c0-3.5 2.5-6.25 6-6.25z"
							/>
						</svg>
						<div id="container-music-player__player-controls__play-btn" @click=${this.togglePlay}>
							<svg title="Play" width="50" height="40" viewBox="0 0 24 24" class="play">
								<path d="m16.53 11.152-8-5A1 1 0 0 0 7 7v10a1 1 0 0 0 1.53.848l8-5a1 1 0 0 0 0-1.7z" />
							</svg>

							<svg title="Pause" class="pause hidden" width="40" height="40" viewBox="0 0 100 100">
								<path
									d="M46.667 70c0 3.665-3.002 6.667-6.667 6.667h-6.667c-3.665 0-6.666-3.002-6.666-6.667V30c0-3.665 3.001-6.667 6.666-6.667H40c3.665 0 6.667 3.002 6.667 6.667v40zm26.666 0c0 3.665-3.001 6.667-6.666 6.667H60c-3.665 0-6.667-3.002-6.667-6.667V30c0-3.665 3.002-6.667 6.667-6.667h6.667c3.665 0 6.666 3.002 6.666 6.667v40z"
								/>
							</svg>
						</div>
						<svg class="opacity" width="30" height="30" viewBox="0 0 24 24">
							<path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9a7 7 0 1 1 14 0H3z" />
						</svg>
					</div>
				</div>
			</div>
		`
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
		registerPlayer(mainContainerPlayer)

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
}
customElements.define('josttme-music-player', JosttmeMusicPlayer)
