<template>
    <div class="content-widget d-flex gap-3 p-3 search-widget">
        <div class="position-relative w-100 d-flex align-items-center gap-lg-3 gap-2">
            <div class="location__icon w-mxc" data-bs-toggle="modal" data-bs-target="#locationModel">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_96_3994)">
                        <path
                            d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.7135 8.97212 19.8042 7.08154 18.3613 5.63869C16.9185 4.19585 15.0279 3.28651 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C8.97212 3.28651 7.08154 4.19585 5.63869 5.63869C4.19585 7.08154 3.28651 8.97212 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.28651 15.0279 4.19585 16.9185 5.63869 18.3613C7.08154 19.8042 8.97212 20.7135 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C15.0279 20.7135 16.9185 19.8042 18.3613 18.3613C19.8042 16.9185 20.7135 15.0279 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_96_3994">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="search__bar">
                <span>
                    <AppImage :imageSrc="search_icon" alt="Search" />
                </span>
                <AppInput InputType="text" @keyup="handleSearchCountry" :InputValue="this.IpAddress" inputClass="src_input"
                    :placeholder="$t('searchbar.searchtext1')" />
            </div>
            <div v-if="showDiv === true" class="search-country-div">
                <span @click="this.showDiv = false" style="cursor: pointer;position: absolute;left: 15px;top: 10px;"><i
                        class="fa fa-close"></i></span>
                <!-- <div class="search-province">
                    <div>
                        <AppInput InputType="text" @keyup="handleCitySearch" :placeholder="$t('searchbar.searchtext2')" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.75 9C3.75 6.1005 6.1005 3.75 9 3.75C11.8995 3.75 14.25 6.1005 14.25 9C14.25 11.8995 11.8995 14.25 9 14.25C6.1005 14.25 3.75 11.8995 3.75 9ZM9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C10.5938 15.75 12.0585 15.1976 13.2133 14.2739L16.7192 17.7799C17.0121 18.0728 17.487 18.0728 17.7799 17.7799C18.0728 17.487 18.0728 17.0121 17.7799 16.7192L14.2739 13.2133C15.1976 12.0585 15.75 10.5938 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25Z"
                                fill="#8A9099" />
                        </svg>
                    </div>
                </div> -->
                <ul class="country-province-result">
                    <div v-if="search_one === true">
                        <div class="scroll_prov">
                            <div v-for="item in searchCountry[0].cities" :key="item.name">
                                <router-link
                                    :to="`/country-prayer/` + searchCountry[0]?.name?.replace(' ', '_')?.trim() + '/' + item?.name?.replace(' ', '_')?.trim() + '/' + this.langCode">
                                    <AppImage :imageSrc="country_image + this.searchCountry[0].flag_image" />
                                    <span>{{ item?.name }}</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div v-if="search_tow === true">
                        <div class="scroll_prov" v-for="item in searchCity" :key="item.created_at">
                            <router-link
                                :to="`/country-prayer/` + item.country_info[0]?.name?.replace(' ', '_')?.trim() + '/' + item?.name?.replace(' ', '_')?.trim() + '/' + this.langCode">
                                <AppImage :imageSrc="country_image + item?.country_info[0].flag_image" />
                                <span>{{ item?.name }}</span>
                            </router-link>
                        </div>
                    </div>
                    <!-- <div v-if="search_tow === true">
                        <div v-for="city in searchCity" class="mb-2">
                            <router-link :to="`/country-prayer/` + city?.country_info.name + '/' + city?.name  + '/' + this.langCode">
                                <AppImage :imageSrc="country_image + city?.country_info.flag_image" />
                                <span>{{ city?.name  }}</span>
                            </router-link>
                        </div>
                    </div> -->
                </ul>
            </div>
        </div>
    </div>
    <div class="content-widget mx-sm-0 rounded-sm-0">
        <div class=" row all-country-section">
            <div class="col-lg-12 flex-wrap">
                <div class="country-heading">
                    <h2 class="text-theme fw-700">{{ $t('allcountries.heading') }}</h2>
                </div>
                <div class="all-country-list">
                    <ul class="flex-wrap">
                        <li v-for="reg in Regions" :key="reg.id" @click="updateCountry(reg.region_id)"
                            :class="{ 'active-region': get_country_by_region === reg.region_id }">
                            {{ reg.name }}
                        </li>
                        <!-- <li @click="updateCountry(5)" :class="{ 'active-region': get_country_by_region === 5 }">{{
                            $t('allcountries.country1') }}</li>
                        <li @click="updateCountry(3)" :class="{ 'active-region': get_country_by_region === 3 }">{{
                            $t('allcountries.country2') }}</li>
                        <li @click="updateCountry(4)" :class="{ 'active-region': get_country_by_region === 4 }">{{
                            $t('allcountries.country3') }}</li>
                        <li @click="updateCountry(1)" :class="{ 'active-region': get_country_by_region === 1 }">{{
                            $t('allcountries.country4') }}</li>
                        <li @click="updateCountry(7)" :class="{ 'active-region': get_country_by_region === 7 }">{{
                            $t('allcountries.country5') }}</li>
                        <li @click="updateCountry(6)" :class="{ 'active-region': get_country_by_region === 6 }">{{
                            $t('allcountries.country6') }}</li> -->
                    </ul>
                    <!-- get_country_by_region -->
                </div>
            </div>
            <div class="col-lg-12">
                <div class="w-100">
                    <div class="all-countries">
                        <div class="selected-region-country" v-for="item in paginatedCountries" :key="item.name">
                            <router-link
                                :to="`/country-prayer/${item.name?.replace(' ', '_')?.trim()}/${item.capital?.replace(' ', '_')?.trim()}/` + this.langCode">
                                <AppImage :imageSrc="country_image + item.flag_image" />
                                <span>{{ truncateText(item.name, 19) }}</span>
                            </router-link>
                        </div>
                        <!-- <div class="selected-region-country" v-for="item in paginatedCountries" :key="item.name"v-if="this.$route.params.City">
                            <div
                                @click="navigateWithCountry('/country-prayer/' + item.name + '/' + item.capital + '/' + this.langCode)">
                                <AppImage :imageSrc="country_image + item.flag_image" />
                                <span>{{ truncateText(item.name, 19) }}</span>

                            </div>
                        </div> -->


                    </div>
                    <div class="countries-pagination" v-if="this.countrylist.length > 21">
                        <div class="">
                            <button class="country-pagination-arrow-left" @click="previousPage"
                                :disabled="currentPage === 1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.0235 12.4242C9.78917 12.6586 9.40927 12.6586 9.17495 12.4242L4.75069 7.99998L9.17495 3.57571C9.40927 3.3414 9.78917 3.3414 10.0235 3.57571C10.2578 3.81003 10.2578 4.18992 10.0235 4.42424L6.44775 7.99998L10.0235 11.5757C10.2578 11.81 10.2578 12.1899 10.0235 12.4242Z"
                                        fill="#1E4D45" />
                                </svg>
                            </button>
                        </div>
                        <ul>
                            <li v-for="page in totalPages" :key="page">
                                <span @click="goToPage(page)" :class="{ active: page === currentPage }">
                                    {{ page }}
                                </span>
                            </li>
                        </ul>
                        <div class="">
                            <button class="country-pagination-arrow-right" @click="nextPage"
                                :disabled="currentPage === totalPages">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.97652 3.57576C6.21083 3.34145 6.59073 3.34145 6.82505 3.57576L11.2493 8.00002L6.82505 12.4243C6.59073 12.6586 6.21083 12.6586 5.97652 12.4243C5.7422 12.19 5.7422 11.8101 5.97652 11.5758L9.55225 8.00002L5.97652 4.42429C5.7422 4.18997 5.7422 3.81007 5.97652 3.57576Z"
                                        fill="#8A9099" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span id="pre" style="display: none;">
        <div class="pre_loader">
            <AppImage :src="loader" />
        </div>
    </span>

    <!-- Modal -->
    <div class="modal fade" id="locationModel" tabindex="-1" aria-labelledby="locationModelLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="d-flex location-content justify-content-center">
                        <div class="w-mxc">
                            <AppImage :imageSrc="mobileImg" />
                        </div>
                        <div class="w-mxc d-flex align-items-center text-lg-end text-center mt-lg-0 mt-3">
                            <div class="px-lg-5">
                                <h3 class="fw-700">{{ $t('location.locationtext') }}</h3>
                                <div class="location-button mt-4 pt-3">
                                    <AppButton buttonText="location.buttongreen" data-bs-dismiss="modal" @click="getIpadd"
                                        buttonClass="fw-700" />
                                    <div data-bs-dismiss="modal">
                                        <AppButton buttonText="location.buttonwhite" buttonClass="location-btn1 fw-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import AppImage from '../Components/Image.vue'
