<template>
  <div>
      <p v-for="job in this.$store.state.jobs">
        <a v-bind:href="job.url">
          {{ job.title }}
        </a>
        <small>{{ job.time_ago }} | from. {{ job.domain }}</small>
      </p>
      
  </div>
</template>

<script>
// import {fetchJobsList} from '../api/index.js'
export default {
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },

  created() {
    this.$store.dispatch('FETCH_JOBS')
    // const vm = this;
    // fetchJobsList()
    // .then(function(response){
    //   console.log('jobs : '+response.data)
    //   vm.jobs = response.data;
    // })
    // .catch(function(error){
    //   console.log(error)
    // })
    
    

  }

}
</script>

<style>

</style>