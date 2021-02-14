/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */
const color16Base = function(){
    this.test = function (){
        process.stdout.write(
            test()
        );
    }
    const test = function (){
        let out = '\n';
        for(let i = 0 ; 8 > i ; i++)
            out += "\u001b[3"+i.toString()+"m"+i.toString();
        out += "\u001b[0m \n";
        for(let i = 0 ; 8 > i ; i++)
            out += "\u001b[4"+i.toString()+"m ";
        out += "\u001b[0m \n\n\n";
        return out;
    }
}

exports.base = color16Base;



