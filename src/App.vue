<template>
  <div>
    <router-link to="/login">login</router-link>
    <router-link to="/home">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import '@/style.less'
</script>