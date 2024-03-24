<template>
	<div class="tracks__grid">
		<div v-for="(            item, index            ) in              props.tracks             "
			:key=" track_id "
			class="  bg-white rounded-xl border border-gray-200 flex items-center p-3 gap-2 group hover:bg-primary duration-200">
			<div class="size-6 shrink-0 bg-amber-300 rounded-full cent text-primary text-sm">
				<span>{{ index + 1 }}</span>
			</div>
			<div class=" grid gap-1  w-full">
				<NuxtLink
					:to=" '/app/quran/' + item.slug + '/' + route.params.quranplaylist + '/' + item.track_id "
					class="flex justify-between items-center">
					<div
						class="text-zinc-700 group-hover:text-neutral-200 duration-200 text-base font-semibold max-md:text-[13px]">
						{{ item.title }}
					</div>
					<div class="text-neutral-400 text-sm font-normal ">2.20.00
					</div>
				</NuxtLink>
				<div class="flex justify-between items-center ">
					<NuxtLink
						:to=" '/app/quran/' + item.slug + '/' + route.params.quranplaylist + '/' + item.track_id "
						class=" flex-grow text-teal-900 md:text-sm text-xs font-normal group-hover:text-neutral-300 duration-200">
						{{ route.params.quranplaylist }}
					</NuxtLink>
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
</template>

<script setup>
const props = defineProps( {
	tracks: {
		type: Object,
		default: {},
	},
} )
const route = useRoute()
const domain = import.meta.env.VITE_DOMAIN
import { useQuranStore } from '~/stores/quranStore'
const store = useQuranStore()
</script>
