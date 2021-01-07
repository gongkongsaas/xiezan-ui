import { defineComponent } from 'vue'
import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import Main from './Main/index'
import Footer from './Footer/index'
import { menuAsideData, testData } from '@/api/Layout/menu-aside'
import { userData } from '@/api/Layout/header-nav'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log(testData)
    return () => (
      <div class="layout">
        <HeaderNav />
        <div class="main-wrap">
          <MenuAside class="menu-aside" menuAsideData={menuAsideData.data} />
          <Main>
            <div class="content">{slots.default && slots.default()}</div>
            <Footer />
          </Main>
        </div>
      </div>
    )
  },
})
