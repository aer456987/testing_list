<template>
  <div>
    登入驗證成功後跳轉到
    <RouterLink to="/test_list">[測試列表頁]</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
