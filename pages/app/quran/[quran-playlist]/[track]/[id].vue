<template>

	<!-- <Head>
		<title>{{ playlist.result[ 0 ].seo_data.seo.metaTitle || 'quran' }}</title>
		<meta name="description" :content=" playlist.result[ 0 ].seo_data.seo.metaDescription " />
		<meta name="keywords"
			:content=" playlist.result[ 0 ].seo_data.seo.keywords || 'Default keywords' " />
		<meta name="robots" :content=" playlist.result[ 0 ].seo_data.seo.metaRobots " />
		<link rel="canonical" :href=" playlist.result[ 0 ].seo_data.seo.canonicalUR " />
		<meta property="og:image" :content=" playlist.result[ 0 ].seo_data.seo.metaImage ">
		<meta property="og:title" :content=" playlist.result[ 0 ].seo_data.seo.metaTitle || 'quran' ">
		<meta property="og:description"
			:content=" playlist.result[ 0 ].seo_data.seo.metaDescription ">
	</Head> -->


	<div class=" grid gap-6 ">
		<div>
			<img class="w-full h-[244px] rounded-xl border border-gray-300"
				src="https://via.placeholder.com/909x244" />
		</div>


		<div class="  bg-white rounded-xl border border-gray-200   p-4 grid gap-4">
			<div class="flex justify-between ">
				<div class="flex gap-3 items-center">
					<img :src=" playlist.result.track_info.img " alt="" class="size-[93px] rounded-lg">
					<div class="grid gap-2">
						<div
							class="text-right text-neutral-800 text-[25px] font-bold font-['Almarai'] leading-[30px]">
							{{ playlist.result.track_info.title }}</div>
						<div class="text-neutral-400 text-base font-normal font-['Roboto']">2.20.00</div>
						<div class="text-teal-900 text-base font-normal font-['Almarai']">
							{{ playlist.result.playlist_info[ 0 ].title }}
						</div>
					</div>
				</div>
				<div class="cent flex-col shrink-0 gap-3 justify-between">
					<PlaylistShare>
						<template #share>
							{{ domain + '/app/quran/' + route.params.track + '/' +
							route.params.quranplaylist + '/' + route.params.id }}
						</template>
					</PlaylistShare>
					<button
						@click="store.play( playlist.result.track_info.url, playlist.result.track_info.title, playlist.result.playlist_info[ 0 ].title, playlist.result.track_info.img )">
						<img src="/svgs/play.svg" alt=""
							class=" size-14 hover:brightness-150 duration-200">
					</button>
				</div>
			</div>
		</div>

		<PlayListPanner :playlist=" playlist.result.playlist_info[ 0 ] " />



		<div class="grid gap-6 py-6 px-4 bg-white rounded-xl border border-gray200">
			<form @submit.prevent=" searchTracks " class="relative">
				<input v-model=" searchQuery " type="search" name=""
					class="w-full  focus:border-primary outline-none border-2 rtl:pl-10 ltr:pr-10"
					:placeholder=" $t( 'suratbanner.seacrhbar' ) ">
				<img src="/svgs/Search.svg" alt=""
					class="absolute rtl:left-1.5 ltr:right-1.5 top-2 rounded-xl bg-white ltr:scale-x-[-1] transform p-2">
			</form>
			<TracksSection :tracks=" filteredTracks " />
		</div>







		<!-- ad2 -->
		<GoogleAds />


		<!-- ad 3 -->
		<PrayerFeature />


		<!-- last add in home page -->
		<NativePanners />






	</div>
</template>

<script setup>

const route = useRoute()

const { locale } = useI18n()
const dashboard = import.meta.env.VITE_DASHBOARD
const domain = import.meta.env.VITE_DOMAIN
const { data: playlist } = await useFetch( dashboard + 'get-single-track?id=' + route.params.id + '&locale=' + locale.value )
console.log( playlist.value.result )
import { useQuranStore } from '~/stores/quranStore'
const store = useQuranStore()

const searchQuery = ref( '' )
const filteredTracks = ref( playlist.value.result.other_tracks )
const searchTracks = () => {
	const query = searchQuery.value.toLowerCase().trim()
	filteredTracks.value = playlist.value.result.other_tracks.filter( track =>
		track.title.toLowerCase().includes( query )
	)
}

watch( searchQuery, () => {
	searchTracks()
} )


</script>