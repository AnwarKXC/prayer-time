<template>
	<div
		class=" bg-white rounded-xl border border-gray-200 px-4 py-6 flex justify-between flex-col gap-4">
		<div class="grid gap-4">
			<h2 class="h__primary ">{{ $t( "citiesbanner.heading" ) }}</h2>
			<div class="capitals__grid">
				<template v-if=" capitals ">
					<NuxtLink
						:to=" '/' + city.attributes.prayer_time_country.data.attributes.api_country_code + '/' + city.attributes.prayer_time_country.data.id + '/' + city.attributes.api_city_code "
						v-for="city  in   capitals.data "
						:key=" city.id ">
						<CityCard>
							<template v-slot:image>
								<img
									:src=" domain + city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url "
									alt="" class=" size-[64px] rounded-full">
							</template>
							<template v-slot:text>
								{{ city.attributes.title }}
							</template>
						</CityCard>
					</NuxtLink>
				</template>
			</div>
		</div>
		<Pagination />
	</div>
</template>

<script setup>

const { locale } = useI18n()
const getAllCapitals = import.meta.env.VITE_GET_ALL_CAPITALS
const domain = import.meta.env.VITE_DOMAIN
const { data: capitals } = await useFetch( domain + getAllCapitals + locale.value + '&isHardPopulate=true' )

</script>

<style  scoped></style>