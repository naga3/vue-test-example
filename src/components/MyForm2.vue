<template>
  <div>
    <p>
      <input v-model="comment" data-testid="input-comment">
      <button @click="sendComment" data-testid="button-send">{{ receiver }}さんに送る</button>
    </p>
    <p data-testid="message">{{ typingMessage }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MyForm2',
  props: {
    receiver: {
      type: String,
      default: null,
    },
  },
  setup(_props, { emit }) {
    const comment = ref('')

    const typingMessage = computed(() => {
      if (comment.value) {
        return `「${comment.value}」と入力中...`
      } else {
        return ''
      }
    })

    const sendComment = () => {
      if (comment.value) {
        emit('sendComment', comment.value)
        comment.value = ''
      }
    }

    return {
      comment,
      typingMessage,
      sendComment,
    }
  },
})
</script>
