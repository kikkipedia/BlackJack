import VueRouter from 'vue-router'
import StartGame from './components/StartGame.vue'

const routes = [
    {
    path: '/',
    name: 'StartGame',
    component: StartGame
}
]

export const router = new VueRouter({ 
    mode: 'history',
    routes })