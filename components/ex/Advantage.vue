<template>
    <div class="content-widget mx-sm-0 rounded-sm-0">
        <div class="row advantage-section">
            <div class="col-lg-12 advantage-heading text-center mb-4">
                <h2 class="fw-700 rtl text-theme">{{ $t('advantagebanner.topheading') }}</h2>
                <p class="fw-400 mt-2">{{ $t('advantagebanner.topsubheading') }}</p>
            </div>
            <div class="col-lg-4 text-center advantage-point" v-for="Add in AddVatage">
                <div style="width: 100px;" class="mx-auto">
                    <AppImage :imageSrc="this.addImage + Add.feature_images[0].images" style="width: 45px; height: 55px;" />
                </div>
                <h3 class="mt-3">{{ Add.title }}</h3>
                <p>
                    {{ Add.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import AppImage from './Image.vue'
import { apiUrl } from '../api.js';

export default {
    data() {
        return {
            addImage: '/appFeatures/',
            AddVatage: [],
            AddVanStatus: false,
            langCode: this.$route.params.lg
        }
    },
    methods: {
        fetchAddsNativeData() {
            const e = localStorage.getItem('lang')
            axios.get(`${apiUrl}/api/appfeatures/${e}`)
                .then((response) => {
                    if (response.status == 200) {
                        // console.log(response,'Testing For Language')
                        this.AddVatage = response.data;
                        // console.log(response.data,'hjhhaa');
                        this.AddVanStatus = true;
                    } else {
                        this.AddVanStatus = false;
                    }
                })
                .catch((error) => {
                    // console.error('Error fetching data:', error);
                });
        }
    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.fetchAddsNativeData();
        }
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.fetchAddsNativeData();
    },
    components: {
        AppImage
    }
}


</script>
