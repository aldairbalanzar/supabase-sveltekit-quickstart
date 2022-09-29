/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable, type Writable } from 'svelte/store';

interface IcurrentUser {
    email: string;
}

export const currentUser: Writable<any> = writable({
    email: "",
})