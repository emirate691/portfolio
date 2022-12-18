import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Skill from '@/views/Skill.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'






Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  
  
  {
    path: '/skill',
    name: 'skill',
    component: Skill,
  },
  
  {
    path: '/project',
    name: 'project',
    components: Project
  }
   
   
]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
