import { defineComponent, onMounted } from 'vue'
import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import { menuAsideData, testData } from '@/api/Layout/menu-aside'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    onMounted(() => {
      console.log(testData())
    })
    return () => (
      <div class="layout">
        <HeaderNav class="header-nav" />
        <div class="main-wrap">
          <MenuAside class="menu-aside" menuAsideData={menuAsideData.data} />
          <div class="content">{slots.default && slots.default()}</div>
        </div>
      </div>
    )
  },
})
