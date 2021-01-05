<template>
  <div>
    <Layout>
      <Button size="lg"></Button>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, Layout } from './index'
export default defineComponent({
  name: 'App',
  components: {
    Button,
    Layout,
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
