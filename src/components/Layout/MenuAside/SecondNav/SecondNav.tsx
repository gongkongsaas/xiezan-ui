import { defineComponent } from 'vue'
import { MenuAsideNavData } from '@/types/MenuAsideType'

export default defineComponent({
  name: 'SecondNav',
  setup(props, { slots }) {
    return () => (
      <div class="second-nav">{slots.default && slots.default()}</div>
    )
  },
})
