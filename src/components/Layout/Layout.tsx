import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import { defineComponent, PropType } from 'vue'

interface MenuAsideData {
  id: number
  msg: string
  path: string
}

export default defineComponent({
  props: {
    menuAsideData: {
      type: Array as PropType<MenuAsideData[]> | null,
      default: () => {
        return []
      },
    },
  },

  setup(props) {
    return () => (
      <div id="layout">
        <HeaderNav class="header-nav" />
        <div class="main-wrap">
          <MenuAside
            class="menu-aside"
            v-bind-menuAsideData={props.menuAsideData}
          />
          <div class="content"></div>
        </div>
      </div>
    )
  },
})
