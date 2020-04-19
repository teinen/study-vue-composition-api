<template>
  <div>
    <p>{{ message }}</p>
    <input type="text" v-model="inputMessage" />
    <button @click="updateMessage">update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const inputMessage = ref("");

    function updateMessage() {
      context.emit("updateMessage", inputMessage);
    }

    return {
      inputMessage,
      updateMessage
    };
  }
});
</script>
