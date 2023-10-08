import { writable } from 'svelte/store';
import type DoomsdayConfig from '../DoomsdayConfig';
import { DEFAULT_CONFIG } from '../DoomsdayConfig';

export const doomsdayConfig = writable<DoomsdayConfig>(DEFAULT_CONFIG);
