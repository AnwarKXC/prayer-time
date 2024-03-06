<template>
	<div
		class="  bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6">
		<div class="grid gap-4">
			<div class="flex justify-between items-center gap-4 flex-wrap ">
				<h2 class="h__primary">{{ $t( 'allcountries.heading' ) }}</h2>
				<div class="flex md:gap-[21px] gap-4 text-[#828282] flex-wrap">
					<NuxtLink to="" class="text-primary region_active border-b-2"
						v-for="     res      in        regions.data      " :key=" res.id "> {{
						res.attributes.title
						}}
					</NuxtLink>
				</div>
			</div>
			<div class="country__grid">
				<NuxtLink
					:to=" '/app/'  +res.attributes.api_country_code +'/'+ res.id+ '/' + res.attributes.default_prayer_time_city.data?.attributes.api_city_code"
					v-for="  res  in countries.data " :key=" res.id ">
					<CountryCard>
						<template v-slot:image>
							<img :src=" domain +res.attributes.flag.data.attributes.url " alt=""
								class="size-[64px] aspect-square rounded-full">
						</template>
						<template v-slot:text>
							{{ res.attributes.name
							}}
						</template>
					</CountryCard>
				</NuxtLink>
			</div>
		</div>
		<Pagination />
	</div>
</template>

<script setup>
const { locale } = useI18n()
const getAllCountrys = import.meta.env.VITE_GET_ALL_COUNTRIES
const getAllRegions = import.meta.env.VITE_GET_ALL_REGIONS
const domain = import.meta.env.VITE_DOMAIN

// fetch regions
const { data: regions } = await useFetch( domain + getAllRegions + locale.value )
// fetch countries 
const { data: countries } = await useFetch( domain + getAllCountrys + locale.value )
</script>

<style  scoped></style>