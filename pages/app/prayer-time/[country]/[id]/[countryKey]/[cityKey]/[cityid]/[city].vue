<template>
	<div class=" grid gap-6">
		<!-- Google Add 1 -->
		<div>
			<img class="w-full h-[244px] rounded-xl border border-gray-300"
				src="https://via.placeholder.com/909x244" />
		</div>


		<!-- country info  -->
		<div class=" bg-white rounded-xl border border-gray-200  grid gap-6 px-4 py-6">
			<h2 class="h__primary">{{ $t( 'infobanner.topheading' ) }}</h2>
			<div class="h-[0px]  rotate-180 border border-stone-300"></div>
			<div class=" grid md:grid-cols-2 gap-4 items-center">
				<div class="flex gap-3 items-center">
					<div class=" w-16 h-16 rounded-lg border border-gray-200 p-1.5 cent overflow-hidden">
						<template
							v-if=" cities.data[ 0 ]?.attributes?.prayer_time_country?.data?.attributes?.flag?.data?.attributes ">
							<img
								:src=" ( cities.data[ 0 ].attributes.prayer_time_country.data.attributes.flag.data.attributes.url || '' ) "
								:alt=" ( cities.data[ 0 ].attributes.prayer_time_country.data.attributes.flag.data.attributes.alternativeText || '' ) "
								class=" aspect-square rounded-full ">
						</template>

					</div>
					<div class="grid gap-2">
						<div class=" text-zinc-700 text-[17px] font-bold font-['Almarai'] leading-tight">
							{{ $t( 'infobanner.countryheading' ) }}

							<template v-if=" cities.data && cities.data[ 0 ] ">
								{{ $t( cities.data[ 0 ].attributes.prayer_time_country.data.attributes.name
			)
								}}
							</template>
							<template v-else>
								No Data Found
							</template>
						</div>
						<div class=" text-zinc-800 text-xs font-normal font-['Almarai'] leading-tight"
							v-if=" cities.data ">
							<div class=" cent"
								v-for="           city            in            cities.data         "
								:key=" city.id ">
								<template v-if=" city.id == route.params.city ">
									<span v-if=" city.attributes.is_capital ">
										{{ $t( 'infobanner.countrysubheading' ) }} &nbsp;
									</span>
									<span v-else> {{ $t( 'infobanner.countrysubheading2' ) }} &nbsp; </span>
									<span>
										{{ city.attributes.title }}
									</span>
								</template>
							</div>

						</div>

					</div>
				</div>
				<div class=" grid gap-2">
					<div v-if=" filteredEntries[ 0 ] && filteredEntries[ 0 ].meta "
						class="flex gap-2 items-center">
						<Image isrc="/svgs/e7datheat.svg" ialt="country" iclass=" w-4 h-4" />
						<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
							{{ $t( 'infobanner.para1' ) }}
							{{ filteredEntries[ 0 ].meta.timezone }}
						</div>
					</div>
					<div class="flex gap-2 items-center">
						<Image isrc="/svgs/cleander.svg" ialt="country" iclass=" w-4 h-4" />
						<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">

							<template v-if=" filteredEntries[ 0 ] ">
								{{ filteredEntries[ 0 ].date.hijri.weekday.ar }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.day }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.month.ar }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.year }}&nbsp;
								{{ $t( 'infobanner.para2' ) }}&nbsp;
								{{ filteredEntries[ 0 ].date.gregorian.date }}&nbsp;
							</template>
							<template v-else>
								No Data Found
							</template>
						</div>
					</div>
				</div>
			</div>
			<div v-if=" filteredEntries[ 0 ] " class=" grid md:grid-cols-3 gap-4">
				<div class=" flex gap-2">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.calpara' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						{{ filteredEntries[ 0 ].meta.method.name }}
					</div>
				</div>
				<div class=" flex gap-2 md:justify-center">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.doctrinepara' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						شافعي، حنبلي، مالكي</div>
				</div>
				<div class=" flex gap-2">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.timestyle' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						تنسيق 24 ساعة</div>
				</div>
			</div>


			<!-- prayer time -->
			<div class=" flex gap-2 items-center">
				<div class=" text-zinc-700 text-lg font-bold font-['Almarai'] leading-tight">
					{{ $t( 'infobanner.timepara' ) }}</div>
				<div class=" text-zinc-500 text-xs font-normal font-['Almarai'] leading-tight">
					{{ $t( 'infobanner.timingsubheading' ) }}</div>
			</div>


			<div v-if=" filteredEntries.length " class="overflow-hidden px-1">
				<PrayingToday :data=" filteredEntries " />
			</div>
			<div v-else>
				<p class=" text-zinc-500 text-sm font-normal font-['Almarai'] leading-tight">
					No Data Found
				</p>
			</div>

			<!-- prayer time for month -->
			<h2 class="h__primary">{{ $t( 'infobanner.monthsubheading' ) }}</h2>
			<div class=" overflow-x-auto pb-1">
				<div class="flex  gap-4  whitespace-nowrap text-zinc-500 ">
					<Button buttonText="infobanner.week1"
						buttonClass=" flex-1 btn__primary bg-zinc-100  font-semibold hover:bg-sec hover:text-white"
						@click="startIndex = 0" :class=" startIndex === 0 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week2"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 7" :class=" startIndex === 7 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week3"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 14"
						:class=" startIndex === 14 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week4"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 21"
						:class=" startIndex === 21 ? '!bg-sec text-white' : '' " />
				</div>
			</div>


			<Table>

				<template v-slot:thead>
					<Th thText="infobanner.date"></Th>
					<Th thText="infobanner.time1"></Th>
					<Th thText="infobanner.time2"></Th>
					<Th thText="infobanner.time3"></Th>
					<Th thText="infobanner.time4"></Th>
					<Th thText="infobanner.time5"></Th>
					<Th thText="infobanner.time6"></Th>
				</template>

				<template v-slot:tbody>
					<tr class=" h-[45px] border-b " v-if=" displayedData "
						v-for="                                   day                                   in                                      displayedData                                   "
						:key=" day "
						:class=" formattedDate === day.date.gregorian.date ? '!bg-yellow-50 ' : '' ">
						<Th thClass=" bg-gray-100 font-semibold "
							:class=" formattedDate === day.date.gregorian.date ? '!bg-yellow-50 ' : '' ">
							{{
				day.date.gregorian.date }}</Th>
						<Td>{{ extractTime( day.timings.Fajr ) }}</Td>
						<Td>{{ extractTime( day.timings.Sunrise ) }}</Td>
						<Td>{{ extractTime( day.timings.Dhuhr ) }}</Td>
						<Td>{{ extractTime( day.timings.Asr ) }}</Td>
						<Td>{{ extractTime( day.timings.Maghrib ) }}</Td>
						<Td>{{ extractTime( day.timings.Isha ) }}</Td>
					</tr>
					<tr v-else class="flex  items-center justify-center h-full ">
						<td colspan="7" class="text-xl">No Data Found</td>
					</tr>
				</template>
			</Table>
		</div>


		<Add1 />


		<div class=" bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6"
			v-if=" cities && cities.data.length ">
			<h2 class="h__primary">{{ $t( 'citiescounrybanner.heading' ) }}</h2>
			<div class="city__label__grid">
				<NuxtLink
					:to=" '/app/prayer-time/' + route.params.country + '/' + city.attributes.slug + '/' + route.params.countryKey + '/' + route.params.cityKey + '/' + city.attributes.api_city_code + '/' + city.id "
					v-for="                    city                     in                    cities.data        "
					:key=" city.id " class="w-full">
					<CityLabel>
						{{ city.attributes.title }} </CityLabel>
				</NuxtLink>
			</div>
		</div>


		<AllCountries />
		<GoogleAds />
		<!-- playing banner -->
		<AllTracks />
		<!-- popular articles -->
		<PopularArticlesSec />
		<PrayerFeature />
		<NativePanners />
	</div>
