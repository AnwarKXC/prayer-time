<template>
	<div class=" flex justify-center items-center gap-1 shrink-0 ">
		<div v-if=" showCopyMessage " class="text-slate-600 text-xs group-hover:text-slate-200 ">
			Copied
			!</div>
		<button v-else @click=" copyTitle " class=" p-2">
			<img src="/svgs/copy.svg" alt=""
				class=" group-hover:brightness-150 hover:scale-110  duration-200 size-[18px]">
			<div class=" hidden" ref="titleToCopy">
				<slot name="share" />
			</div>
		</button>
		<button @click=" toggleModal " class=" p-2">
			<img src="/svgs/share.svg" alt=""
				class=" group-hover:brightness-150 duration-200 hover:scale-110  size-[18px] ">
		</button>
	</div>
	<Modal :modalActive=" modalActive " @close-modal=" toggleModal ">
		<div
			class=" bg-white rounded-[27px]   gap-8 p-6 md:p-8 grid flex-wrap md:min-w-[450px] max-w-[576px]">
			<div class=" flex justify-between gap-4 items-center">
				<div class="text-primary text-base font-bold font-['Almarai'] leading-tight">مشاركة
				</div>
				<button @click=" toggleModal "><img src="/svgs/close.svg" alt=""></button>
			</div>
			<div class="share__modal__grid">
				<button v-for="(         item, index         ) in          share         "
					:key=" index " class="grid gap-2 ">
					<div
						:class=" 'size-[72px] max-md:size-[50px] ' + item.bgColor + ' bg-opacity-[13%] rounded-full cent' ">
						<img :src=" item.icon " alt="">
					</div>
					<div class="text-teal-900 text-xs font-normal font-['Inter'] leading-[15px]">
						{{ item.label }}
					</div>
				</button>
			</div>
			<div
				class="text-center text-slate-600 text-opacity-50 text-xs font-bold font-['Almarai'] leading-[15px]">
				أو مشاركة الرابط</div>
			<div
				class="h-[53px] bg-neutral-400 bg-opacity-5 rounded-2xl flex justify-between items-center px-4 overflow-hidden ">
				<div
					class="  text-slate-600 text-opacity-50 text-sm font-normal font-['Inter'] line-clamp-1  overflow-x-auto hide__scroll text-left "
					dir="ltr" ref="titleToCopy">
					<slot name="share" />
				</div>
				<div class=" shrink-0 rtl:pr-3 ltr:pl-3">
					<div v-if=" showCopyMessage " class="text-slate-600 text-sm">Copied !</div>
					<button v-else @click=" copyTitle "><img src="/svgs/copy-alt.svg" alt="">
					</button>
				</div>

			</div>
		</div>

	</Modal>
</template>

<script setup>
const titleToCopy = ref( null )
const showCopyMessage = ref( false )

const copyTitle = () => {
	const title = titleToCopy.value.innerText
	navigator.clipboard.writeText( title )
		.then( () => {
			showCopyMessage.value = true
			setTimeout( () => {
				showCopyMessage.value = false
			}, 2000 ) // Hide message after 2 seconds
		} )
		.catch( ( error ) => {
			console.error( 'Failed to copy title: ', error )
		} )
}



const modalActive = ref( null )
const toggleModal = () => {
	modalActive.value = !modalActive.value
}


const share = [
	{ icon: "/svgs/alternate_email.svg", label: "E-mail", bgColor: "bg-sec", link: '' },
	{ icon: "/svgs/whatsapp.svg", label: "Whatsapp", bgColor: "bg-slate-600", link: '' },
	{ icon: "/svgs/twitter-alt.svg", label: "Twitter", bgColor: "bg-slate-600", link: '' },
	{ icon: "/svgs/telegram-alt.svg", label: "Telegram", bgColor: "bg-slate-600", link: '' },
	{ icon: "/svgs/comment.svg", label: "Chat", bgColor: "bg-slate-600", link: '' },
	{ icon: "/svgs/alternate_share.svg", label: "المزيد", bgColor: "bg-slate-600", link: '' }
]
</script>
