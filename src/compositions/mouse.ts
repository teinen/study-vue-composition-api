import { reactive, onMounted, onUnmounted } from "@vue/composition-api";

const useMousePosition = () => {
  const mousePos = reactive({
    x: 0,
    y: 0
  });

  function update(e: MouseEvent) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { mousePos };
};

export { useMousePosition };
