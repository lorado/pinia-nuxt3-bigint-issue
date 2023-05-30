<template>
  <div>
    <div style="margin: 1rem 0">
      <PiniaLogo />
    </div>


    <h2>Counter Store</h2>

    <p data-testid="counter-values">
      Counter: {{ bigintFormatted }}
    </p>

    <p>Increment the Store:</p>

    <button @click="counter.increment()" data-testid="increment">+1</button>
    <button @click="counter.increment(10n)">+10</button>
    <button @click="counter.n++">Direct Increment</button>

    <hr />

    <p>
      Complete store state via
      <code>store.$state</code>:
    </p>

<!--    <pre>{{ counter.$state }}</pre>-->
  </div>
</template>

<script setup lang="ts">
import PiniaLogo from '~/components/PiniaLogo.vue'
import {useCounterStore} from "~/stores/counter";

const counter = useCounterStore()

console.log('counter.n in setup:', counter.n)
const bigintFormatted = computed(() => counter.n.toString())
</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
