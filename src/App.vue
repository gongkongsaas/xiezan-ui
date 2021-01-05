<template>
  <div>
    <Layout>
      <Crumb title="商城公告">
        <Button size="lg"></Button>
      </Crumb>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, Layout, Crumb } from './index'
export default defineComponent({
  name: 'App',
  components: {
    Button,
    Layout,
    Crumb,
  },
})
</script>

<style lang="less">
@import url('./styles/index.less');
* {
  margin: 0;
  padding: 0;
}
</style>
