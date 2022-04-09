<template>
  <p><input type="number" v-model="number" data-testid="input"></p>
  <MyForm3Child :number="number" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyForm3Child from './MyForm3Child.vue'

export default defineComponent({
  name: 'MyForm3',
  components: {
    MyForm3Child,
  },
  setup() {
    const number = ref(0)

    return {
      number,
    }
  },
})
</script>
