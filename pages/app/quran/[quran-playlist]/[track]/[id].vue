<template>

	<Head>
		<!-- SEO meta tags -->
		<title>{{ playlist.result[ 0 ].seo_data.seo.metaTitle || 'quran' }}</title>
		<meta name="description" :content=" playlist.result[ 0 ].seo_data.seo.metaDescription " />
		<meta name="keywords"
			:content=" playlist.result[ 0 ].seo_data.seo.keywords || 'Default keywords' " />
		<meta name="robots" :content=" playlist.result[ 0 ].seo_data.seo.metaRobots " />
		<link rel="canonical" :href=" playlist.result[ 0 ].seo_data.seo.canonicalUR " />
		<meta property="og:image" :content=" playlist.result[ 0 ].seo_data.seo.metaImage ">
		<meta property="og:title" :content=" playlist.result[ 0 ].seo_data.seo.metaTitle || 'quran' ">
		<meta property="og:description" :content=" playlist.result[ 0 ].seo_data.seo.metaDescription ">
	</Head>
	<div>

	</div>
</template>

<script setup>

</script>
