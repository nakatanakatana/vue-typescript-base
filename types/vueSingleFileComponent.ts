declare module '*.vue' {
  import Vue from 'vue'
  import {Store} from 'vuex'

  module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
      store?: Store<any>
    }
  }

  module 'vue/types/vue' {
    interface Vue {
      $store: Store<any>
    }
  }

  const component: typeof Vue
  export default component
}
