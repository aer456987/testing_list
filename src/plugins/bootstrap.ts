// import 'bootstrap';
import * as bootstrap from 'bootstrap'
import type { App } from 'vue';
import { nextTick } from 'vue';
import { Popover, Modal, Collapse } from 'bootstrap';

export default {
  install(app: App) {
    app.config.globalProperties.$bootstrap = {
      popover: (element: HTMLElement) => new Popover(element),
      modal: (element: HTMLElement) => new Modal(element),
      collapse: (element: HTMLElement) => new Collapse(element),
    };

    // 使用 Vue 3 的 nextTick 確保在 DOM 渲染完成後初始化
    app.mixin({
      mounted() {
        nextTick(() => {
          // 初始化 Popover
          Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
            .forEach(element => new Popover(element as HTMLElement))
        });
      }
    });
  },
};
