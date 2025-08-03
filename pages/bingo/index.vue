<template>
    <v-container>
        <h1 class="my-2">米亞Bingo</h1>
        <hr class="my-2" />
        <v-row>
            <v-col cols="12">
                <label class="header">
                    創建新Bingo
                </label>
            </v-col>
            <form class="v-row mt-2 px-5">
                <v-text-field class="v-col v-col-12 pb-1" variant="outlined" label="Bingo名稱" v-model="bingoName"></v-text-field>
                <v-text-field type="number" class="v-col v-col-12 pb-1" variant="outlined" label="選項數字上限" v-model.number="bingoMax"></v-text-field>
                <v-text-field v-for="i in bingoMax" class="v-col v-col-12 v-col-md-6 v-col-lg-3 py-1" variant="outlined" :label="'添加選項參考文字' + i" v-model="bingoData.option"></v-text-field>
            </form>
            <v-col cols="12">
                <p class="mt-2">
                    點擊下面"創建"按鈕創建新Bingo，並且分享鏈接卑其他人一起遊玩
                </p>
            </v-col>
            <v-col cols="12">
                <v-btn block rounded="lg" size="x-large" color="indigo-darken-3">
                    創建
                </v-btn>
            </v-col>
        </v-row>
        <hr class="my-2" />
        <div>
            <label class="header mb-5 d-block">
                現有Bingo
            </label>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card color="blue-grey-darken-1">
                        <v-card-title>
                            Sample Bingo Title
                        </v-card-title>
                        <v-card-text>
                            點擊下列按鈕即可加入
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="white" variant="outlined">
                                加入
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            bingoLists:[],
            bingoData:{},
            bingoName: "",
            bingoMax: 10
        }
    }
}
</script>
<style scoped>
.header {
    font-size: 20px;
}
</style>