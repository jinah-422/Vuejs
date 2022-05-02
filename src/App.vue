<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
    <router-view></router-view> <!-- url에 따라 다르게 뿌려지는 page component영역 -->
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


<style>
body {
  padding: 0;
  margin: 0;
}

/* 링크에 커서가 올라갔을 때 */
a:hover {
  color: #42b883;
}

a {
  color: #34495e;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.fade-enter-active .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter .fade-leave-to {
  opacity: 0;
}

</style>
