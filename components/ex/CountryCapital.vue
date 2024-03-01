<template>
    <div class="content-widget">
        <div class="row p-lg-4 py-3">
            <div class="col-lg-12">
                <h3 class="fw-700 text-theme rtl mt-1">{{ $t('citiescounrybanner.heading') }}</h3>
            </div>
            <div class="country-capital mt-3">
                <div v-for="cap in Capital">
                    <router-link
                        :to="'/country-prayer/' + cap.country_info[0].name?.replace(' ', '_')?.trim() + '/' + cap.name?.replace(' ', '_')?.trim() + '/' + this.langCode"
                        style="text-decoration: none;color: #333333;">
                        <div class="country-capital-item">
                            {{ truncateText(cap.name, 19) }}
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <div class="capital-pagination d-lg-none">
                <div class="capital-pagination-arrow-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.0242 12.4244C9.7899 12.6587 9.41 12.6587 9.17569 12.4244L4.75142 8.0001L9.17569 3.57583C9.41 3.34152 9.7899 3.34152 10.0242 3.57583C10.2585 3.81015 10.2585 4.19005 10.0242 4.42436L6.44848 8.0001L10.0242 11.5758C10.2585 11.8101 10.2585 12.19 10.0242 12.4244Z"
                            fill="#1E4D45" />
                    </svg>
                </div>
                <div class="capital-pagination-arrow-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.97578 3.57564C6.2101 3.34132 6.59 3.34132 6.82431 3.57564L11.2486 7.9999L6.82431 12.4242C6.59 12.6585 6.2101 12.6585 5.97578 12.4242C5.74147 12.1899 5.74147 11.81 5.97578 11.5756L9.55152 7.9999L5.97578 4.42417C5.74147 4.18985 5.74147 3.80995 5.97578 3.57564Z"
                            fill="#1E4D45" />
                    </svg>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>

import { apiUrl } from '../api.js';

export default {
    data() {
        return {
            Capital: [],
            countryName: '',
            langCode: this.$route.params.lg
        }
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            } else {
                return text.slice(0, maxLength) + "...";
            }
        },
        fetchCityWithCountryData() {
            var country = this.$route.params.Country;
            var country2 = country.replace(' ', '-')
            const e = localStorage.getItem('lang')
            axios.get(`${apiUrl}/api/get-cities-country/${country2}/${e}`)
                .then((response) => {
                    this.Capital = response.data.cities;
                    // this.countryName = response.data.cities[0].country_info.name;
                    // console.log(response.data.cities[0].country_info.flag_image);
                    // console.log('Cities With Countries', this.Capital);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        },
    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.fetchCityWithCountryData();
        },
        '$route.params.Country': function () {
            this.fetchCityWithCountryData();
        },
        '$route.params.City': function () {
            this.fetchCityWithCountryData();
        },
        '$route.params': function () {
            this.fetchCityWithCountryData();
        }
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.fetchCityWithCountryData();
    }
}
</script>
