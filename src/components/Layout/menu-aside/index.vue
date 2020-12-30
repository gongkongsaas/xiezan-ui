<template>
  <div id="slider-bar">
    <ul class="menu-list">
      <li
        v-for="item in menuAsideData"
        :key="item.id"
        @click="routerTo(item.path)"
      >
        {{ item.msg }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface MenuAsideData {
  id: number
  msg: string
  path: string
}

export default defineComponent({
  name: 'MenuAside',
  props: {
    menuAsideData: {
      type: Array as PropType<MenuAsideData[]>,
      default: () => {
        return []
      },
    },
  },
  setup() {
    const routerTo = (path: string) => {
      window.location.href = `${window.location.origin}${path}/`
    }

    return {
      routerTo,
    }
  },
})
</script>

<style scoped lang="less">
#slider-bar {
  position: relative;

  .menu-list {
    li {
      width: 74px;
      height: 40px;
      padding-left: 16px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
    }
  }
}
</style>
