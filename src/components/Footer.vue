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
	</footer>
</template>

<script>
export default {
	setup() {
		const scrollToTop = () => window.scrollTo(0,0);

		return {
			scrollToTop
		}
	}
}
</script>

<style scoped>
footer {
	margin-top: 4em;
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
}

li {
	margin-top: 0.5em;
}
</style>
