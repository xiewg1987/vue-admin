<template>
  <a-layout>
    <a-layout-header>
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menu />
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from "./component/layout-header/index.vue";
import Menu from "./component/layout-sider/index.vue";
import "./styles.less";
</script>
