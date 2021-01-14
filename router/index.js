import Vue from 'vue'
import Router from 'vue-router'

//Routes

import Tasks from '../src/components/Tasks/Task.vue'
import DetailsTaks from '../src/components/Tasks/Details.vue'
import Dashboard from '../src/components/Dashboard.vue'
import ErrorNotFound from '../src/components/Errors/NotFound.vue'


Vue.use(Router)

var router = new Router({
  mode:'history',
    routes:[
      {
        path:'/Dashboard',
        name:'dashboard',
        component: Dashboard
      },
      {
        path:'/Tasks',
        name: 'tasks',
        component: Tasks,
        children:[
          {
            path:'',
            component:{
              template:'<h1> Por favor seleccione Una tarea'
            }
          },
          {
            path:':id',
            name:'tasks.details',
            component: DetailsTaks,
            props: true
          },
        ]
      },
     
      {
        path:'/404',
        component: ErrorNotFound,
      },{
        path:'*',
        redirect:'/404'
      }
  ]
});

export default router