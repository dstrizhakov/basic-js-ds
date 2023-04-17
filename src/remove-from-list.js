const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // If the list is empty, return null
  if (!l) {
    return null;
  }

  // If the first node has value k, skip over it
  while (l && l.value === k) {
    l = l.next;
  }

  // If the list is now empty, return null
  if (!l) {
    return null;
  }

  // Iterate over the rest of the list
  let current = l;
  while (current.next) {
    if (current.next.value === k) {
      // Skip over the node with value k
      current.next = current.next.next;
    } else {
      // Move on to the next node
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
