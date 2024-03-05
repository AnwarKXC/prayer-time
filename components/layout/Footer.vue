<template>
    <footer :style=" { backgroundImage: 'url(' + footerBg + ')' } "
        :class=" { 'hidden': !footerBg } " class=" bg-no-repeat bg-cover ">
        <div class=" pt-10  grid gap-5 bg-black bg-opacity-80">
            <div class="container grid gap-6 ">
                <div class="text-center cent__col gap-6">
                    <Logo :source=" props.branding.logo.data.attributes.url " />
                    <span class=" text-white font-medium">{{ $t( 'footerbanner.logoheading' )
                        }}</span>
                    <div class=" cent gap-4">
                        <NuxtLink to=" /"><img src="/svgs/twiiter.svg" alt=""></NuxtLink>
                        <NuxtLink to="/"><img src="/svgs/youtube.svg" alt=""></NuxtLink>
                        <NuxtLink to="/"><img src="/svgs/instagram.svg" alt=""></NuxtLink>
                        <NuxtLink to="/"><img src="/svgs/linked.svg" alt=""></NuxtLink>
                        <NuxtLink to="/"><img src="/svgs/facebook.svg" alt=""></NuxtLink>
                    </div>
                </div>
                <ul class="cent__bet max-sm:justify-center flex-wrap gap-5 text-white ">
                    <li
                        v-for="(                    link, index                    ) in                    props.data.slice( 0, 6 )                  ">
                        <NuxtLink :to=" link.link " class=" flex-1">{{ link.title }}</NuxtLink>
                    </li>

                </ul>
                <div
                    class=" text-sec cent__bet max-sm:grid grid-cols-2 flex-wrap gap-5 gap-y-12 justify-items-center max-md:my-5">
                    <div class="grid gap-3 ">
                        <NuxtLink
                            v-for="               link                in                props.data.slice( 6, 10 )                  "
                            :to=" link.link ">{{
                            link.title }}</NuxtLink>

                    </div>
                    <div class=" grid gap-3">
                        <NuxtLink
                            v-for="                link                in                 props.data.slice( 11, 15 )                  "
                            :to=" link.link ">
                            {{ link.title }}</NuxtLink>
                    </div>
                    <div class="grid gap-3 ">
                        <NuxtLink
                            v-for="               link                in                 props.data.slice( 16, 21 )                  "
                            :to=" link.link ">
                            {{ link.title }}</NuxtLink>
                    </div>

                    <div class="">
                        <Button :buttonText=" $t( 'footerbanner.footerbtn' ) "
                            buttonClass=" btn__primary border-white text-white border " />
                    </div>
                </div>
            </div>
            <div class="w-full h-[.5px] bg-white mt-5"></div>
            <div class=" container pb-5 cent__bet gap-5 max-md:text-sm">
                <a href="#" class="font-medium text-white md:hidden flex-1 ">
                    {{ $t( 'footerbanner.footer_mobile_right' ) }}
                </a>
                <a :href=" props.branding.link_download " target="_blank"
                    class="font-medium text-white max-md:flex-1 hidden md:inline-flex ">
                    {{ props.branding.copy_rights_info}}
                </a>
                <a href="#" class="font-medium text-white max-sm:flex-1 ">
                    {{ $t('footerbanner.footerleft' ) }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps( {
    data: {
        type: Object,
        default: {},
    },
    branding: {
        type: Object,
        default: {},
    },
} )

const footerBg = ref( '/footer-bg.png' )
</script>


<style scoped></style>
