<template lang="pug">
    div
        .item-name(v-if="!edit") {{index + 1 + '. ' + header}}
        input(v-else,
            v-model="newName",
            @keydown.enter="changeItem(index, newName)")
        div
            button.change(@click="showInput()") Изменить
            router-link(
                tag='button' 
                :to="{name:'item', params: {id: newName}}"
            ) Посмотреть
            button.delete(@click="deleteItem(index)") Удалить
</template>
<script>
export default {
    data: function () {
        return {
            edit: false,
            newName: this.header
        }
    },
    props: {
        header: [String, Number],
        index: Number,
    },
    methods: {
        deleteItem(id) {
            this.$emit('removeItem', id)
        },
        showInput(){
            this.edit = true
        },
        changeItem(id, newName) {
            this.$emit('changeItem', id, newName);
            this.edit = false;
        }

    }
}
</script>
<style lang="scss" scoped>
    .item-name {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>