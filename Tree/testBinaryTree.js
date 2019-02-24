/**
 * Created by guominghui on 16/4/17.
 */
var BinaryTree = require('./BinaryTree.js');
var tree = [1,2,3,4,5,6,7,8,9];
var bTree = new BinaryTree(tree);
console.log('------------preOrder---------------');
bTree.preOrderTraverse(0,function(n){console.log(n)});
console.log('------------preOrder_stack---------------')
bTree.preOrderTraverse_stack(function(n){console.log(n)});
console.log('------------inOrder---------------');
bTree.inOrderTraverse(0,function(n){console.log(n)});
console.log('------------inOrder_stack---------------')
bTree.inOrderTraverse_stack(function(n){console.log(n)});
console.log('------------postOrder---------------');
bTree.postOrderTraverse(0,function(n){console.log(n)});
console.log('------------parent---------------');
console.log(bTree.parent(3));
console.log('------------leftChild---------------');
console.log(bTree.leftChild(3));
console.log('------------rightChild---------------');
console.log(bTree.rightChild(3));
console.log('------------leftSibling---------------');
console.log(bTree.leftSibling(3));
console.log(bTree.leftSibling(4));
console.log('------------rightSibling---------------');
console.log(bTree.rightSibling(3));
console.log(bTree.rightSibling(4));