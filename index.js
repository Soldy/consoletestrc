/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';
const color16 = new (require('./colors/16.js')).base
const color255 = new (require('./colors/255.js')).base
const color24bit = new (require('./colors/24bit.js')).base
/*
 * @prototype
 */
const testBase = function(){
    this.color16 = color16;
    this.color255 = color255;
    this.color24bit = color24bit;
}

exports.base = testBase;


