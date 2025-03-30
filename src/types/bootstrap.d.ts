declare module 'bootstrap' {
  export class Popover {
    constructor(element: HTMLElement);
    show(): void;
    hide(): void;
    toggle(): void;
  }

  // 你可以根據需要擴展更多 Bootstrap JS 的類型
  export class Modal {
    constructor(element: HTMLElement);
    show(): void;
    hide(): void;
  }

  export class Collapse {
    constructor(element: HTMLElement);
    toggle(): void;
  }
}
