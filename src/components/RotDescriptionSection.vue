<template>
	<h2 class="describer-header">ROT Description Section</h2>
	<textarea class="input-field" v-model="text" />
	<ul class="description-list">
		<li class="list-item" v-for="(characterObj, index) in descArr" :key="index">
			{{ characterObj.character }} : {{ characterObj.position }}
		</li>
	</ul>
</template>

<script>
import { ref, computed } from 'vue';
import rotDescriber from '../helpers/rot-describer';

export default {
	setup() {
		const text = ref('Insert the ROT text you need described here');
		const descArr = computed(() => rotDescriber(text.value));

		return {
			text,
			descArr,
		};
	},
};
</script>

<style scoped>
.describer-header {
	margin-top: 2em;
}

.input-field {
	margin-top: 2em;
	padding: 0.5em;
	width: min(100%, 600px);
	min-height: 200px;
	border: none;
	resize: none;
	background-color: #f9fafb;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.description-list {
	width: min(100%, 700px);
	margin-top: 2em;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 1em;
	list-style: none;
}

.list-item {
	background-color: #f9fafb;
	margin-left: 1em;
	padding: 1em 0.5em;
	width: 100px;
	text-align: center;
	border: none;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.list-item:hover {
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}
</style>
