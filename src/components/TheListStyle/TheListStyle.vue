<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="scopeItem in scopeItemList" :key="`test-item-${scopeItem.id}`" class="row mb-2">
        <div class="col position-relative border">
          <TheEditor v-if="editId === scopeItem.id"
            :scopeItem="scopeItem"
            :id="scopeItem.id"
            v-model:edit-id="editId"
            v-model:input-type="scopeItem.type"
            v-model:description="scopeItem.description" />

          <template v-else>
            <div class="list-item">
              <div class="create-btn p-2
                border border-primary rounded bg-light
                position-absolute start-0"
              >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-primary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>

                <button type="button" class="btn btn-outline-primary btn-sm px-1 py-0 me-1">+</button>
                <button type="button" class="btn btn-outline-primary btn-sm me-1 py-0" @click="isOpenEditor(scopeItem.id)">E</button>
              </div>


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
            </div>
          </template>

          <div v-if="scopeItem.type !== 'accordion' && scopeItem.sub.length > 0" class="ms-4">
            <TheListStyle v-model:editId="editId" :scopeItemList="scopeItem.sub" />
          </div>
        </div>
      </li>
    </ul>
  </div>
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
.create-btn {
  display: none;
  top: -50px;
  z-index: 999;
}

.list-item:hover .create-btn, .create-btn:hover {
  display: block;
}
</style>
