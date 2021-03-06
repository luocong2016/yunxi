import { defineComponent, computed } from 'vue'
import { useParent, useChildren } from '@imitate/vhoock'
import { CheckOutlined } from '@ant-design/icons-vue'
import { Tooltip } from 'ant-design-vue'

import "./index.less"

const RELATION_KEY = Symbol('img-checkbox');

export const ImgCheckboxGroup = defineComponent({
  emits: ['update:modelValue', 'change'],

  props: {
    type: {
      type: String,
      default: 'color'
    },
    disabled: Boolean,
    multiple: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { slots, emit }) {
    const { linkChildren } = useChildren(RELATION_KEY)

    const mValue = computed(() => props.modelValue)

    const onChange = (val: any) => {
      if (props.disabled) {
        return
      }
      if (!props.multiple) {
        const v = props.modelValue.length > 0 && props.modelValue[0] === val ? [] : [val]
        emit("update:modelValue", v)
        emit('change', v)
        return
      }
      const v = [...props.modelValue]
      const index = v.indexOf(val)
      index === -1 ? v.push(val) : v.splice(index, 1)
      emit("update:modelValue", v)
      emit('change', v)
    }

    linkChildren({ onChange, mValue } as any)

    return () => <div class="img-checkbox-group">
      {slots.default?.()}
    </div>
  }
})

export default defineComponent({
  emits: ["update:checked", 'change'],

  props: {
    label: String,
    value: [String, Number],
    checked: Boolean,
    disabled: Boolean,
    src: String,
    color: String,
    style: Object
  },

  setup(props, { emit }) {
    const { parent } = useParent(RELATION_KEY)

    const checked = computed(() => {
      if (!parent) {
        return props.checked
      }
      return parent.mValue.value.includes(props.value)
    })

    const backgroundStyle = computed(() => {
      if (props.color) {
        return {
          backgroundColor: props.color,
          backgroundSize: '100% 100%'
        }
      }
      return {
        background: `url(${props.src}) no-repeat center`,
        backgroundSize: '100% 100%'
      }
    })

    const toggle = (e: Event) => {
      if (props.disabled) {
        return;
      }
      if (!parent) {
        const v = !props.checked
        emit('update:checked', v)
        emit('change', e)
        return
      }
      parent.onChange(props.value)
    }

    return () => <Tooltip title={props.label}>
      <div
        class="img-checkbox"
        style={{ ...props.style, ...backgroundStyle.value }}
        onClick={toggle}
      >
        {
          checked.value
            ?
            <div class="img-checkbox__check">
              <CheckOutlined />
            </div>
            :
            null
        }
      </div>
    </Tooltip>
  }
})

