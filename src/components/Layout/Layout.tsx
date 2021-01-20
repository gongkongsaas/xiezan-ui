import { defineComponent, ref, PropType } from 'vue'
import { MenuAsideNavData } from '@/components/layout/types/MenuAsideType'
import MenuAside from './menu-aside/index'
import HeaderNav from './header-nav/index'
import Main from './main/index'
import Footer from './footer/index'
import { apiMenuAsideData, menuAsideData } from '@/api/layout/menuAside'

export default defineComponent({
  name: 'Layout',
  props: {
    secondNavStatus: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props, { slots }) {
    // 获取menu数据
    const menuAsideDataRef = ref<MenuAsideNavData[]>(menuAsideData.data)
    const getMenuAsideData = async () => {
      const res = await apiMenuAsideData
      if (res.code === 0) {
        menuAsideDataRef.value = res.data
      }
    }
    getMenuAsideData()

    // 更新二级导航状态
    const secondNavStatusRef = ref<boolean>(props.secondNavStatus)

    return () => {
      if (menuAsideDataRef.value.length > 0) {
        return (
          <div class="layout">
            <HeaderNav />
            <div class="main-wrap">
              <MenuAside
                menuAsideData={menuAsideDataRef.value}
                secondNavStatus={secondNavStatusRef.value}
              />
              <Main>
                <div class="content">{slots.default && slots.default()}</div>
                <Footer />
              </Main>
            </div>
          </div>
        )
      }
    }
  },
})
