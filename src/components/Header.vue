<template>
	<nav>
		<a href="/"><h1>ROT#</h1></a>
		<div class="link-container">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</div>
	</nav>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 0;
}
h1 {
	cursor: pointer;
}
a {
	text-decoration: none;
	color: inherit;
	margin: 1em;
	padding: 0.5em 1em;
}
a:visited {
	color: inherit;
}
a:hover {
	background-color: #bfdbfe;
}
</style>
