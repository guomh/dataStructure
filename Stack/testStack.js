/**
 * Created by guominghui on 16/4/12.
 */
'use strict';
let Stack = require('./Stack.js');
let stack = new Stack([1,2,3,4,5]);
stack.stackTraverse((n)=>console.log(n));
stack.push(6);
stack.push(7);
stack.stackTraverse((n)=>console.log(n));
console.log(stack.pop());
stack.stackTraverse((n)=>console.log(n));
