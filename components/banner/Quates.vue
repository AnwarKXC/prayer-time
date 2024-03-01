<template>
    <div class="content-widget" v-if="this.QuoteStatus == true">
        <div class="add-five-section p-3">
            <div>
                <h4 class="mb-0 text-orange">{{ Quotes?.title }}</h4>
                <p class="mb-0">
                    {{ Quotes?.desc }}
                </p>
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
            addThree: '/templates/banner/add-three.png',
            Quotes: [],
            QuoteStatus: false,
            langCode: this.$route.params.lg
        }
    },
    methods: {
        getData() {
            const e = localStorage.getItem('lang')
            axios.get(`${apiUrl}/api/quotes/${e}`).then(response => {
                this.Quotes = response.data.quotes;
                // console.log(response.data.quotes,'hello');
                // console.log(response.data.quotes[0]);
                this.QuoteStatus = true
                // console.log('hahah');
            }).catch((error) => {
                // console.warn('API error');
                this.QuoteStatus = false
            });
        }

    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.getData();
        }
    },
    components: {
        AppImage,
        AppButton
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.getData();
    }
}


</script>
