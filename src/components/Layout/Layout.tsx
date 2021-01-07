import { defineComponent, ref } from 'vue'
import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import Main from './Main/index'
import Footer from './Footer/index'
import { MenuAsideNavData } from '@/types/MenuAsideType'
import { menuAsideData } from '@/api/Layout/menu-aside'
import { Button } from 'ant-design-vue'
import axios from 'axios'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    const menuAsideDataRef = ref<MenuAsideNavData[]>(menuAsideData.data)
    const getMenuAsideData = async () => {
      const data = await axios
        .get('http://dev.delixi.com/acl/menu/list')
        .then((res: any) => {
          if (res.data.code === 0) {
            return res.data.data
          }
        })
        .finally(() => [])
      menuAsideDataRef.value = data
    }
    getMenuAsideData()

    return () => (
      <div class="layout">
        <HeaderNav />
        <div class="main-wrap">
          {menuAsideDataRef.value.length > 0 ? (
            <MenuAside menuAsideData={menuAsideDataRef.value} />
          ) : null}
          <Main>
            <div class="content">
              {slots.default && slots.default()}
              <Button>我是测试按钮</Button>
            </div>
            <Footer />
          </Main>
        </div>
      </div>
    )
  },
})
