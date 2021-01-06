import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class="main-crumb">
        <span class="main-crumb-title">{props.title}</span>
        <div class="main-crumb-btns">{slots.default && slots.default()}</div>
      </div>
    )
  },
})
