<template>
	<div class="lg:sticky top-[104px] grid gap-6 ">
		<div class="  bg-zinc-700 rounded-xl border p-4 grid gap-3 " v-if=" route.params.country && props.quotes ">
			<div class="text-right text-amber-400 text-xl font-bold font-['Almarai']">{{
				props.quotes.title || '' }}</div>
			<div class=" text-right text-gray-300 text-xs font-normal font-['Almarai'] leading-[19px]">
				{{ props.quotes.description || '' }}</div>
		</div>
		<div class=" h-full  bg-yellow-50 rounded-xl border border-gray-200 p-4  grid gap-4 " v-if=" props.data ">
			<NuxtLink :to=" props.data.link ">
				<img :src="props.data.image.data.attributes.url || '' "
					:alt=" props.data.image.data.attributes.alternativeText || '' "
					class=" h-full rounded">
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const route = useRoute()

const props = defineProps( {
	data: {
		type: Object,
		default: {},
	},
	quotes: {
		type: Object,
		default: {},
	}
} )
const domain = import.meta.env.VITE_DOMAIN
// const randomIndexQuotes = Math.floor( Math.random() * props.quotes.length )
</script>

<style scoped></style>