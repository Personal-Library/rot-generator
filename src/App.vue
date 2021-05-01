<template>
	<div class="container">
		<TheHeader />
		<router-view />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default {
	components: {
		TheHeader,
		TheFooter,
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

html {
	scroll-behavior: smooth;
}

body {
	background-color: #f3f4f6;
	color: #111827;
}

.container {
	margin: 0 auto;
	padding: 1em;
	max-width: 864px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
