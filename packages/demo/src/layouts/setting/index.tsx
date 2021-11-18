import { defineComponent, ref } from 'vue'
import { SaveOutlined, ReloadOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import ImgCheckbox, { ImgCheckboxGroup } from '@/components/checkbox/ImgCheckbox'

import './index.less'

export const SettingItem = defineComponent({
  props: {
    title: String
  },

  setup(props, { slots }) {
    return () => <div class="setting-item">
      {
        props.title
          ? <h3 v-if="title" class="setting-item__title">{props.title}</h3>
          : null
      }
      {slots.default?.()}
    </div>
  }
})

export default defineComponent({
  setup() {
    const checkedGroup = ref([]);

    return () => <div class="setting">
      <SettingItem>
        <Button
          type="primary"
          v-slots={{
            icon: () => <SaveOutlined />,
            default: () => '保存配置'
          }}
        />
        <Button
          type="dashed"
          v-slots={{
            icon: () => <ReloadOutlined />,
            default: () => '重置配置'
          }}
        />
      </SettingItem>

      <SettingItem >
        <ImgCheckboxGroup v-model={[checkedGroup.value]} multiple={false}>
          <ImgCheckbox
            style={{ width: '80px', height: '80px' }}
            label="暗色菜单风格"
            value="dark"
            src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
          />
          <ImgCheckbox
            style={{ width: '80px', height: '80px', fontSize: '20px' }}
            label="亮色菜单风格"
            value="light"
            src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
          />
          <ImgCheckbox
            style={{ width: '80px', height: '80px' }}
            label="深夜模式"
            value="night"
            src="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg"
          />
          <ImgCheckbox
            style={{ width: '80px', height: '80px' }}
            label="深夜模式"
            value="ccc"
            color="#ccc"
          />
        </ImgCheckboxGroup>
      </SettingItem>
    </div>
  }
})
