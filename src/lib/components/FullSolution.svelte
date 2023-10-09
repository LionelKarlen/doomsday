<script lang="ts">
	import type Step from '$lib/types/Step';
	import type { DateTime } from 'luxon';

	export let date: DateTime;
	export let steps: Step[];
</script>

<div class="flex flex-col gap-5">
	{#each steps as step}
		<svelte:component this={step.component} {date} />
	{/each}
</div>
