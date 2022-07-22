/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';
const reset = (require('./reset.js')).reset;

const ansi16 = (color) => {
    return (
        "\u001b[3"+
        color.toString()+
        "m"
    );
};
const back16 = (color) => {
    return (
        "\u001b[4"+
        color.toString()+
        "m"
    );
};
const text16 = (color, text, back_color) => {
    return (
         ansi16(color)+
         back16(back_color)+
         text+
         reset()
    );
};
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
            out += text16(i,i,0);
        out += "\n";
        for(let i = 0 ; 8 > i ; i++)
            out += text16(0,' ',i);
        out += "\n";
        return out;
    }
}

exports.base = color16Base;



