<template>
    <div :class=" `audio-box ${ isActive === true ? 'block' : 'hidden' }` ">
        <svg width="30" height="30" class="ml-auto block border" @click=" closeAudio "
            style="cursor: pointer;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="white" />
            <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <div :class=" `audio-player-container flex` ">
            <div class="audio_ position-relative flex items-center px-3">
                <div class="flex gap-3 items-center mx-auto w-mxc">
                    <svg @click="playPrev()" width="18" height="18" viewBox="0 0 16 16" fill="none"
                        style="cursor: pointer;">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.16634 8.85662V14.3333C4.16634 14.4239 4.0902 14.5 3.99967 14.5H1.99967C1.90915 14.5 1.83301 14.4239 1.83301 14.3333V1.66667C1.83301 1.57614 1.90915 1.5 1.99967 1.5H3.99967C4.0902 1.5 4.16634 1.57614 4.16634 1.66667V7.11005V7.54853V8.41813V8.85662ZM5.03886 8.08462L4.94818 7.98333L5.03886 7.88204C5.04862 7.87114 5.06105 7.86001 5.07692 7.84943L5.07694 7.84945L5.08168 7.84622L13.915 1.81288L13.9267 1.80492L13.9379 1.79631C13.9675 1.77354 13.9909 1.76783 14.0083 1.76674C14.0281 1.76551 14.0524 1.76985 14.0778 1.78334C14.1298 1.81093 14.1663 1.86413 14.1663 1.93333V14.0667C14.1663 14.1359 14.1298 14.1891 14.0778 14.2167C14.0524 14.2301 14.0281 14.2345 14.0083 14.2333C13.9909 14.2322 13.9675 14.2265 13.9379 14.2037L13.9272 14.1955L13.9161 14.1878L5.08274 8.12118L5.08277 8.12114L5.07693 8.11724C5.06105 8.10666 5.04862 8.09553 5.03886 8.08462Z"
                            fill="#000" stroke="#FFF6F6" />
                    </svg>
                    <svg v-if=" isPlay " viewBox="0 0 24 24" width="18" height="18" fill="none"
                        @click="pause()" style="cursor: pointer;">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6ZM14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                            fill="#000"></path>
                    </svg>
                    <svg v-else @click="playAudio()" width="18" height="18" viewBox="0 0 24 24"
                        fill="none" style="cursor: pointer;">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.26693 21.4878L6.25583 21.4954L6.24514 21.5037C5.95991 21.7231 5.5 21.5312 5.5 21.1V2.89997C5.5 2.46877 5.95991 2.27687 6.24514 2.49628L6.25634 2.50489L6.26799 2.51285L19.518 11.5629L19.518 11.5629L19.5226 11.566C19.8258 11.7681 19.8258 12.1819 19.5226 12.3839L19.5226 12.3839L19.5169 12.3878L6.26693 21.4878Z"
                            fill="#000" stroke="#FFF6F6" />
                    </svg>
                    <svg @click="playNext()" width="18" height="18" viewBox="0 0 16 16" fill="none"
                        style="cursor: pointer;">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.9604 7.88191L11.0511 7.98333L10.9604 8.08475C10.9508 8.0955 10.9384 8.10661 10.9224 8.11723L10.9224 8.11719L10.9166 8.12118L2.08327 14.1878L2.07217 14.1955L2.06149 14.2037C2.03189 14.2265 2.00842 14.2322 1.99102 14.2333C1.9712 14.2345 1.94696 14.2301 1.92153 14.2167C1.86954 14.1891 1.83301 14.1359 1.83301 14.0667V1.93333C1.83301 1.86413 1.86954 1.81093 1.92153 1.78334C1.94696 1.76985 1.9712 1.76551 1.99102 1.76674C2.00842 1.76783 2.03189 1.77354 2.06149 1.79631L2.07268 1.80492L2.08433 1.81288L10.9177 7.84622L10.9176 7.84624L10.9224 7.84944C10.9384 7.86006 10.9508 7.87117 10.9604 7.88191ZM11.833 7.54853V7.10937V1.66667C11.833 1.57614 11.9092 1.5 11.9997 1.5H13.9997C14.0902 1.5 14.1663 1.57614 14.1663 1.66667V14.3333C14.1663 14.4239 14.0902 14.5 13.9997 14.5H11.9997C11.9091 14.5 11.833 14.4239 11.833 14.3333V8.85731V8.41813V7.54853Z"
                            fill="#000" stroke="#FFF6F6" />
                    </svg>
                </div>
                <div class="white_div"></div>
                <audio ref="audioPlayer" id="audio_" :src=" currentAudio " autoplay controls></audio>
            </div>
            <div class="audio_profile flex">
                <div class="w-full rtl audio_dt text-white p-3 h-full">
                    <h5>{{ audio?.name }}</h5>
                    <p>{{ audio?.description }}</p>
                </div>
                <AppImage :imageSrc=" '/playlistImages/' + playlist_img " />
            </div>
        </div>
    </div>
