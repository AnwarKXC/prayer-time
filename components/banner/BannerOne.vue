<template>
    <div class="content-widget d-lg-block d-none">
        <div class="row position-relative banner-one" :style="{ backgroundImage: 'url(' + bannerOne + ')' }">
            <div class="col-lg-4 col-md-6">
                <AppImage :imageSrc="banner__prayer + this.Add.image" alt="banner" />
            </div>
            <div class="col-lg-8 col-md-6">
                <div class="banner-one-content">
                    <p class="fs-6">{{ this.Add.sub_title }}</p>
                    <h2><span>{{ this.Add.title }}</span></h2>
                    <div class="mt-3">
                        <a :href="this.Add.link" target="_blank">
                            <AppButton buttonText="banner.bannerbtn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-widget d-lg-none d-block">
        <div class="row position-relative banner-one" :style="{ backgroundImage: 'url(' + bannerOne + ')' }">
            <div class="col-lg-4 col-md-6">
                <AppImage :imageSrc="banner__prayer + this.Add.image" alt="banner" />
            </div>
            <div class="col-lg-8 col-md-6">
                <div class="banner-one-content">
                    <p class="fs-6">{{ this.Add.sub_title }}</p>
                    <h2><span>{{ this.Add.title }}</span></h2>
                    <div class="mt-3">
                        <a :href="this.Add.link" target="_blank">
                            <AppButton buttonText="banner.bannerbtn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppImage from '../Image.vue'
import AppButton from '../Button.vue'
import { apiUrl } from '../../api.js';

export default {
    data() {
        return {
            banner__prayer: '/bannerAdds/',
            bannerOne: '/templates/banner/banner-one.png',
            bannerOne2: '/templates/banner/banner-one2.png',
            langCode: this.$route.params.lg,
            Add: []
        }
    },
    methods: {
        getBannerOneAdd() {
            const e = localStorage.getItem('lang')
            var path = this.$route.name;
            console.log(path);
            axios.get(`${apiUrl}/api/get-advantages/${e}`)
                .then((response) => {
                    // this.Add = response.data;
                    response.data.forEach(AddLoc => {
                        if (path == 'Home') {
                            if (AddLoc.location == 'main') {
                                this.Add = AddLoc;
                            }
                        } else if (path == 'PrayerQuran') {
                            if (AddLoc.location == 'quran') {
                                this.Add = AddLoc;
                            }
                        } else if (path == 'CountryPrayer') {
                            if (AddLoc.location == 'prayers') {
                                this.Add = AddLoc;
                            }
                        }
                    });
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
        }
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.getBannerOneAdd();
    },
    components: {
        AppImage,
        AppButton
    }
}
</script>
