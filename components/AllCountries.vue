<template>
	<div
		class="bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6">
		<div class="grid gap-4">
			<div class="flex justify-between items-center gap-4 flex-wrap"
				v-if=" regions?.data?.length > 0 ">
				<h2 class="h__primary">{{ $t( 'allcountries.heading' ) }}</h2>
				<div class="flex md:gap-[21px] gap-4 text-[#828282] flex-wrap"
					v-if=" regions?.data?.length > 0 ">
					<template v-for=" res  in  regions?.data || [] " :key="res?.id">
						<button class="text-primary  region  border-b-2 border-transparent"
							:class=" res.id === region ? 'region_active' : '' "
							@click="changeRegion( res.id )">
							{{ res?.attributes?.title }}
						</button>
					</template>
				</div>
			</div>

			<div class="country__grid" v-if=" countries && countries.data.length > 0 ">
				<NuxtLink
					:to=" `/app/prayer-time/${ res.attributes.slug }/${ res.attributes.default_prayer_time_city.data?.attributes.slug }/${ res.id }/${ res.attributes.api_country_code }/${ res.attributes.default_prayer_time_city.data?.attributes.api_city_code }` "
					v-for=" res  in  countries.data " :key=" res.id ">
					<CountryCard>
						<template v-slot:image>
							<template
								v-if=" res && res.attributes.flag && res.attributes.flag.data && res.attributes.flag.data.attributes && res.attributes.flag.data.attributes.url ">
								<img :src=" res.attributes.flag.data.attributes.url " alt=""
									class="size-[64px] aspect-square rounded-full">
							</template>
						</template>
						<template v-slot:text>
							{{ res.attributes.name }}
						</template>
					</CountryCard>
				</NuxtLink>
			</div>
		</div>
		<div v-if=" countries && countries.data && countries.data.length > 14 ">
			<Pagination />
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { useI18n } from 'vue-i18n'
	import axios from 'axios'

	const { locale } = useI18n()
	const getAllCountries = import.meta.env.VITE_GET_ALL_COUNTRIES
	const getAllRegions = import.meta.env.VITE_GET_ALL_REGIONS
	const domain = import.meta.env.VITE_DOMAIN

	const regions = ref(null)
	const countries = ref(null)

	const region = ref(null)

const fetchRegions = async () => {
  try {
    const response = await axios.get(domain + getAllRegions + locale.value)
	regions.value = response.data
	// Set the initial region to the first one
	region.value = regions.value.data[0]?.id
	await fetchCountries()
  } catch (error) {
		console.error( 'Error fetching regions:', error )
	}
}

const fetchCountries = async () => {
  try {
    const response = await axios.get(domain + getAllCountries + region.value + '&locale[0]=' + locale.value)
	countries.value = response.data
  } catch (error) {
		console.error( 'Error fetching countries:', error )
	}
}

const changeRegion = async (newRegionId) => {
		region.value = newRegionId
  await fetchCountries()
}

	onMounted(fetchRegions)
</script>
