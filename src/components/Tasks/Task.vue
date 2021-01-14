<template>
<div>
    <h3> Tareas: </h3>
    
    <div class="col-xs-6 col-md-6">
        
      <app-task  v-for="(task,index) in tasks" :key="task.id"
            :tasks="tasks" :task="task" :index="index" @remove="deleteTask">
       </app-task>

       
        <p> <a @click="deletedCompleted"> Eliminar tareas completadas</a>  </p>
    </div>
    
    <div class="col-xs-6 col-md-6">
       <router-view></router-view>
    </div>
    <!-- <app-task-form @created="createTask"> </app-task-form> -->

 </div>       
</template>

<script>

import Task from './ListItem.vue'
import TaskList from './List.vue'
import TaskForm from './FormCreate.vue'
import Store from '../../store/index'

export default {

    components: {
        'app-task-list':TaskList,
        'app-task-form':TaskForm,
        'app-task':Task,
    },
    data(){
        return {
          draft:'',
          tasks: Store.state.tasks,
        }
    },
    methods:{
        alertTask(task){
            alert(task.description);
        },
        createTask(task){
             this.tasks.push(task);
        },
        deletedCompleted(){
            this.tasks = this.tasks.filter( task => this.pending);
        }      
    },
}
</script>