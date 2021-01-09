import { defineComponent, ref, PropType } from 'vue'
import { MenuAsideNavData } from '@/types/MenuAsideType'
import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import Main from './Main/index'
import Footer from './Footer/index'
import { apiMenuAsideData, menuAsideData } from '@/api/Layout/menu-aside'

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

    return () => (
      <div class="layout">
        <HeaderNav />
        <div class="main-wrap">
          {menuAsideDataRef.value.length > 0 ? (
            <MenuAside
              menuAsideData={menuAsideDataRef.value}
              secondNavStatus={secondNavStatusRef.value}
            />
          ) : null}

          <Main>
            <div class="content">{slots.default && slots.default()}</div>
            <Footer />
          </Main>
        </div>
      </div>
    )
  },
})
