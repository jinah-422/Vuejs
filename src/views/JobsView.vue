<template>
  <div>
    <ul class="jobs-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="point">
          {{ job.points || 0}} .
        </div>

        <div>
          <a v-bind:href="job.url" class="job-title">
            {{ job.title }}
          </a>
          </br>

          <small class="link-text">{{ job.time_ago }} | from. 
            <a v-bind:href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
      
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

<style scoped>
.jobs-list {
  padding: 0;
}

.post {
  list-style: none; /* black point 제거 */ 
  align-items: center;
  display: flex;
  border-bottom: 2.5px solid #eee;
}

.point {
  width: 80px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #42b883;
  font-size: medium;
  font-family: fantasy;
}

.job-title {
  margin: 0;
}

.link-text {
  font-style: italic;
  color: #828282;
}



</style>