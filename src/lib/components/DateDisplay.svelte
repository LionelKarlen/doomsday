<script lang="ts">
	import type { DateTime } from 'luxon';

	export let date: DateTime;
</script>

<div class="prose flex justify-center">
	<h1>
		{date.toFormat('dd. MM. yyyy')}
	</h1>
</div>
