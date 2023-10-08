import { writable } from 'svelte/store';
import type DoomsdayConfig from '../types/DoomsdayConfig';
import { DEFAULT_CONFIG } from '../types/DoomsdayConfig';

export const doomsdayConfig = writable<DoomsdayConfig>(DEFAULT_CONFIG);
