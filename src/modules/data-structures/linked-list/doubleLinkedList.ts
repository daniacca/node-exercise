import { ILinkNode } from "./linkedList.interface";

const nodeBuilder = <T>(value: T, next: ILinkNode<T> | null = null, prev: ILinkNode<T> | null = null) => ({
  value,
  next,
  prev,
});

export class DoubleLinkedList<T = any> {
  private _head: ILinkNode<T> = null;
  private _size: number = 0;

  constructor(value?: T) {
    if (value) {
      this._head = nodeBuilder(value);
      this._size = 1;
    }
  }

  /**
   * Get list head
   * @returns head node
   */
  public get Head() {
    return this._head;
  }

  /**
   * Insert new element to the head of the list
   * @param value the value to insert
   */
  public insert(value: T): void {
    if (!this._head) this._head = nodeBuilder(value);
    else {
      const node = nodeBuilder(value, this._head);
      this._head.prev = node;
      this._head = node;
    }
    this._size += 1;
  }

  /**
   * Insert new element at the end of the list
   * @param value the value to insert
   */
  public insertAtEnd(value: T): void {
    if (!this._head) {
      this._head = nodeBuilder(value);
      return;
    }

    const getLast = (node: ILinkNode<T>): ILinkNode<T> => {
      return node.next ? getLast(node.next) : node;
    };

    const last = getLast(this._head);
    last.next = nodeBuilder(value, null, last);
    this._size += 1;
  }

  /**
   * search inside the list the presence of an element
   * @param comparator comparator function, take data as input and implements comparision logic between sone fixed data
   * @returns the found node or null otherwise
   */
  public search(comparator: (data: T) => boolean): ILinkNode<T> | null {
    const checkNext = (node: ILinkNode<T>): ILinkNode<T> | null => {
      if (comparator(node.value)) return node;
      return node.next ? checkNext(node.next) : null;
    };

    return this._head ? checkNext(this._head) : null;
  }

  /**
   * Remove a given node from a list
   * @param node the node to remove
   */
  public remove(node: ILinkNode<T>) {
    if (!node.prev) {
      this._head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
    this._size -= 1;
  }

  /**
   * Traverse all node of the list and apply the given callback on data
   * @param nodeCallback node callback is called with data on each node
   */
  public traverse(nodeCallback: (data: T) => void): void {
    const loop = (clbck: (node: T) => void, node: ILinkNode<T>) => {
      clbck(node.value);
      if (node.next) loop(clbck, node.next);
    };

    if (this._head) nodeCallback(this._head.value);
    if (this._head.next) loop(nodeCallback, this._head.next);
  }

  /**
   * Traverse the list and transform it to JS array
   * @returns the array equivalent of the list
   */
  public toArray(): T[] {
    const buildArray = (node: ILinkNode<T>, arr: T[]): T[] => {
      if (!node.next) return arr;
      arr.push(node.value);
      return buildArray(node.next, arr);
    };

    if (!this._head) return [];
    return buildArray(this._head, []);
  }

  /**
   * Get list size
   * @returns the number of element present in the list
   */
  public size(): number {
    return this._size;
  }
}
