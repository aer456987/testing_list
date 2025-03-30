<template>
  <div class="accordion list-unstyled mb-3" :id="`main-accordion-${id}`">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#${id}`" aria-expanded="true" :aria-controls="id">
          {{ title }}
        </button>
      </h2>
      <div :id="id" class="accordion-collapse collapse show" :data-bs-parent="`#${id}`">
        <div class="accordion-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['id', 'title']);
// console.log('props: ', props)
const id = ref(`testId-${props.id}`)
</script>
