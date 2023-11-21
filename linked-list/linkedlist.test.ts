import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { LinkedList } from './linkedlist';

let linkedList = new LinkedList<number>();
beforeAll(() => {
  for (let i = 0; i < 6; i++) {
    linkedList.append(i);
  }
});

afterAll(() => {
  linkedList = null;
});

describe('linked list', () => {
  test('init linked list', () => {
    const list = new LinkedList();
    expect(list.getSize()).toBe(0);
    expect(list.getHead().next).toBeNull();
  });

  test('append node to list', () => {
    const list = new LinkedList<number>();
    list.append(10);
    list.append(20);
    expect(list.getLast().data).toBe(20);
    expect(list.getSize()).toBe(2);
  });

  test('Checks whether the linked list contains the specified node', () => {
    expect(linkedList.contains(5)).toBeTruthy();
    expect(linkedList.contains(10)).toBeFalsy();
  });

  test('toString', () => {
    expect(linkedList.toString()).toContain('LinkedList: 0->1->2->3->4->5->NULL');
  });

  test('add node to linked list', () => {
    linkedList.add(6666, 2);
    expect(linkedList.contains(6666)).toBeTruthy();
    linkedList.add(777, -1);
    expect(linkedList.contains(777)).toBeFalsy();
  });

  test('remove node from linked list', () => {
    linkedList.removeAt(2);
    expect(linkedList.contains(6666)).toBeFalsy();
    expect(linkedList.removeAt(linkedList.getSize())).toBeFalsy();
    expect(linkedList.removeAt(-1)).toBeFalsy();
  });

  test('findKth', () => {
    expect(linkedList.findKth(-2)).toBeNull();
  });

  test('gen', () => {
    const iterator = linkedList[Symbol.iterator]();
    expect(iterator.next().value).toBe(0);
    expect(iterator.next().value).toBe(1);
  });
});
