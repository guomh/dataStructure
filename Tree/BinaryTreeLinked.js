/**
 *
 * @apiName 二叉树(链式)
 * @apiDescription --author by gmh
 * @apiGroup DataStructure
 *
 *
 * @apiVersion 1.0.0
 */
'use strict';
var Stack = require('../Stack/Stack.js');
class BinaryTreeLinked {
    constructor(root) {
        this.root = root;
    }

    value(n){

    }

    assign(n,value){

    }

    parent(n){

    }

    leftChild(n){
        return n&&n.lChild;
    }

    rightChild(n){
        return n&&n.rChild;
    }

    leftSibling(n){

    }

    rightSibling(n){

    }

    preOrderTraverse(node,fn){
        if(typeof fn =='function'){
            fn(node.value);
        }
        if(node.lChild){
            this.preOrderTraverse(node.lChild,fn);
        }
        if(node.rChild){
            this.preOrderTraverse(node.rChild,fn);
        }
    }

    preOrderTraverse_stack(node,fn){
        if(!this.stack){
            this.stack = new Stack();
        }else{
            this.stack.initStack();
        }
        var p = node;
        while (p || this.stack.getTop()) {
            if (p) {
                this.stack.push(p);
                p.value &&typeof fn =='function' &&fn(p.value);
                p = p.lChild;
            } else {
                p = this.stack.pop();
                p = p.rChild;
            }
        }
    }

    inOrderTraverse(node,fn){

        if(node.lChild){
            this.inOrderTraverse(node.lChild,fn);
        }
        if(typeof fn =='function'){
            fn(node.value);
        }
        if(node.rChild){
            this.inOrderTraverse(node.rChild,fn);
        }
    }

    inOrderTraverse_stack(node,fn){
        if(!this.stack){
            this.stack = new Stack();
        }else{
            this.stack.initStack();
        }
        var p = node;
        while (p || this.stack.getTop()) {
            if (p) {
                this.stack.push(p);
                p = p.lChild;
            } else {
                p = this.stack.pop();
                p.value &&typeof fn =='function' &&fn(p.value);
                p = p.rChild;
            }
        }
    }
    postOrderTraverse(node,fn){
        if(node.lChild){
            this.postOrderTraverse(node.lChild,fn);
        }

        if(node.rChild){
            this.postOrderTraverse(node.rChild,fn);
        }
        if(typeof fn =='function'){
            fn(node.value);
        }
    }
}

exports.BinaryTreeLinked  = BinaryTreeLinked;


class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.lChild = this.rChild = null;
    }

    setLeftChild(child) {
        if (typeof child != 'BinaryTreeNode') {
            child = new BinaryTreeNode(child);
        }
        this.lChild = child;
    }

    setRightChild(child) {
        if (typeof child != 'BinaryTreeNode') {
            child = new BinaryTreeNode(child);
        }
        this.rChild = child;
    }
}

exports.BinartTreeNode = BinaryTreeNode;