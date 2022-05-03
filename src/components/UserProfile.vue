<template>
  <!-- 재사용 컴포넌트. 상위컴포넌트에서 <user-profile>로 사용함 -->
  <div class="user-container">
        <div class="fa-user"><i class="fa-solid fa-user-large"></i></div>
      

    <div class="user-description">
        <div class="username">
            <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
        </div> 
         <!-- 
             ItemView -> info.user
             UserView -> info.id 라서 재사용컴포넌트(UserProfile) 다 표현해주거나  - case1
             slot을 이용해 표현해두고, 상위컴포넌트에서 해당하는 이름 (info.id ..)로 사용해주거나  - case2
          -->
         
        <div class="time">
            <slot name="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>

            <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
            <!-- {{ info.created }} -->
        </div>
    </div>
  </div>

</template>

<script>
export default {
    props: {
        info: { type: Object } 
    },  // UserView에서 props로 =>> UserView에서 api요청 후 수신 -> vuex(actions,mutations,state)에서 users값 수신 -> UserProfile로 props내려줌
    computed: {
        // userInfo() {
        //     return this.$store.state.users;
        // }
    }   // UserProfile.vue에서 computed로 접근 =>> vuex(actions,mutations,state)로 바로 접근 -> vuex에서 api요청 후 수신
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding : 0.6rem;
}

/* 아이콘 */
.fa-user { 
    font-size: 2.5rem;
}

.user-description {
    padding-left: 10px;
}

.time {
    font-size: 0.7rem;
}

.karma {
    font-size: 1rem;
}

.username {
    font-weight: bolder;
}

</style>