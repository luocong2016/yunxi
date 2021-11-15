import { defineComponent, VNode, PropType } from 'vue'
import { CopyrightOutlined } from '@ant-design/icons-vue'
import './index.less'

type LinkList = {
  name: string;
  link?: string;
  icon?: VNode;
  target?: "_blank" | "_self" | "_parent" | "_top"
}

export default defineComponent({
  props: {
    copyright: {
      type: String,
      default: 'lutz'
    },
    linkList: {
      type: Array as PropType<LinkList[]>,
      default: () => [
        {
          icon: <CopyrightOutlined />,
          name: 'VNode'
        }
      ]
    }
  },

  setup(props) {
    return () => <div class="footer">
      <div class="footer__links">
        {
          props.linkList.map((item) => <a target={item.target || "_blank"} href={item.link || 'javascript: void(0)'}>
            {item?.icon} {item.name}
          </a>)
        }
      </div>
      <div class="footer__copyright">
        Copyright <CopyrightOutlined /> {props.copyright}
      </div>
    </div >
  }
})
