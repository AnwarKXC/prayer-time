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


const modalActive = ref( null )

// Toggle modal function
const toggleModal = () => {
  modalActive.value = !modalActive.value
}






const landing = import.meta.env.VITE_LANDING_PAGE
const domain = import.meta.env.VITE_DOMAIN
const { data: landingData } = await useFetch( domain + landing + locale.value )
// console.log( landingData.value.data.attributes.banners_image )
const rightData = landingData.value?.data?.attributes?.banners_image?.filter( item => item.location === 'right' && item.active === true ) || []
const leftData = landingData.value?.data?.attributes?.banners_image?.filter( item => item.location === 'left' && item.active === true ) || []
const quotsData = landingData.value?.data?.attributes?.quotes?.filter( item => item.active === true ) || []

const randomIndexQuotes = quotsData.length > 0 ? Math.floor( Math.random() * quotsData.length ) : 0
const randomIndexData = leftData.length > 0 ? Math.floor( Math.random() * leftData.length ) : 0

</script>

<template>
  <div class=" relative" :dir=" dir ">
  <NuxtLoadingIndicator/>
    <template v-if=" landingData ">
      <Header :branding=" landingData.data.attributes.branding " >
        <template v-slot:mobile>
          <MobileHeaderToggle :modalActive=" modalActive " @close-modal=" toggleModal "
            :logo=" landingData.data.attributes.branding?.logo?.data?.attributes?.url || '' ">
            <template v-if=" rightData.length ">
              <RightSideBar :data=" rightData " :menu=" landingData.data.attributes.menu "
                :branding=" landingData.data.attributes.branding " />
            </template>
          </MobileHeaderToggle>
        </template>
        <template v-slot:toggle>
          <button class="md:hidden max-md:flex-1" @click=" toggleModal ">
            <Image isrc="/svgs/toggel-mobile-header.svg" ialt="toggel mobile icon header"
              iclass="" />
          </button>
        </template>
        <template v-slot:locale>
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
        </template>

      </Header>
    </template>







    <div v-if=" landingData && landingData.data && landingData.data.attributes "
      class="main__layout container py-6  ">
      <div v-if=" rightData.length " class="hidden md:block">
        <RightSideBar :data=" rightData " :menu=" landingData.data.attributes.menu "
          :branding=" landingData.data.attributes.branding " />
      </div>

      <NuxtPage />


      <div v-if=" leftData.length " class=" hidden lg:block">
        <LeftSideBar :data=" leftData[ randomIndexData ] "
          :quotes=" quotsData[ randomIndexQuotes ] " />
      </div>
      <div v-else>
      </div>
    </div>


      <div class=" sticky bottom-0">
        <PlayBar />
      </div>
  

    <div v-if=" landingData && landingData.data && landingData.data.attributes ">
      <Footer :data=" landingData.data.attributes.footer "
        :branding=" landingData.data.attributes.branding " />
    </div>


  </div>
</template>
