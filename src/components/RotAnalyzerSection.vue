<template>
	<h2 class="analyzer-header">ROT Analyzer</h2>
	<p class="analyzer-description">
		Do you have some ROT text you want to decode? Paste the text into the field above, and keep
		clicking the button until the text is readable. If you have clicked 26 times and the text could
		not be read at any point, then it is not ROT encoded.
	</p>
	<textarea class="input-field" v-model="text" />
	<div class="button-group">
		<button @click="handleClick('forward')">Rotate Forward</button>
		<button @click="handleClick('backward')">Rotate Backward</button>
	</div>
	<div class="analyzer-response-text">
		<p>{{ calculatedRotations }}</p>
		<p>{{ analyzedText }}</p>
	</div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import rotGenerator from '../helpers/rot-generator';

export default {
	setup() {
		const text = ref('Insert the ROT text you wish to decode here.');
		const count = ref(0);

		/**
		 * A watcher data source can either be a getter function that returns a value, or directly
		 * a ref. Used here to watch the text field and reset the count if the user has changed
		 * the text.
		 */
		watch(text, () => {
			count.value = 0;
		});

		// The computed property is a "back rotation"
		const analyzedText = computed(() => rotGenerator(text.value, 26 - count.value));
		const calculatedRotations = computed(() => {
			return `This text was forward rotated ${count.value} times.`;
		});

		const handleClick = (direction) => {
			if (direction === 'forward') {
				if (count.value < 26) {
					count.value++;
				}
			} else if (direction === 'backward') {
				if (count.value > 0) {
					count.value--;
				}
			}
		};

		return {
			text,
			analyzedText,
			handleClick,
			count,
			calculatedRotations,
		};
	},
};
</script>

<style scoped>
.input-field {
	margin-top: 2em;
	padding: 0.5em;
	width: min(100%, 600px);
	min-height: 200px;
}

.analyzer-header {
	margin-top: 2em;
}

.analyzer-description {
	margin-top: 1em;
	line-height: 1.5em;
	max-width: 65ch;
}

.button-group button {
	display: block;
	width: 200px;
	margin: 1em 0;
	padding: 0.5em 1em;
}

.analyzer-response-text p {
	margin-top: 1em;
}
</style>
