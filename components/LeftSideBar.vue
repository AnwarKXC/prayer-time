<template>
	<div class="lg:sticky top-[104px] grid gap-6 ">
		<div class="  bg-zinc-700 rounded-xl border p-4 grid gap-3 " v-if=" route.params.country ">
			<div class="text-right text-amber-400 text-xl font-bold font-['Almarai']">حديث اليوم</div>
			<div class=" text-right text-gray-300 text-xs font-normal font-['Almarai'] leading-[19px]">
				عن علقمة بن وقاص الليثي، يقول: سمعت عمر بن الخطاب رضي الله عنه على المنبر قال: سمعت رسول
				الله صلى الله عليه وسلم يقول: «إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته
				إلى دنيا يصيبها، أو إلى امرأة ينكحها، فهجرته إلى ما هاجر إليه»</div>
		</div>
		<div
			class=" h-[504px] overflow-y-auto bg-yellow-50 rounded-xl border border-gray-200 px-4 py-6 grid gap-4 ">
			<div class="  text-black text-[23px] font-normal text-center">مساحة إعلانية</div>
			<div class=" text-zinc-500 text-[13px] ">
				لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
				ويُستخدم
				في صناعات المطابع ودور النشر.</div>
		</div>
	</div>
</template>

<script setup>
const route = useRoute()
</script>

<style  scoped></style>