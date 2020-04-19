<template>
  <div id="app">
    <h2>Counter</h2>
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import Counter from "./components/Counter.vue";

export default defineComponent({
  components: {
    Counter
  },
  setup() {
    const message = ref("Hello Composition API!");
    const reactiveObj = reactive({
      message: "Hello Composition API!"
    });
    return {
      reactiveObj,
      message
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
