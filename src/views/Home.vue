<template>
	<h1>The Home Page</h1>
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
