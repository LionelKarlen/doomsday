import { expect, test } from 'vitest';
import { generateDoomsday } from '$lib/services/time';
import { getDoomsday } from '../services/time';
import { DateTime } from 'luxon';

test('Generate Seeded Doomsday', () => {
	expect(generateDoomsday(1000, 3000, false)).toStrictEqual(generateDoomsday(1000, 3000, false));
});

test('Generate Endless Doomsday', () => {
	expect(generateDoomsday(1000, 3000, true)).not.toStrictEqual(generateDoomsday(1000, 3000, true));
});

test('Regular Doomsday Lookup', () => {
	const date = DateTime.utc(2023, 4, 4);
	expect(getDoomsday(date)).toBe(4);
});

test('Regular Doomsday Lookup for month<2', () => {
	const date = DateTime.utc(2021, 2, 1);
	expect(getDoomsday(date)).toBe(28);
});

test('Leapyear Doomsday Lookup', () => {
	const date = DateTime.utc(2020, 5, 1);
	expect(getDoomsday(date)).toBe(9);
});

test('Leapyear Doomsday Lookup for month<2', () => {
	const date = DateTime.utc(2020, 2, 1);
	expect(getDoomsday(date)).toBe(29);
});
