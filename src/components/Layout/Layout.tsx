import { defineComponent } from 'vue'
import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import Main from './Main/index'
import Footer from './Footer/index'
import { menuAsideData, testData, testData2 } from '@/api/Layout/menu-aside'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log(testData)
    console.log(testData2)

    return () => (
      <div id="layout" class="layout">
        <HeaderNav class="header-nav" />
        <div class="main-wrap">
          <MenuAside menuAsideData={menuAsideData.data} />
          <Main>
            <div class="content">{slots.default && slots.default()}</div>
            <Footer />
          </Main>
        </div>
      </div>
    )
  },
})
