import {defineStore} from "pinia";


// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     n: 2n,
//   }),
//
//   actions: {
//     increment(amount = 1n) {
//       this.n += amount
//     },
//   },
// })


export const useCounterStore = defineStore('counter', () => {
    const n = ref(0n);
    const increment = (amount = 1n) => {
        n.value += amount
    }

    return {
        n, increment
    }
})
