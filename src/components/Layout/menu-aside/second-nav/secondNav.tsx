import { defineComponent, onMounted, onUpdated, ref } from 'vue'

export default defineComponent({
  name: 'SecondNav',
  setup(props, { slots }) {
    const isDropDownShow = ref<boolean>(false)
    const secondNavElem = ref<HTMLElement | null>(null)
    const secondNavItemElem = ref<HTMLElement | null>(null)

    const updateIsDropDownShow = () => {
      if (secondNavElem.value && secondNavItemElem.value) {
        if (
          secondNavItemElem.value.clientHeight >
          secondNavElem.value.clientHeight
        ) {
          isDropDownShow.value = true
        } else {
          isDropDownShow.value = false
        }
      }
    }

    onMounted(() => {
      let resizeTimer: number | undefined = undefined
      window.onresize = () => {
        if (resizeTimer) {
          clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(() => {
          updateIsDropDownShow()
        }, 200)
      }
    })

    onUpdated(() => {
      updateIsDropDownShow()
    })

    return () => (
      <div class="second-nav" ref={secondNavElem}>
        <div class="second-nav-item" ref={secondNavItemElem}>
          {slots.default && slots.default()}
        </div>
        <div class="drop-down" v-show={isDropDownShow.value}>
          <i class="iconfont">&#xe619;</i>
        </div>
      </div>
    )
  },
})