import AppInput from './Input.vue'
import AppButton from './Button.vue'
import axios from 'axios';
import { apiUrl } from '../api.js';

export default {
    data() {
        return {
            loaderStatus: false,
            loader: '/loader.gif',
            search_icon: '/templates/images/Search.svg',
            country_image: '/countryFlags/',
            country_Flag: '/templates/countries/uae.png',
            mobileImg: '/templates/images/modal-mobile.jpg',
            showDiv: false,
            countrylist: [],
            itemsPerPage: 21,
            currentPage: 1,
            searchCountry: [],
            searchCity: [],
            search_one: false,
            search_tow: false,
            get_country_by_region: 1,
            CountryId: '',
            IpAddress: '',
            langCode: this.$route.params.lg,
            Regions: [],
            flag_image: ''
        }
    },
    components: {
        AppInput,
        AppImage,
        AppButton
    },
    computed: {
        totalPages() {
            return Math.ceil(this.countrylist.length / this.itemsPerPage);
        },
        paginatedCountries() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.countrylist.slice(start, end);
        },
    },
    methods: {
        getRegions() {
            const e = localStorage.getItem('lang');

            axios.get(`${apiUrl}/api/regions/${e}`)
                .then((response) => {
                    this.Regions = response.data.regions;
                    // console.log(response.data.regions[0].position + "These are regions");
                    this.updateCountry(response.data.regions[0].region_id);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        },
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            } else {
                return text.slice(0, maxLength) + "...";
            }
        },
        // handleSearchCountry(e) {
        //     const lg = localStorage.getItem('lang');
        //     var searchValue = e.target.value;
        //     if (searchValue.length > 0) {
        //         axios.get(`${apiUrl}/api/search/${lg}/${searchValue}`)
        //             .then((response) => {
        //                 this.searchCountry = response.data.countries;
        //                 console.log(response.data.countries);
        //                 this.flag_image = response.data.countries[0].flag_image;
        //                 // console.log(this.flag_image,'flag');
        //                 this.CountryId = response.data.countries[0].country_id;
        //                 if (response.data.countries[0].cities) {
        //                     this.search_one = true;
        //                     this.showDiv = true;
        //                     // console.log(response.data.countries);
        //                 } else {
        //                     this.search_one = false;
        //                     this.showDiv = false;
        //                 }
        //                 // if (response.data.countries[0].cities) {
        //                 //     this.search_one = true;
        //                 //     this.search_tow = false;
        //                 //     this.showDiv = true;
        //                 //     // console.log(response.data.countries, 'one');
        //                 // } else {
        //                 //     console.log('else');
        //                 //     this.search_tow = true;
        //                 //     this.search_one = false;
        //                 //     this.showDiv = true;
        //                 //     // console.log(response.data.countries, 'tow');
        //                 // }
        //                 // console.log(response.data.countries[0].cities.length,response.data.countries.length);
        //                 // if (response.data.countries[0].cities.length) {
        //                 //     this.showDiv = false;
        //                 //     console.log('by');
        //                 // }
        //             })
        //             .catch((error) => {
        //                 this.showDiv = false;
        //                 // console.log('ghee');
        //                 // console.error('Error fetching data:', error);
        //             });
        //     } else {
        //         this.search_one = false;
        //         this.showDiv = false;
        //     }
        // },
        async handleSearchCountry(e) {
            const lg = localStorage.getItem('lang');
            var searchValue = e.target.value;
            try {
                var res_one = await axios.get(`${apiUrl}/api/new-country-api/${searchValue}/${lg}`);
                var res_tow = await axios.get(`${apiUrl}/api/new-city-api/${searchValue}/${lg}`);
                // console.log(, 'city');
                if (res_one.data.countries.length > 0) {
                    this.searchCountry = res_one.data.countries;
                    // console.log(res_one.data.countries, 'country');
                    this.search_one = true
                    this.search_tow = false
                    this.showDiv = true
                } else if (res_tow.data.cities.length > 0) {
                    this.searchCity = res_tow.data.cities;
                    // console.log(res_tow.data.cities, 'cities');
                    this.search_tow = true
                    this.search_one = false
                    this.showDiv = true
                } else {
                    this.search_one = false
                    this.search_tow = false
                    this.showDiv = false;
                }
            } catch (error) {
                this.showDiv = false;
            }
        },
        handleCitySearch(e) {
            var search = e.target.value;
            const lg = localStorage.getItem('lang');
            if (search.length > 0) {
                axios.get(`${apiUrl}/api/city-search/${this.CountryId}/${lg}/${search}`)
                    .then((response) => {
                        this.searchCity = response.data;
                        // console.log(response.data.cities);
                        this.search_tow = true;
                        this.search_one = false;

                    })
                    .catch((error) => {
                        // console.error('Error fetching data:', error);

                    });
            } else {
                this.search_tow = false;
                this.search_one = true;
            }

        },
        updateCountry(regionId) {
            this.get_country_by_region = regionId;
            this.fetchData(); // Fetch new data when the regionId is updated
        },
        fetchData() {
            const e = localStorage.getItem('lang');
            // console.log('hit hai');
            axios.get(`${apiUrl}/api/countries/${this.get_country_by_region}/${e}`).then(response => {

                // console.log(response.data.countries);
                this.countrylist = response.data.countries;
                // console.log(response.data.countries);
            })
                .catch(error => {
                    // Handle the error here
                    // console.error('Error fetching data:', error);
                });

        },
        getIpadd() {
            document.getElementById('pre').style.display = 'block';
            axios.get(`${apiUrl}/api/get-ip/`).then(reponse => {
                let data = reponse.data
                setTimeout(() => {
                    this.$router.push('/country-prayer/' + data.geoplugin_countryName + '/' + data.geoplugin_city + '/' + this.langCode);
                    document.getElementById('pre').style.display = 'none';
                }, 1000);
            })
                .catch(error => {
                    // console.error('There was a problem with the fetch operation:', error);
                });
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToPage(page) {
            this.currentPage = page;
        },
    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.fetchData();
            this.getRegions();
        },
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.fetchData();
        this.getRegions();
    },


}

</script>
