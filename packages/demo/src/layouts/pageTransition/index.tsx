import { defineComponent, PropType, computed } from 'vue'

import { ANIMATE } from '@/constant'
import { tuple } from '@/utils/type'

import './index.less'

const animates = ANIMATE.preset

const AnimateTypes = tuple(
  'back', 'bounce', 'fade', 'flip', 'lightSpeed',
  'rotate', 'roll', 'zoom', 'slide'
)
const DirectionTypes = tuple(
  'x', 'y', 'left', 'right', 'up', 'down',
  'downLeft', 'upRight', 'downRight', 'upLeft', 'downBig', 'upBig', 'downLeft',
  'downRight', 'topRight', 'bottomLeft', 'topLeft', 'bottomRight', 'default'
)

export type AnimateType = typeof AnimateTypes[number]
export type DirectionType = typeof DirectionTypes[number]

export default defineComponent({
  props: {
    disabled: Boolean,
    reverse: {
      type: Boolean,
      default: true
    },
    animate: {
      type: String as PropType<AnimateType>,
      default: 'bounce'
    },
    direction: {
      type: String as PropType<DirectionType>
    }
  },

  setup(props, { slots }) {
    const activeClass = (isLeave: boolean) => {
      let animate = animates.find(item => props.animate === item.name)
      if (!animate) {
        return;
      }
      let direction
      if (props.direction == undefined) {
        direction = animate.directions[0]
      } else {
        direction = animate.directions.find(item => item === props.direction)
      }
      direction = (direction == undefined || direction === 'default') ? '' : direction
      if (direction != '') {
        direction = isLeave && props.reverse ? reversePosition(direction, animate.directions) : direction
        direction = direction[0].toUpperCase() + direction.substring(1)
      }
      let t = isLeave ? 'Out' : 'In'
      return animate.name + t + direction
    }

    const reversePosition = (direction: string, directions: string[]) => {
      if (direction.length === 0 || direction === 'x' || direction === 'y') {
        return direction
      }
      let index = directions.indexOf(direction)
      index = (index % 2 === 1) ? index - 1 : index + 1
      return directions[index]
    }

    const enterAnimate = computed(() => activeClass(false))
    const leaveAnimate = computed(() => activeClass(true))

    return () => !props.disabled
      ? <transition
        enter-active-class={`animated ${enterAnimate.value} page-toggle-enter-active`}
        leave-active-class={`animated ${leaveAnimate.value} page-toggle-leave-active`}
      >
        {slots.default?.()}
      </transition>
      : slots.default?.()
  }
})
