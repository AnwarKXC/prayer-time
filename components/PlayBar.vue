<template>
	<div class="w-full  bg-primary  items-center md:py-2.5 py-1 drop-shadow shadow-primary ">
		<div class="container flex justify-between items-center  gap-y-2  gap-8 flex-wrap">
			<div class="flex items-center gap-3 ">
				<div>
					<Image isrc="/play-bar.png" ialt="logo"
						iclass="md:size-[64px] size-[48px] rounded" />
				</div>
				<div class="divide-y divide-transparent">
					<div class="text-white md:text-[22px]  font-bold font-['Almarai']">سورة أل عمران
					</div>
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

<style scoped></style>
