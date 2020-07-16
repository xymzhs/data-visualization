<template>
  <div class="test">{{doubleCount}}</div>
</template>

<script>
import {computed,ref} from 'vue'
export default {
    name:'TestComponent3',
    setup(){
    

            const count = ref(1)
             const doubleCount = computed(()=> count.value * 2)
             const add = () => {
                 count.value ++
             }
            return {
                doubleCount,
                add
            }
    }
}
</script>

<style lang="scss" scoped>
.test{
    color:yellow
}
</style>