<template>
	<form class="flex-grow relative">
		<input type="search" name="" v-model=" searchQuery " @input=" getSearchResults "
			:placeholder=" $t( 'searchbar.searchtext1' ) "
			class="w-full focus:border-primary outline-none border-2 rtl:pl-14 ltr:pr-14" id="myInput"
			@focus=" showList ">
		<button type="submit">
			<img src="/svgs/Search.svg" alt=""
				class="absolute rtl:left-1.5 ltr:right-1.5 top-2 rounded-xl bg-white ltr:scale-x-[-1] transform p-2">
		</button>
	</form>
	<button class="bg-primary size-[45px] rounded-xl cent" @click=" toggleModal ">
		<img src="/svgs/gps.svg" alt="">
	</button>
	<ul id="myUL"
		class="divide-y divide-gray-200 drop-shadow  bg-white rounded-xl max-h-56 overflow-y-auto absolute top-20 w-full left-0 right-0 my-1"
		v-if=" countrySearchResults && show ">
		<p class="py-2" v-if=" searchError ">
			Sorry, something went wrong, please try again.
		</p>
		<p class="py-2" v-if=" !searchError && countrySearchResults.length === 0 ">
			No results match your query, try a different term.
		</p>
		<template v-else>
			<NuxtLink @click=" hideList "
				:to=" '/app/prayer-time/' + res.attributes.prayer_time_country.data.attributes.slug + '/' + res.attributes.slug + '/' + res.attributes.prayer_time_country.data.id + '/' + res.attributes.prayer_time_country.data.attributes.api_country_code + '/' + res.attributes.api_city_code"
				v-for="          res           in           countrySearchResults         "
				:key=" res.id ">
				<li class="py-2 cursor-pointer flex gap-1 items-center hover:bg-primary 
							hover:text-white">
					<img
						v-if=" res.attributes.prayer_time_country.data.attributes.flag.data.attributes.url "
						:src=" domain + res.attributes.prayer_time_country.data.attributes.flag.data.attributes.url "
						:alt=" res.attributes.title " class=" h-7 aspect-square rounded-full mx-2">
					<span>
						{{ res.attributes.title + " - " +
						res.attributes.prayer_time_country.data.attributes.name }}
					</span>
				</li>
			</NuxtLink>
		</template>
	</ul>



	<Modal :modalActive=" modalActive " @close-modal=" toggleModal ">
		<div
			class=" bg-white rounded-[27px] flex  gap-6 p-6 md:p-8 items-center justify-center flex-wrap">
			<div>
				<Image isrc="/modal-gps.png" ialt="mobile GPS" iclass="max-h-[200px] min-h-[100px]  " />
			</div>
			<div class=" grid md:gap-8 gap-4 ">
				<h2 class=" h__primary max-md:text-center max-w-[450px]">{{ $t( 'location.locationtext'
					)
					}}</h2>
				<div class="flex gap-4 items-center max-md:justify-center whitespace-nowrap">
					<Button buttonText="location.buttongreen"
						buttonClass="bg-primary text-white btn__primary max-md:text-sm "></Button>
					<Button @click=" toggleModal " buttonText="location.buttonwhite"
						buttonClass=" text-primary btn__primary max-md:text-sm border border-primary "></Button>
				</div>
			</div>

		</div>

	</Modal>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
const show = ref( false )
function showList () {
	show.value = true
}
function hideList () {
	show.value = false
}



// open modal
const modalActive = ref( null )
const toggleModal = () => {
	modalActive.value = !modalActive.value
}


const searchKey = import.meta.env.VITE_GET_ALL_CITIES
const domain = import.meta.env.VITE_DOMAIN
const searchQuery = ref( "" )
const queryTimeout = ref( null )
const countrySearchResults = ref( null )
const searchError = ref( null )
const getSearchResults = () => {
	clearTimeout( queryTimeout.value )
	queryTimeout.value = setTimeout( async () => {
		if ( searchQuery.value !== "" ) {
			try {
				const result = await axios.get(
					`${ domain + searchKey }${ searchQuery.value }`
				)
				countrySearchResults.value = result.data.data
			} catch {
				searchError.value = true
			}
			return
		}
		countrySearchResults.value = null
	}, 200 )
}

</script>

<style scoped></style>
