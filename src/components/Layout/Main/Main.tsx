import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="main-box">
        <main class="main">
          <div class="main-inner">{slots.default && slots.default()}</div>
        </main>
      </div>
    )
  },
})
