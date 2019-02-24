/**
 *
 * @apiName 二叉树(顺序)
 * @apiDescription --author by gmh
 * @apiGroup DataStructure
 *
 *
 * @apiVersion 1.0.0
 */
'use strict';
var Stack = require('../Stack/Stack.js');
class BinaryTree {
    constructor(tree) {
        this.tree = tree;
    }

    value(n){
        if(n>=0&&n<this.tree.length){
            return this.tree[n];
        }
    }

    assign(n,value){
        if(n>=0&&n<this.tree.length){
            this.tree[n] = value;
        }
    }

    parent(n){
        if(n>0&&n<this.tree.length){
            return this.tree[Math.floor((n-1)/2)];
        }
    }

    leftChild(n){
        if(n>=0&&n<this.tree.length){
            return this.tree[2*n+1];
        }
    }

    rightChild(n){
        if(n>=0&&n<this.tree.length){
            return this.tree[2*n+2];
        }
    }

    leftSibling(n){
        if(n>0&&n<this.tree.length){
            var m = Math.floor((n-1)/2)*2+1;
            if(m!=n){
                return this.tree[m];
            }
        }
    }

    rightSibling(n){
        if(n>0&&n<this.tree.length){
            var m = Math.floor((n-1)/2)*2+2;
            if(m!=n){
                return this.tree[m];
            }
        }
    }

    preOrderTraverse(n,fn){
        var _this = this;
        if(typeof fn =='function'){
            fn(_this.tree[n]);
        }
        if(this.tree[2*n+1]){
            this.preOrderTraverse(2*n+1,fn);
        }
        if(this.tree[2*n+2]){
            this.preOrderTraverse(2*n+2,fn);
        }
    }

    preOrderTraverse_stack(fn){
        if(!this.stack){
            this.stack = new Stack();
        }else{
            this.stack.initStack();
        }
        var n = 0,_this=this;
        var p = this.tree[n];

        while (p || this.stack.getTop()||this.stack.getTop()===0) {
            if (p) {
                this.stack.push(n);
                p&& fn(_this.tree[n]);
                n = 2*n+1;
            } else {
                n = this.stack.pop();
                n = 2*n+2;
            }
            p = this.tree[n];
           // console.log(n+'--'+p);
           // console.log(this.stack.stack)
        }
    }

    inOrderTraverse(n,fn){
        var _this = this;

        if(this.tree[2*n+1]){
            this.inOrderTraverse(2*n+1,fn);
        }
        if(typeof fn =='function'){
            fn(_this.tree[n]);
        }
        if(this.tree[2*n+2]){
            this.inOrderTraverse(2*n+2,fn);
        }
    }

    inOrderTraverse_stack(fn){
        if(!this.stack){
            this.stack = new Stack();
        }else{
            this.stack.initStack();
        }
        var n = 0,_this=this;
        var p = this.tree[n];

        while (p || this.stack.getTop()||this.stack.getTop()===0) {
            if (p) {
                this.stack.push(n);

                n = 2*n+1;
            } else {
                n = this.stack.pop();
                _this.tree[n]&& fn(_this.tree[n]);
                n = 2*n+2;
            }
            p = this.tree[n];
            // console.log(n+'--'+p);
            // console.log(this.stack.stack)
        }
    }
    postOrderTraverse(n,fn){
        var _this = this;

        if(this.tree[2*n+1]){
            this.postOrderTraverse(2*n+1,fn);
        }

        if(this.tree[2*n+2]){
            this.postOrderTraverse(2*n+2,fn);
        }
        if(typeof fn =='function'){
            fn(_this.tree[n]);
        }
    }
}

module.exports  = BinaryTree;

/*
class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.lChild = this.rChild = null;
    }

    setLeftChild(child){
        if(typeof child !='BinaryTreeNode'){
            child = new BinaryTreeNode(child);
        }
        this.lChild = child;
    }

    setRightChild(child){
        if(typeof child !='BinaryTreeNode'){
            child = new BinaryTreeNode(child);
        }
        this.rChild = child;
    }
}*/
