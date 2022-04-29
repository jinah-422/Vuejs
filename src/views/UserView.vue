<template>
  <div>
    <p>ID : {{ this.$store.state.users.id }}</p>
    <p>karma : {{ this.$store.state.users.karma }}</p>
    <p>created : {{ this.$store.state.users.created }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  created() {
    const userName = this.$route.params.id
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); //-> api/index.js에서

    // UserView에서 생성되자마자 route.params에서 id값을 읽어서 userName에 넣어두고, FETCH_USERS(/store/actions.js에 위치)를 호출하며 userName을 넘겨줌
    this.$store.dispatch('FETCH_USERS', userName)
  }

}
</script>

<style>

</style> 