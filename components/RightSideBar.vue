<template>
	<div class=" lg:sticky top-[104px] ">
		<div class=" grid gap-6 ">
			<div class="   rounded-xl border border-gray-200  relative overflow-hidden ">
				<ul class="bg-white grid grid-rows-4 ">
					<li class="border-b border-gray-200  flex p-1.5  ">
						<NuxtLink to="/"
							class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group "
							:class=" route.name ==='index'? 'bg-primary text-white' : '' ">
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
							:class=" route.name === 'country-id-city' ? 'bg-primary text-white' : '' "
							class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group ">
							<Image isrc="/svgs/quran.svg" ialt="ads"
								iclass="group-hover:invert  w-[17px] h-[29px]"
								:class=" route.name === 'country-id-city' ? 'invert' : '' " />

							<Button buttonText="sidebar.item1" buttonClass=" btn__primary">
							</Button>
						</NuxtLink>
					</li>

					<!-- cp data loop -->


					<li v-for="( item ) in      props.menu   "
						class=" border-gray-200  flex p-1.5  border-b">
						<NuxtLink :to=" '/' + item.link "
							:class=" route.path === `/${ item.link }` ? 'bg-primary text-white' : '' "
							class=" flex items-center px-5 hover:bg-primary w-full hover:text-white duration-300 rounded-xl group ">
							<img :src=" domain + item.icon.data.attributes.url " alt=""
								class="group-hover:invert   w-[17px] h-[29px]"
								:class=" route.path === `/${ item.link }` ? 'invert' : '' ">
							<span class="btn__primary">{{ item.title }}</span>
						</NuxtLink>
					</li>


					<li class=" border-gray-200 cent  p-2  bg-[#FCD364] bg-opacity-60">
						<NuxtLink to="/" class="cent  w-full  gap-3 px-2">
							<Image isrc="/svgs/download-side.svg" ialt="ads" iclass=" h-[38px] w-[38px]" />
							<Button buttonText="sidebar.download"
								buttonClass=" font-semibold text-yellow-950 ">
							</Button>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="h-full bg-white rounded-xl border border-gray-200 p-4  grid gap-4">
				<NuxtLink :to=" props.data[ 0 ].link ">
					<img :src=" domain + props.data[ 0 ].image.data.attributes.url "
						:alt=" props.data[ 0 ].image.data.attributes.alternativeText "
						class=" h-full rounded">
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
const domain = import.meta.env.VITE_DOMAIN
const route = useRoute()
console.log(route)
const props = defineProps( {
	data: {
		type: Object,
		default: {},
	},
	menu: {
		type: Object,
		default: {},

	}
} )

</script>

<style scoped></style>