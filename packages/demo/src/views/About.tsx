import { defineComponent, ref } from 'vue';
import { useToggle } from 'vhoock';
import { useToggle as useT } from '@vant/use'

export default defineComponent({
  setup() {
    const state = ref();
    const toggle = () => {
      state.value = !state.value;
    }

    const [s, t] = useToggle();

    const [s2, t2] = useT();

    return () => (
      <div class="about">
        <h1>{state.value ? "true" : "false"}</h1>
        <button onClick={() => toggle()}>toggle</button>

        <h1>{s.value ? "true" : "false"}</h1>
        <button onClick={() => t()}>toggle</button>

        <h1>{s2.value ? "true" : "false"}</h1>
        <button onClick={() => t2()}>toggle</button>
      </div>
    );
  },
});

