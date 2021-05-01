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
	box-shadow: none;
}

.logo:hover {
	background-color: inherit;
	box-shadow: none;
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
	margin-left: 1em;
	padding: 0.5em;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

a:visited {
	color: inherit;
}

a:hover {
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
	a {
		margin-left: 4em;
	}
}
</style>
