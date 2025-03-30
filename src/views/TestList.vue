<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <input type="text" id="title" class="form-control mb-3" placeholder="請輸入標題" v-model="testList.project">

        <div class="row align-items-center mb-4">
          <div class="col-auto" v-for="figure in figureList" :key="`${figure.id}_${figure.name}`">
            <label class="cursor-pointer" :for="figure.id">
              <span class="badge bg-primary py-2 px-3">
                {{ figure.name }}
              </span>
              <input type="radio" name="targerFigure" class="d-none" :id="figure.id" :value="figure.id" v-model="search.figure">
            </label>
          </div>
          <div class="col-auto">
            <input type="text" name="search" id="search" class="form-control" placeholder="搜尋" v-model="search.content">
          </div>
        </div>

        <TheAccordion v-for="testItem in testList.TestItemList" :key="testItem.id" :id="testItem.id" :title="testItem.pageName" >
          {{ testItem.path }}
          <TheAccordion :id="`${testItem.id}-frontend-content`" title="前台">
            <TheListStyle v-model:editId="editId" :scopeItemList="testItem.frontend" />
          </TheAccordion>

          <TheAccordion :id="`${testItem.id}-backend-conten`" title="後台">
            <TheListStyle v-model:editId="editId" :scopeItemList="testItem.backend" />
          </TheAccordion>
        </TheAccordion>

        <ul class="mt-3 border border-danger">
          <li>search: {{ search }}</li>
          <li>project: {{ testList.project }}</li>
          <li>testContent: {{ testList.TestItemList }}</li>
        </ul>
      </div>

    </div>
    <div class="row mt-5">
      <div class="col bg-primary">primary</div>
      <div class="col bg-secondary">secondary</div>
      <div class="col bg-success">success</div>
      <div class="col bg-info">info</div>
      <div class="col bg-warning">warning</div>
      <div class="col bg-danger">danger</div>
      <div class="col bg-light">light</div>
      <div class="col bg-dark">dark</div>

      <div class="col-12 border mt-3">
        <button class="btn btn-primary me-2">
          <a class="text-light" target="_blank" href="https://getbootstrap.com/docs/5.3/getting-started/download/">bootstrap</a>
        </button>
        <button class="btn btn-secondary me-2">
          <a class="text-light" target="_blank" href="https://vuejs.org/guide/introduction.html">Vue</a>
        </button>
        <button class="btn btn-secondary">
          <a class="text-light" target="_blank" href="https://vite.dev/guide/">Vite</a>
        </button>
      </div>

      <TheBootstrapExample />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheListStyle from '@/components/TheListStyle/TheListStyle.vue';
import TheAccordion from '@/components/TheListStyle/TheListItemStyle/TheAccordion.vue';
import TheBootstrapExample from '@/components/TheBootstrapExample.vue';

const editId = ref('');

interface Figure {
  id: string;
  name: string;
}
const figureList: Array<Figure> = [
  {
    id: 'tpm',
    name: 'TPM'
  },
  {
    id: 'frontend',
    name: '前端'
  },
  {
    id: 'backend',
    name: '後端'
  }
];

interface Search {
  figure: string;
  content: string;
}
const search = ref<Search>({
  figure: '',
  content: ''
})


import type { TestList } from '@/types/testList'
const testList = ref<TestList>({
  project: 'Todo list side project',
  TestItemList: [
    {
      id: 'article',
      pageName: '文章列表', // 頁面名稱
      path: '前台>文章列表>文章列表主頁', // 頁面路徑
      frontend: [ // 前台
        {
          id: 'asdmklqe',
          type: 'text',
          description: '一般的文字內容',
          isDone: false,
          isEdit: true,
          sub: []
        },
        {
          id: '123tgregherg',
          type: 'checkbox',
          description: 'checkbox 選項',
          isDone: false,
          isEdit: false,
          sub: []
        },
        {
          id: 'ghfgfhui56',
          type: 'list-inside',
          description: '列表樣式-點點',
          isDone: false,
          isEdit: false,
          sub: [
            {
              id: 'mbnxcv5',
              type: 'list-inside',
              description: '子項--列表樣式-點點',
              isDone: false,
              isEdit: false,
              sub: []
            }
          ]
        },
        {
          id: 'cvsdas',
          type: 'list-number',
          description: '列表樣式-數字',
          isDone: false,
          isEdit: false,
          sub: [
            {
              id: 'nm421zqu9k',
              type: 'list-number',
              description: '子列表樣式-數字',
              isDone: false,
              isEdit: false,
              sub: [
                {
                  id: 'xvcqm1',
                  type: 'text',
                  description: '子子一般的文字內容',
                  isDone: false,
                  isEdit: false,
                  sub: []
                }
              ]
            }
          ]
        },
      ],
      backend: [ // 後台
        {
            id: '22fds5623aAs',
            type: 'accordion',
            description: '摺疊選單',
            isDone: false,
            isEdit: false,
            sub: [
              {
                id: 'zxcWQWE',
                type: 'text',
                description: '一般的文字內容',
                isDone: false,
                isEdit: false,
                sub: []
              },
              {
                id: 'qwe13bgfn465765',
                type: 'list-number',
                description: '列表樣式-數字',
                isDone: false,
                isEdit: false,
                sub: []
              }
            ]
          },
      ],
    },
    {
      id: 'articleTag',
      pageName: '文章標籤', // 頁面名稱
      path: '', // 頁面路徑
      frontend: [], // 前台
      backend: [], // 後台
    }
  ]
})


</script>

<style>
@media (min-width: 1024px) {
  .test_list {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
