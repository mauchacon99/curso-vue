<template>
     <form @submit.prevent="create">
        <input type="text" v-model="draft" class="form-control" >
        <button class="btn btn-primary"> Crear Tarea</button>
    </form>

</template>

<script>
export default {
    data(){
        return{
            draft:'',
        }
    },
    methods:{
        create(){
            this.$emit('created',{
                description:this.draft,
                pending: true,
            });
            
            this.draft = '';
        }
    }
}
</script>