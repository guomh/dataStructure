/**
 *
 * @apiName 栈
 * @apiDescription --author by gmh
 * @apiGroup DataStructure
 *
 *
 * @apiVersion 1.0.0
 */
'use strict';
class Stack {
    constructor(array) {
        if(array&&array.length){
            this.stack = Array.from(array);
        }else{
            this.stack = [];
        }

    }

    initStack() {
        this.stack =[];
    }

    destroyStack() {
        this.stack = null;
    }


    stackLength() {
        if(this.stack){
            return this.stack.length;
        }
    }

    getTop(){
        if(this.stack&&this.stack.length){
            return this.stack[this.stack.length-1];
        }
    }

    push(item){
        if(this.stack){
            this.stack.push(item);
        }
    }

    pop(){
        if(this.stack&&this.stack.length){
            return this.stack.pop();
        }
    }

    stackTraverse(fn){
        if(this.stack&&this.stack.length&&typeof fn =='function'){
            for(let i=0,l=this.stack.length;i<l;i++){
                fn(this.stack[i]);
            }
        }
    }




}



module.exports  = Stack;