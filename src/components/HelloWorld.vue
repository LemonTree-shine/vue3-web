<template>
  <div class="hello" @click="changeName">
    {{props.msg}}{{myName}}
  </div>
</template>

<script setup>
import {defineProps,onMounted,ref} from 'vue';

const props = defineProps({
  msg:String
});

let myName = ref('chenze');

function changeName(){
  myName.value = '12312313123'
}

onMounted(()=>{

})

</script>
