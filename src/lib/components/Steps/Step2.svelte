<script lang="ts">
	import { CENTURY_ANCHORS } from '$lib/services/time';
	import { Info, type DateTime } from 'luxon';

	export let date: DateTime;
	let century = Number.parseInt(date.year.toString().substring(0, 2));
	let anchorDay = CENTURY_ANCHORS[century % 4] + 1;
</script>

<div class="prose mt-5">
	<h3 class="mb-0">Step 2:</h3>
	<span>Find the anchor day for century {century}00</span>
	<ol class="mt-0">
		<li>{century}mod4 = {century % 4}</li>
		<li>Assign to Tuesday, Sunday, Friday, Wednesday</li>
		<li>
			Therefore anchor day for century {century}00 = {Info.weekdays('long')[(anchorDay - 1) % 7]} = {anchorDay %
				7}
		</li>
	</ol>
</div>
