<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="point">
          {{ item.points }} .
        </div>

        <div>
         <router-link v-bind:to="`item/${item.id}`" class="ask-title">
           {{ item.title }}
         </router-link>
        </br>

         <small class="link-text">{{ item.time_ago }} | by. 
           <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
         </small>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'
import {mapState, mapGetters} from 'vuex'

export default {
  // data() {
  //   return {
  //    asks : []
  //   }
  // },
  
  computed: {
    // // #1
    // ask() {
    //   return this.$store.state.asks;
    // },
    // // #2
    // ...mapState({
    //   fetchedAsk: function(state) {
    //     state.ask
    //   }
    // }),
    // #3
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })
  },

  created() {
    this.$store.dispatch('FETCH_ASKS')

  // const vm = this;
  // fetchAskList()
  // .then(function(response) {
  //   console.log('ask : '+response.data)
  //   vm.asks = response.data;
  // })
  }

}
</script>

<style scoped>
.ask-list {
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 2.5px solid #eee;
}

.point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
  font-size: medium;
  font-family: fantasy;
}

.ask-title {
  margin: 0;
}

.link-text {
  font-style: italic;
  color: #828282;
}

</style>