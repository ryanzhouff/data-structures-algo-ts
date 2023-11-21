import { LinkedList } from './linked-list/linkedlist';

const list = new LinkedList<number>();
list.append(9);
list.append(20);
list.append(6);
list.append(3);
list.append(12);

list.removeAt(4);
console.log(list.toString());
for (const node of list) {
  console.log(node);
}

const iterator = list[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
