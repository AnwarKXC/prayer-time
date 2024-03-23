<template>
	<div class=" bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start">

		<div class=" flex justify-between items-center gap-4">
			<h2 class=" shrink-0  h__primary leading-10 "> كل الشيوخ</h2>
			<input type="search" name=""
				class=" md:min-w-72 max-xs:w-40 focus:border-primary outline-none border-2  "
				placeholder="ابحث عن القراء،  ...">
		</div>


		<!-- all chars -->
		<div class="alphabitic__grid">
			<button
				class=" col-span-3 bg-[#FCD465]  text-primary border rounded cent p-1 hover:text-white hover:bg-primary "
				@click=" showAll ">كل
				الشيوخ</button>
			<button
				v-for="                            char                             in                              arabicAlphabet                             "
				:key=" char " @click="sortBy( char )"
				:class=" selectedChar === char ? 'bg-primary text-white' : '' "
				class="border rounded-md cent p-1 hover:text-white hover:bg-primary">
				{{ char }}
			</button>
		</div>




		<div class=" h-[0px] -mt-4  border border-gray-300"></div>
		<!-- filterd data  -->


		<div class=" grid gap-6 -mt-8">
			<div class="">
				<div class=" w-9 h-9 border rounded-md cent  text-white bg-primary"
					v-if=" selectedChar ">
					<span>{{ selectedChar || 'كل الشيوخ' }}</span>
				</div>
				<div v-else
					class="  border rounded-md w-fit h-9 px-3  text-white bg-primary flex items-center ">
					<span>كل الشيوخ </span>
				</div>
			</div>
			<div>
				<template v-if=" sortedData.length > 0 ">
					<div class="tracks__grid">
						<trackAuthor v-for="    item     in     sortedData    " :key=" item.id ">
							<template v-slot:image>
								<NuxtLink :to=" '/app/quran/' + item.slug + '/' + item.id"
									class="w-full h-full ">
									<img :src=" item.img " :alt=" item.img_alt "
										class="h-full w-full rounded" loading="lazy">
								</NuxtLink>
							</template>
							<template v-slot:title>
								<NuxtLink :to=" '/app/quran/' + item.slug + '/' + item.id "
									class="w-full h-full ">
									{{ item.title }}
								</NuxtLink>
							</template>
							<template v-slot:share>

								<NuxtLink :to=" '/app/quran/' + item.slug + '/' + item.id"
									class=" flex justify-center items-center gap-2">
									<img src="/svgs/headphone.svg" alt="" class="group-hover:brightness-150">
									<div class=" flex gap-1 items-center">
										<span>{{ item.count_of_watch }}</span>
										<span>تشغيل</span>
									</div>
								</NuxtLink>
								<PlaylistShare>
									<template v-slot:share>
										{{ domain + '/app/quran/' + item.slug + '/' + item.id }}
									</template>
								</PlaylistShare>


							</template>
						</trackAuthor>
					</div>
				</template>
				<template v-else>
					<div class="  text-primary font-semibold  text-center"> لا يوجد نتائج </div>
				</template>
			</div>
		</div>




	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

// get playlist data
const { locale } = useI18n()
const dashboard = import.meta.env.VITE_DASHBOARD
const domain = import.meta.env.VITE_DOMAIN
const { data: playlist } = await useFetch( dashboard + 'get-playlists?locale=' + locale.value )
const items = ref( playlist.value.result.data )
console.log( items.value )

// open modal


// Sample data

const arabicAlphabet = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'.split( '' )
const sortedData = ref( [ ...items.value ] )
const selectedChar = ref( '' )

const sortBy = ( char ) => {
	const processedChar = char.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
	sortedData.value = items.value.filter( item => {
		const normalizedItemName = item.title.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
		return normalizedItemName.startsWith( processedChar ) || ( processedChar === 'ا' && ( normalizedItemName.startsWith( 'ا' ) || normalizedItemName.startsWith( 'أ' ) ) )
	} ).sort( ( a, b ) => a.title.localeCompare( b.title ) )
	selectedChar.value = char
}

const showAll = () => {
	const sortedItems = [ ...items.value ].sort( ( a, b ) => a.title.localeCompare( b.title ) )
	const groupedItems = {}
	sortedItems.forEach( item => {
		const firstChar = item.title.charAt( 0 )
		if ( !groupedItems[ firstChar ] ) {
			groupedItems[ firstChar ] = []
		}
		groupedItems[ firstChar ].push( item )
	} )

	sortedData.value = Object.values( groupedItems ).flat()
	selectedChar.value = ''
}

const filteredData = computed( () => {
	if ( !selectedChar.value ) return sortedData.value
	const processedChar = selectedChar.value.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
	return sortedData.value.filter( item => {
		const normalizedItemName = item.title.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
		return normalizedItemName.startsWith( processedChar ) || ( processedChar === 'ا' && ( normalizedItemName.startsWith( 'ا' ) || normalizedItemName.startsWith( 'أ' ) ) )
	} )
} )
</script>
