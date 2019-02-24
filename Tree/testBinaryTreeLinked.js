var BinaryTree = require('./BinaryTreeLinked.js');
console.log(BinaryTree.BinartTreeNode);
var root = new BinaryTree.BinartTreeNode(1);
root.setLeftChild(2);
root.setRightChild(3);
root.lChild.setLeftChild(4);
root.lChild.setRightChild(5);
root.rChild.setLeftChild(6);
root.rChild.setRightChild(7);
var tree = new BinaryTree.BinaryTreeLinked(root);
console.log('------------preOrder---------------');
tree.preOrderTraverse(tree.root,function(n){console.log(n)})
console.log('------------preOrder_stack---------------');
tree.preOrderTraverse_stack(tree.root,function(n){console.log(n)})
console.log('------------inOrder---------------');
tree.inOrderTraverse(tree.root,function(n){console.log(n)})
console.log('------------inOrder_stack---------------');
tree.inOrderTraverse_stack(tree.root,function(n){console.log(n)})
console.log('------------postOrder---------------');
tree.postOrderTraverse(tree.root,function(n){console.log(n)})
console.log(tree.leftChild(tree.root));
console.log(tree.rightChild(tree.root));

