# Demo
```vue
import { defineComponent, ref } from "vue"

export default defineComponent({
  const checkedGroup = ref(['dark'])

  setup() {
    return () => <ImgCheckboxGroup v-model={[checkedGroup.value]}>
      <ImgCheckbox
        style="width:150px;"
        label="暗色菜单风格"
        value="dark"
        src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
      />
      <ImgCheckbox
        style={{ width: '150px', fontSize: '20px' }}
        label="亮色菜单风格"
        value="light"
        src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
      />
      <ImgCheckbox
        style="width: 150px;"
        label="深夜模式"
        value="night"
        src="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg"
      />
    </ImgCheckboxGroup>
  }
})
```

## API
### ImgCheckbox

参数 | 说明 | 类型 | 默认值
---|---|---|---
checked(v-model)  | 指定当前是否选中 | boolean | false
disabled  | 失效状态 | boolean | false
label | 鼠标经过提示 | string | -
value | \<ImgCheckboxGroup /> 时唯一键值 | string\|number | -

##### 事件
事件名称 | 说明 | 回调参数
---|---|---
change | 变化时回调函数 | Function(e: Event)

### ImgCheckboxGroup
参数 | 说明 | 类型 | 默认值
---|---|---|---
value(v-model)  | 指定当前是否选中 | \<string\|number>[] | []
disabled  | 失效状态 | boolean | false
multiple  | 是否多选 | boolean | true

##### 事件
事件名称 | 说明 | 回调参数
---|---|---
change | 变化时回调函数 | Function(checkValue)
