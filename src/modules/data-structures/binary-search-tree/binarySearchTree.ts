import { IBST } from ".";
import { ITreeNode } from "./binarySearchTree.interfaces";

const buildNode = <T>(value: T, left: ITreeNode<T> | null = null, right: ITreeNode<T> | null = null) => ({
  value,
  left,
  right,
});

export class BST<T = any> implements IBST<T> {
  private _root: ITreeNode<T> = null;

  constructor(private comparator: (value: T, nodeData: T) => number, value?: T) {
    if (value) this._root = buildNode(value);
  }

  public get Root() {
    return this._root;
  }

  public insert(value: T): void {
    const addNode = (current: ITreeNode<T>) => {
      if (this.comparator(value, current.value) > 0) {
        if (!current.right) current.right = buildNode(value);
        else addNode(current.right);
      } else {
        if (!current.left) current.left = buildNode(value);
        else addNode(current.left);
      }
    };

    if (!this._root) this._root = buildNode(value);
    else addNode(this._root);
  }

  public remove(value: T): void {
    const getMin = (node: ITreeNode<T>) => {
      return node.left ? getMin(node.left) : node.value;
    };

    const deleteNode = (node: ITreeNode<T>, key: T) => {
      if (this.comparator(key, node.value) < 0) {
        node.left = deleteNode(node.left, key);
      } else if (this.comparator(key, node.value) > 0) {
        node.right = deleteNode(node.right, key);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          node.value = getMin(node.right);
          node.right = deleteNode(node.right, node.value);
        }
      }
      return node;
    };

    if (!this._root) return;
    this._root = deleteNode(this._root, value);
  }

  public search(value: T): ITreeNode<T> | undefined {
    const loop = (node: ITreeNode<T>, key: T): ITreeNode<T> | undefined => {
      if (!node) return undefined;
      else if (this.comparator(key, node.value) === 0) return node;
      else if (this.comparator(key, node.value) < 0) return loop(node.left, key);
      else return loop(node.right, key);
    };

    if (!this._root) return undefined;
    return loop(this._root, value);
  }

  public min(): ITreeNode<T> | undefined {
    const traverse = (node: ITreeNode<T>): ITreeNode<T> => {
      return !node.left ? node : traverse(node.left);
    };

    return !this._root ? undefined : traverse(this._root);
  }

  public max(): ITreeNode<T> | undefined {
    const traverse = (node: ITreeNode<T>): ITreeNode<T> => {
      return !node.right ? node : traverse(node.right);
    };

    return !this._root ? undefined : traverse(this._root);
  }

  public inOrder(nodeCallback: (value: T) => void): void {
    const traverse = (node: ITreeNode<T>, callback: (value: T) => void) => {
      if (node) {
        traverse(node.left, callback);
        callback(node.value);
        traverse(node.right, callback);
      }
    };

    traverse(this._root, nodeCallback);
  }

  public preOrder(nodeCallback: (value: T) => void): void {
    const traverse = (node: ITreeNode<T>, callback: (value: T) => void) => {
      if (node) {
        callback(node.value);
        traverse(node.left, callback);
        traverse(node.right, callback);
      }
    };

    traverse(this._root, nodeCallback);
  }

  public postOrder(nodeCallback: (value: T) => void): void {
    const traverse = (node: ITreeNode<T>, callback: (value: T) => void) => {
      if (node) {
        traverse(node.left, callback);
        traverse(node.right, callback);
        callback(node.value);
      }
    };

    traverse(this._root, nodeCallback);
  }
}
