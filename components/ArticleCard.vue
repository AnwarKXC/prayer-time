<template>
	<div
		class=" grid grid-rows-5 bg-white rounded-xl border border-gray-300 size-full overflow-hidden drop-shadow-sm">
		<div class=" row-span-3">
			<slot name="image" />
		</div>
		<div class="row-span-2 grid gap-2 p-3">
			<div class=" text-zinc-800 text-lg truncate">
				<slot name="title" class="text-center" />
			</div>
			<div class=" text-sm text-zinc-500 line-clamp-3">
				<slot name="paragraph" class="" />
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>