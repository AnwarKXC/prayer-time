
<template>
    <MobileHeaderToggle :modalActive=" modalActive " @close-modal=" toggleModal " />
    <header
        class=" bg-white sticky top-0 z-50  drop-shadow-sm shadow-primary py-2 cent w-full border-b">
        <div class=" container cent__bet ">
            <button class="md:hidden max-md:flex-1" @click=" toggleModal ">
                <Image isrc="/svgs/toggel-mobile-header.svg" ialt="toggel mobile icon header"
                    iclass="" />
            </button>
            <div class=" flex gap-8 items-center">
                <div class="max-md:flex-1 cent md:block">
                    <Logo />
                </div>
                <template v-if=" route.params.country " >
                    <div class=" relative max-md:hidden">
                        <div class=" flex items-center gap-[15px] ">
                            <Search />
                        </div>
                    </div>
                </template>
            </div>
            <div class="max-md:flex justify-end max-md:flex-1 shrink-0">
                <div class="flex gap-10 items-center ">
                    <slot />
                    <div class="hidden md:block">
                        <Button buttonText="header.headerbtn"
                            buttonClass="bg-primary text-white btn__primary  "></Button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>
const route = useRoute()



const modalActive = ref( null )
const toggleModal = () => {
    modalActive.value = !modalActive.value
}

















// import { ref, watch, onMounted } from 'vue'
// // import { useRouter } from 'vue-router'
// import AppButton from '../Button.vue'
// import AppImage from '../Image.vue'
// import { translateText } from '../Translater.vue'

// const langCode = 'ar'
// const currentLang = ref( 'Arabic' )
// if ( process.client && localStorage.getItem( "lang" ) ) {
//     langCode.valueOf = localStorage.getItem( "lang" )
// }
// const targetLanguage = ref( router.params.lg ) // Spanish, change as needed

// const router = useRouter()

// const changeLanguage = ( e ) => {
//     document.documentElement.lang = e
//     localStorage.setItem( 'lang', e )
//     router.push( {
//         params: {
//             lg: e
//         }
//     } )
//     switch ( e ) {
//         case 'ar':
//             currentLang.value = 'Arabic'
//             langCode.valueOf = 'ar'
//             break
//         case 'en':
//             currentLang.value = 'English'
//             langCode.valueOf = 'en'
//             break
//         case 'fr':
//             currentLang.value = 'French'
//             langCode.valueOf = 'fr'
//             break
//         case 'tr':
//             currentLang.value = 'Turkish'
//             langCode.valueOf = 'tr'
//             break
//         case 'id':
//             currentLang.value = 'Indonesia'
//             langCode.valueOf = 'id'
//             break
//     }
// }

// const translate = async () => {
//     try {
//         const originalText = `${ router.params.Country }-${ router.params.City }`
//         const res = await translateText( originalText, langCode.valueOf )
//         const param = res.includes( '-' ) ? res.split( '-' ) : res.split( ' ' )
//         const currentDomain = `${ window.location.protocol }//${ window.location.hostname }${ window.location.port ? `:${ window.location.port }` : '' }`
//         window.location.replace( `${ currentDomain }/country-prayer/${ param[ 0 ] }/${ param[ 1 ] }/${ langCode.valueOf }` )
//     } catch ( error ) {
//         console.error( 'An error occurred during translation:', error )
//     }
// }

// watch( () => router.params.lg, ( newLgValue ) => {
//     langCode.valueOf = newLgValue
//     targetLanguage.value = newLgValue
// } )

// onMounted( () => {
//     switch ( langCode.valueOf ) {
//         case 'ar':
//             currentLang.value = 'Arabic'
//             break
//         case 'en':
//             currentLang.value = 'English'
//             break
//         case 'fr':
//             currentLang.value = 'French'
//             break
//         case 'tr':
//             currentLang.value = 'Turkish'
//             break
//         case 'id':
//             currentLang.value = 'Indonesia'
//             break
//     }
// } )
</script>



