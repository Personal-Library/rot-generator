<template>
	<h2>ROT Analyzer</h2>
	<textarea class="input-field" v-model="text" />
	<button @click="handleClick('forward')">Forward</button>
	<button @click="handleClick('backward')">Backward</button>
	<p>
		Do you have some ROT text you want to decode? Paste the text above, and keep clicking the button
		until the text is readable. If you have clicked greater than 26 times and the text could not be
		read at any point, then it is not ROT encoded.
	</p>
	<p>{{ analyzedText }}</p>
	<p>{{ count }}</p>
</template>

<script>
import { ref, watchEffect, computed } from 'vue';
import rotGenerator from '../helpers/rot-generator';

export default {
	setup() {
		const text = ref('Insert the ROT text you wish to decode here.');
		const count = ref(0);
		let analyzedText = computed(() => rotGenerator(text.value, count.value));

		const handleClick = (direction) => {
			if (direction === 'forward') {
				if (count.value < 26) {
					count.value++;
				}
			} else {
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
