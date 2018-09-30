<template>
  <div>
    <div>{{count}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    name: 'count-vue-component',
    props: {
      count: Number,
    }
  })
  export default class CountViewComponent extends Vue {
  }
</script>
