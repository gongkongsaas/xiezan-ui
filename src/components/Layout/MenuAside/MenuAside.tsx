import { defineComponent, PropType } from 'vue'
import { MenuAsideNavData } from '@/types/MenuAsideType'

export default defineComponent({
  props: {
    menuAsideData: {
      type: Array as PropType<MenuAsideNavData[]> | null,
      default: () => {
        return []
      },
    },
  },
  setup(props) {
    return () => {
      return (
        <div id="menu-aside">
          <ul class="menu-list">
            {props.menuAsideData.map((item, index) => {
              if (item.code !== 'bottom') {
                if (item.code === 'blank') {
                  return <li></li>
                } else {
                  return (
                    <li key={item.id}>
                      <a href="">
                        <i class="iconfont" v-html={item.icon}></i>
                        <span>{item.name}</span>
                      </a>
                      <em class="AsideTips"></em>
                    </li>
                  )
                }
              } else {
                return (
                  <div class="bottom">
                    <a href="">
                      <i class="iconfont" v-html={item.icon}></i>
                      <span>{item.name}</span>
                    </a>
                  </div>
                )
              }
            })}
          </ul>
        </div>
      )
    }
  },
})