</template>

<script setup>
const { locale } = useI18n()
const domain = import.meta.env.VITE_DOMAIN
const times = import.meta.env.VITE_ADAN
const getAllCitiesInCountry = import.meta.env.VITE_GET_ALL_CITIES_IN_COUNTRY

const route = useRoute()
import { ref, onMounted } from 'vue'

const { data: cities } = await useFetch( domain + getAllCitiesInCountry + route.params.countryKey + '&locale[0]=' + locale.value )


const { data: cleander } = await useFetch( times + route.params.cityid + '&country=' + route.params.cityKey )

onMounted( () => {
	filterEntries()
} )


const currentDate = new Date()
const formattedDate = ref( formatDate( currentDate ) )
const filteredEntries = ref( [] )
function formatDate ( date ) {
	const pad = ( val ) => val.toString().padStart( 2, '0' )
	return `${ pad( date.getDate() ) }-${ pad( date.getMonth() + 1 ) }-${ date.getFullYear() }`
}



function filterEntries () {

	if ( cleander.value && cleander.value.data ) {
		filteredEntries.value = cleander.value.data.filter( day => {
			return day.date.gregorian.date === formattedDate.value
		} )
	} else {
		filteredEntries.value = []
	}
}

const dayOfMonth = currentDate.getDate()
const startIndex = ref( dayOfMonth <= 7 ? 0 : dayOfMonth <= 14 ? 7 : dayOfMonth <= 21 ? 14 : 21 )
const displayedData = computed( () => {
	if ( !cleander.value || !cleander.value.data || !Array.isArray( cleander.value.data ) || cleander.value.data.length === 0 ) {
		return []
	}
	const start = startIndex.value
	const dataLength = cleander.value.data.length
	if ( start >= 21 ) {
		return cleander.value.data.slice( start, dataLength )
	} else {
		const end = Math.min( start + 7, dataLength )
		return cleander.value.data.slice( start, end )
	}
} )
function extractTime ( str ) {
	// Define a regular expression pattern to match the time part
	const pattern = /(\d{2}:\d{2})/
	// Use the exec method of the regular expression to extract the time
	const match = pattern.exec( str )
	// Return the matched time or an empty string if no match found
	return match ? match[ 0 ] : ''
}

