<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post"> <!-- 각각의 list item들 class="post" -->
          <div class="point">
            {{ item.points }} .
          </div>

          <div>
            <p class="news-title">
              <a v-bind:href="item.url" >
                {{ item.title }}
              </a>     
            </p>
     
            <small class="user-text">{{ item.time_ago }} | by. 
            <!-- <router-link v-bind:to="'/user/' + item.user" style="font-size:small">{{ item.user }}</router-link> -->
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
          </div>
        
       </li>
      </ul>
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

<style scoped>
.news-list {
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

.news-title {
  margin: 0;
}

.user-text {
  font-style: italic;
  color: #828282;
}

</style>