<template>
  <div>
    <div :class="countViewClass()">
      {{count}}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'count-vue-component',
    props: {
      count: Number,
    }
  })
  export default class CountViewComponent extends Vue {
    count!: number;

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
    width: 130px;
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
