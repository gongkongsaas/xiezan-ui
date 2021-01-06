import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SecondNavItem',
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const className = (name: string) => {
      if (name === 'line') {
        return 'line'
      } else {
        return 'normal'
      }
    }

    return () => <></>
  },
})
