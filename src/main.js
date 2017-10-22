import Vue from 'vue'
import App from './App.vue'

export const $eventBus = new Vue(); // подключаем $eventBus, для передачи событий между компонентами

new Vue({
	el: '#app',
	render: h => h(App)
})
