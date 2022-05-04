<template>
  <div>
    <p v-for="news in this.$store.state.news">
        <a href="news.url" >
            {{ news.title }}
        </a>
    </p>
  </div>
</template>

<script>

export default {
<<<<<<< HEAD
  components: { 
    ListItem,
  },
  created() {
  
    // bus.$emit('start:spinner');

    // // 지연 test
    // setTimeout(() => { 
    //   this.$store.dispatch('FETCH_NEWS')
    //   .then(() => {
    //     console.log('fetched !- spinner:end')
    //     bus.$emit('end:spinner');
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // }, 1500);


    // this.$store.dispatch('FETCH_NEWS')
    //   .then(() => {
    //     console.log('fetched !- spinner:end')
    //     bus.$emit('end:spinner');
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    
    
  }
=======
    created() {
        this.$store.dispatch('FETCH_NEWS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'))        
    }

>>>>>>> 8ac346355a0a2d9ceba259ff0b6b662266193670
}
</script>

<style>
a {
    text-decoration-line: none;
}

</style>