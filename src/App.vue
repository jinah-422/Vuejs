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
<<<<<<< HEAD
    ToolBar,
    Spinner
  },
  methods: {
    startSpinner() { 
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner) 
    bus.$on('end:spinner', this.endSpinner)
    // event지정 ('event name', callback) -> 하위 component에서 bus.$emit으로 event호출 ( emit이 이벤트발생, 상위component에서 on으로 처리 )
  },
  beforeDestory() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
=======
    ToolBar
>>>>>>> 8ac346355a0a2d9ceba259ff0b6b662266193670
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