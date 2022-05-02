<template>
  <div>
    <section>
    <!-- 질문 상세정보 section -->
      <div class="user-container">
        <div class="fa-user">
          <i class="fa-solid fa-user-large"></i>
        </div>

        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>

          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>

        </div>
      </div>

       <h2>{{ fetchedItem.title }}</h2>
    </section>
    
    <section>
    <!-- 질문 댓글 section-->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },

  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',userId)
  },
}

</script>

<style>
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

</style>