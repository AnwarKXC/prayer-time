<template>
	<div class="min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner"
		v-if=" activeOne ">
		<div class="cent h-full w-full">
			<div class="relative md:grid grid-cols-4 p-4 gap-1 w-full">
				<div class="md:col-span-3 flex items-center size-full">
					<div class="grid gap-4">
						<div v-if=" activeOne "
							class="text-zinc-700 md:text-[15px] text-[13px] font-normal font-['Almarai']">
							{{ activeOne?.sub_title }}
						</div>

						<h2
							class="h__primary lg:max-w-[600px] max-xs:max-w-[280px] max-md:max-w-[500px] leading-10">
							{{ activeOne?.title }} <!-- Add optional chaining here -->
						</h2>
						<div class="flex">
							<!-- Check if links object and link_download property are defined -->
							<NuxtLink v-if=" links && links.link_download " :to=" links.link_download "
								target="_blank" class="bg-primary text-white btn__primary">
								{{ links?.title_download }}
							</NuxtLink>
						</div>
					</div>
				</div>
				<div
					class="flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 -bottom-1 max-md:size-[120px] max-xs:size-[90px] size-full ltr:scale-x-[-1] transform max-md:mx-4 md:w-full">
					<!-- Add optional chaining here for activeOne.image and data attributes -->
					<img
						v-if=" activeOne && activeOne.image && activeOne.image.data && activeOne.image.data.attributes && activeOne.image.data.attributes.url "
						:src=" activeOne.image.data.attributes.url " alt="" class="rounded w-full">
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const domain = import.meta.env.VITE_DOMAIN
const landing = import.meta.env.VITE_LANDING_PAGE
const { data: landingData } = await useFetch( domain + landing + locale.value )

const links = landingData.value.data.attributes.branding
const activeBanners = landingData.value.data.attributes.banners_native.filter( item => item.active === true && item.location === 'top' )
const randomIndex = Math.floor( Math.random() * activeBanners.length )
const activeOne = activeBanners[ randomIndex ]
</script>

<style scoped></style>
