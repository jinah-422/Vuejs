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
    created() {
        this.$store.dispatch('FETCH_NEWS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'))        
    }

}
</script>

<style>
a {
    text-decoration-line: none;
}

</style>