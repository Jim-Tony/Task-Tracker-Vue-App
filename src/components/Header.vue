<template>
    <header>
        <h1>{{title}}</h1>
    <ButtonVue text="Add a task" color="green"/>
    </header>
</template>
<script>
    import ButtonVue from './Button.vue'
    export default{
        name:'HeaderCont',
        props:{
            title:String,
        },
        components:{
            ButtonVue
        }
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