<script lang="ts">
	import type { DateTime } from 'luxon';
	import type Step from '$lib/types/Step';
	import { stepStore } from '$lib/services/endless';
	import { onDestroy } from 'svelte';

	export let date: DateTime;
	export let steps: Step[];
	let currentStep = $stepStore;
	$: currentStep = Math.max(currentStep % steps.length, 0);
	$: console.log(currentStep);

	onDestroy(() => {
		stepStore.set(currentStep);
	});
</script>

{#if steps.length > 0}
	<ul class="steps steps-horizontal w-full">
		{#each steps as step, i}
			<li class="step" class:step-success={currentStep >= i}>{step.name}</li>
		{/each}
	</ul>

	<svelte:component this={steps[currentStep].component} {date} />

	<div class="flex flex-row input-group w-full mt-5">
		<button
			class="btn w-1/2"
			on:click={() => {
				currentStep -= 1;
			}}>previous</button
		>
		<button
			class="btn w-1/2 btn-success"
			on:click={() => {
				currentStep += 1;
			}}>next</button
		>
	</div>
{/if}
