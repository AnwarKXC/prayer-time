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
Regions: []
};
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
handleSearchCountry(e) {
const lg = localStorage.getItem('lang');
var searchValue = e.target.value;
if (searchValue.length > 0) {
axios.get(`${apiUrl}/api/search/${lg}/${searchValue}`)
.then((response) => {
this.searchCountry = response.data.countries;
this.CountryId = response.data.countries[0].country_id;
this.search_one = true;
this.showDiv = true;
})
.catch((error) => {
// console.error('Error fetching data:', error);
});
} else {
this.search_one = false;
this.showDiv = false;
}
},
handleCitySearch(e) {
var search = e.target.value;
const lg = localStorage.getItem('lang');
// console.log(this.CountryId);
if (search.length > 0) {
axios.get(`${apiUrl}/api/city-search/${this.CountryId}/${lg}/${search}`)
.then((response) => {
this.searchCity = response.data;
// console.log(response.data.cities);
this.search_tow = true;
this.search_one = false;
// console.log(response.data.cities);
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
let data = reponse.data;
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
});
