export interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

export interface IBST<T> {
  readonly Root: ITreeNode<T> | null;
  insert(value: T): void;
  remove(value: T): void;
  search(value: T): ITreeNode<T> | undefined;
  min(): ITreeNode<T> | undefined;
  max(): ITreeNode<T> | undefined;
  inOrder(nodeCallback: (value: T) => void): void;
  preOrder(nodeCallback: (value: T) => void): void;
  postOrder(nodeCallback: (value: T) => void): void;
}
