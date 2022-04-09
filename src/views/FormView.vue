<template>
  <h2>MyForm1</h2>
  <MyForm1 />
  <h2>MyForm2</h2>
  <MyForm2 receiver="田中" @sendComment="form2Comment = $event" />
  <p v-if="form2Comment">田中さんに「{{ form2Comment }}」を送りました。</p>
  <h2>MyForm3</h2>
  <MyForm3 />
  <h2>MyForm4</h2>
  <MyForm4 />
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import MyForm1 from "@/components/MyForm1.vue"
import MyForm2 from "@/components/MyForm2.vue"
import MyForm3 from "@/components/MyForm3.vue"
import MyForm4 from "@/components/MyForm4.vue"

export default defineComponent({
  name: 'FormView',
  components: {
    MyForm1,
    MyForm2,
    MyForm3,
    MyForm4,
  },
  setup() {
    const form2Comment = ref('')

    return {
      form2Comment,
    }
  }
})
</script>
