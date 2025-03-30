<template>
  <div class="form-check">
    <label :for="id" class="form-check-label">
      <input type="checkbox" class="form-check-input" name="" :id="id">
      {{ content }}
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps(['id', 'content']);
</script>
