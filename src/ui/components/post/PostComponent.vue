<template>
	<div class="post">
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
	</div>
</template>
<script>
export default {
	name: 'PostComponent',
	props: {
		title: {
			type: String,
			default: 'Title not found',
			required: true
		},
		description: {
			type: String,
			default: 'description not found',
			required: true
		},
	}
}
</script>
<style lang="scss">
.post {
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 5px black;
}
</style>
