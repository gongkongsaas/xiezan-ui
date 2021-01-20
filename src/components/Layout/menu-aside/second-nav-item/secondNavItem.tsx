import { defineComponent, PropType } from 'vue'
import { MenuAsideNavData } from '@/components/layout/types/MenuAsideType'

export default defineComponent({
  name: 'SecondNavItem',
  props: {
    itemData: {
      type: Array as PropType<MenuAsideNavData[]>,
      default: [],
    },
  },
  setup(props) {
    // 二级导航栏下拉菜单状态
    const updateStatus = (data: MenuAsideNavData) => {
      data.show = !data.show
    }

    // line 类型
    const lineElem = <div class="line"></div>

    // normal
    const normalElem = (data: MenuAsideNavData) => {
      const itemData = data.children
      if (itemData.length < 1) {
        // 没有下拉菜单
        return (
          <div class="normal">
            {data.url ? (
              <a href={data.url} style="margin-left: 16px">
                {data.name}
              </a>
            ) : (
              <span style="margin-left: 16px">{data.name}</span>
            )}
          </div>
        )
      } else {
        // 有下拉菜单
        return (
          <div class="normal">
            <i
              class={!data.show ? 'iconfont open-icon' : 'iconfont close-icon'}
            >
              &#xe619;
            </i>
            <span onClick={updateStatus.bind(null, data)}>{data.name}</span>
            <ul v-show={!data.show}>
              {[...itemData].map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.url}>
                      <span>{item.name}</span>
                    </a>
                    <em class="AsideTips"></em>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }
    }

    return () => (
      <div class="second-nav-item">
        {props.itemData.map((item) => {
          if (item.name === 'line') {
            return lineElem
          } else {
            return normalElem(item)
          }
        })}
      </div>
    )
  },
})
