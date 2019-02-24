/**
 *
 * @apiName 线性表-链表
 * @apiDescription --author by gmh
 * @apiGroup DataStructure
 *
 *
 * @apiVersion 1.0.0
 */
'use strict';
class LinkedList {
    constructor() {
        this.firstPointer = this.pointer = {next:null};
        this.length = 0;
    }

    initList() {
        this.clearList();
        this.pointer = this.firstPointer;
    }

    destroyList() {
        this.clearList();
        this.firstPointer = this.pointer = null;
    }

    clearList() {
        this.pointer = this.pointer.next;
        while(this.pointer){
            this.pointer.destroy();
        }
        this.length = 0;
    }

    listIsEmpty() {
        return this.length;
    }

    getItem(i) {
        if(i<0||i>this.length){
            return;
        }
        this.pointer = this.firstPointer.next;
        let j = 1;
        while(this.pointer&&j<i){
            this.pointer= this.pointer.next;
            j++;
        }
        if(this.pointer){
            return this.pointer.value;
        }
    }


    locateElem(fn) {
        this.pointer = this.firstPointer.next;
        while(this.pointer){
            if(fn(this.pointer.value)){
                return this.pointer.value;
            }
            this.pointer = this.pointer.next;
        }
    }


    listInsert(e,i){

        if(i>=0&&i<=this.length){
            this.pointer = this.firstPointer.next;
            let j = 1;
            while(this.pointer&&j<i){
                this.pointer= this.pointer.next;
                j++;
            }
            let item = new LinkedListItem(e);
            item.next = this.pointer.next;
            this.pointer.next = item;
        }else{
            while(this.pointer.next){
                this.pointer = this.pointer.next;
            }
            this.pointer.next = new LinkedListItem(e);
        }
        this.length++;

    }

    listDelete(i){
        if(i>=0&&i<=this.length){
            this.pointer = this.firstPointer.next;
            let j = 1;
            while(this.pointer.next&&j<i-1){
                this.pointer= this.pointer.next;
                j++;
            }
            let tmp = this.pointer.next;
            this.pointer.next = this.pointer.next.next;
            tmp.destroy();
            this.length--;
        }
    }

    listTraverse(fn){
        this.pointer = this.firstPointer.next;
        while(this.pointer){
            fn(this.pointer.value);
            this.pointer= this.pointer.next;
        }
    }

}

class LinkedListItem{
    constructor(value) {
        this.value = value;
        this.prev = this.next = null;
    }

    destroy(){
        this.value = this.prev = this.next = null;
    }
}

module.exports  = LinkedList;