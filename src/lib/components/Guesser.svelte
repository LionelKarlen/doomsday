<script lang="ts">
	import type { DateTime } from 'luxon';
	import DateDisplay from './DateDisplay.svelte';
	import { generateDoomsday } from '$lib/services/time';
	import { endless } from '$lib/services/endless';
	import { doomsdayConfig } from '$lib/services/config';
	import Solution from './Solution.svelte';

	let date: DateTime = generateDoomsday($doomsdayConfig.minYear, $doomsdayConfig.maxYear, $endless);

	$: $endless, reset();

	function reset() {
		date = generateDoomsday($doomsdayConfig.minYear, $doomsdayConfig.maxYear, $endless);
	}

	let showSolution: boolean = false;
</script>

<div class="flex flex-col gap-5 w-full md:max-w-lg lg:max-w-md">
	<DateDisplay {date} />
	<button
		class="btn btn-success"
		on:click={() => {
			showSolution = !showSolution;
		}}
	>
		{showSolution ? 'Hide' : 'Show'} solution
	</button>
	{#if showSolution}
		<Solution {date} stepByStepSolution={$doomsdayConfig.stepByStepSolution} />
	{/if}
</div>
