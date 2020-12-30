import { defineComponent, h, PropType } from 'vue'

export type ButtonSize = 'lg' | 'sm'

function lgBtn() {
  return <button>大按钮</button>
}

function smBtn() {
  return <button>小按钮</button>
}

export default defineComponent({
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      if (props.size === 'lg') {
        return lgBtn()
      } else {
        return smBtn()
      }
    }
  },
})
