<script lang="ts">
	import { getDoomsday } from '$lib/services/time';
	import type { DateTime } from 'luxon';

	export let date: DateTime;
	let yearDigits = Number.parseInt(date.year.toString().substring(2));
	let doomsday: number = getDoomsday(date);
</script>

<div class="prose mt-5">
	<h3 class="mb-0">Step 3:</h3>
	<span>Find doomsday in month {date.month}</span>
	<ol class="mt-0">
		<li>
			{date.month <= 2
				? `Since ${date.month}<=2, check if leapyear`
				: `Since ${date.month}>2, ignore leap years`}
		</li>
		{#if date.month <= 2}
			<li>
				Since last year digits {yearDigits}mod4={date.year % 4}; {date.year % 4 > 0
					? 'Not a leap year'
					: 'Could be leapyear'}
			</li>
			{#if date.year % 4 == 0}<li>
					Since {date.year}mod100={date.year % 100}; {date.year % 100 > 0
						? 'Is a leapyear'
						: 'Could be a leapyear'}
				</li>{/if}
			{#if date.year % 100 == 0}
				Since {date.year / 100}mod4={(date.year / 100) % 4}; {date.year % 400 > 0
					? 'Not a leapyear'
					: 'Is a leapyear'}
			{/if}
		{/if}
		<li>
			Using table ⇒ Doomsday in month {date.month} is {doomsday}
		</li>
	</ol>
</div>
