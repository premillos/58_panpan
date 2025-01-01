<template>
  <div>
    <LoginDialog @loginSuccess="loginSuccess" />
    <full-page :options="options" v-if="state.show">
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
  </div>
</template>

<script setup>
import PeAuto from "./layout/PeAuto.vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";
import Page3 from "./components/Page3.vue";
import LoginDialog from "./components/LoginDialog.vue";

import { reactive } from "vue";
const state = reactive({
  show: false,
});
const options = reactive({
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  //是否显示导航，默认为false
  // navigation: true,

  normalScrollElements: ".map",
  // 右侧导航点颜色改成白色
});

const loginSuccess = () => {
  state.show = true;
};
</script>

<style lang="scss" scoped>
:deep(.el-select__wrapper) {
  min-height: 4rem !important;
}

:deep(.el-select__selected-item) {
  font-size: 1.6rem !important;
}
</style>
