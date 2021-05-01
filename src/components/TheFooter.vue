<template>
	<footer>
		<div class="logo-container">
			<a href="/"><h1>ROT#</h1></a>
		</div>
		<div class="link-container">
			<ul>
				<li @click="scrollToTop"><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/contact">Contact</router-link></li>
			</ul>
		</div>
		<div class="developed-with">
			<a href="https://github.com/Personal-Library/rot-generator" target="_blank" rel="noreferrer"
				>Developed with ❤️ on Github</a
			>
		</div>
	</footer>
</template>

<script>
export default {
	setup() {
		const scrollToTop = () => window.scrollTo(0, 0);

		return {
			scrollToTop,
		};
	},
};
</script>

<style scoped>
footer {
	margin-top: 6em;
}

a {
	text-decoration: none;
	color: inherit;
}

a:visited {
	color: inherit;
}

ul {
	margin-top: 1em;
	list-style: none;
	display: flex;
	justify-content: space-evenly;
}

li {
	margin-top: 0.5em;
}

.logo-container {
	text-align: center;
}

.developed-with {
	width: fit-content;
	margin: 3em auto 0 auto;
}
</style>
