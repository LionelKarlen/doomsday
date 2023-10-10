<script lang="ts">
	import type { DateTime } from 'luxon';
	import StepByStepSolution from './StepByStepSolution.svelte';
	import type Step from '$lib/types/Step';
	import Step1 from './Steps/Step1.svelte';
	import Step2 from './Steps/Step2.svelte';
	import Step3 from './Steps/Step3.svelte';
	import Step4 from './Steps/Step4.svelte';
	import FullSolution from './FullSolution.svelte';

	export let stepByStepSolution: boolean;
	export let date: DateTime;

	const steps: Step[] = [
		{ name: 'Century', component: Step1 },
		{ name: 'Year', component: Step2 },
		{ name: 'Month', component: Step3 },
		{ name: 'Day', component: Step4 }
	];
</script>

<div class="mt-3 w-full">
	{#if stepByStepSolution}
		<StepByStepSolution {date} {steps} />
	{:else}
		<FullSolution {date} {steps} />
	{/if}
</div>
