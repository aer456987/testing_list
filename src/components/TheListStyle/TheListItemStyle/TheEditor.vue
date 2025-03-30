<template>
  <div class="d-flex">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle px-2 py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i :class="`bi ${localTypeIcon}`"></i>
      </button>
      <ul class="dropdown-menu">
        <li v-for="(type, typeId) in typeList" :key="`type-${typeId}`">
          <label :for="`type-${typeId}`" class="dropdown-item">
            <input type="radio" :id="`type-${typeId}`" class="d-none" name="type" :value="typeId" v-model="localType">
            <i :class="`bi ${type.icon}`"></i> {{ type.name }} / {{ typeId }}
          </label>
        </li>
      </ul>
    </div>

    <input type="text" id="title" class="form-control mx-2" placeholder="請輸入內容" v-model="description">

    <button class="btn btn-primary text-nowrap btn-sm me-2" @click="editId = '';$emit('update:inputType', localType);">儲存</button>
    <button class="btn btn-outline-secondary text-nowrap btn-sm py-1" @click="description = initDescription;editId = ''">取消</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps(['id', 'scopeItem', 'inputType']);
const description = defineModel('description');
const initDescription = description.value;

const editId = defineModel('editId');
function isCloseEditor(clickId: string) {
  editId.value = clickId;
}

defineEmits(['update:inputType'])
const localType = ref(props.inputType);
const localTypeIcon = computed(() => typeList[localType.value]?.icon || '');
// ✅ 監聽 localType 變化，並發送更新事件
// watch(localType, (newVal) => {
//   if (props.id === props.scopeItem.id) {
//     emit('update:inputType', newVal);
//   }
// });

// ✅ 監聽 props.inputType，如果父層變更，也同步更新 localType
watch(() => props.inputType, (newVal) => {
  localType.value = newVal;
});


interface TypeList {
  [key: string]: {
    [key: string]: string;
  };
}
const typeList: TypeList = {
    text: {
      name: '文字',
      icon: 'bi-fonts'
    },
    checkbox: {
      name: '待辦清單',
      icon: 'bi-list-check'
    },
    'list-inside': {
      name: '項目符號列表',
      icon: 'bi-list-ul'
    },
    'list-number': {
      name: '有序列表',
      icon: 'bi-list-ol'
    },
    accordion: {
      name: '摺疊列表',
      icon: 'bi-menu-button-fill'
    }
};

</script>
