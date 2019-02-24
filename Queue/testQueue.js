/**
 * Created by guominghui on 16/4/12.
 */
'use strict';
let Queue = require('./Queue.js');
let queue = new Queue([1,2,3,4,5]);
queue.queueTraverse((n)=>console.log(n));
queue.enQueue(6);
queue.enQueue(7);
queue.queueTraverse((n)=>console.log(n));
queue.deQueue();
queue.queueTraverse((n)=>console.log(n));
