<template>
  <Header />
	<router-view />
</template>

<script>
import Header from './components/Header';

export default {
	components: {
		Header,
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
	background-color: #f3f4f6;
}
</style>
