import { writable } from 'svelte/store'

export const user: any | null = writable({
    email: "",
})