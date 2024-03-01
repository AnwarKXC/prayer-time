<template>
	<div class="flex gap-4 justify-center flex-wrap">
		<img class="w-[284px] h-[236px] max-lg:hidden" src="https://via.placeholder.com/284x236"
			v-for="        index         in         2        " :key=" index " />
		<img class="w-[284px] h-[236px] lg:hidden" src="https://via.placeholder.com/284x236" />
		<img class="w-[284px] h-[236px] max-sm:hidden " src="https://via.placeholder.com/284x236" />
	</div>
</template>

<script setup>

</script>

<style  scoped></style>