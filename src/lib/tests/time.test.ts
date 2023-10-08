import { expect, test } from 'vitest';
import { generateDoomsday } from '$lib/services/time';

test('Generate Seeded Doomsday', () => {
	expect(generateDoomsday(1000, 3000, false)).toStrictEqual(generateDoomsday(1000, 3000, false));
});

test('Generate Endless Doomsday', () => {
	expect(generateDoomsday(1000, 3000, true)).not.toStrictEqual(generateDoomsday(1000, 3000, true));
});
