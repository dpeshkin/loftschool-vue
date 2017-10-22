<template lang="pug">
    .hello
        h1 hello-props component
        input(v-model="message2")
        h2 {{message2}}
        //- h2 {{text1}}
        button(v-on:click="change") Click
        .outer
            slot //получаем компонент извне
            slot(name="first")
            .second
                slot(name="second")
</template>
<script>
export default {
    data: function() {
        return {
           message2: this.message, // здесь мы кешируем даные полученные из props, иначе если данные в родителе обновятся у нас пропадут все изменения
        }
    },
    methods: {
        change () {
            // console.log(this.message)
            this.message2 = 'message on Click';
        },
    },
    // props: ['message'] // получаем данные из модели, но лучше указать четко их тип, дефолтное значение и провадижировать
    props: {
        message: {
            type: String, //указываем тип получаемых данных и дефолтное значение
            default: 'Default Text'
        },
        text: {
            type: String,
            default: 'Default Text'
        }
    }
}
</script>
<style lang="scss" scoped>
    .hello{
        width: 300px;
        padding: 10px;
        border: dashed 3px black;
        margin-top: 10px;
        text-align: center;
    }
    .outer {
        border: solid 1px red;
        padding: 5px;
    }
    .second {
        border: solid 1px green;
    }
</style>