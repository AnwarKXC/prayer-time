<template>

	<div class="grid gap-6 py-6 px-4 bg-white rounded-xl border border-gray200">

		<form action="" class="relative">
			<input type="search" name="" class=" w-full  rtl:pl-12 ltr:pr-12"
				:placeholder=" $t( 'suratbanner.seacrhbar' ) ">
			<button type="submit">
				<img src="/svgs/Search.svg" alt=""
					class="absolute rtl:left-1.5 ltr:right-1.5 top-2 rounded-xl bg-white ltr:scale-x-[-1] transform p-2">
			</button>
		</form>





		<div class="tracks__grid">
			<div v-for="(           item, index           ) in             tracks.result            "
				:key=" track_id "
				class="  bg-white rounded-xl border border-gray-200 flex items-center p-3 gap-2 group hover:bg-primary duration-200">
				<div class="size-6 shrink-0 bg-amber-300 rounded-full cent text-primary text-sm">
					<span>{{ index + 1 }}</span>
				</div>
				<div class=" grid gap-1  w-full">
					<div class="flex justify-between items-center">
						<div
							class="text-zinc-700 group-hover:text-neutral-200 duration-200 text-base font-semibold max-md:text-[13px]">
							{{ item.title }}
						</div>
						<div class="text-neutral-400 text-sm font-normal ">2.20.00
						</div>
					</div>
					<div class="flex justify-between items-center ">
						<div
							class="text-teal-900 md:text-sm text-xs font-normal group-hover:text-neutral-300 duration-200">
							{{ route.params.quranplaylist }}
						</div>
						<div class=" cent gap-3">
							<button
								@click="store.play( item.url, item.title, route.params.quranplaylist, item.img_url )">
								<img src="/svgs/play.svg" alt=""
									class=" size-[18px] hover:scale-110 group-hover:brightness-150 duration-200">
							</button>
							<playlist-share>
								<template #share>
									{{ domain + '/app/quran/' + route.params.quranplaylist + '/' + item.slug
									+
									'/' + item.track_id }}
								</template>

							</playlist-share>

						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>

<script setup>

import { computed } from 'vue'
const dashboard = import.meta.env.VITE_DASHBOARD
const domain = import.meta.env.VITE_DOMAIN
const { locale } = useI18n()
const route = useRoute()
const { data: tracks } = await useFetch( dashboard + 'get-tracks?playlistID=' + route.params.id + '&locale=' + locale.value )
import { useQuranStore } from '~/stores/quranStore'
const store = useQuranStore()

</script>
