export class Node<E> {
  data: E;
  next: Node<E> | null;

  public constructor(e?: E) {
    this.data = e;
    this.next = null;
  }

  toString() {
    return `Node(${this.data})`;
  }
}
