<template>
    <li @click="select" :class="{active:isActive}" class="list-group-item"> 

        <a href="#" @click="toggleStatus">
          <app-icon :img="task.pending ? 'unchecked ' : 'check'"></app-icon>
        </a>
        
        <span v-if="!editing" class="description" :class="{'taskList': !task.pending }">  {{ task.title }}  </span>
    </li>
</template>

<script>
import EventBus from './../../event-bus.js'
import Icon from './../Icon.vue'

    export default {
        components:{
            'app-icon': Icon
        },
        data(){
            return {
                draft: '',
            };
        },
        props:['task'],
        methods:{
            select(){
          
                this.$router.push('/Tasks/'+ this.task.id)
            },
            toggleStatus(){
                 this.task.pending = !this.task.pending;
            },
        },
        /*computed:{
            isActive(){
                return this.task.id = this.$route.params.id;
            }
        }*/
        
    }
</script>

 
 