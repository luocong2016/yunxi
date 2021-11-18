import { defineComponent, ref, PropType } from "vue"
import { Button } from 'ant-design-vue'
import Footer from '@/layouts/footer'
import Notice from '@/layouts/header/notice'
import Avatar from '@/layouts/header/avatar'
import PageTransition, { AnimateType } from '@/layouts/pageTransition'
import Setting from '@/layouts/setting';
import ImgCheckbox, { ImgCheckboxGroup } from '@/components/checkbox/ImgCheckbox'

console.log('PageTransition', PageTransition)

export default defineComponent({
  components: {
    Footer
  },

  setup() {
    const checked = ref(false);
    const checkedGroup = ref(['dark'])
    const count = ref(0);
    const animate = ref<AnimateType>('zoom')
    const inc = () => {
      count.value++;
      animate.value = animate.value === 'fade' ? 'zoom' : 'fade'
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
        <span style="background: #ccc">{animate.value}</span>
      </PageTransition>

      <Setting />
      <br />

    </div>
  }
});
