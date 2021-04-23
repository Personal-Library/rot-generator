<template>
	<section class="rot-sect">
		<textarea class="input-field" v-model="input" />
		<input v-model.number="rotNum" type="number" min="0" max="26" />
		<p>{{ input + 'test' }}</p>
		<p>{{ rotNum }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			input: '',
			rotNum: 0,
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
