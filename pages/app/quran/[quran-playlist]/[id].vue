<template>

	<Head>
		<!-- SEO meta tags -->
		<title>{{ playlist.result[0].seo_data.seo.metaTitle || 'quran' }}</title>
		<meta name="description" :content="playlist.result[0].seo_data.seo.metaDescription" />
		<meta name="keywords"
			:content="playlist.result[0].seo_data.seo.keywords || 'Default keywords'" />
		<meta name="robots" :content="playlist.result[0].seo_data.seo.metaRobots" />
		<link rel="canonical" :href="playlist.result[0].seo_data.seo.canonicalUR" />
		<meta property="og:image" :content=" playlist.result[ 0 ].seo_data.seo.metaImage">
		<!-- Open Graph meta tags for social sharing -->
		<meta property="og:title" :content=" playlist.result[ 0 ].seo_data.seo.metaTitle || 'quran'">
		<meta property="og:description" :content="playlist.result[0].seo_data.seo.metaDescription">
	</Head>


	<div class=" grid gap-6 ">

		<!-- Google Add 1 -->
		<div>
			<img class="w-full h-[244px] rounded-xl border border-gray-300"
				src="https://via.placeholder.com/909x244" />
		</div>


		<!-- Play list Panner -->
		<PlayListPanner :playlist=" playlist.result[ 0 ] " />


		<QuranSearchSection :playlist=" playlist.result[ 0 ] " />

		<NewPlayListSection />





		<!--  ads 1 -->
		<Add1 />


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
const { data: playlist } = await useFetch( dashboard + 'get-single-playlist?id=' + route.params.id + '&locale=' + locale.value )
console.log( playlist.value.result[ 0 ] )



</script>
