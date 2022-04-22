import { BST } from "./modules/data-structures/binary-search-tree";
import { LinkedList } from "./modules/data-structures/linked-list";
import { DoubleLinkedList } from "./modules/data-structures/linked-list/doubleLinkedList";
import { bubbleSort } from "./modules/sorting/bubble/bubbleSort";
import { insertionSort } from "./modules/sorting/insertion";
import { mergeSort } from "./modules/sorting/merge";
import { getRandomInt, numberComparer } from "./utils";

const doubleLinkedListTest = () => {
  const list = new DoubleLinkedList<number>();
  list.insert(12);
  list.insert(2);
  list.insert(34);
  list.insert(0);
  list.insert(8);
  list.insertAtEnd(24);
  list.insertAtEnd(32);

  console.log("----");
  console.log("Print toArray of the list:");
  console.log(JSON.stringify(list.toArray()));

  console.log("Traverse the list and print value:");
  list.traverse((value) => {
    console.log(`Node: ${value}`);
  });

  console.log("list size = " + list.size());
  console.log("removing element with value 34...");
  let node = list.search((d) => d === 34);
  if (node) list.remove(node);
  console.log("new list size = " + list.size());

  console.log("searching element with value 34...");
  node = list.search((d) => d === 34);
  console.log("node should be null => " + node);
};

const BSTTest = () => {
  const tree = new BST<number>((v, n) => {
    if (v > n) return 1;
    else if (v === n) return 0;
    else return -1;
  });

  tree.insert(12);
  tree.insert(8);
  tree.insert(24);
  tree.insert(32);
  tree.insert(1);
  tree.insert(0);
  tree.insert(56);
  tree.insert(88);

  console.log("PreOrder traverse");
  tree.preOrder((v) => console.log("Node value: " + v));

  console.log("PostOrder traverse");
  tree.postOrder((v) => console.log("Node value: " + v));

  console.log("InOrder traverse");
  tree.inOrder((v) => console.log("Node value: " + v));
};

const mergeSortTest = () => {
  const list = new LinkedList<number>();
  for (let i = 0; i < 100; i++) list.insert(getRandomInt(1000));

  const arr = list.toArray();
  console.log("unsorted array:");
  console.log(JSON.stringify(arr));

  const sorted = mergeSort<number>(arr, numberComparer);

  console.log("--------");
  console.log("sorted array:");
  console.log(JSON.stringify(sorted));
};

const insertionSortTest = () => {
  const list = new LinkedList<number>();
  for (let i = 0; i < 100; i++) list.insert(getRandomInt(1000));

  const arr = list.toArray();
  console.log("unsorted array:");
  console.log(JSON.stringify(arr));

  insertionSort<number>(arr, numberComparer);

  console.log("--------");
  console.log("sorted array:");
  console.log(JSON.stringify(arr));
};

const bubbleSortTest = () => {
  const list = new LinkedList<number>();
  for (let i = 0; i < 100; i++) list.insert(getRandomInt(1000));

  const arr = list.toArray();
  console.log("unsorted array:");
  console.log(JSON.stringify(arr));

  bubbleSort<number>(arr, numberComparer);

  console.log("--------");
  console.log("sorted array:");
  console.log(JSON.stringify(arr));
};

// console.log("----");
// console.log("Single linked list test");
// linkedListTest();

// console.log("----");
// console.log("Double linked list test");
// doubleLinkedListTest();

// console.log("----");
// console.log("BST test");
// BSTTest();

// Merge sort
//mergeSortTest();

// Insertion sort
// insertionSortTest();

// Bubble sort test
//bubbleSortTest();

console.log("Hello World!");
console.log("At the moment this is only an empty program for writing and testing things");
console.log("Write unit test for execute modules and code present in this suite");
