<template>
  <div class=" grid gap-6 ">


    <!--  ads 1 -->
    <Add1 />







    <!-- search bar -->
    <div class=" relative">
      <div class="bg-white rounded-xl border border-gray-200 flex items-center p-3 gap-[15px] ">

        <Search />
      </div>
    </div>


    <!-- all country -->
    <AllCountries />


    <!-- ad2 -->
    <GoogleAds />


    <!-- all Capital  -->
    <AllCapitals />


    <!-- ad 3 -->
    <PrayerFeature />


    <!-- last add in home page -->
    <Add4 />


  </div>
</template>

<script setup >

// const landing = import.meta.env.VITE_LANDING_PAGE
// const domain = import.meta.env.VITE_DOMAIN
// const { locale } = useI18n()
// const { data: home } = await useFetch( domain + landing + locale.value )

// console.log( home.value.data )
// fetch the cities


</script>