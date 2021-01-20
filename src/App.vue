<template>
  <Layout>
    <Button></Button>
    <dropdown-input :data="data" @getData="getData"></dropdown-input>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout, DropdownInput } from './index'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
    // Crumb,
    Button,
    DropdownInput,
  },
  setup() {
    const data = [
      {
        id: 1,
        name: 'orderNo',
        text: '订单号',
      },
      {
        id: 2,
        name: 'type',
        text: '出库类型',
      },
      {
        id: 3,
        name: 'stockOutNos',
        text: '出库单号',
      },
    ]

    const getData = (data: any) => {
      console.log(data)
    }

    return {
      data,
      getData,
    }
  },
})
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
