<template>
  <div class="col-auto pe-0 create-btn">
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-outline-primary btn-sm px-1 py-0 me-1" data-bs-toggle="modal" data-bs-target="#creatTestModal"> -->
    <button type="button" class="btn btn-outline-primary btn-sm px-1 py-0 me-1">
      +
    </button>
    <!-- <button type="button" class="btn btn-outline-primary px-2 py-0 btn-sm" data-bs-toggle="modal" data-bs-target="#creatTestModal"> -->
    <label :for="editBtnId" class="btn btn-outline-primary px-2 py-0 btn-sm">
      E
      <input type="checkbox" :id="editBtnId" class="d-none" v-model="isEdit" />
    </label>
  </div>
</template>

<script setup lang="ts">
const porps = defineProps(['editId']);
const editBtnId = `edit-btn-${porps.editId}`;
const isEdit = defineModel('isEdit');
console.log('id: ', porps.editId);
console.log('isEdit: ', isEdit);
</script>
