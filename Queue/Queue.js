/**
 * Created by guominghui on 16/4/12.
 */
'use strict';
class Queue {
    constructor(array) {
        if(array&&array.length){
            this.queue = Array.from(array);
        }else{
            this.queue = [];
        }
    }

    InitQueue(){
        this.queue = [];
    }

    DestoryQueue(){
        this.queue = null;
    }

    queueLength(){
        if(this.queue){
            return this.queue.length;
        }
    }

    getHead(){
        if(this.queue&&this.queue.length){
            return this.queue[0];
        }
    }

    enQueue(item){
        if(this.queue){
            this.queue.push(item);
        }
    }

    deQueue(){
        if(this.queue&&this.queue.length){
            return this.queue.shift();
        }
    }

    queueTraverse(fn){
        if(this.queue&&this.queue.length&&typeof fn =='function'){
            for(let i=0,l=this.queue.length;i<l;i++){
                fn(this.queue[i]);
            }
        }
    }
}

module.exports  = Queue;