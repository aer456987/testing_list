<template>
  <div>
    <TheEditor v-if="scopeItem.isEdit"  />
    <template v-else>{{ scopeItem.description }}</template>
  </div>
</template>

<script setup lang="ts">
import TheEditor from '@/components/TheListStyle/TheListItemStyle/TheEditor.vue';

defineProps(['scopeItem'])
</script>
