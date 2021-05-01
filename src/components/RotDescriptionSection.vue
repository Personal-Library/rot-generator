<template>
	<h2 class="describer-header">ROT Description Section</h2>
	<p class="describer-content">
		Insert any string of text below, and the describer will give you the alphabetical position of
		each character in the provided string. If the character is non-alphabetical, a '#' is provided
		as the position instead.
	</p>
	<textarea class="input-field" v-model="text" />
	<ul class="description-list">
		<li class="list-item" v-for="(characterObj, index) in descArr" :key="index">
			<div class="character">
				{{ characterObj.character }}
			</div>
			<div class="position">
				{{ characterObj.position }}
			</div>
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

.describer-content {
	max-width: 65ch;
	line-height: 1.5em;
	margin-top: 1em;
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
	padding: 1em 0.5em;
	width: 100px;
	text-align: center;
	border: none;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	display: flex;
}

.character {
	width: 50%;
}

.position {
	width: 50%;
	border-left: 2px solid black;
}

.list-item:hover {
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}
</style>
