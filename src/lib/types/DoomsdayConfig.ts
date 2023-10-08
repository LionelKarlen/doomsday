export default interface DoomsdayConfig {
	minYear: number;
	maxYear: number;
	stepByStepSolution: boolean;
}

export const DEFAULT_CONFIG: DoomsdayConfig = {
	minYear: 1000,
	maxYear: 3000,
	stepByStepSolution: true
};
