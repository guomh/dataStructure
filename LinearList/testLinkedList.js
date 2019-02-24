/**
 * Created by guominghui on 16/4/11.
 */
'use strict';
let LinkedList = require('./LinkedList.js');
let list = new LinkedList();
list.listInsert(5);
list.listInsert(7);
list.listInsert(9);
list.listTraverse((x)=>console.log(x));
console.log(list.length);
list.listInsert(6,1);
list.listTraverse((x)=>console.log(x));
console.log(list.length);
list.listDelete(3);
list.listTraverse((x)=>console.log(x));
console.log(list.length);
console.log(list.locateElem((x)=>x>7));