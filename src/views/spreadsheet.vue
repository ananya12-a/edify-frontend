<template>
    <sheets :sheetName="this.$route.params.course"/>
</template>

<script>
import sheets from '.././components/sheets';
export default {
    components: {
        sheets,
    },
}
</script>

<style scoped>

</style>