<template>
  <div>
    <div>{{value}}</div>
    <count-view :count="getCount"></count-view>
    <count-button></count-button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import * as counter from '../store/counter'

  import CountViewComponent from '../components/countView.vue'
  import CountButtonComponent from '../components/countButton.vue'

  @Component({
    name: 'home-component',
    components: {
      'count-view': CountViewComponent,
      'count-button': CountButtonComponent,
    }
  })
  export default class HomeComponent extends Vue {
    value: string = 'homeComponent'

    get getCount (): number {
      return counter.getCount(this.$store)
    }
  }
</script>

<style scoped>
</style>
