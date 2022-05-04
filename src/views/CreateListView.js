import ListVue from './ListView.vue'
import bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        // HOC (High Order Component)
        // 재사용할 인스턴스(컴포넌트) 옵션 들어갈 곳
        name: name, // NewsView, JobsView, AskView ...

        created() {
            bus.$emit('start:spinner');

            // 지연 test
            setTimeout(() => {
              this.$store.dispatch('FETCH_LIST',this.$route.name)
              .then(() => {
                console.log('fetched !- spinner:end')
                bus.$emit('end:spinner');
              })
              .catch((error) => {
                console.log(error)
              })
            }, 1500); 

        },

        render(createElement) {
            return createElement(ListVue);
        }

    }
}