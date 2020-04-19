<template>
  <div id="app">
    <h2>Counter</h2>
    <Counter />

    <h2>Mouse Position</h2>
    <p>X: {{ mousePos.x }}, Y: {{ mousePos.y }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Counter from "./components/Counter.vue";
import { useMousePosition } from "./compositions/mouse";

export default defineComponent({
  components: {
    Counter
  },
  setup() {
    const { mousePos } = useMousePosition();

    return { mousePos };
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
