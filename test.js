/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';
const test = new (require('./index.js')).base
const color255 = new (require('./colors/255.js')).base
const color24bit = new (require('./colors/24bit.js')).base

test.color16.test();
test.color255.test();
test.color24bit.test();


