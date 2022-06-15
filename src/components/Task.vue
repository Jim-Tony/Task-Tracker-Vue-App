<template>
    <h2>
        {{task.text}}
    </h2>
    <h3>
        {{task.day}}
    </h3>
</template>
<script>
    export default{
        name:'TaskVue',
        props:{
            task:Object,
        }
    }
</script>