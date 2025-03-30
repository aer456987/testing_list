<template>
  <div>
    <ul v-if="listStyle === 'inside'" class="list-inside">
      <li v-for="item in list" :key="item" class="">
        {{ item }}
      </li>
    </ul>

    <ol v-if="listStyle === 'number'" class="list-number">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps(['listStyle', 'list']);
// console.log('props: ', props);
</script>
