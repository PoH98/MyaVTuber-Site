<template>
    <v-sheet class="bbq">
        <v-container class="py-10">
            <h1 class="mb-3 heading-1">
                <v-icon>{{ mdiYoutube }}</v-icon>
                <span>米亞過往的影片</span>
                <v-icon>{{ mdiYoutube }}</v-icon>
            </h1>
            <h3 class="mb-5">總共伺服器已收藏影片：{{ total }}</h3>
            <Carousel :images="content"/>
            <v-pagination class="mt-5" color="rgb(248, 187, 208)" :model-value="currentPage" @update:model-value="changePage"
                :length="page"></v-pagination>
        </v-container>
    </v-sheet>
</template>
<script setup>
useHeadSafe({
    title: "米亞烤肉組 - 米亞 Mya HKVTuber",
});
let currentPage = 1;
const tempData = await useAsyncData(() => $fetch("https://www.mya-hkvtuber.com/api/mya/getMyaVideos?page=" + (currentPage - 1)));
const content = tempData.data.value.Videos;
const page = tempData.data.value.Pages;
const total = tempData.data.value.TotalVideos;
</script>
<script>
import { mdiYoutube, mdiClose } from "@mdi/js";
import { useHead } from 'unhead';
import Carousel from "~/components/Mya/Carousel.vue";
export default {
    components:{
        Carousel
    },
    data() {
        return {
            isMobile: false,
            mdiYoutube,
            mdiClose
        };
    },
    mounted() {
        if (process.client) {
            if (window.innerWidth < 480) {
                this.isMobile = true;
            }
        }
    },
    methods: {
        changePage(val) {
            this.$router.push("/mya/" + val);
        },
    },
};
</script>
<style>
.bbq .video-card {
    height: 100%;
}

.bbq .heading-1 {
    z-index: 1;
    display: block;
    position: relative;
}

.bbq .img-preview {
    border-radius: 12px !important;
}

.bbq .video-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


.video-card-body {
    position: relative;
    min-height: calc(100vh - 80px);
}

.bbq .author-link {
    opacity: 0.8;
    text-decoration: none;
}

.bbq .light-link {
    color: #606060;
}
</style>
  