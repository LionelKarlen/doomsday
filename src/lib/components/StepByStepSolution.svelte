<script lang="ts">
	import type { DateTime } from 'luxon';
	import type Step from '$lib/types/Step';
	import { stepStore } from '$lib/services/endless';
	import { onDestroy } from 'svelte';

	export let date: DateTime;
	export let steps: Step[];
	let currentStep = $stepStore;
	$: currentStep = Math.max(currentStep % steps.length, 0);

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

	<div class="flex flex-row input-group w-full mt-5">
		<button
			disabled={currentStep == 0}
			class:btn-disabled={currentStep == 0}
			class="btn w-1/2"
			on:click={() => {
				currentStep -= 1;
			}}
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
			previous</button
		>
		<button
			class="btn w-1/2 btn-success"
			on:click={() => {
				currentStep += 1;
			}}
			>next<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</button>
	</div>

	<svelte:component this={steps[currentStep].component} {date} />
{/if}
