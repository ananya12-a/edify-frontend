<template>
	<tr>
		<td>{{row.order}}</td>
		<td>{{row.link}}</td>
	</tr>
</template>

<script>
	export default {
		name: "Row",
		props: ["row"],
	}
	
</script>

<style scoped>
</style>