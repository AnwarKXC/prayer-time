<template>
	<div
		class=" w-full  bg-white rounded-xl border border-gray-300 grid grid-cols-5 gap-3 p-3 hover:bg-primary group">
		<div class=" cent ">
			<slot name="image" />
		</div>
		<div class=" flex items-center col-span-4 ">
			<div class="grid gap-1.5 w-full ">
				<div
					class="group-hover:text-neutral-200 text-zinc-800 font-semibold max-md:text-[13px]">
					<slot name="title" />
				</div>
				<div
					class=" flex justify-between gap-4 w-full group-hover:text-neutral-400 text-neutral-500">
					<slot name="share">

					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped></style>