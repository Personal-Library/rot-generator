<template>
	<nav>
		<a class="logo" href="/"><h1>ROT#</h1></a>
		<div class="link-container">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/contact">Contact</router-link>
		</div>
	</nav>
</template>

<style scoped>
.logo {
	margin: 0;
	padding: 0;
}

.logo:hover {
	background-color: inherit;
}

nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 0;
}

a {
	text-decoration: none;
	color: inherit;
	margin-left: 0.5em;
	padding: 0.5em;
}

a:visited {
	color: inherit;
}

a:hover {
	background-color: #bfdbfe;
}
</style>
