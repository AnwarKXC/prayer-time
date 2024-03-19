<template>
	<div
		class="bg-white rounded-xl border border-gray-200 px-4 py-6 flex justify-between flex-col gap-4">
		<div class="grid gap-4">
			<h2 class="h__primary">{{ $t( "citiesbanner.heading" ) }}</h2>
			<div class="capitals__grid">
				<template v-if=" capitals && capitals.data ">
					<NuxtLink v-for=" city  in  capitals.data " :key=" city.id "
						:to="getCitySlug( city )">
						<CityCard>
							<template v-slot:image>
								<img
									v-if=" city && city.attributes && city.attributes.prayer_time_country && city.attributes.prayer_time_country.data && city.attributes.prayer_time_country.data.attributes && city.attributes.prayer_time_country.data.attributes.flag && city.attributes.prayer_time_country.data.attributes.flag.data && city.attributes.prayer_time_country.data.attributes.flag.data.attributes "
									:src="  city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url "
									alt="" class="size-[64px] rounded-full">
							</template>
							<template v-slot:text>
								{{ city.attributes.title }}
							</template>
						</CityCard>
					</NuxtLink>
				</template>
			</div>
		</div>
		<div v-if=" capitals &&capitals.data.length > 14 ">
			<Pagination />
		</div>
	</div>
</template>

<script setup>
const { locale } = useI18n()
const getAllCapitals = import.meta.env.VITE_GET_ALL_CAPITALS
const domain = import.meta.env.VITE_DOMAIN
const { data: capitals } = await useFetch( domain + getAllCapitals + locale.value + "&isHardPopulate=true" )

function getCitySlug ( city ) {
	if ( !city || !city.attributes || !city.attributes.prayer_time_country || !city.attributes.prayer_time_country.data ) {
		return '' // Handle null or undefined case gracefully
	}
	return `/app/prayer-time/${ city.attributes.prayer_time_country.data.attributes.slug }/${ city.attributes.slug }/${ city.attributes.prayer_time_country.data.id }/${ city.attributes.prayer_time_country.data.attributes.api_country_code }/${ city.attributes.api_city_code+'/'+city.data.id }`
}
</script>

<style scoped></style>
