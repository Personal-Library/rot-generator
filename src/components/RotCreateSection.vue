<template>
	<section class="rot-section">
		<textarea class="input-field" v-model="rotInput" />
		<div class="input-wrapper">
			<input
				@keydown="changeCount"
				class="input-number"
				v-model.number="rotNumber"
				type="number"
				min="0"
				max="26"
			/>
		</div>
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
		const rotInput = ref('Replace and rotate me!');
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
	border: none;
	resize: none;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: #f9fafb;
}

.input-wrapper {
	margin-top: 1.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 1em;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: #f9fafb;
}

.input-number {
	border: none;
	background-color: #f9fafb;
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
