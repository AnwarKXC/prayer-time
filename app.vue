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




</script>

<template>
  <div class=" relative" :dir=" dir ">
    <Header>

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
        <RightSideBar />
      </div>
      <NuxtPage />
      <div class=" hidden lg:block">
        <LeftSideBar />
      </div>
    </div>

    <div class=" sticky bottom-0">
      <PlayBar />
    </div>
    <Footer />
  </div>
</template>

