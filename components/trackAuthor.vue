<template>
	<div class=" w-full  bg-white rounded-[10px] border border-gray-300 grid grid-cols-5 gap-3 p-3">
		<NuxtLink to="/" class=" cent ">
			<slot name="image" />
		</NuxtLink>
		<div class=" flex items-center col-span-4 ">
			<div class="grid gap-1.5 w-full ">
				<NuxtLink to="/" class=" text-zinc-800 font-semibold max-md:text-[13px]">
					<slot name="title" />
				</NuxtLink>
				<slot name="share">
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped></style>