</template>

<script setup>
import AppImage from '../Components/Image.vue'
import { ref } from 'vue'

const currentAudio = ref( null )
const isActive = ref( false )
const audio = ref( null )
const playlist_img = ref( '' )
const isPlay = ref( false )
let count = ref( 0 )
let track_index = ref( 0 )
let time = ref( [] )

function playAudio () {
    isActive.value = true
    const track = JSON.parse( localStorage.getItem( "track" ) )
    track_index.value = JSON.parse( localStorage.getItem( "track_index" ) )
    if ( count.value > 0 ) {
        audio.value = track[ count.value ]
    } else {
        audio.value = track[ track_index.value ]
    }
    if ( audio.value ) {
        currentAudio.value = audio.value.audio_url
        play()
        isPlay.value = true
    }
}

function playNext () {
    isActive.value = true
    const track = JSON.parse( localStorage.getItem( "track" ) )
    track_index.value = parseInt( localStorage.getItem( "track_index" ) )
    count.value++
    if ( count.value < track.length ) {
        audio.value = track[ count.value ]
    } else {
        count.value = 0
        audio.value = track[ count.value ]
    }
    if ( audio.value ) {
        currentAudio.value = audio.value.audio_url
        play()
        isPlay.value = true
    }
}

function playPrev () {
    isActive.value = true
    const track = JSON.parse( localStorage.getItem( "track" ) )
    track_index.value = parseInt( localStorage.getItem( "track_index" ) )
    if ( count.value > 0 ) {
        count.value--
        audio.value = track[ count.value ]
    } else {
        count.value = track.length - 1
        audio.value = track[ count.value ]
    }
    if ( audio.value ) {
        currentAudio.value = audio.value.audio_url
        play()
        isPlay.value = true
    }
}

function play () {
    refs.audioPlayer?.play()
}

function pauseAudio () {
    pause()
    isPlay.value = false
}

function pause () {
    refs.audioPlayer.pause()
    isPlay.value = false
}

function closeAudio () {
    isActive.value = false
    refs.audioPlayer.pause()
    localStorage.removeItem( "track" )
    isPlay.value = false
}

watch( () => route.params.track, ( newLgValue ) => {
    if ( newLgValue ) {
        playAudio()
        const local = JSON.parse( localStorage.getItem( "track" ) )
        if ( local ) {
            isActive.value = true
            isPlay.value = true
        } else {
            isActive.value = false
            isPlay.value = false
        }
    }
} )

setInterval( () => {
    const audioPlayer = refs.audioPlayer
    if ( audioPlayer ) {
        const checkAudio = !audioPlayer.paused
        isPlay.value = checkAudio
    }
}, 2000 )
</script>

<style scoped>
/* Style the audio player container */
.audio_ {
    width: 80%;
}

.audio_button {
    position: absolute;
    left: 50%;
    transform: translate(-10px, -10px);
}

.audio_button svg {
    cursor: pointer;
}

.audio_profile {
    width: 25%;
}

.audio_profile img {
    width: 160px;
    object-fit: cover;
}

.audio-box {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

.audio-player-container {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #FFF;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}

audio {
    width: 100%;
}

.audio_dt {
    background-color: #1E4D45;
}

.white_div {
    height: 37px;
    width: 49px;
    background-color: #FFF;
    position: absolute;
    right: 1%;
    z-index: 10;
}

audio::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
}

audio::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
}

/* Style the audio player */
/* Style the controls */
audio::-webkit-media-controls-panel {
    /* New background color for controls */
    background-color: #FFF;
}

@media(max-width:1250px) {
    .audio_ {
        width: 70%;
    }

    .audio_profile {
        width: 30%;
    }
}

@media (max-width:768px) {
    .audio-player-container {
        flex-wrap: wrap;
    }

    .audio_ {
        width: 100%;
    }

    .audio_profile {
        width: 100%;
    }
}
</style>
