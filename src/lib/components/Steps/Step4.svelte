<script lang="ts">
	import { getDoomsday } from '$lib/services/time';
	import { DateTime, Info } from 'luxon';

	export let date: DateTime;
	let doomsday: number = getDoomsday(date);
	let distance = date.day - doomsday;
	let anchor = DateTime.utc(date.year, 3, 14).weekday % 7;
	let anchoredDistance = distance + anchor;
	let normalisedDistance = anchoredDistance < 0 ? 7 + anchoredDistance : anchoredDistance;
</script>

<div class="prose mt-5">
	<h3 class="mb-0">Step 4:</h3>
	<span>Calculate the day of the week</span>
	<ol class="mt-0">
		<li>Find distance to doomsday; {date.day}-{doomsday}={distance}</li>
		<li>Find {distance}mod7 = {distance % 7}</li>
		<li>
			Add to anchor day; {distance}+{anchor} = {anchoredDistance}
		</li>
		{#if anchoredDistance < 0}
			<li>{anchoredDistance} is equal to +{7 + anchoredDistance}</li>
		{/if}
		<li>
			Therefore the weekday is {normalisedDistance}mod7 = {normalisedDistance % 7} =
			{Info.weekdays('long')[(normalisedDistance % 7) - 1]}
		</li>
	</ol>
</div>
