<template>
  <div>
    <p>Count is: {{ state.count }}</p>
    <p>Double is: {{ state.double }}</p>
    <button @click="increment">click to increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@vue/composition-api";

interface State {
  count: number;
  double: Readonly<number>;
}

export default defineComponent({
  setup() {
    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  }
});
</script>
