<template>
		<div class="  bg-white rounded-[10px] border border-gray-200 px-4 py-6 grid gap-6">
				<h2 class="h__primary">{{ $t( 'playbanner.heading' ) }}</h2>
				<div class="tracks__grid">
					<TrackCard
						v-for="                   index                    in                    6                  "
						:key=" index ">
						<template v-slot:image>
							<Image isrc="/play-bar.png" ialt="logo" iclass="h-full rounded" />
						</template>
						<template v-slot:title>
							قائمة تشغيل قرأن جديدة
						</template>
						<template v-slot:by>
							ماهر المعيقلي
						</template>
					</TrackCard>
				</div>
			</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>