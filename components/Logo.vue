<template>
	<NuxtLink to="/">
		<img :src=" domain +  props.source " alt="logo"
			class="md:max-w-[65px] md:max-h-[65px] max-w-[55px] max-h-[55px] ">
	</NuxtLink>
</template>

<script setup>
const props = defineProps( {
	source: {
		type: String,
		default: '',
	},
} )

const domain = import.meta.env.VITE_DOMAIN

</script>

<style scoped></style>