<template>
  <div>
      <p v-for="news in this.$store.state.news">
        <a v-bind:href="news.url">
          {{ news.title }}
        </a>
        <small>{{ news.time_ago }} | by. 
        <!-- <router-link v-bind:to="'/user/' + news.user" style="font-size:small">{{ news.user }}</router-link> -->
        <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
        </small>
      </p>
  </div>
</template>

<script>

export default {
  // data() {
  //   return {
  //     newses : [], // axios를 통해 받아온 users를 이 배열에 넣음, 
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
   
    //   .then(function(response) {
    //     vm.newses = response.data; // callback함수의 this바인딩 바로 x
    //   })
    //   .catch(error => console.log(error));  
  }
}
</script>

<style>

</style>