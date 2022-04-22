import { IQueue } from "./queue.interfaces";

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];
  private capacity: number = Infinity;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
  }

  get Size(): number {
    return this.storage.length;
  }

  enqueue(item: T): void {
    if (this.Size === this.capacity) throw new Error("Max capacity reached!");
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  peek(): T | undefined {
    return this.storage.length > 0 ? this.storage[0] : undefined;
  }
}
