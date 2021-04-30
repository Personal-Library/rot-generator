<template>
	<h2>ROT Analyzer</h2>
	<textarea class="input-field" v-model="text" />
	<button @click="handleClick('forward')">Rotate Forward</button>
	<button @click="handleClick('backward')">Rotate Backward</button>
	<p>
		Do you have some ROT text you want to decode? Paste the text into the field above, and keep
		clicking the button until the text is readable. If you have clicked 26 times and the text could
		not be read at any point, then it is not ROT encoded.
	</p>
	<p>{{ analyzedText }}</p>
	<p>{{ calculatedRotations }}</p>
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

<style>
.input-field {
	width: min(100%, 600px);
	min-height: 200px;
}
</style>
