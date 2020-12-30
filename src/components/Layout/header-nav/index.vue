<template>
  <div id="header-nav">
    <div class="operation-main-information"></div>
    <div class="mall-company-name">
      <div class="company-name" v-if="companyName">{{ companyName }}</div>
    </div>
    <div class="option-box"></div>
    <div class="mall-compan-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderNav',
  setup() {
    const companyName = ref<string>('')

    return {
      companyName,
    }
  },
})
</script>

<style lang="less" scoped>
#header-nav {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 14px;
  color: #333;
  background: #fff;

  .operation-main-information {
    width: 90px;
    background-color: #1e2834;
  }

  .mall-company-name {
    display: flex;
    flex: 1;
    border-bottom: 1px #e6e8ec solid;
    line-height: 50px;
    cursor: pointer;

    .company-name {
      padding: 0 20px;
    }
  }

  .option-box {
    width: 715px;
    padding-left: 50px;
    border-bottom: 1px #e6e8ec solid;
    line-height: 50px;
  }
}
</style>
