<template>
  <div>
   <list-item></list-item>
   <!-- 로직 listitem component로 내려감 -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components: { 
    ListItem 
  },
  created() {
  // bus.$emit('start:spinner');

  // // 지연 test
  // setTimeout(() => {
  //   this.$store.dispatch('FETCH_JOBS')
  //   .then(() => { 
  //     console.log('fetched !- spinner:end')
  //     bus.$emit('end:spinner');
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, 1500);


  // this.$store.dispatch('FETCH_JOBS')
  //   .then(() => {
  //     console.log('fetched !- spinner:end')
  //     bus.$emit('end:spinner');
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  }
}
</script>

<style>

</style>