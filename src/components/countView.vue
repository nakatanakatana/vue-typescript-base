<template>
  <div>
    <div :class="countViewClass()">
      {{count}}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class CountViewComponent extends Vue {
    @Prop(Number) count!: number;

    countViewClass () {
      return {
        'count-view': true,
        'blue': this.count < 0,
        'white': this.count >= 0 && this.count < 10,
        'red': this.count >= 10,
      };
    }
  }
</script>

<style scoped>
  .count-view {
    border: 1px solid ;
    width: 100px;
  }
  .blue {
    background: blue;
  }
  .white {
    background: white;
  }
  .red {
    background: red;
  }
</style>
