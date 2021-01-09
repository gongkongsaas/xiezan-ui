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
    secondNavStatus: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  setup(props) {
    // 二级导航栏显示状态
    const secondNavStatusRef = ref<boolean>(props.secondNavStatus)
    const updateSecondNavStatus = () => {
      secondNavStatusRef.value = !secondNavStatusRef.value
    }

    // 鼠标悬浮
    const hoverMenuItemRef = ref<number>(props.selectMenuItem)
    const secondNavIndexRef = ref<number>(hoverMenuItemRef.value)
    const secondNavDataRef = ref<MenuAsideNavData[]>(
      props.menuAsideData[secondNavIndexRef.value].children,
    )
    const hoverSecondNavStatusRef = ref<boolean>(false)
    const onHoverMenuItem = (index: number) => {
      hoverMenuItemRef.value = index
      if (index >= 0) {
        secondNavDataRef.value = props.menuAsideData[index].children
        if (!secondNavStatusRef.value) {
          hoverSecondNavStatusRef.value = true
        }
      } else {
        secondNavDataRef.value =
          props.menuAsideData[props.selectMenuItem].children
        hoverSecondNavStatusRef.value = false
      }
    }

    // menu跳转链接
    const getMenuUrl = (data: MenuAsideNavData): string => {
      if (!data) {
        return ''
      }
      if (data.url) {
        return data.url
      } else {
        return getMenuUrl(data.children[0])
      }
    }

    // menu渲染
    const updateMenu = (item: MenuAsideNavData, index: number) => {
      if (item.code === 'blank') {
        // style: blank
        return <li></li>
      } else if (item.code === 'bottom') {
        // style: bottom
        return (
          <div class="bottom" onMouseenter={onHoverMenuItem.bind(null, index)}>
            <a href="">
              <i class="iconfont" v-html={item.icon}></i>
              <span>{item.name}</span>
            </a>
          </div>
        )
      } else {
        // style: normal
        return (
          <li
            key={item.id}
            class={[
              index === props.selectMenuItem ? 'select' : '',
              index === hoverMenuItemRef.value ? 'active' : '',
            ]}
            onMouseenter={onHoverMenuItem.bind(null, index)}
          >
            <a href={getMenuUrl(item)}>
              <i class="iconfont" v-html={item.icon}></i>
              <span>{item.name}</span>
            </a>
            <em class="AsideTips"></em>
          </li>
        )
      }
    }

    return () => {
      return (
        <div class="menu-aside" onMouseleave={onHoverMenuItem.bind(null, -1)}>
          <ul class="menu-list">
            {props.menuAsideData.map((item, index) => updateMenu(item, index))}
          </ul>
          <div
            class={[
              'secondNavControl',
              secondNavStatusRef.value ? 'open' : 'close',
            ]}
            onClick={updateSecondNavStatus}
          >
            <i class="iconfont">&#xe619;</i>
          </div>
          <SecondNav
            class={[
              secondNavStatusRef.value ? 'openSecondNav' : 'closeSecondNav',
              hoverSecondNavStatusRef.value ? 'hoverSecondNav' : 'null',
            ]}
          >
            <SecondNavItem itemData={secondNavDataRef.value} />
          </SecondNav>
        </div>
      )
    }
  },
})
