import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // подключаем роутер

export const $eventBus = new Vue(); // подключаем $eventBus, для передачи событий между компонентами

Vue.use(VueRouter) // сообщаем что хотим использовать роутер

const todo = require('./components/todo') // путь до компонента туду
const hello = require('./components/hello-props')
const item = require('./components/todo/item-view')
const routes = [
	{path: '/', component: todo}, // прописываем пути до компонентов
	{name: 'item', path: '/:id', component: item}, 
	{path: '/hello', component: hello}
]

const router = new VueRouter ({ // создаем экземпляр роутреа
	routes, mode:'history' //mode:history убирает # в адресной строке
})

new Vue({
	el: '#app',
	router, // подключаем роутер в приложение
	render: h => h(App)
})
