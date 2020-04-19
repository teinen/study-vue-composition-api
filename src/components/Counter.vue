<template>
  <div>
    <p>Count is: {{ state.count }}</p>
    <p>Double is: {{ state.double }}</p>
    <button @click="increment">click to increment</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watchEffect,
  onMounted
} from "@vue/composition-api";

interface State {
  count: number;
  double: Readonly<number>;
}

export default defineComponent({
  setup() {
    // created hook is included in setup()
    console.log("component is created!");

    // mounted hook
    onMounted(() => {
      console.log("component is mounted!");
    });

    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    watchEffect(() => {
      console.log(`Current count is: ${state.count}`);
    });

    return {
      state,
      increment
    };
  }
});
</script>
