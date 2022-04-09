<template>
  <p><input type="number" v-model="number" data-testid="input"></p>
  <p data-testid="message">{{ number }}を2倍すると{{ double(number) }}です</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { double } from './double'

export default defineComponent({
  name: 'MyForm4',
  setup() {
    const number = ref(0)

    return {
      number,
      double,
    }
  },
})
</script>
