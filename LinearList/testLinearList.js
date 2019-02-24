/**
 * Created by guominghui on 16/4/10.
 */
'use strict';
let LinearList = require('./LinearList.js');
let ll = new LinearList();
console.log(ll.listIsEmpty());
ll.ListInsert(2);
ll.ListInsert(3);
ll.ListTraverse((n)=>{console.log(n)});
ll.ListInsert(1,0);
ll.ListTraverse((n)=>{console.log(n)});
console.log(ll.ListDelete(1));
ll.clearList();
console.log(ll.listIsEmpty());
ll.ListInsert(1);
ll.ListInsert(2);
ll.ListInsert(3);
ll.ListInsert(4);
console.log(ll.getItem(2));
console.log(ll.locateElem((n) => n >1));
console.log(ll.priorElem(2));
console.log(ll.nextElem(2));