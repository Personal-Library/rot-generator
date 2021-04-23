<template>
	<section class="intro-sect">
		<h1>ROT# Generator</h1>
		<p>
			Insert your text, and select how many letters forward you would like to shift in the alphabet!
			Based on the classic ROT13 code generator, I thought it would be nice to allow people to
			generate a code based on any number of rotation!
		</p>
	</section>
	<section class="rot-sect">
		<textarea class="input-field" v-model="input" />
		<input type="number" min="0" max="26" />
		<p>{{ input + 'test' }}</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			input: '',
		};
	},
};
</script>

<style scoped>
.input-field {
	width: min(100%, 600px);
	min-height: 200px;
}
</style>
