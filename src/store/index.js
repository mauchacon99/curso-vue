let tasks = [
    {
        title: 'Ir al Mercado',
        pending: true,
    },
    {
        title:'Comprar respuesto',
        pending: false,
    },
    {
        title:'Arreglar el cuarto',
        pending: true,
    },
    
];


tasks.forEach((task, index) =>{
    task.description = `
        Exportamos store/index.js con el listado de tareas dentro de 
        un objeto llamado state:
    `;
    task.id = index +1;
});

export default{
    state:{
        tasks
    },
    findTask(id){
        
        return this.state.tasks.find( task => task.id == id)
    }
    
}