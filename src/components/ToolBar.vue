<template>
  <div class="header">
      <router-link to="/news">&nbsp;&nbsp;[News]&nbsp;&nbsp;</router-link>  
      <router-link to="/ask">&nbsp;&nbsp;[Ask]&nbsp;&nbsp;</router-link>  
      <router-link to="/jobs">&nbsp;&nbsp;[Jobs]&nbsp;&nbsp;</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
    font-size: larger;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header .router-link-exact-active {
    color: black;
}

.header a {
    color: white;
    text-decoration-line: none;
}


</style>