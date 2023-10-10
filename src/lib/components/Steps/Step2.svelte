<script lang="ts">
	import { CENTURY_ANCHORS } from '$lib/services/time';
	import type { DateTime } from 'luxon';

	export let date: DateTime;
	let digits = Number.parseInt(date.year.toString().substring(2));

	let century = Number.parseInt(date.year.toString().substring(0, 2));
	let centuryAnchor = (CENTURY_ANCHORS[century % 4] + 1) % 7;

	let runningYearDigits = digits;
	let tmpYearDigits = (digits % 2 == 0 ? digits : digits + 11) / 2;
	let algoYearDigits = tmpYearDigits % 2 == 0 ? tmpYearDigits : tmpYearDigits + 11;
	let modYearDigits = 7 - (algoYearDigits % 7);
	let anchorDay = (modYearDigits + centuryAnchor) % 7;
</script>

<div class="prose mt-5">
	<h3 class="mb-0">Step 2:</h3>
	<span>Find the anchor day for year {date.year}</span>
	<ol class="mt-0">
		<li>Take last digits {digits.toString().padStart(2, '0')}</li>
		<li>
			{digits % 2 == 0
				? `Since ${digits} is even, do nothing`
				: `Since ${digits} is odd, add 11; ⇒ ${(runningYearDigits += 11)}`}
		</li>
		<li>
			Divide by 2; ⇒ {(runningYearDigits /= 2)}
		</li>
		<li>
			{runningYearDigits % 2 == 0
				? `Since ${runningYearDigits} is even, do nothing`
				: `Since ${runningYearDigits} is odd, add 11; ⇒ ${(runningYearDigits += 11)}`}
		</li>
		<li>{algoYearDigits}mod7 = {runningYearDigits % 7}</li>
		<li>7-{algoYearDigits % 7}={modYearDigits}</li>
		<li>
			Count forwards {modYearDigits} days from century anchor {centuryAnchor}; ({centuryAnchor}+{modYearDigits})mod7
			= {anchorDay}
		</li>
	</ol>
</div>
