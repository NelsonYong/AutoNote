import Vue from 'vue'
import VueRouter from 'vue-router'

const Input = () => import('views/Input/InPut')
const education = () => import('views/Input/childComps/Education')
const work = () => import('views/Input/childComps/WorkInfo')
const skill = () => import('views/Input/childComps/SkillInfo')
const project = () => import('views/Input/childComps/ProjectInfo')
const self = () => import('views/Input/childComps/SelfInfo')
const ShowInfo = () => import('views/showinfo/ShowInfo')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/show'
  },
  {
    path: '/input',
    component: Input,
  },
  {
    path: '/education',
    component: education
  },
  {
    path: '/work',
    component: work
  },
  {
    path: '/skill',
    component: skill
  },
  {
    path: '/project',
    component: project
  },
  {
    path: '/self',
    component: self
  },
  {
    path: '/show',
    component: ShowInfo
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router