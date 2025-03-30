interface TestSub {
  id: string | number;
  type: string;
  description: string;
  isDone: boolean;
  isEdit: boolean;
  sub: Array<TestSub>;
}
interface TestItem {
  id: string | number;
  pageName: string;
  path: string;
  frontend: Array<TestSub>;
  backend: Array<TestSub>;
}
interface TestList {
  project: string;
  TestItemList: Array<TestItem>;
}

export { TestList }
