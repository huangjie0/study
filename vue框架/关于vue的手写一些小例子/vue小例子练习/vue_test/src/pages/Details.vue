<template>
    <ul>
        <li>消息:{{$route.query.id}}</li>
        <li>消息:{{$route.query.title}}</li>
    </ul>
  
</template>

<script>
export default {
    name:'Detail'
}
</script>