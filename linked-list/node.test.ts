import { Node } from './node';
import { describe, test, expect } from 'vitest';

describe('Node', () => {
  test('toString', () => {
    const node = new Node<string>('hello');
    expect(node.toString()).toContain('Node(hello)');
  });
});
