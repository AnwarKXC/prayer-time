<template>
	<div class=" md:col-span-2 flex md:justify-end">
		<div v-for="  audioPlayer   in   audioPlayers  " :key=" audioPlayer.src " class="aWrap text-white"
			:data-src=" audioPlayer.src ">
			<!-- Play/Pause Button -->
			<button class="aPlay" @click="togglePlayPause( audioPlayer )">
				<span class="aPlayIco">
					<i v-if=" isPaused( audioPlayer ) " class="fa-solid fa-play"></i>
					<i v-else class="fa-solid fa-pause"></i>
				</span>
			</button>

			<!-- Progress Bar -->
			<div class="range">
				<span class=" absolute top-0 left-0 h-1.5 w-full bg-neutral-400 rounded-2xl cursor-pointer"></span>
				<input  type="range" min="0" :max=" audioPlayer.totalDuration " step="1"
					v-model="audioPlayer.currentTime" @input="setProgress( audioPlayer )">
				<span class="change-range"
					:style=" { width: audioPlayer.currentTime / audioPlayer.totalDuration * 100 + '%' } "></span>
			</div>

			<!-- Current Time / Total Duration -->
			<div class=" text-neutral-300 font-sm">
				<span class="aNow">{{ timeString( audioPlayer.currentTime ) }}</span> / <span
					class="aTime">{{ timeString( audioPlayer.totalDuration ) }}</span>
			</div>

			<!-- Volume Control -->
			<div class="volume-container">
				<span class="aVolIco">
					<i class="fa-solid"
						:class=" audioPlayer.volume === 0 ? 'fa-volume-off' : 'fa-volume-high' "
						@click="toggleMute( audioPlayer )"></i>
				</span>
				<div class="range-volume">
					<span class="absolute top-0 left-0 h-1.5 w-full bg-neutral-400 rounded-2xl cursor-pointer"></span>
					<input class="aVolume" type="range" min="0" max="1" step="0.1"
						v-model="audioPlayer.volume">
					<span class="change-range"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const audioPlayers = ref( [
	{ src: "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3", audio: null, currentTime: 0, totalDuration: 0, volume: 1, seeking: false }
] )

const timeString = ( secs ) => {
	let ss = Math.floor( secs ),
		hh = Math.floor( ss / 3600 ),
		mm = Math.floor( ( ss - hh * 3600 ) / 60 )
	ss = ss - hh * 3600 - mm * 60
	mm = mm < 10 ? "0" + mm : mm
	ss = ss < 10 ? "0" + ss : ss
	return hh > 0 ? `${ hh }:${ mm }:${ ss }` : `${ mm }:${ ss }`
}
const togglePlayPause = ( audioPlayer ) => {
	if ( audioPlayer.audio.paused ) {
		audioPlayer.audio.play()
	} else {
		audioPlayer.audio.pause()
	}
}

const isPaused = ( audioPlayer ) => {
	if ( audioPlayer.audio ) {
		return audioPlayer.audio.paused
	}
	return true // Assuming that if audio is not initialized, it's considered paused
}

const toggleMute = ( audioPlayer ) => {
	audioPlayer.audio.volume = audioPlayer.audio.volume === 0 ? 1 : 0
}

const setProgress = ( audioPlayer ) => {
	audioPlayer.audio.currentTime = audioPlayer.currentTime
}

onMounted( () => {
	if ( process.browser ) {
		for ( let i of audioPlayers.value ) {
			i.audio = new Audio( encodeURI( i.src ) )

			i.audio.addEventListener( 'loadedmetadata', () => {
				i.totalDuration = Math.floor( i.audio.duration )
				i.audio.addEventListener( 'timeupdate', () => {
					if ( !i.seeking ) {
						i.currentTime = Math.floor( i.audio.currentTime )
					}
				} )
			} )

			i.audio.onplay = () => ( i.aPlayIco.innerHTML = '<i class="fa fa-pause"></i>' )
			i.audio.onpause = () => ( i.aPlayIco.innerHTML = '<i class="fa fa-play"></i>' )

			i.audio.addEventListener( 'pause', () => {
				// Update UI or do something when audio is paused
			} )

			i.audio.addEventListener( 'canplaythrough', () => {
				// Enable controls
			} )

			i.audio.addEventListener( 'waiting', () => {
				// Disable controls
			} )

			i.audio.addEventListener( 'volumechange', () => {
				// Adjust UI based on volume change
			} )

			i.audio.addEventListener( 'seeking', () => {
				i.seeking = true
			} )

			i.audio.addEventListener( 'seeked', () => {
				i.seeking = false
			} )
		}
	}
} )
</script>

<style scoped>
/* (B) WRAPPER */
.aWrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

.aWrap input[type="range"] {
	appearance: none;
	border: none;
	outline: none;
	box-shadow: none;
	padding: 0;
	margin: 0;
	background: 0;
}

.range,
.range-volume {
	position: relative;
	display: flex;
	align-items: center;
}

.range input,
.range-volume input {
	position: relative;
	z-index: 1;
}

.range .change-range,
.range-volume .change-range {
	position: absolute;
	left: 0;
	top: 0;
	height: 6px;
	width: 0px;
	background-color: rgb(255, 255, 255);
	border-radius: 10px 0 0 10px;
}

.aWrap input[type="range"]::-webkit-slider-thumb {
	appearance: none;
}

/* (E2) CUSTOM SLIDER TRACK */
.aWrap input[type="range"]::-webkit-slider-runnable-track {
	background: transparent;
	height: 6px;
	border-radius: 10px;
}

/* (F) VOLUME */
.aVolIco {
	margin: 0 10px;
	cursor: pointer;
}

input.aVolume {
	max-width: 100px !important;
}

.aVolume::-webkit-slider-runnable-track {
	height: 6px !important;
}

.aVolume::-webkit-slider-thumb {
	margin-top: -3px !important;
}

.aVolume::-moz-range-thumb {
	margin-top: -3px !important;
}

.volume-container {
	display: flex;
	align-items: center;
}
</style>