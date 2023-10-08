import { DateTime } from 'luxon';
import seedrandom from 'seedrandom';

/**
 * Generate a random DateTime
 * @param minYear Minimum year to consider
 * @param maxYear Maximum year to consider
 * @param endless Whether to return seeded prng based on the day, or whether to endlessly generate new dates
 * @return DateTime object for the generated Doomsday
 */
export function generateDoomsday(minYear: number, maxYear: number, endless = false): DateTime {
	const today = DateTime.utc().startOf('day');

	const prng = endless ? Math.random : seedrandom(today.toString());

	const year = randomInt(minYear, maxYear, prng);
	const month = randomInt(1, 12, prng);
	const maxDay = DateTime.utc(year, month).endOf('month').day;
	const day = randomInt(1, maxDay, prng);
	return DateTime.utc(year, month, day);
}

/**
 *
 * @param min Minimum integer to generate
 * @param max Maximum integer to generate
 * @param prng Specify the random number generation function. Uses `Math.random` by default.
 * @returns Pseudorandom integer
 */
function randomInt(min: number, max: number, prng = Math.random) {
	return Math.floor(prng() * (max - min + 1)) + min;
}
