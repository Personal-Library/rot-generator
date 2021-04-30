<template>
	<h2>ROT Description Section</h2>
	<textarea class="input-field" v-model="text" />
	<ul>
		<li v-for="(characterObj, index) in descArr" :key="index">
			{{ characterObj.character }} : {{ characterObj.position }}
		</li>
	</ul>
</template>

<script>
import { ref, computed } from 'vue';
import rotDescriber from '../helpers/rot-describer';

export default {
	setup() {
		const text = ref('Insert the ROT text you need described here.');

		const descArr = computed(() => rotDescriber(text.value));

		return {
			text,
			descArr,
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
