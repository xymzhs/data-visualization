<template>
  <div class="test">{{message}}</div>
</template>

<script>
export default {
    name:'TestComponent',
    setup(){
    
            const message = "test"
            return {
                message
            }
    }
}
</script>

<style lang="scss" scoped>
.test{
    color:red
}
</style>