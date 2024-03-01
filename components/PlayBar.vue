<template>
	<div class="w-full  bg-primary  items-center py-2 drop-shadow shadow-primary ">
		<div class="container grid md:grid-cols-3 md:gap-6 gap-2">
			<div class="flex items-center gap-3">
				<div>
					<Image isrc="/play-bar.png" ialt="logo" iclass="md:size-[64px] size-[48px] rounded" />
				</div>
				<div class="divide-y divide-transparent">
					<div class="text-white md:text-[22px]  font-bold font-['Almarai']">سورة أل عمران</div>
					<div class="text-zinc-300 md:text-lg text-sm font-normal">ماهر المعيقلي</div>
				</div>
			</div>
			<!-- (B) AUDIO PLAYERS -->
			<PlayControl />

		</div>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>


