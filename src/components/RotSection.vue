<template>
	<section class="rot-section">
		<textarea class="input-field" v-model="rotInput" />
		<input
			@keydown="changeCount"
			class="input-number"
			v-model.number="rotNumber"
			type="number"
			min="0"
			max="26"
		/>
		<div class="rot-response-block">
			<h3>Result</h3>
			<p>Amount of Rotation: {{ rotNumber }}</p>
			<p class="rot-response-text" v-if="countIsValid()">{{ rotatedText }}</p>
			<p class="rot-response-text" v-else>
				Please make sure your rotation is between 0 and 26 inclusive.
			</p>
		</div>
	</section>
</template>

<script>
import { ref, computed } from 'vue';
import rotGenerator from '../helpers/rot-generator';

export default {
	setup() {
		const rotInput = ref('Replace or rotate me!');
		const rotNumber = ref(0);

		// computed must take a function, use when defining state that relies on other state
		const rotatedText = computed(() => rotGenerator(rotInput.value, rotNumber.value));

		const changeCount = (event) => {
			if (event.key === 'ArrowRight' && rotNumber.value < 26) {
				rotNumber.value++;
			} else if (event.key === 'ArrowLeft' && rotNumber.value > 0) {
				rotNumber.value--;
			}
		};

		const countIsValid = () => rotNumber.value >= 0 && rotNumber.value <= 26;

		return {
			rotInput,
			rotNumber,
			rotatedText,
			changeCount,
			countIsValid,
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

.input-number {
	margin-top: 1em;
	padding: 1em;
	width: min(100%, 600px);
}

.rot-response-block {
	margin-top: 1em;
}

.rot-response-block h3 {
	margin: 1em 0;
}

.rot-response-text {
	margin: 1em 0;
}
</style>
