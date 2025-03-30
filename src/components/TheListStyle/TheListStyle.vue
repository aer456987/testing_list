<template>
  <ul class="list-unstyled">
    <li v-for="scopeItem in scopeItemList" :key="`test-item-${scopeItem.id}`" class="row mb-2">
        <div class="col-auto pe-0 create-btn">
          <button type="button" class="btn btn-outline-primary btn-sm px-1 py-0 me-1">+</button>
          <button type="button" class="btn btn-outline-primary btn-sm me-1 py-0" @click="isOpenEditor(scopeItem.id)">E</button>
        </div>



          <!-- <button type="button" class="btn btn-lg btn-danger fs-6" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
            Click to toggle popover
          </button> -->



        <div class="col">
          <TheEditor v-if="editId === scopeItem.id"
            :scopeItem="scopeItem"
            :id="scopeItem.id"
            v-model:edit-id="editId"
            v-model:input-type="scopeItem.type"
            v-model:description="scopeItem.description" />

          <template v-else>
            <TheAccordion v-if="scopeItem.type === 'accordion'"
              :id="`${scopeItem.id}-test-item-content`" :title="scopeItem.description">
              <TheListStyle v-model:editId="editId" :scopeItemList="scopeItem.sub" />
            </TheAccordion>

            <template v-if="scopeItem.type === 'text'">
              {{ scopeItem.description }}
            </template>

            <TheCheckbox v-else-if="scopeItem.type === 'checkbox'"
              :id="`test-item-checkbox-${scopeItem.id}`" :content="scopeItem.description" />

            <TheItemList v-else-if="scopeItem.type === 'list-inside'"
              list-style="inside" :list="[scopeItem.description]" />

            <TheItemList v-else-if="scopeItem.type === 'list-number'"
              list-style="number" :list="[scopeItem.description]" />
          </template>

          <div v-if="scopeItem.type !== 'accordion' && scopeItem.sub.length > 0" class="ms-4">
            <TheListStyle v-model:editId="editId" :scopeItemList="scopeItem.sub" />
          </div>
        </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import TheAccordion from '@/components/TheListStyle/TheListItemStyle/TheAccordion.vue'
import TheCheckbox from '@/components/TheListStyle/TheListItemStyle/TheCheckbox.vue'
import TheItemList from '@/components/TheListStyle/TheListItemStyle/TheItemList.vue'
import TheEditor from '@/components/TheListStyle/TheListItemStyle/TheEditor.vue';

defineProps(['scopeItemList'])
const editId = defineModel('editId');
function isOpenEditor(clickId: string) {
  editId.value = clickId;
}



import { onMounted, ref } from 'vue';
import { Popover } from 'bootstrap';
const popoverBtn = ref<HTMLElement | null>(null);

onMounted(() => {
  // 確保在元素加載後初始化 Popover
  if (popoverBtn.value) {
    new Popover(popoverBtn.value); // 使用 Bootstrap 的 Popover 類別來初始化
  }
});
</script>

<style lang="scss" scoped>
</style>
