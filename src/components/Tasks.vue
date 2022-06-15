<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskVue :task="task"/>
    </div>
</template>
<script>
    import TaskVue from './Task.vue'
    export default{
        name:'TasksVue',
        props:{
            tasks:Array,
        },
        components:{
            TaskVue,
        }

    }
</script>