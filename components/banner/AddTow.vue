<!-- App Add One -->
<template>
    <div class="content-widget" v-if="this.AddTowStatus == true">
        <div class="add-tow-section p-3 pt-4">
            <div>
                <h4 class="mb-0">
                    {{ this.Adds.title }}
                </h4>
                <p>
                    {{ this.Adds.sub_title }}
                </p>
            </div>
            <AppImage :imageSrc="addImage + this.Adds.image" imageClass="mt-5" />
        </div>
    </div>
</template>
<script>

import AppImage from '../Image.vue'
import { apiUrl } from '../../api.js';

export default {
    data() {
        return {
            addImage: '/bannerAdds/',
            Adds: [],
            AddTowStatus: false,
            langCode: this.$route.params.lg
        }
    },
    methods: {
        fetchAddsNativeData() {
            const e = localStorage.getItem('lang')
            axios.get(`${apiUrl}/api/image-app/${e}`)
                .then((response) => {
                    if (response.status == 200) {
                        // console.log(response.data.adds, 'testing');
                        // console.timeLog
                        response.data.adds.forEach(AddLoc => {
                            if (AddLoc.location == 'left') {
                                this.Adds = AddLoc;
                                // console.log(AddLoc);
                            }
                        });
                        this.AddTowStatus = true;
                    } else {
                        this.AddTowStatus = false;
                    }
                    // console.log(response.data.adds[0]);
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
