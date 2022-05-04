<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
    <router-view></router-view> <!-- url에 따라 다르게 뿌려지는 page component영역 -->
    </transition>
    <spinner v-bind:loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from '../src/components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
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
