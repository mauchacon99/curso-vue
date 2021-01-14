<template>
    <div>
    <div v-if="task">
        <h2> {{task.title}} </h2>
        <p> {{task.description}} </p>
    </div>
       <p v-else> Tarea No Encontrada</p>
    </div>
</template>
<script>

import store from '../../store/index';

export default {
    props:['id'],
    data(){
        return{
            task: null
        }
    },
    created(){
        this.findTask();
    },
    watch:{
        id:'findTask'
    },
    methods:{
        findTask(){
            this.task = store.findTask(this.id);

            if( !this.task){
                this.$router.replace('/404');
            }
        }
    }
   /* computed:{
        taskId(){
            return this.$route.params.id;
        }

    }*/
}
</script>