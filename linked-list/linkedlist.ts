import { Node } from './node';

export class LinkedList<E> {
  private readonly head: Node<E>;
  private size: number = 0;

  constructor() {
    this.head = new Node();
    this.size = 0;
  }

  public getSize() {
    return this.size;
  }

  public getHead() {
    return this.head;
  }

  // 向链表的尾部添加结点
  public append(e: E) {
    let currentNode = this.head;
    const node = new Node(e);

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // 循环结束之后，currentNode指向了最后一个结点
    currentNode.next = node;
    this.size++;
  }

  public findKth(position: number): Node<E> | null {
    if (position < -1 || position > this.size) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i <= position && currentNode !== null; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * 获取最后一个结点
   */
  public getLast(): Node<E> | null {
    return this.findKth(this.size - 1);
  }

  /**
   * 在指定位置添加结点
   *
   * 合理的添加位置0 <= position <= this.size
   *
   * @example ```
   * list.add(6, 2)
   * ```
   *
   * @param e 结点实际值
   * @param position 指定的位置
   */
  public add(e: E, position: number): boolean {
    if (position < 0 || position > this.size) {
      return false;
    }

    const previousNode = this.findKth(position - 1);
    const node = new Node(e);
    node.next = previousNode.next;
    previousNode.next = node;

    this.size++;
    return true;
  }

  /**
   * 在指定位置删除结点
   *
   * @param position 结点的位置
   */
  public removeAt(position: number) {
    if (position < 0 || position >= this.size) {
      return false;
    }

    const previousNode = this.findKth(position - 1);
    const target = previousNode.next;
    previousNode.next = target.next;
    target.next = null;

    this.size--;
    return true;
  }

  /**
   * 链表中是否包含指定的结点
   *
   * @param e
   */
  public contains(e: E): boolean {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (e === currentNode.data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
   * 实现生成器接口，方便用for...of循环遍历
   *
   * @example ```
   * for (const node of list) {
   *   console.log(node.data);
   * }
   * ```
   */
  *[Symbol.iterator]() {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }

  toString() {
    let currentNode = this.head.next;
    let stringBuilder = 'LinkedList: ';
    while (currentNode !== null) {
      stringBuilder += `${currentNode.data}->`;
      currentNode = currentNode.next;
    }
    stringBuilder += `NULL`;
    return stringBuilder;
  }
}
