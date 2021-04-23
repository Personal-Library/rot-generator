<template>
	<section class="rot-sect">
		<textarea class="input-field" v-model="rotInput" />
		<input v-model.number="rotNumber" type="number" min="0" max="26" />
		<p>Your input: {{ rotInput }}</p>
		<p>Amount of Rotation: {{ rotNumber }}</p>
		<p>Result: {{ rotatedText }}</p>
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

		return {
			rotInput,
			rotNumber,
			rotatedText,
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
