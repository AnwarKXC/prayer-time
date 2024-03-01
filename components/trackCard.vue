<template>
	<NuxtLink to="/"
		class=" w-full h-[77px] bg-white rounded-[10px] border border-gray-300 grid grid-cols-5 gap-5 p-3">
		<div class=" cent ">
			<slot name="image" />
		</div>
		<div class=" flex items-center col-span-4">
			<div class="grid ">
				<div class=" text-zinc-800 font-semibold">
					<slot name="title" />
				</div>
				<div class=" text-neutral-400 ">
					<slot name="by" />
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script setup>

</script>

<style  scoped></style>