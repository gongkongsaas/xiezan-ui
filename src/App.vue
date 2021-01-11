<template>
  <Layout>
    <Button />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from './index'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
    // Crumb,
    Button,
  },
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
