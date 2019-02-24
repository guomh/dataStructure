/**
 *
 * @apiName 线性表-顺序
 * @apiDescription --author by gmh
 * @apiGroup DataStructure
 *
 *
 * @apiVersion 1.0.0
 */
'use strict';
class LinearList {
    constructor(list) {
        if (list && list.length) {
            this.list = Array.from(list);
        } else {
            this.list = [];
        }
    }

    initList() {
        this.list = [];
        return this;
    }

    destroyList() {
        this.list = null;
    }

    clearList() {
        if (this.list) {
            this.list.length = 0;
        }
    }

    listIsEmpty() {
        if (this.list && this.list.length) {
            return false;
        } else {
            return true;
        }
    }

    getItem(i) {
        if (this.list) {
            if (i >= 0 && i <= this.list.length)
                return this.list[i];
        }
    }


    locateElem(fn) {
        if (this.list) {
            if (typeof fn == 'function') {
                return this.list.find(fn);
            }
        }
        return 0;
    }


    priorElem(e) {
        if(this.list){
            let i = this.list.indexOf(e);
            if(i>0){
                return i-1;
            }
        }
    }

    nextElem(e) {
        if(this.list){
            let i = this.list.indexOf(e);
            if(i<this.list.length-1){
                return i+1;
            }
        }
    }

    ListInsert(e,i){
        if(this.list){
            if(i>=0&&i<=this.list.length){
                this.list.splice(i,0,e);
            }else{
                this.list.push(e);
            }
        }
    }

    ListDelete(i){
        if(this.list){
            if(i>=0&&i<=this.list.length){
                return this.list.splice(i,1);
            }
        }
    }

    ListTraverse(fn){
        if(this.list){
            if(typeof fn =='function'){
                for(let i=0,l=this.list.length;i<l;i++){
                    fn(this.list[i]);
                }
            }
        }
    }

}

module.exports  = LinearList;