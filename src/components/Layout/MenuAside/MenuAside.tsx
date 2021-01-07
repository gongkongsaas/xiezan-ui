import { defineComponent, PropType, ref } from 'vue'
import { MenuAsideNavData } from '@/types/MenuAsideType'
import SecondNav from './SecondNav/SecondNav'
import SecondNavItem from './SecondNavItem/SecondNavItem'

export default defineComponent({
  props: {
    menuAsideData: {
      type: Array as PropType<MenuAsideNavData[]> | null,
      default: () => {
        return []
      },
    },
    selectMenuItem: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  setup(props) {
    const hoverMenuItem = ref<number>(props.selectMenuItem)

    // 二级菜单
    const secondNavIndex = ref<number>(hoverMenuItem.value)
    const secondNavData = ref<MenuAsideNavData[]>(
      props.menuAsideData[secondNavIndex.value].children,
    )

    // 鼠标悬浮
    const onHoverMenuItem = (index: number) => {
      hoverMenuItem.value = index
      if (index >= 0) {
        secondNavData.value = props.menuAsideData[index].children
      } else {
        secondNavData.value = props.menuAsideData[props.selectMenuItem].children
      }
    }

    return () => {
      return (
        <div class="menu-aside" onMouseleave={onHoverMenuItem.bind(null, -1)}>
          <ul class="menu-list">
            {props.menuAsideData.map((item, index) => {
              if (item.code !== 'bottom') {
                if (item.code === 'blank') {
                  return <li></li>
                } else {
                  return (
                    <li
                      key={item.id}
                      class={[
                        index === props.selectMenuItem ? 'select' : '',
                        index === hoverMenuItem.value ? 'active' : '',
                      ]}
                      onMouseenter={onHoverMenuItem.bind(null, index)}
                    >
                      <a href={item.url}>
                        <i class="iconfont" v-html={item.icon}></i>
                        <span>{item.name}</span>
                      </a>
                      <em class="AsideTips"></em>
                    </li>
                  )
                }
              } else {
                return (
                  <div
                    class="bottom"
                    onMouseenter={onHoverMenuItem.bind(null, index)}
                  >
                    <a href="">
                      <i class="iconfont" v-html={item.icon}></i>
                      <span>{item.name}</span>
                    </a>
                  </div>
                )
              }
            })}
          </ul>
          <SecondNav>
            <SecondNavItem itemData={secondNavData.value} />
          </SecondNav>
        </div>
      )
    }
  },
})
