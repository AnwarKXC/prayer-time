<template>
    <!-- <div class="content-widget bg-transparent border-0">
        <div class="w-100 d-lg-block d-none">
            <div class="row justify-content-between">
                <div class="banner-col">
                    <AppImage :imageSrc="banner1" ImageClass="p-0" />
                </div>
                <div class="banner-col">
                    <AppImage :imageSrc="banner2" ImageClass="p-0" />
                </div>
                <div class="banner-col">
                    <AppImage :imageSrc="banner3" ImageClass="p-0" />
                </div>
            </div>
        </div>
        <div id="carouselExample" class="carousel slide d-lg-none d-block">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <AppImage :imageSrc="banner1" ImageClass="p-0 w-100 cr_slider" style="object-fit: cover;" />
                </div>
                <div class="carousel-item">
                    <AppImage :imageSrc="banner2" ImageClass="p-0 w-100 cr_slider" style="object-fit: cover;" />
                </div>
                <div class="carousel-item">
                    <AppImage :imageSrc="banner3" ImageClass="p-0 w-100 cr_slider" style="object-fit: cover;" />
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div> -->
</template>
<script>

import AppImage from '../Image.vue'
import { apiUrl } from '../../api.js';

export default {
    data() {
        return {
            banner1: '/templates/banner/banner1.png',
            banner2: '/templates/banner/banner2.png',
            banner3: '/templates/banner/banner3.png',
            Images: []
        }
    },
    methods: {
        // async fetchAddsData() {
        //     try {
        //         const response = await axios.get(`${apiUrl}/api/image-app`);
        //         this.Images = response.data.adds;
        //         // console.log(response.data.adds);
        //     } catch (error) {
        //         // console.error('Error fetching data:', error);
        //     }
        // },
    },
    mounted() {
        // this.fetchAddsData();
    },
    components: {
        AppImage
    }
}
</script>
