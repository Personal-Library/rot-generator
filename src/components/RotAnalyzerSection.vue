<template>
	<h2>ROT Analyzer</h2>
	<textarea class="input-field" v-model="text" />
	<button @click="handleClick('forward')">Rotate Forward</button>
	<button @click="handleClick('backward')">Rotate Backward</button>
	<p>
		Do you have some ROT text you want to decode? Paste the text above, and keep clicking the button
		until the text is readable. If you have clicked greater than 26 times and the text could not be
		read at any point, then it is not ROT encoded.
	</p>
	<p>{{ analyzedText }}</p>
	<p>{{ calculatedRotations }}</p>
</template>

<script>
import { ref, computed } from 'vue';
import rotGenerator from '../helpers/rot-generator';

export default {
	setup() {
		const text = ref('Insert the ROT text you wish to decode here.');
		const count = ref(0);
		const analyzedText = computed(() => rotGenerator(text.value, count.value));
    const calculatedRotations = computed(() => {
      if (count.value === 26 || count.value === 0) {
        return 'No rotation applied';
      } else {
        return `This text was forward rotated ${26 - count.value} times.`
      }
    })

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

    /**
     * TODO: Clean this component up and change the counter so it shows the absolute
     * degree of rotation and not how many times we have to rotate it forward to get
     * the correct text.
     */

		return {
			text,
			analyzedText,
			handleClick,
			count,
      calculatedRotations
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
