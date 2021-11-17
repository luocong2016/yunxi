import { defineComponent } from 'vue'
import { SaveOutlined, ReloadOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'

import './index.less'

export const SettingItem = defineComponent({
  props: {
    title: String
  },

  setup(props, { slots }) {
    return () => <div class="setting-item">
      {props.title && <h3 v-if="title" class="setting-item__title">{props.title}</h3>}
      {slots?.default?.()}
    </div>
  }
})

export default defineComponent({
  setup() {
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
      
      {/* <SettingItem title="整体风格设置">
      </SettingItem> */}
    </div>
  }
})
