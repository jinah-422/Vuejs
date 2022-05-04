<template>
  <div>

    <!-- *** JobsView, AskView, NewsView의 로직들을 공통 컴포넌트화 시키는 코드 *** -->

    <ul class="item-list">
      <li v-for="item in ListItems" class="post"> <!-- 각각의 list item들 class="post" -->
        <div class="point">
          {{ item.points || 0}} .
        </div>

        <div>
            <!-- list item의 타이틀. if/else 사용-->
            <!-- case1. item.domain이 있을 때, title누르면 해당 url로 연결 -->
            <p class="item-title"> 
                <template v-if="item.domain"> 
                    <a v-bind:href="item.url" >
                    {{ item.title }}
                    </a>
                </template>

                <!-- case2. item.domain이 아니라면, 질문 상세정보 보여주는 페이지로 route시켜준다 -->
                <template v-else>
                    <router-link v-bind:to="`item/${item.id}`">
                        {{ item.title }}
                    </router-link>
                </template>     
            </p>
     
          <small class="link-text">{{ item.time_ago }}
                        
          <!-- case1. by.~~ 가 user일 때 -->
          <!-- <template v-if="item.user">
              <router-link v-bind:to="`/user/${item.user}`" class="link-text"> | by. {{ item.user }}</router-link>
          </template> -->

          <!-- case2. by.~~가 domain일 때 -->
          <!-- <template v-else>
              <a v-bind:href="item.url"> | from. {{ item.domain }} </a>
          </template> -->

        <!-- case1. by.~~ 가 user일 때 -->
        <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text"> | by. {{ item.user }}</router-link>

        <!-- case2. by.~~가 domain일 때 -->
        <a v-else v-bind:href="item.url"> | from. {{ item.domain }} </a>
          
          </small>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    // created() {
    //     console.log(this.$route)
    //     const name = this.$route.name;
    //     if(name === 'news') {
    //         this.$store.dispatch('FETCH_NEWS');           
    //     } else if(name === 'ask') {
    //         this.$store.dispatch('FETCH_ASKS');
    //     } else if(name === 'jobs') {
    //         this.$store.dispatch('FETCH_JOBS');
    //     }   
    // },
    computed: {
      ListItems() {
        return this.$store.state.list;
      }

        // ListItems() {
        //     const name = this.$route.name;
        //     if(name === 'news'){
        //         return this.$store.state.news;
        //     }
        //     else if(name === 'ask'){
        //         return this.$store.state.ask;
        //     }
        //     else if(name === 'jobs'){
        //         return this.$store.state.jobs;
        //     }
        //     else{
        //         return 0;
        //     }
        // }       
    }    
}
    

</script>

<style scoped>
.item-list {
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

.item-title {
  margin: 0;
}

.link-text {
  font-style: italic;
  color: #828282;
}

</style>