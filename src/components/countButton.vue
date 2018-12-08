<template>
  <div>
    <button @click="incr" id="count-button-incr">+</button>
    <button @click="decr" id="count-button-decr">-</button>
    <button @click="reset" id="count-button-reset">0</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  import * as counter from '../store/counter';

  @Component
  export default class CountButtonComponent extends Vue {
    incr () {
      return counter.increment(this.$store);
    }

    decr () {
      return counter.decrement(this.$store);
    }

    reset () {
      return counter.reset(this.$store);
    }
  }
</script>
