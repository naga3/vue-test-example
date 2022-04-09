<template>
  <div>
    <p>
      <input v-model="comment" @input="receiver = null" data-testid="input-comment">
      <button @click="receiver = 'A'" data-testid="button-send-a">Aさんに送る</button>
      <button @click="receiver = 'B'" data-testid="button-send-b">Bさんに送る</button>
    </p>

    <div v-if="receiver" data-testid="message">
      <p v-if="comment">{{ receiver }}さんに「{{ comment }}」を送りました。</p>
      <p v-else>コメントがありません。</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MyForm1',
  setup() {
    const comment = ref('')
    const receiver = ref<string | null>(null)

    return {
      comment,
      receiver,
    }
  },
})
</script>
