<template>
	<div class="container">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	components: {
		Header,
		Footer
	},
};
</script>

<style>
*,
*:before,
*:after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}

body {
	padding: 1em;
	background-color: #f3f4f6;
	color: #111827;
}

.container {
	margin: 0 auto;
	max-width: 1024px;
}
</style>
