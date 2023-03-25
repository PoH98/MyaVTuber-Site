import { defineStore } from 'pinia'
import axios from 'axios';
export const useSharedDataStore = defineStore('sharedData', {
    state: () => ({
        status: {},
        futurevid: {}
    }),
    actions: {
        fetchYTData() {
            return new Promise(async (resolve) => {
                let temp = await axios
                    .get("https://www.mya-hkvtuber.com/api/mya/getytstatus");
                this.status = temp.data;
                temp = await axios
                    .get("https://www.mya-hkvtuber.com/api/mya/getfuturevid");
                this.futurevid = temp.data;
                resolve();
            })

        }
    }
})