import MenuAside from './MenuAside/index'
import HeaderNav from './HeaderNav/index'
import { defineComponent, PropType, ref, onMounted } from 'vue'

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

  setup(props, { slots }) {
    const a = ref<number>(1)
    const add = () => {
      a.value += 1
    }

    const status = ref<boolean>(true)
    const updateStatus = () => {
      status.value = !status.value
    }

    const h2Ref = ref<null | HTMLElement>(null)
    onMounted(() => {
      console.log(h2Ref.value)
    })

    return () => (
      <div id="layout">
        <HeaderNav class="header-nav" />
        <div class="main-wrap">
          <MenuAside class="menu-aside" menuAsideData={props.menuAsideData} />
          <div class="content">
            {slots.default && slots.default()}
            <input v-model={a.value} type="text" />
            <h2>{a.value}</h2>
            <button onClick={add}>加一</button>
            <h2 v-show={status.value} ref={h2Ref}>
              我要显示
            </h2>
            <button onClick={updateStatus}>显示/隐藏</button>
          </div>
        </div>
      </div>
    )
  },
})
