<template>
    <button @click="$emit('toggle-add-task')" :style="{background: color}" class="btn">{{text}}</button>
</template>
<script>
    export default{
        name:'ButtonVue',
        props:{
            text:String,
            color:String,
        },
        emits:['toggle-add-task'],
    }
</script>