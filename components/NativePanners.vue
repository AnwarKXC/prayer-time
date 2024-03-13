<template>
	<div class=" bg-white rounded-xl border border-gray-200 px-4 py-6"
		v-if=" activeOne && activeBanners.length > 0 && activeOne.sub_title && activeOne.title && activeOne.image.data.attributes.url ">
		<div class=" grid md:grid-cols-2 md:gap-2 gap-8">
			<div class="w-full flex items-center max-md:justify-center">
				<div class="grid gap-2  max-md:justify-items-center">
					<p class="max-md:text-center text-zinc-700 text-[15px] font-normal  ">
						{{ activeOne.sub_title }}</p>
					<h2 class="h__primary max-md:text-center">{{ activeOne.title }}</h2>
					<div class=" w-full flex gap-3 items-center flex-wrap justify-center mt-4">
						<NuxtLink :to=" links.link_download_google_play " target="_blank"
							v-if=" links.link_download_google_play ">
							<Image isrc="/svgs/google-store.svg" ialt="google play"
								iclass=" max-w-[140px] min-h-[41px] duration-300 hover:scale-105" />
						</NuxtLink>
						<NuxtLink :to=" links.link_download_apple " target="_blank"
							v-if=" links.link_download_apple ">
							<Image isrc="/svgs/app-store.svg" ialt="app store"
								iclass=" max-w-[140px] min-h-[41px] duration-300 hover:scale-105" />
						</NuxtLink>
						<NuxtLink :to=" links.link_download_app_gallery " target="_blank"
							v-if=" links.link_download_app_gallery ">
							<Image isrc="/huawei-appgalley.jpg" ialt="app store"
								iclass=" max-w-[140px] min-h-[41px] duration-300 hover:scale-105" />
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class=" cent ">
				<img :src=" activeOne.image.data.attributes.url " alt="" class="rounded">
			</div>
		</div>
	</div>
</template>

<script setup>
const { locale } = useI18n()
const domain = import.meta.env.VITE_DOMAIN
const landing = import.meta.env.VITE_LANDING_PAGE
const { data: landingData } = await useFetch( domain + landing + locale.value )


const links = landingData.value.data.attributes.branding
const activeBanners = landingData.value.data.attributes.banners_native.filter( item => item.active === true && item.location === 'bottom' )
const randomIndex = Math.floor( Math.random() * activeBanners.length )
const activeOne = activeBanners[ randomIndex ]

</script>

<style scoped></style>