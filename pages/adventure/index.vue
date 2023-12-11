<template>
    <div class="adventure-container">
        <v-container class="no-scroll">
            <Flipbook class="flipbook" :pages="pages" :zooms="[1]"/>
        </v-container>
    </div>
</template>
<script>
import Flipbook from 'flipbook-vue'
export default{
    components: {
        Flipbook
    },
    setup(){
        const pages = [];
        for(let x = 1; x < 64; x++){
            pages.push("/img/adventure/Book_final_page-" + x.toString().padStart(4, '0') + ".jpg");
        }
        return{
            pages
        }
    }
}
</script>
<style scoped>
.adventure-container{
    background-color: gray;
}
.flipbook {
  width: 100%;
  height: 90vh;
}
.no-scroll{
    overflow: hidden; 
}
</style>