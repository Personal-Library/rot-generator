<template>
	<div>
		<h2 class="content-header">
			Welcome to the ROT#
		</h2>
		<p class="content-body">
			This app aims to allow users to generate secret messages or codes that they can send to their
			friends, and have their friends be able to decipher that code by rotating it an established
			number of times. Obviously with rotated code anybody can come along and decipher your code,
			but this project serves mostly as a learning experience for both me and the user! The ROT
			describer tool will allow users to analyze the alphabetical position of each of the characters
			within a string, which can be useful for decoding purposes. Please enjoy, and click the
			contact page or submit an issue request on Github if you have any issues!
		</p>
	</div>
</template>

<style scoped>
.content-header {
	margin-top: 2em;
	text-align: center;
}

.content-body {
	margin: 2em auto 0 auto;
	max-width: 65ch;
	line-height: 1.5em;
	text-align: center;
}
</style>
