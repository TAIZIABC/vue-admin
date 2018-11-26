import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login'
import Table from '@/components/Table'
import From from '@/components/From'
import Chart from '@/components/Chart/Chart'
import Tables from '@/components/Tables'
import NotFound from '@/components/NotFound'
import Store from '@/components/Store'
import Message from '@/components/Message/Message'
import Editor from '@/components/Editor/Editor'
import Map from '@/components/Chart/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/table',
      children: [
        {
          path: '/table',
          name: 'Table',
          component: Table
        },
        {
          path: '/form',
          name: 'From',
          component: From
        },
        {
          path: '/chart',
          name: 'Chart',
          component: Chart
        },
        {
          path: '/map',
          name: 'Map',
          component: Map,
          meta: { keepAlive: true}
        },
        {
          path: '/tables',
          name: 'Tables',
          component: Tables,
        },
        {
          path: '/store',
          name: 'Store',
          component: Store
        },
        {
          path: '/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/text',
          name: 'Editor',
          component: Editor
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})
