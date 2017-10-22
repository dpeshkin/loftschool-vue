<template lang="pug">
div
    h1 {{this.$route.params.id}}
        //берем данные из $router.params
    button(@click = '$router.go(-1)') Назад
</template>
<script>
export default {
    
}
</script>
<style lang="scss"></style>