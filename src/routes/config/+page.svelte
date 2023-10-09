<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { doomsdayConfig } from '$lib/services/config';

	const config = $doomsdayConfig;
	const tmpConfig = config;
</script>

<div class="absolute right-0 top-0 flex flex-col-reverse gap-2 p-2">
	<div class="opacity-20 hover:opacity-100 transition duration-300">
		<a href="{base}/" class="btn btn-circle btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</a>
	</div>
</div>
<div class="prose flex flex-col w-3/4 gap-5">
	<div class="flex-row flex justify-between content-center">
		<h3 class="m-0">Step By Step Solution</h3>
		<input
			type="checkbox"
			class="toggle align-middle"
			bind:checked={tmpConfig.stepByStepSolution}
		/>
	</div>
	<div class="flex-row flex justify-between content-center">
		<h3 class="m-0">Minimum Year</h3>
		<input
			type="number"
			class="input input-bordered rounded-md w-full max-w-xs align-middle"
			bind:value={tmpConfig.minYear}
		/>
	</div>
	<div class="flex-row flex justify-between content-center">
		<h3 class="m-0">Maximum Year</h3>
		<input
			type="number"
			class="input input-bordered rounded-md w-full max-w-xs align-middle"
			bind:value={tmpConfig.maxYear}
		/>
	</div>

	<button
		class="btn btn-success mt-5"
		on:click={() => {
			doomsdayConfig.set(tmpConfig);
			goto(base + '/');
		}}>Save</button
	>
</div>
