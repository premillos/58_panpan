<template>
  <full-page :options="options">
    <div class="section">
      <PeAuto>
        <Page1 />
      </PeAuto>
    </div>
    <div class="section">
      <PeAuto>
        <Page2 />
      </PeAuto>
    </div>
    <div class="section">
      <PeAuto>
        <Page3 />
      </PeAuto>
    </div>
  </full-page>
</template>

<script setup>
import PeAuto from './layout/PeAuto.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'


import { reactive } from "vue";
const options = reactive({
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  //是否显示导航，默认为false
  // navigation: true,

  normalScrollElements: ".map"
  // 右侧导航点颜色改成白色
})
</script>

<style lang="scss" scoped>
:deep(.el-select__wrapper) {
  min-height: 4rem !important;
}

:deep(.el-select__selected-item) {
  font-size: 1.6rem !important;
}
</style>
