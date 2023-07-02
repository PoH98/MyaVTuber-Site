import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: null
    }),
    persist: persistedState.cookiesWithOptions({
        sameSite: 'strict',
    })
})