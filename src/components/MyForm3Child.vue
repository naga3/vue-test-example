<template>
  <p>{{ number }}を2倍すると{{ number * 2 }}です</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyForm3Child',
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
})
</script>
