<template>
	<div class="  bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start">
		<div class=" cent cent__col  ">
			<h2 class="h__primary">مزايا براير ناو.</h2>
			<p class="w-[236px] h-6   text-zinc-500 text-xs font-normal  leading-[35px]">
				احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا.</p>
		</div>
		<div class=" grid md:grid-cols-3 gap-4 gap-y-10  ">
			<div class=" grid grid-rows-3 justify-center items-center  "
				v-for="(     item, index     ) in      randomThreeItems     " :key=" index ">
				<img :src=" domain + item.icon.data.attributes.url "
					:alt=" item.icon.data.attributes.name "
					class="rounded-sm max-w-[60px] max-h-[60px] justify-self-center">
				<div class="text-center text-indigo-900 text-[25px] font-normal  ">
					{{ item.title }}</div>
				<div
					class="md:max-w-[229px] max-w-72  text-center text-neutral-500 text-xs font-normal leading-5 ">
					{{ item.description }}</div>
			</div>
		</div>

	</div>
</template>

<script setup>
const { locale } = useI18n()
const domain = import.meta.env.VITE_DOMAIN
const landing = import.meta.env.VITE_LANDING_PAGE
const { data: landingData } = await useFetch( domain + landing + locale.value )
function shuffle ( array ) {
	for ( let i = array.length - 1; i > 0; i-- ) {
		const j = Math.floor( Math.random() * ( i + 1 ) );
		[ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ]
	}
	return array
}
const activeBanners = landingData.value.data.attributes.features.filter( item => item.active === true ) 
shuffle( activeBanners )
const randomThreeItems = activeBanners.slice( 0, 3 )




</script>

<style scoped></style>