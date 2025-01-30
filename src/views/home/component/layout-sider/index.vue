<template>
  <a-menu id="menu" style="width: 256px" mode="inline" @click="handleClick">
    <a-sub-menu v-for="menu in Menus" :key="menu.name">
      <template #title>
        <span>{{ menu.name }}</span>
      </template>
      <template v-for="child in menu.children" :key="child.name">
        <a-menu-item>
          <router-link :to="child.path">{{ child.name }}</router-link>
        </a-menu-item>
      </template>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts" setup>
import { Menus } from "@/router/views";
function handleClick(e) {
  console.log("click", e);
}
</script>