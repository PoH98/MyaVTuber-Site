<template>
    <div class="adventure-container">
        <v-container class="no-scroll">
            <Flipbook class="flipbook" :pages="pages" :zooms="[1]" />
        </v-container>
    </div>
</template>
<script setup>
useHeadSafe({
    title: "頂米亞大冒險 - 米亞 Mya HKVTuber"
});
const pages = [null];
for (let x = 1; x <= 64; x++) {
    pages.push("/img/adventure/Book_final_page-" + x.toString().padStart(4, '0') + ".jpg");
}
if (process.client) {
    if (window.innerWidth < 895) {
        pages.splice(2, 1);
        pages.splice(62, 1);
    }
}
</script>
<script>
import Flipbook from 'flipbook-vue'
export default {
    components: {
        Flipbook
    }
}
</script>
<style scoped>
.adventure-container {
    background-image: url("/img/tablebg.jpg");
}

.flipbook {
    width: 100%;
    height: 90vh;
}

.no-scroll {
    overflow: hidden;
}
</style>