const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = {
      data: data,
      left: null,
      right: null,
    };

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.rootNode;

      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          break;
        }
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode !== null ? currentNode.data : null;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode !== null && currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode !== null ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};