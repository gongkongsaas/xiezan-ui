import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="main-box">
        <main class="main">{slots.default && slots.default()}</main>
      </div>
    )
  },
})
