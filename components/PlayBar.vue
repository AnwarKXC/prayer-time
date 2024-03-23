<template>
	<div class="w-full  bg-primary  md:py-2.5 py-1 drop-shadow shadow-primary md:min-h-[75px] flex items-center " v-if="title" >
		<div class="container flex justify-between items-center  gap-y-2  gap-8 flex-wrap">
			<div class="flex items-center gap-3 ">
				<div>
				
					<img :src=" store.img" alt=" track image" class="md:size-[64px] size-[48px] rounded">
				
				</div>
				<div class="divide-y divide-transparent">
					<div class="text-white md:text-[22px]  font-bold font-['Almarai']">{{playlist}}
					</div>
					<div class="text-zinc-300 md:text-lg text-sm font-normal">{{title}}

					</div>
				</div>
			</div>
			<!-- (B) AUDIO PLAYERS -->
			<PlayControl :url="url"/>

		</div>
	</div>
</template>

<script setup>
import { useQuranStore } from '~/stores/quranStore'

const store = useQuranStore()
const { url, playlist, title, img }=storeToRefs( store )

</script>

<style scoped></style>
