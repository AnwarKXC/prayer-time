<template>
	<div
		class=" size-full text-[#333333]  rounded-2xl border border-gray-200 p-4  px-4 grid grid-rows-3 justify-center items-center gap-1 hover:bg-primary duration-300 hover:text-white hover:drop-shadow">
		<div class=" row-span-2">
			<slot name="image" />

		</div>

		<p class=" text-center">
			<slot name="text" class="text-center" />

		</p>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>