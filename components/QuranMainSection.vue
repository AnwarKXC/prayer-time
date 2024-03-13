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
				v-for="                          char                           in                            arabicAlphabet                           "
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
						<trackAuthor
							v-for="                                  item                                   in                                   sortedData                                  "
							:key=" item.id ">
							<template v-slot:image>
								<Image isrc="/play-bar.png" ialt="logo" iclass="h-full rounded" />
							</template>
							<template v-slot:title>
								{{ item.name }}
							</template>
							<template v-slot:share>
								<div class=" flex justify-between gap-4 w-full text-neutral-500">
									<div class=" flex justify-center items-center gap-2">
										<img src="/svgs/headphone.svg" alt="">
										<div class=" flex gap-1 items-center">
											<span>{{ 200 }}</span>
											<span>تشغيل</span>
										</div>
									</div>
									<div class=" flex justify-center items-center gap-3 ">
										<button>
											<img src="/svgs/copy.svg" alt="" class=" w-4 h-4">
										</button>
										<button @click=" toggleModal ">
											<img src="/svgs/share.svg" alt="" class=" w-4 h-4">
										</button>
									</div>
								</div>
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
const { data: playlist } = await useFetch( dashboard + 'get-playlists?locale=' + locale.value )
const playlistData = ref( playlist.value.result.data )
console.log( playlistData.value )

// open modal


// Sample data
const items = ref( [
	{ id: 1, name: 'ماهر بن حمد المعيقلي' },
	{ id: 2, name: 'عبد الله الخليفي' },
	{ id: 14, name: 'محمد نور الكتبي' },
	{ id: 3, name: 'علي بن عبد الله جابر' },
	{ id: 4, name: 'خالد بن علي الغامدي' },
	{ id: 5, name: 'علي بن عبد الرحمن الحذيفي' },
	{ id: 6, name: 'ياسر بن راشد الدوسري' },
	{ id: 7, name: 'سعود بن إبراهيم آل شريم' },
	{ id: 11, name: 'فيصل بن جميل غزاوي' },
	{ id: 13, name: 'بندر بن عبد العزيز بليلة' },
	{ id: 8, name: 'عبد الله بن عبد الغني خياط' },
	{ id: 9, name: 'صالح بن عبد الله بن حميد' },
	{ id: 10, name: 'أحمد بن عبد الله بن حميد' },
] )

const arabicAlphabet = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'.split( '' )
const sortedData = ref( [ ...items.value ] )
const selectedChar = ref( '' )

const sortBy = ( char ) => {
	const processedChar = char.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
	sortedData.value = items.value.filter( item => {
		const normalizedItemName = item.name.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
		return normalizedItemName.startsWith( processedChar ) || ( processedChar === 'ا' && ( normalizedItemName.startsWith( 'ا' ) || normalizedItemName.startsWith( 'أ' ) ) )
	} ).sort( ( a, b ) => a.name.localeCompare( b.name ) )
	selectedChar.value = char
}

const showAll = () => {
	const sortedItems = [ ...items.value ].sort( ( a, b ) => a.name.localeCompare( b.name ) )
	const groupedItems = {}
	sortedItems.forEach( item => {
		const firstChar = item.name.charAt( 0 )
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
		const normalizedItemName = item.name.normalize( "NFD" ).replace( /[\u064b-\u0652]/g, '' )
		return normalizedItemName.startsWith( processedChar ) || ( processedChar === 'ا' && ( normalizedItemName.startsWith( 'ا' ) || normalizedItemName.startsWith( 'أ' ) ) )
	} )
} )
</script>
