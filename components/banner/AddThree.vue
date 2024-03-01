<template>
    <div class="content-widget" v-if="this.AddThreeStatus == true">
        <div class="add-three-section p-3 py-0 pt-4">
            <div>
                <div>
                    <h4 class="mb-0">
                        {{ this.Adds.title }}
                    </h4>
                    <p>
                        {{ this.Adds.sub_title }}
                    </p>
                </div>
                <a :href="this.Adds.link" target="_blank">
                    <AppButton buttonClass="yellow-btn" buttonText="add2.startbtn" />
                </a>
            </div>
            <AppImage :imageSrc="addImage + this.Adds.image" imageClass="mt-5" />
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
            addImage: '/bannerAdds/',
            Adds: [],
            AddThreeStatus: true,
            langCode: this.$route.params.lg
        }
    },
    methods: {
        fetchAddsNativeData() {
            const e = localStorage.getItem('lang')
            axios.get(`${apiUrl}/api/image-app/${e}`)
                .then(response => {
                    // console.log(response.data);
                    if (response.status == 200) {
                        response.data.adds.forEach(AddLoc => {
                            if (AddLoc.location == 'right') {
                                this.Adds = AddLoc;
                                // console.log(AddLoc);
                            }
                            this.AddThreeStatus = true;
                        });
                    } else {
                        this.AddThreeStatus = false;
                    }
                    // console.log(response.data.adds[1]);
                })
                .catch(error => {
                    // Handle error
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
        AppImage,
        AppButton
    }
}


</script>
