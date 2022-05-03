<template>
<!-- username눌렀을 때 나오는 상세페이지 -->
  <div>

    <user-profile v-bind:info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ 'Joined '+userInfo.created }}</template>
      <span slot="karma"> ({{userInfo.karma}})</span>
    </user-profile>
    <!-- UserProfile로 propsdata 내려줌 -->
  
  </div>
</template>

<script>
// import axios from 'axios';
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.users;
    }
  },
  created() {
    const userName = this.$route.params.id
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); //-> api/index.js에서

    // UserView에서 생성되자마자 route.params에서 id값을 읽어서 userName에 넣어두고, FETCH_USERS(/store/actions.js에 위치)를 호출하며 userName을 넘겨줌

    this.$store.dispatch('FETCH_USERS', userName) // Actions 호출 -> Mutations -> State -> UserView.vue 에서 props로 state.users 내려줌 -> UserProfile.vue
  }

}
</script>

<style>

</style> 