</script>

<style scoped></style>























<!-- another way  -->


<!-- 

<template>
	<div class=" grid gap-6">
		<div>
			<img class="w-full h-[244px] rounded-xl border border-gray-300"
				src="https://via.placeholder.com/909x244" />
		</div>


		<div class=" bg-white rounded-xl border border-gray-200  grid gap-6 px-4 py-6">
			<h2 class="h__primary">{{ $t( 'infobanner.topheading' ) }}</h2>
			<div class="h-[0px]  rotate-180 border border-stone-300"></div>
			<div class=" grid md:grid-cols-2 gap-4 items-center">
				<div class="flex gap-3 items-center">
					<div class=" w-16 h-16 rounded-lg border border-gray-200 p-1.5 cent overflow-hidden">
						<template
							v-if=" fetched.cities.data[ 0 ]?.attributes?.prayer_time_country?.data?.attributes?.flag?.data?.attributes ">
							<img
								:src=" ( fetched.cities.data[ 0 ].attributes.prayer_time_country.data.attributes.flag.data.attributes.url || '' ) "
								:alt=" ( fetched.cities.data[ 0 ].attributes.prayer_time_country.data.attributes.flag.data.attributes.alternativeText || '' ) "
								class=" aspect-square rounded-full ">
						</template>

					</div>
					<div class="grid gap-2">
						<div class=" text-zinc-700 text-[17px] font-bold font-['Almarai'] leading-tight">
							{{ $t( 'infobanner.countryheading' ) }}

							<template v-if=" fetched.cities.data && fetched.cities.data[ 0 ] ">
								{{ $t( fetched.cities.data[ 0
			].attributes.prayer_time_country.data.attributes.name
			)
								}}
							</template>
							<template v-else>
								No Data Found
							</template>
						</div>
						<div class=" text-zinc-800 text-xs font-normal font-['Almarai'] leading-tight">
							{{ $t( 'infobanner.countrysubheading' ) }}

							<template v-if=" fetched.cities.data && fetched.cities.data[ 0 ] ">
								<template
									v-for="                              city                              in                              fetched.cities.data                              "
									:key=" city.id ">
									<template v-if=" city.attributes.is_capital ">
										{{ $t( city.attributes.title ) }}
									</template>
								</template>
							</template>
							<template v-else>
								No Data Found
							</template>
						</div>
					</div>
				</div>
				<div class=" grid gap-2">
					<div v-if=" filteredEntries[ 0 ] && filteredEntries[ 0 ].meta "
						class="flex gap-2 items-center">
						<Image isrc="/svgs/e7datheat.svg" ialt="country" iclass=" w-4 h-4" />
						<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
							{{ $t( 'infobanner.para1' ) }}
							{{ filteredEntries[ 0 ].meta.timezone }}
						</div>
					</div>
					<div class="flex gap-2 items-center">
						<Image isrc="/svgs/cleander.svg" ialt="country" iclass=" w-4 h-4" />
						<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">

							<template v-if=" filteredEntries[ 0 ] ">
								{{ filteredEntries[ 0 ].date.hijri.weekday.ar }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.day }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.month.ar }}&nbsp;
								{{ filteredEntries[ 0 ].date.hijri.year }}&nbsp;
								{{ $t( 'infobanner.para2' ) }}&nbsp;
								{{ filteredEntries[ 0 ].date.gregorian.date }}&nbsp;
							</template>
							<template v-else>
								No Data Found
							</template>
						</div>
					</div>
				</div>
			</div>
			<div v-if=" filteredEntries[ 0 ] " class=" grid md:grid-cols-3 gap-4">
				<div class=" flex gap-2">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.calpara' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						{{ filteredEntries[ 0 ].meta.method.name }}
					</div>
				</div>
				<div class=" flex gap-2 md:justify-center">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.doctrinepara' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						شافعي، حنبلي، مالكي</div>
				</div>
				<div class=" flex gap-2">
					<div class=" text-teal-900 text-sm font-bold font-['Almarai'] leading-tight">
						{{ $t( 'infobanner.timestyle' ) }}</div>
					<div class=" text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight">
						تنسيق 24 ساعة</div>
				</div>
			</div>


			<div class=" flex gap-2 items-center">
				<div class=" text-zinc-700 text-lg font-bold font-['Almarai'] leading-tight">
					{{ $t( 'infobanner.timepara' ) }}</div>
				<div class=" text-zinc-500 text-xs font-normal font-['Almarai'] leading-tight">
					{{ $t( 'infobanner.timingsubheading' ) }}</div>
			</div>


			<div v-if=" filteredEntries.length " class="overflow-hidden px-1">
				<PrayingToday :data=" filteredEntries " />
			</div>
			<div v-else>
				<p class=" text-zinc-500 text-sm font-normal font-['Almarai'] leading-tight">
					No Data Found
				</p>
			</div>

			<h2 class="h__primary">{{ $t( 'infobanner.monthsubheading' ) }}</h2>
			<div class=" overflow-x-auto pb-1">
				<div class="flex  gap-4  whitespace-nowrap text-zinc-500 ">
					<Button buttonText="infobanner.week1"
						buttonClass=" flex-1 btn__primary bg-zinc-100  font-semibold hover:bg-sec hover:text-white"
						@click="startIndex = 0" :class=" startIndex === 0 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week2"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 7" :class=" startIndex === 7 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week3"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 14"
						:class=" startIndex === 14 ? '!bg-sec text-white' : '' " />
					<Button buttonText="infobanner.week4"
						buttonClass="flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white"
						@click="startIndex = 21"
						:class=" startIndex === 21 ? '!bg-sec text-white' : '' " />
				</div>
			</div>


			<Table>

				<template v-slot:thead>
					<Th thText="infobanner.date"></Th>
					<Th thText="infobanner.time1"></Th>
					<Th thText="infobanner.time2"></Th>
					<Th thText="infobanner.time3"></Th>
					<Th thText="infobanner.time4"></Th>
					<Th thText="infobanner.time5"></Th>
					<Th thText="infobanner.time6"></Th>
				</template>

				<template v-slot:tbody>
					<tr class=" h-[45px] border-b " v-if=" displayedData "
						v-for="                        day                        in                           displayedData                        "
						:key=" day "
						:class=" formattedDate === day.date.gregorian.date ? '!bg-yellow-50 ' : '' ">
						<Th thClass=" bg-gray-100 font-semibold "
							:class=" formattedDate === day.date.gregorian.date ? '!bg-yellow-50 ' : '' ">
							{{
				day.date.gregorian.date }}</Th>
						<Td>{{ extractTime( day.timings.Fajr ) }}</Td>
						<Td>{{ extractTime( day.timings.Sunrise ) }}</Td>
						<Td>{{ extractTime( day.timings.Dhuhr ) }}</Td>
						<Td>{{ extractTime( day.timings.Asr ) }}</Td>
						<Td>{{ extractTime( day.timings.Maghrib ) }}</Td>
						<Td>{{ extractTime( day.timings.Isha ) }}</Td>
					</tr>
					<tr v-else class="flex  items-center justify-center h-full ">
						<td colspan="7" class="text-xl">No Data Found</td>
					</tr>
				</template>
			</Table>
		</div>


		<Add1 />


		<div class=" bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6">
			<h2 class="h__primary">{{ $t( 'citiescounrybanner.heading' ) }}</h2>
			<div class="city__label__grid">
				<NuxtLink
					:to=" '/app/prayer-time/' + route.params.country + '/' + city.attributes.slug + '/' + route.params.countryKey + '/' + route.params.cityKey + '/' + city.attributes.api_city_code "
					v-for="         city          in         fetched.cities.data     " :key=" city.id "
					class="w-full">
					<CityLabel>
						{{ city.attributes.title }} </CityLabel>
				</NuxtLink>
			</div>
		</div>


		<AllCountries />
		<GoogleAds />
		<AllTracks />
		<PopularArticlesSec />
		<PrayerFeature />
		<NativePanners />
	</div>
