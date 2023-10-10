<script lang="ts">
	import type Step from '$lib/types/Step';
	import type { DateTime } from 'luxon';

	export let date: DateTime;
	export let steps: Step[];
</script>

<h3 class="text-3xl font-bold">{date.weekdayLong}</h3>
<div class="flex flex-col gap-5">
	{#each steps as step}
		<svelte:component this={step.component} {date} />
	{/each}
</div>
