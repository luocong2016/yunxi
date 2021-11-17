import { defineComponent, ref } from 'vue'
import { useParent, useChildren } from '@imitate/vhoock'
import { Tooltip } from 'ant-design-vue'

import "./index.less"

// 生病😷了，一团浆糊

const RELATION_KEY = Symbol('img-checkbox');

export const ImgCheckboxGroup = defineComponent({
  emits: ["modelValue:value"],

  props: {
    multiple: Boolean,
    value: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { slots, emit }) {
    const { linkChildren } = useChildren(RELATION_KEY);

    const onChange = (val: any) => {
      emit("modelValue:value", val);
    }
    
    linkChildren({ onChange } as any)

    return () => <div class="img-checkbox-group">
      {slots.default?.()}
    </div>
  }
})

export default defineComponent({
  setup() {
    const { parent } = useParent(RELATION_KEY);
    if (parent) {
      parent
    }
    return () => <Tooltip></Tooltip>
  }
})
