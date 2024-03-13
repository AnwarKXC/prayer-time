<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
const { locale } = useI18n()
const lang = ref( 'ar' )
const language = useCookie( 'language' )
locale.value = language.value || lang.value
const changeLanguage = () => {
  language.value = locale.value
  dir.value = locale.value === 'ar' ? 'rtl' : 'ltr'
}
const dir = ref( locale.value === 'ar' ? 'rtl' : 'ltr' )


const landing = import.meta.env.VITE_LANDING_PAGE
const domain = import.meta.env.VITE_DOMAIN
const { data: landingData } = await useFetch( domain + landing + locale.value )
// console.log( landingData.value.data.attributes.banners_image )
const rightData = landingData.value.data.attributes.banners_image.filter( item => item.location === 'right' && item.active === true )
const leftData = landingData.value.data.attributes.banners_image.filter( item => item.location === 'left' && item.active === true )
const quotsData = landingData.value.data.attributes.quotes.filter( item => item.active === true )

const randomIndexQuotes = Math.floor( Math.random() * quotsData.length )
const randomIndexData = Math.floor( Math.random() * leftData.length )

</script>

<template>
  <div class=" relative" :dir=" dir ">
    <Header :branding=" landingData.data.attributes.branding ">
      <form>
        <div class=" flex items-center md:gap-2 gap-1">
          <label for="" class=" shrink-0">
            <Image isrc="/svgs/locale.svg" ialt="search" iclass="" />
          </label>
          <select v-model="locale" @change=" changeLanguage ">
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="fr">French</option>
            <option value="indo">Indonesia</option>
            <option value="turk">Turkish</option>
          </select>
        </div>
      </form>
    </Header>
    <div class="main__layout container py-6  ">
      <div class="hidden md:block">
        <RightSideBar :data=" rightData " :menu=" landingData.data.attributes.menu " />
      </div>
      <NuxtPage />
      <div class=" hidden lg:block">
        <LeftSideBar :data=" leftData[ randomIndexData ] "
          :quotes=" quotsData[ randomIndexQuotes ] " />
      </div>
    </div>
    <div class=" sticky bottom-0">
      <PlayBar />
    </div>
    <Footer :data=" landingData.data.attributes.footer "
      :branding=" landingData.data.attributes.branding " />
  </div>
</template>
