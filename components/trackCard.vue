<template>
	<NuxtLink to="/"
		class=" w-full bg-white rounded-xl border border-gray-300 grid grid-cols-5 gap-5 p-3">
		<div class=" cent ">
			<slot name="image" />
		</div>
		<div class=" flex items-center col-span-4">
			<div class="grid ">
				<div class=" text-zinc-800 font-semibold max-md:text-[13px]">
					<slot name="title" />
				</div>
				<div class=" text-neutral-400 max-md:text-xs ">
					<slot name="by" />
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>

</script>

<style scoped></style>