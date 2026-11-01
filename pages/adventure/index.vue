<template>
    <div class="adventure-container">
        <v-container class="no-scroll">
            <Flipbook class="flipbook" :pages="pages" :zooms="[1]" />
        </v-container>
    </div>
</template>
<script setup>
import Flipbook from '~/components/Flipbook/Flipbook.mjs';

useHead({ title: "頂米亞大冒險 - 米亞 Mya HKVTuber" });
const pages = [null, ...Array.from({ length: 64 }, (_, index) =>
    `/img/adventure/Book_final_page-${String(index + 1).padStart(4, '0')}.jpg`
)];
</script>
<style scoped>
.adventure-container { background-image: url("/img/tablebg.jpg"); }
.flipbook { width: 100%; height: 80vh; }
.no-scroll { overflow: hidden; }
</style>
