<template>
	<div class="flex-grow ">
		<div v-for="(      audioPlayer, index      ) in       audioPlayers      " :key=" index "
			class="flex items-center md:gap-8 gap-3 justify-end text-white ">
			<div class="flex gap-3 flex-grow">
				<!-- Volume Control -->
				<div class="relative group shrink-0 ">
					<!-- <input class="p-0 absolute group-hover:block right-0 left-0 bottom-10 hidden"
						style="writing-mode: vertical-lr; direction: rtl" type="range" min="0" max="1"
						step="0.1" v-model=" audioPlayer.volume "> -->
					<button @click="toggleMute( audioPlayer )">
						<img class="mt-[5px] w-[26px] h-[26px]"
							:src=" audioPlayer.volume === 0 ? '/svgs/Icon-Volume-mute.svg' : '/svgs/Icon-Volume.svg' "
							alt="">
					</button>
				</div>
				<!-- Progress Bar -->
				<input type="range" min="0" :max=" audioPlayer.totalDuration " step="1"
					v-model="audioPlayer.currentTime" @input="setProgress( audioPlayer )"
					class="!p-0 lg:min-w-96 md:min-w-54 w-full rotate-180 progress flex-grow"
					:style=" { backgroundSize: progressBackgroundSize } ">
			</div>
			<!-- Play/Pause Button -->
			<div class="flex md:gap-4 items-center ltr:flex-row-reverse ">
				<button @click="forwardSong( audioPlayer )">
					<img src="/svgs/Icon-Forwardsvg.svg" alt="">
				</button>
				<button class="w-10  cent" @click="togglePlayPause( audioPlayer )">
					<img src="/svgs/Icon-Play.svg" alt="" style="display: none;">
					<img src="/svgs/Icon-Pause.svg" alt="" style="display: none;">
					<img v-if=" audioPlayer.isPlaying " src="/svgs/Icon-Pause.svg" alt=""
						class="max-md:w-4">
					<img v-else src="/svgs/Icon-Play.svg" alt="" class="max-md:w-6">
				</button>
				<button @click="rewindSong( audioPlayer )">
					<img src="/svgs/Icon-Rewindsvg.svg" alt="">
				</button>
			</div>
			<div
				class="text-neutral-300 font-sm flex items-center gap-3 shrink-0 max-md:order-first max-md:hidden">
				<span class="w-9">{{ timeString( audioPlayer.currentTime ) }}</span> /
				<span class="w-9">{{ timeString( audioPlayer.totalDuration ) }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

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
		audioPlayer.isPlaying = true
	} else {
		audioPlayer.audio.pause()
		audioPlayer.isPlaying = false
	}
}

const isPaused = ( audioPlayer ) => {
	if ( audioPlayer.audio ) {
		return audioPlayer.audio.paused
	}
	return true // Assuming that if audio is not initialized, it's considered paused
}

const toggleMute = ( audioPlayer ) => {
	audioPlayer.volume = audioPlayer.volume === 0 ? 1 : 0
	if ( audioPlayer.audio ) {
		audioPlayer.audio.volume = audioPlayer.volume
	}
}

const setProgress = ( audioPlayer ) => {
	if ( audioPlayer.audio ) {
		audioPlayer.audio.currentTime = audioPlayer.currentTime
	}
}

const forwardSong = ( audioPlayer ) => {
	if ( audioPlayer.audio ) {
		audioPlayer.audio.currentTime += 10 // Forwarding by 10 seconds, change as needed
	}
}

const rewindSong = ( audioPlayer ) => {
	if ( audioPlayer.audio ) {
		audioPlayer.audio.currentTime -= 10 // Rewinding by 10 seconds, change as needed
	}
}

onMounted( () => {
	if ( process.browser ) {
		for ( const player of audioPlayers.value ) {
			player.audio = new Audio( encodeURI( player.src ) )
			player.audio.addEventListener( 'loadedmetadata', () => {
				player.totalDuration = Math.floor( player.audio.duration )
				player.audio.addEventListener( 'timeupdate', () => {
					if ( !player.seeking ) {
						player.currentTime = Math.floor( player.audio.currentTime )
					}
				} )
			} )
			player.audio.addEventListener( 'seeking', () => {
				player.seeking = true
			} )
			player.audio.addEventListener( 'seeked', () => {
				player.seeking = false
			} )
		}
	}
} )

const progressBackgroundSize = computed( () => {
	const progress = audioPlayers.value[ 0 ].currentTime / audioPlayers.value[ 0 ].totalDuration
	return `${ progress * 100 }% 100%`
} )
</script>

<style scoped>
input[type="range"] {
	accent-color: rgb(235, 235, 235);
}

.progress {
	-webkit-appearance: none;
	appearance: none;
	margin-block: auto;
	width: 200px;
	height: 7px;
	border: none;
	background: rgb(160, 160, 160);
	border-radius: 50px;
	background-image: linear-gradient(90deg, #ffffff, #ffffff);
	background-repeat: no-repeat;
	background-position-x: right;
	@apply duration-[1500ms]
}

.progress:hover {
	background-image: linear-gradient(90deg, #ffffff, #42867b);

}

input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 0px;
	width: 0px;
	border-radius: 50%;
	background: #ffffff;
	cursor: pointer;
	transition: background .3s ease-in-out;
}
</style>
