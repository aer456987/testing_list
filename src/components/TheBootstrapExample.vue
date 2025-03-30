<template>
  <div>
    <ul class="list-unstyled row">
      <!-- 手風琴 Accordion -->
      <li class="col">
        <!-- 透過 CSS 控制 -->
        <h4><a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank">Accordion</a></h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion 1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                這是第一個 Accordion 內容。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion 2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                這是第二個 Accordion 內容。
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- Dropdown -->
      <li class="col">
        <!-- 透過 CSS 控制 -->
        <h4><a href="https://getbootstrap.com/docs/5.3/components/dropdowns/" target="_blank">Dropdown</a></h4>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </li>
      <!-- Modal -->
      <li class="col">
        <!-- 透過 CSS 控制 -->
        <h4><a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank">Modal</a></h4>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Open Modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- 彈出視窗 Popover -->
      <li class="col">
        <!-- 透過 JS 控制 -->
        <h4><a href="https://getbootstrap.com/docs/5.3/components/popovers/#overview" target="_blank">Popover</a></h4>
        <button type="button" class="btn btn-lg btn-danger fs-6" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
          Click to toggle popover
        </button>
      </li>
      <li class="col">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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
