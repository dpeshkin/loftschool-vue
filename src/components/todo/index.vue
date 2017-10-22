<template lang="pug">
    .container
        h1 todo-component
        h4 новое задание
        input(v-model="newTodo",
            @keydown.enter="addItem()")
        H2 Список заданий
        ul
            li(v-for="item, index in items")
                todo-item(:header="item",
                    :index = 'index',
                    @removeItem="removeTodo",
                    @changeItem="editItem")
                
</template>
<script>
export default {
    data: function() {
        return{
            items: [],
            newTodo: ''

        }
    },
    components: {
        todoItem: require("./item")
    },
    methods: {
        addItem() {
            if(this.newTodo){
                this.items.push(this.newTodo),
                this.newTodo=''
            }
        },
        removeTodo(id) {
            this.items.splice(id, 1)
        },
        editItem(id, name) {
            this.items.splice(id, 1, name);
        }, 
    }
}
</script>
<style lang="scss">
    .container {
        margin-top: 10px;
        width: 500px;
        border: solid 3px grey;
    }
</style>