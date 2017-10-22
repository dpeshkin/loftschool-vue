<template lang="pug">
    div.list-item
        h4 компонент {{id}}
        button(@click="handleClick(id)") click
</template>
<script>
import { $eventBus } from '../../../main' // импортируем $eventBus из main.js
export default {
    props: {
        id: {
            type: Number,
            default: 0
        }
    },
    methods: {
        handleClick (id) {
            this.$emit('buttonClicked', id); //$emit передает событи в родителя, первый параметр будет названием метода для v-on в родителе
            $eventBus.$emit('buttonClicked', id); //передаем событе в $eventBus, теперь его можно получить в любом компоненте
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-item{
        display: flex;
        align-items: center;
    }
    .list-item h4{
        margin-right: 30px;
    }
</style>