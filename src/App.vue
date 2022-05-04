<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar
  }

}
</script>

<style scoped>
body{
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
  text-decoration-line: none;
  
}

/* 링크에 커서 올라갔을 때 */
a:hover { 
  color: #42b883;
}

a .router-link-exact-active {
  text-decoration: none;
}

.fade-enter-active .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter .fade-leave-to {
  opacity: 0;
}


</style>