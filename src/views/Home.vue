<template>
	<h1>ROT# Generator</h1>
	<p>
		Insert your text, and select how many letters forward you would like to shift in the alphabet!
		Based on the classic ROT13 code generator, I thought it would be nice to allow people to
		generate a code based on any number of rotation!
	</p>
	<p>{{ counter }}</p>
	<div class="button-group">
		<button @click="incrementCounter">Increment</button>
		<button @click="decrementCounter">Decrement</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const counter = ref(0);
		const incrementCounter = () => counter.value++;
		const decrementCounter = () => counter.value--;

		return {
			counter,
			incrementCounter,
			decrementCounter,
		};
	},
};
</script>

<style scoped>
.button-group {
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: flex-start;
}
</style>
