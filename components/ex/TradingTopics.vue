<template>
    <div class="content-widget">
        <div class="row p-4">
            <div class="col-lg-12">
                <h4 class="text-theme mb-0 fw-700 rtl">{{ $t('trendingbanner.heading') }}</h4>
            </div>
        </div>
        <div class="row p-4 mb-2 px-3 pt-0 gap-lg-0 gap-3 article-row">
            <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" navigation @slideChange="onSlideChange"
                :breakpoints="{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    330: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                }">
                <swiper-slide v-for="article in Article">
                    <a v-bind:href="article.link" class="text-decoration-none" target="_blank">
                        <div class="article-box">
                            <div class="article-img">
                                <AppImage :imageSrc="Artcile_img + article.image" ImageClass="w-100" />
                            </div>
                            <div class="article-body">
                                <h4 class="text-black rtl">{{ article.title }}</h4>
                                <p>
                                    {{ truncateText(article.description, 19) }}
                                    <!-- {{ article.description }} -->
                                </p>
                            </div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>

import AppImage from './Image.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { apiUrl } from '../api.js';


// Import Swiper styles
import 'swiper/css';

export default {
    data() {
        return {
            Artcile_img: '/articles/',
            Article: [],
            langCode: this.$route.params.lg
        }
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            } else {
                return text.slice(0, maxLength) + "...";
            }
        },
        fetchArticleData() {
            const e = localStorage.getItem('lang');

            axios.get(`${apiUrl}/api/articles/${e}`)
                .then((response) => {
                    this.Article = response.data.articles;
                    // console.log(response.data.articles);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.fetchArticleData();
        }
    },
    mounted() {
        localStorage.setItem('lang', this.$route.params.lg);
        this.fetchArticleData();
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    components: {
        AppImage,
        Swiper,
        SwiperSlide,
    }
}
</script>
