import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const  LoginView=()=> import('../views/LoginView')
const  ProfileView=()=> import('../views/ProfileView')
const  YunCunView=()=> import('../views/YunCunView')
const  SearchView=()=> import('../views/SearchView')
const  VideoView=()=> import('../views/VideoView')
const  ListView=()=> import('../views/ListView')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path: '/login',name:'login',component: LoginView},
  {path: '/profile',name:'profile',component: ProfileView},
  {path: '/yun-cun',name:'yunCun',component: YunCunView},
  {path: '/search',name:'search',component: SearchView},
  {path: '/video',name:'video',component: VideoView},
  {path: '/list',name:'list',component: ListView},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
