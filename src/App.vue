<template>
  <Layout></Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from './index'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
    // Crumb,
  },
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
