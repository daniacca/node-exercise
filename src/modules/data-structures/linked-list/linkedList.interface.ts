export interface INode<T = any> {
  value: T;
  next: INode<T> | null;
}

export interface ILinkNode<T = any> {
  value: T;
  next: ILinkNode<T> | null;
  prev: ILinkNode<T> | null;
}
