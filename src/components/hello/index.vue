<template lang="pug">
    //- В компоненте может быть только 1 родительский блок
    div
        .wrap
            h1 hello component
            .block Текст в блоке
            .block Получено через EventBus {{id}}
</template>
<script>
import { $eventBus } from '../../main'// чтобы получить событи по eventBus сначала нужно ее заимпортить
export default {
    data: () => ({
        id: 0
    }),
    created() {
        $eventBus.$on('buttonClicked', id => {
            this.id = id; // получаем данные от компонента Item через eventBus
        })
    }
}
</script>
<style lang ="scss" src="./style.scss" scoped></style>
// стили компонента по умолчанию кладутся в html инлайново, но можно вынести их в отдельный файл .scss, после чего уже подключаем их в src тега style
// чтобы сделать scoped стили указываем атрибут scoped, теперь у каждого компонента добавится data-v- атрибут и стили не будут пересекаться
// так же бывают общие стили
 

