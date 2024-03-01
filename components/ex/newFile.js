import axios from 'axios';
import { apiUrl } from '../api.js';

export default (await import('vue')).defineComponent({
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
            searchCountry: [],
            searchCity: [],
            search_one: false,
            search_tow: false,
            get_country_by_region: 1,
            CountryId: '',
            IpAddress: '',
            langCode: '',
            Regions: []
        };
    },
    components: {
        AppInput,
        AppImage,
        AppButton
    },

    methods: {
        async getRegions(e) {
            try {
                const response = await axios.get(`${apiUrl}/api/regions/${e}`);
                this.Regions = response.data.regions;
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async handleSearchCountry(e) {
            var searchValue = e.target.value;
            if (searchValue !== '') {

                try {
                    const response = await axios.get(`${apiUrl}/api/search/${searchValue}/${this.langCode}`);
                    this.searchCountry = response.data;
                    this.CountryId = response.data.countries.country_id;
                    this.search_one = true;
                } catch (error) {
                    this.search_one = false;
                    // console.error('Error fetching data:', error);
                }

                this.showDiv = true;
            } else {
                this.showDiv = false;
            }
        },

        async handleCitySearch(e) {
            var search = e.target.value;
            try {
                const response = await axios.get(`${apiUrl}/api/city-search/${this.CountryId}/${this.langCode}/${search}`);
                this.searchCity = response.data.cities;
                this.search_tow = true;
                this.search_one = false;
                // console.log(response.data.cities);
            } catch (error) {
                // console.error('Error fetching data:', error);
                this.search_tow = false;
                this.search_one = true;

            }
        },
        async updateCountry(regionId) {
            this.get_country_by_region = regionId;
            await this.fetchData(); // Fetch new data when the regionId is updated
        },
        async fetchData(e) {
            try {
                const response = await axios.get(`${apiUrl}/api/countries/${this.get_country_by_region}/${e}`);
                this.countrylist = response.data.countries;
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
        async getIpadd() {
            // const ip = localStorage.getItem('ip');
            // const url = `http://www.geoplugin.net/json.gp?ip=${ip}`;
            document.getElementById('pre').style.display = 'block';
            await axios.get(`${apiUrl}/api/get-ip/`)
                .then(reponse => {
                    let data = reponse.data;
                    setTimeout(() => {
                        this.$router.push('/country-prayer/' + data.geoplugin_countryName + '/' + data.geoplugin_city);
                        document.getElementById('pre').style.display = 'none';
                    }, 1000);
                })
                .catch(error => {
                    // console.error('There was a problem with the fetch operation:', error);
                });
        },
        watch: {
            get_country_by_region() {
                // Watch for changes in get_country_by_region and fetch new data when it changes
                this.fetchData();
            },
        },
    },
    async mounted() {
        setInterval(() => {
            const value = localStorage.getItem('lang');
            this.langCode = value;
            this.fetchData(value);
            this.getRegions(value);
        }, 1000);
        this.updateCountry(this.Regions[0].region_id);
        console.log(this.Regions[0].region_id, 'hahahaah');
    },
});
