import { defineComponent, h, PropType } from 'vue'

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
    const routerTo = (path: string) => {
      window.location.href = `${window.location.origin}${path}/`
    }

    return () => {
      return (
        <div id="slider-bar">
          <ul class="menu-list">
            {props.menuAsideData.map((item) => {
              return (
                <li
                  v-bind-key={item.id}
                  v-on-click={routerTo.bind(null, item.path)}
                >
                  {item.msg}
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  },
})
