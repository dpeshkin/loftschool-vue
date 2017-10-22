<template lang="pug">
    div.list
        h2 Вы заказали товар с ID: {{quantity}}
        ul
            li(v-for="n in 5")
                app-item(
                    v-bind:id="n",
                    @buttonClicked="handleClick"
                )
</template>
<script>
export default {
    data: () => ({
        quantity: 0
    }),
    components: {
        appItem: require("./item")
    },
    methods: {
        handleClick(id){
            // console.log(id) здесь ипользуются обычные функции а не стрелочные
            this.quantity = id
        }
    }
}
</script>
<style lang="scss" scoped>
    .list{
        margin-top: 10px;
        border: solid 3px blue;
        width: 300px;
    }
</style>