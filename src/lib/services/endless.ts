import { writable } from 'svelte/store';
export const endless = writable<boolean>(false);

export const stepStore = writable<number>(0);
