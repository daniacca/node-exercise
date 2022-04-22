import { INode } from "./linkedList.interface";

const buildNode = <T>(value: T, next: INode<T> | null = null) => ({
  value,
  next,
});

export class LinkedList<T = any> {
  private _head: INode<T> = null;
  private _size: number = 0;

  constructor(value?: T) {
    if (value) {
      this._head = buildNode(value);
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
    if (!this._head) this._head = buildNode(value);
    else this._head = buildNode(value, this._head);
    this._size += 1;
  }

  /**
   * Insert new element at the end of the list
   * @param value the value to insert
   */
  public insertAtEnd(value: T): void {
    const getLast = (node: INode<T>): INode<T> => {
      return node.next ? getLast(node.next) : node;
    };
    const last = getLast(this._head);
    last.next = buildNode(value);
    this._size += 1;
  }

  /**
   * search inside the list the presence of an element
   * @param comparator comparator function, take data as input and implements comparision logic between sone fixed data
   * @returns the found node or null otherwise
   */
  public search(comparator: (data: T) => boolean): INode<T> | null {
    const checkNext = (node: INode<T>): INode<T> | null => {
      if (comparator(node.value)) return node;
      return node.next ? checkNext(node.next) : null;
    };

    return this._head ? checkNext(this._head) : null;
  }

  /**
   * Remove a given node from a list
   * @param node the node to remove
   */
  public remove(node: INode<T>) {
    const checkNext = (actual: INode<T>, toRemove: INode<T>) => {
      if (!actual.next) {
        return;
      }
      if (actual.next === toRemove) {
        actual.next = toRemove.next;
        return;
      }
      checkNext(actual.next, toRemove);
    };

    if (this._head === node) this._head = this._head.next;
    checkNext(this._head, node);
    this._size -= 1;
  }

  /**
   * Traverse all node of the list and apply the given callback on data
   * @param nodeCallback node callback is called with data on each node
   */
  public traverse(nodeCallback: (data: T) => void): void {
    const loop = (clbck: (node: T) => void, node: INode<T>) => {
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
    const buildArray = (node: INode<T>, arr: T[]): T[] => {
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
