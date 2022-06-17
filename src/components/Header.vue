<template>
    <header>
        <h1>{{title}}</h1>
    <ButtonVue v-show="homePage"
        @btn-click = "$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'" 
        :color="showAddTask ? 'red':'green'"/>
    </header>
</template>
<script>
    import ButtonVue from './Button.vue'
    export default{
        name:'HeaderCont',
        props:{
            title:String,
            showAddTask:Boolean,
        },
        components:{
            ButtonVue
        },
        computed:{
            homePage(){
                if(this.$route.path==='/'){
                    return true;
                }
                else return false;
            }
        },
        emits:['toggle-add-task'],
    }
</script>
<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>