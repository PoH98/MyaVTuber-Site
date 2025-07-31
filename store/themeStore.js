import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: null
    }),
    persist: true
})