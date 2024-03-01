<template>
	<div class="w-full h-full  rounded-2xl border border-gray-200 py-2 px-5 grid grid-rows-3 justify-center items-center  hover:bg-primary duration-300 hover:text-white hover:drop-shadow text-[#333333]">

		<div class="  row-span-2 ">
			<slot name="image" />
		</div>
		<p class=" text-center ">
			<slot name="text" class="text-center" />
		</p>

	</div>
</template>

<script setup>

</script>

<style  scoped></style>