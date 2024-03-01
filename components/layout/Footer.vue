<template>
    <footer :style=" { backgroundImage: 'url(' + footerBg + ')' } " :class=" { 'hidden': !footerBg } "
        class=" bg-no-repeat bg-cover ">
        <div class=" pt-10  grid gap-5 bg-black bg-opacity-80">
            <div class="container grid gap-6 ">
                <div class="text-center cent__col gap-6">
                    <Logo />
                    <span class=" text-white font-medium">{{ $t( 'footerbanner.logoheading' ) }}</span>
                </div>
                <ul class="cent__bet max-sm:justify-center flex-wrap gap-5 text-white ">
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link6' ) }}</a></li>
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link5' ) }}</a></li>
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link4' ) }}</a></li>
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link3' ) }}</a></li>
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link2' ) }}</a></li>
                    <li><a href="#" class=" flex-1">{{ $t( 'footerbanner.link1' ) }}</a></li>
                </ul>
                <div
                    class=" text-sec cent__bet max-sm:grid grid-cols-2 flex-wrap gap-5 gap-y-12 justify-items-center max-md:my-5">
                    <div class="grid gap-3 ">
                        <a href="#" class="">{{ $t( 'footerbanner.para7' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para8' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para9' ) }}</a>
                    </div>
                    <div class=" grid gap-3">
                        <a href="#" class="">{{ $t( 'footerbanner.para4' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para5' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para6' ) }}</a>
                    </div>
                    <div class="grid gap-3 ">
                        <a href="#" class="">{{ $t( 'footerbanner.para1' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para2' ) }}</a>
                        <a href="#" class="">{{ $t( 'footerbanner.para3' ) }}</a>
                    </div>

                    <div class="">
                        <AppButton :buttonText=" $t( 'footerbanner.footerbtn' ) "
                            buttonClass=" btn__primary border-white text-white border " />
                    </div>
                </div>
            </div>
            <div class="w-full h-[.5px] bg-white mt-5"></div>
            <div class=" container pb-5 cent__bet gap-5 max-md:text-sm">
                <a href="#" class="font-medium text-white md:hidden flex-1 ">{{ $t(
                    'footerbanner.footer_mobile_right' ) }}
                </a>
                <a href="#" class="font-medium text-white max-md:flex-1 hidden md:inline-flex ">{{ $t(
                    'footerbanner.footerright' ) }}
                </a>
                <a href="#" class="font-medium text-white max-sm:flex-1 ">{{ $t(
                    'footerbanner.footerleft' ) }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../Button'


const footerBg = ref( '/footer-bg.png' )
const footerMobileBg = ref( '' )

// You can assign values to ref variables here if needed

</script>


<style scoped ></style>
