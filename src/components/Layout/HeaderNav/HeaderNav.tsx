import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    companyName: {
      type: String,
      default: '默认商城名字',
    },
  },
  setup(props) {
    return () => {
      return (
        <div id="header-nav">
          <div class="operation-main-information"></div>
          <div class="mall-company-name">
            <div class="company-name" v-if={props.companyName}>
              {props.companyName}
            </div>
          </div>
          <div class="option-box"></div>
          <div class="mall-compan-container"></div>
        </div>
      )
    }
  },
})
