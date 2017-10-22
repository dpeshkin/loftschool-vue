<template lang="pug">
	#app
		todo
		hello-comp
		app-form
		hello-props(
			v-bind:message="msg",
			v-bind:text="text2"
		)
			h3 Меня прислали из app.vue
			h4 И меня
			div(slot="first")
				h4 меня прислали в именованный слот из app.vue
			div(slot="second")
				h4 а меня в другой слот оттуда же
		list
</template>
<script>
export default {
	data: () => ({
		msg: 'text from App.vue',
		text2: 'text2 from app.vue'
	}),
	components: { // здесь мы подлключаем компоненты в наше приложение, в названии компонента здесь используем camelCase
		helloComp: require('./components/hello'),
		appForm: require('./components/form'),
		helloProps: require('./components/hello-props'),
		list: require('./components/list'),
		todo: require('./components/todo')
	}
}
</script>
<style lang="scss"></style>