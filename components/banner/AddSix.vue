<template>
    <div class="content-widget overflow-hidden" v-if="this.AddSixStatus == true">
        <AppImage :imageSrc="banner + this.Images.image_type" ImageClass="w-100" style="height: 230px; object-fit: cover;" />
    </div>
</template>
<script>
import AppImage from '../Image.vue'
import { apiUrl } from '../../api.js';


export default {
    data() {
        return {
            banner: '/bannerAdds/',
            Images: [],
            AddSixStatus: false,
        }
    },
    methods: {
        // async fetchAddsSixData() {
        //     try {
        //         const response = await axios.get(`${apiUrl}/api/image-app`);
        //         if (response.status == 200) {
        //             if (response.data.adds[0].length > 0) {
        //                 this.Images = response.data.adds[0];
        //                 this.AddSixStatus = true;
        //             } else {
        //                 this.AddSixStatus = false;
        //             }
        //         } else {
        //             this.AddSixStatus = false;
        //         }
        //         // console.log(response.data.adds);
        //     } catch (error) {
        //         // console.error('Error fetching data:', error);
        //     }
        // },
    },
    mounted() {
        // this.fetchAddsSixData();
    },
    components: {
        AppImage
    }
}

</script>