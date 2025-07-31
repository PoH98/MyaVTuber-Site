import { defineStore } from 'pinia'
export const useGameStore = defineStore('theme', {
    state: () => ({
        theme: null
    }),
    persist: true
})