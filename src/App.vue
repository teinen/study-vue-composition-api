<template>
  <div id="app">
    <h2>Counter</h2>
    <Counter />

    <h2>Mouse Position</h2>
    <p>X: {{ mousePos.x }}, Y: {{ mousePos.y }}</p>

    <h2>Props/Emit</h2>
    <ChildComponent :message="state.message" @updateMessage="updateHandler" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import Counter from "./components/Counter.vue";
import ChildComponent from "./components/ChildComponent.vue";
import { useMousePosition } from "./compositions/mouse";

export default defineComponent({
  components: {
    Counter,
    ChildComponent
  },
  setup() {
    const state = reactive({
      message: "This is initial message."
    });
    const mousePos = useMousePosition();

    function updateHandler(inputMessage: string) {
      state.message = inputMessage;
    }

    return { state, mousePos, updateHandler };
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
