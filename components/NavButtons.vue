<template>
	<div class=" h-[244px]   rounded-xl border border-gray-200  relative overflow-hidden ">
		<ul class="bg-white grid grid-rows-4 h-[244px]">
			<li class="border-b border-gray-200  flex p-1.5  ">
				<NuxtLink to="/"
					class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group ">
					<Image isrc="/svgs/prayer.svg" ialt="ads"
						iclass="group-hover:hidden  w-[17px] h-[29px]" />
					<Image isrc="/svgs/prayer-non.svg" ialt="ads"
						iclass="group-hover:block hidden  w-[17px] h-[29px]" />
					<Button buttonText="sidebar.item" buttonClass=" btn__primary">
					</Button>
				</NuxtLink>
			</li>
			<li class="border-b border-gray-200  flex p-1.5  ">
				<NuxtLink to="/"
					class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group ">
					<Image isrc="/svgs/quran.svg" ialt="ads"
						iclass="group-hover:hidden  w-[17px] h-[29px]" />
					<Image isrc="/svgs/quran-non.svg" ialt="ads"
						iclass="group-hover:block hidden  w-[17px] h-[29px]" />
					<Button buttonText="sidebar.item1" buttonClass=" btn__primary">
					</Button>
				</NuxtLink>
			</li>
			<li class=" border-gray-200  flex p-1.5  ">
				<NuxtLink to="/"
					class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group ">
					<Image isrc="/svgs/hegry.svg" ialt="ads"
						iclass="group-hover:hidden  w-[17px] h-[29px]" />
					<Image isrc="/svgs/hegry-non.svg" ialt="ads"
						iclass="group-hover:block hidden  w-[17px] h-[29px]" />
					<Button buttonText="sidebar.item2" buttonClass=" btn__primary">
					</Button>
				</NuxtLink>
			</li>

			<li class=" border-gray-200 cent  p-2  bg-[#FCD364] bg-opacity-60">
				<NuxtLink to="/" class="cent  w-full  gap-3 px-2">
					<Image isrc="/svgs/download-side.svg" ialt="ads" iclass=" h-[38px] w-[38px]" />
					<Button buttonText="sidebar.download" buttonClass=" font-semibold text-yellow-950 ">
					</Button>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>