<template>
    <MobileHeaderToggle :logo=" props.branding?.logo?.data?.attributes?.url || '' "
        :modalActive=" modalActive " @close-modal=" toggleModal " />
    <header
        class="bg-white sticky top-0 z-50 drop-shadow-sm shadow-primary py-2 cent w-full border-b">
        <div class="container cent__bet">
            <button class="md:hidden max-md:flex-1" @click=" toggleModal ">
                <Image isrc="/svgs/toggel-mobile-header.svg" ialt="toggel mobile icon header"
                    iclass="" />
            </button>
            <div class="flex gap-8 items-center">
                <div class="max-md:flex-1 cent md:block">
                    <!-- Use optional chaining here to prevent accessing properties on potentially null objects -->
                    <Logo v-if=" props.branding?.logo?.data?.attributes?.url "
                        :source=" props.branding.logo.data.attributes.url " />
                </div>
                <template v-if=" route.params.country ">
                    <div class="relative max-md:hidden">
                        <div class="flex items-center gap-[15px]">
                            <Search />
                        </div>
                    </div>
                </template>
            </div>

            <div class="max-md:flex justify-end max-md:flex-1 shrink-0">
                <div class="flex gap-10 items-center">
                    <slot />
                    <div class="hidden md:block">
                        <!-- Use optional chaining here as well -->
                        <a v-if=" props.branding?.link_download && props.branding?.title_download "
                            :href=" props.branding.link_download " target="_blank"
                            class="bg-primary text-white btn__primary">
                            {{ props.branding.title_download }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Define props with default values
const props = defineProps( {
    branding: {
        type: Object,
        default: () => ( {} ), // Provide an empty object as default
    },
} )

const modalActive = ref( null )

// Toggle modal function
const toggleModal = () => {
    modalActive.value = !modalActive.value
}
</script>
