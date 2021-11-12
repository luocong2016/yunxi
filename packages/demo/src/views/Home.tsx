import { defineComponent, ref } from "@vue/runtime-core";
import { Button } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => <Button type="primary" onClick={inc}>
      count: {count.value}
    </Button>
  }
});
