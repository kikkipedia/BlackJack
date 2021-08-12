import VueRouter from 'vue-router'
import StartGame from './components/StartGame.vue'
import Game from './components/Game.vue'

const routes = [
    {
        path: '/',
        name: 'StartGame',
        component: StartGame
    },{
        path: '/game',
        name: 'Game',
        component: Game
    }
]

export const router = new VueRouter({ 
    mode: 'history',
    routes })