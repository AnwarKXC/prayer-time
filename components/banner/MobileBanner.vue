<template>
    <div>
        <div class="content-widget mx-sm-0 rounded-sm-0 overflow-hidden bg-sm-transparent">
            <div class="row mobile-banner-section px-0">
                <div class="col-lg-7 d-flex align-items-end text-center justify-content-center gap-3 pb-4">
                    <div>
                        <AppImage :imageSrc="appImage" />
                    </div>
                </div>
                <div class="col-lg-5">
                    <p class="fs-6 fw-400">{{$t('mobilebanner.subheading')}}</p>
                    <h3 class="fw-700">{{$t('mobilebanner.heading')}}</h3>
                    <div class="d-flex gap-4  mt-lg-5 mt-3">
                        <a target="_blank">
                            <AppImage :imageSrc="googlePlay" />
                        </a>
                        <a>
                            <AppImage :imageSrc="appStore" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppImage from '../Image.vue'

export default {
    data() {
        return {
            mobile_banner_Img: '/templates/images/circle.svg',
            appStore: '/templates/images/app-store.png',
            googlePlay: '/templates/images/google-play.png',
            appImage: '/templates/banner/mobile-banner.png',
        }
    },
    methods: {
        // async fetchAppFeaturesData() {
        //     try {
        //         const response = await axios.get(`${apiUrl}/api/appfeatures`);
        //         this.appfeatures = response.data.appfeatures;
        //         // console.log(response.data);
        //     } catch (error) {
        //         // console.error('Error fetching data:', error);
        //     }
        // },
    },
    mounted(){
        // this.fetchAppFeaturesData();
    },
    components: {
        AppImage
    }

}
</script>
