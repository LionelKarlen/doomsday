import type Step1 from '$lib/components/Steps/Step1.svelte';

export default interface Step {
	name: string;
	component: typeof Step1;
}
