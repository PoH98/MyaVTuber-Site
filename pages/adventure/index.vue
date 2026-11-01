<template>
    <div class="adventure-container">
        <v-container class="reader">
            <div class="book-controls">
                <v-btn :disabled="page === 1" @click="page--">上一頁</v-btn>
                <span aria-live="polite">{{ page }} / 64</span>
                <v-btn :disabled="page === 64" @click="page++">下一頁</v-btn>
            </div>
            <img class="book-page" :src="pageImage" :alt="`頂米亞大冒險第 ${page} 頁`">
        </v-container>
    </div>
</template>
<script setup>
useHead({
    title: "頂米亞大冒險 - 米亞 Mya HKVTuber"
});
const page = ref(1);
const pageImage = computed(() => `/img/adventure/Book_final_page-${String(page.value).padStart(4, '0')}.jpg`);
</script>
<style scoped>
.adventure-container {
    background-image: url("/img/tablebg.jpg");
}

.reader {
    text-align: center;
}

.book-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    color: white;
}

.book-page {
    display: block;
    max-width: 100%;
    max-height: 80vh;
    margin: 0 auto;
}
</style>
