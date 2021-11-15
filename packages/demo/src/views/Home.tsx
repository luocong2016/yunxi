import { defineComponent, ref } from "vue"
import { Button } from 'ant-design-vue'
import Footer from '@/layouts/footer'
import Notice from '@/layouts/header/notice'

export default defineComponent({
  components: {
    Footer
  },

  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => <div>
      <Button type="primary" onClick={inc}>
        count: {count.value}
      </Button>
      <Footer />
      <Notice />
    </div>
  }
});