</template>

<script setup>
const { locale } = useI18n()
const domain = import.meta.env.VITE_DOMAIN
const times = import.meta.env.VITE_ADAN
const route = useRoute()
import { ref, onMounted } from 'vue'

const getAllCitiesInCountry = import.meta.env.VITE_GET_ALL_CITIES_IN_COUNTRY

const { data: fetched } = await useAsyncData(
	'fetched',
	async () => {
		const [ cities, cleander ] = await Promise.all( [ $fetch( domain + getAllCitiesInCountry + route.params.countryKey + '&locale[0]=' + locale.value ),
		$fetch( times + route.params.city + '&country=' + route.params.cityKey ),
		] )
		return {
			cities, cleander
		}
	}, {
	lazy: false
}
)
const currentDate = new Date()
const formattedDate = ref( formatDate( currentDate ) )
const filteredEntries = ref( [] )
function formatDate ( date ) {
	const pad = ( val ) => val.toString().padStart( 2, '0' )
	return `${ pad( date.getDate() ) }-${ pad( date.getMonth() + 1 ) }-${ date.getFullYear() }`
}

function filterEntries () {

	if ( fetched.value.cleander && fetched.value.cleander.data ) {
		filteredEntries.value = fetched.value.cleander.data.filter( day => {
			return day.date.gregorian.date === formattedDate.value
		} )
	} else {
		filteredEntries.value = []
	}
}

const dayOfMonth = currentDate.getDate()
const startIndex = ref( dayOfMonth <= 7 ? 0 : dayOfMonth <= 14 ? 7 : dayOfMonth <= 21 ? 14 : 21 )
const displayedData = computed( () => {
	if ( !fetched.value.cleander || !fetched.value.cleander.data || !Array.isArray( fetched.value.cleander.data ) || fetched.value.cleander.data.length === 0 ) {
		return []
	}
	const start = startIndex.value
	const dataLength = fetched.value.cleander.data.length
	if ( start >= 21 ) {
		return fetched.value.cleander.data.slice( start, dataLength )
	} else {
		const end = Math.min( start + 7, dataLength )
		return fetched.value.cleander.data.slice( start, end )
	}
} )
function extractTime ( str ) {
	const pattern = /(\d{2}:\d{2})/
	const match = pattern.exec( str )
	return match ? match[ 0 ] : ''
}



onMounted( () => {
	filterEntries()
} )

</script>

<style scoped></style> -->