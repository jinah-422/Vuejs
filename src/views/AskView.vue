<template>
  <div>
      <p v-for="item in fetchedAsk">
        <!-- <a v-bine:href="ask.url">
          {{ ask.title }}
        </a> -->

        <router-link v-bind:to="`item/${item.id}`">
          {{ item.title }}
        </router-link>

        <small class="small">{{ item.time_ago }} | by. 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </p>
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

<style>
.small {
  font-style: italic;
}
</style>