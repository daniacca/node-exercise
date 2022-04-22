export interface IQueue<T> {
  readonly Size: number;
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}
