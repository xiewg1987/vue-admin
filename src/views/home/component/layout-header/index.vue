<template>
  <div class="layout-header">
    <div class="logio"></div>
    <div class="login-info">
      <div class="login-info-name">
        <span>欢迎您，</span>
        <span>admin</span>
      </div>
      <div @click="doLogout" class="login-info-logout">
        <LogoutOutlined />
        <span>退出</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { LogoutOutlined } from "@ant-design/icons-vue";
const doLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>