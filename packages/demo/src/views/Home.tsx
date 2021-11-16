import { defineComponent, ref, PropType } from "vue"
import { Button } from 'ant-design-vue'
import Footer from '@/layouts/footer'
import Notice from '@/layouts/header/notice'
import Avatar from '@/layouts/header/avatar'
import PageTransition, { AnimateType } from '@/layouts/pageTransition'

console.log('PageTransition', PageTransition)

export default defineComponent({
  components: {
    Footer
  },

  setup() {
    const count = ref(0);
    const animate = ref<AnimateType>('zoom')
    const inc = () => {
      count.value++;
      animate.value = animate.value === 'roll' ? 'zoom' : 'roll'
    };

    return () => <div>
      <Button type="primary" onClick={inc}>
        count: {count.value}
      </Button>
      <Footer />
      <Notice />
      <br />
      <Avatar />
      <br />
      <PageTransition animate={animate.value}>
        <div style="background: #ccc">123</div>
      </PageTransition>
    </div>
  }
});
