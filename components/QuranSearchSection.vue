<template>

	<div class="grid gap-6 py-6 px-4 bg-white rounded-xl border border-gray200">

		<form action="" class="relative">
			<input type="search" name="" class=" w-full  rtl:pl-12 ltr:pr-12"
				:placeholder=" $t( 'suratbanner.seacrhbar' ) ">
			<button type="submit">
				<img src="/svgs/Search.svg" alt=""
					class="absolute rtl:left-1.5 ltr:right-1.5 top-2 rounded-xl bg-white ltr:scale-x-[-1] transform p-2">
			</button>
		</form>





		<div class="tracks__grid">
			<div v-for="(          item, index          ) in           9          " :key=" index "
				class="  bg-white rounded-xl border border-gray-200 flex items-center p-3 gap-2">
				<div class="size-6 shrink-0 bg-amber-300 rounded-full cent text-primary text-sm">
					<span>{{ index + 1 }}</span>
				</div>
				<div class=" grid gap-1  w-full">
					<div class="flex justify-between items-center">
						<div class="text-zinc-700 text-base font-semibold max-md:text-[13px]">سورة أل
							عمران
						</div>
						<div class="text-neutral-400 text-sm font-normal ">2.20.00
						</div>
					</div>
					<div class="flex justify-between items-center ">
						<div class="text-teal-900 md:text-sm text-xs font-normal">ماهر المعيقلي
						</div>
						<div class=" cent gap-3">
							<button>
								<img src="/svgs/play.svg" alt="" class=" w-4 h-4">
							</button>
							<button>
								<img src="/svgs/copy.svg" alt="" class=" w-4 h-4">
							</button>
							<button>
								<img src="/svgs/share.svg" alt="" class=" w-4 h-4">
							</button>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>

</template>

<script setup>

</script>
