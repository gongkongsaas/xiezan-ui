<template>
  <div>
    <Layout :menuAsideData="menuAsideData">
      <div style="margin-left: 20px; font-size:12px">
        <i class="iconfont">&#xa24;</i>
        <ul>
          <li>324</li>
          <li>432</li>
          <li>512</li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from './index'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
