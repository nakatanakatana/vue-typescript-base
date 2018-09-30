<template>
  <div>
    <button @click="incr">+</button>
    <button @click="decr">-</button>
    <button @click="reset">0</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import * as counter from '../store/counter'

  @Component({
    name: 'count-button-component',
  })
  export default class CountButtonComponent extends Vue {
    incr () {
      return counter.increment(this.$store)
    }

    decr () {
      return counter.decrement(this.$store)
    }

    reset () {
      return counter.reset(this.$store)
    }
  }
</script>
