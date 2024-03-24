<template>

	<div class="  bg-white rounded-xl border border-gray-200 grid gap-2  p-4  md:p-5">
		<div class="flex  items-center md:gap-5 gap-2">
			<img class="md:size-[145px] size-[64px]  rounded-xl" :src=" props.playlist.img"
				:alt="img_alt" />
			<div class=" grid md:gap-1.5 gap-0.5
						w-full">
				<div class="flex justify-between items-center w-full">
					<div class="cent gap-2">

						<div class=" cent gap-1">
							<img src="/svgs/play.svg" alt="" class=" max-md:w-4 max-md:h-4">
							<p class="text-amber-300 md:text-[13px] text-[11px] font-normal ">
								&nbsp; {{ props.playlist.count_of_watch}} &nbsp;
								تشغيل
							</p>
						</div>
					</div>
					<PlaylistShare>
						<template v-slot:share>
							{{ domain + '/app/quran/' + props.playlist.slug + '/' + props.playlist.id }}
						</template>
					</PlaylistShare>
				</div>
				<!-- <div class=" text-primary md:text-sm text-xs font-normal  ">
					سورة قريش بصوت :</div> -->
				<div class=" text-neutral-700 md:text-2xl lg:text-3xl text-[14.25px]  font-bold  ">
					{{ props.playlist.title}}</div>
				<div class=" max-md:hidden"><span
						class="text-stone-500 text-xs font-light line-clamp-1 " ref="textClamped">{{
						props.playlist.description}}
					</span>
					<button class="text-primary text-xs font-medium  underline " @click=" seeMore "
						v-if=" props.playlist.description">
						<span v-if=" showMore "> رؤية أقل</span>
						<span v-else>
							رؤيةالمزيد
						</span>
					</button>
				</div>
			</div>
		</div>
		<div class="md:hidden"><span class="text-stone-500 text-xs font-light  ">سورة
				قريش كاملة مصحف الحرم المكي 1439 بجودة عاليه برواية حفص عن عاصم بصوت أئمة الحرم
				المكي استماع أون لاين مع إمكانية النسخ والمشاركة برابط واحد مباشر . </span><span
				class="text-primary text-xs font-medium  underline ">رؤية
				المزيد</span></div>
	</div>

</template>

<script setup>
const route = useRoute()
const domain = import.meta.env.VITE_DOMAIN
import { ref } from 'vue'
const showMore = ref( false )
const textClamped = ref( null )
function seeMore () {
	showMore.value = !showMore.value
	textClamped.value.classList.toggle( 'line-clamp-1' )
}

const props= defineProps( {
	playlist: {
		type: Object,
		default: {},
	},
} )
</script>
