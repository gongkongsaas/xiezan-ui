import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SecondNav',
  setup(props, { slots }) {
    return () => (
      <div class="second-nav">{slots.default && slots.default()}</div>
    )
  },
})
