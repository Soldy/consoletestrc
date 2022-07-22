/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';
const reset = (require('./reset.js')).reset;

const ansi255 = (color) => {
    return (
        "\u001b[38;5;"+
        color.toString()+
        "m"
    );
};
const back255 = (color) => {
    return (
        "\u001b[48"+
        color.toString()+
        "m"
    );
};
const text255 = (color, text, back_color) => {
    return (
         ansi255(color)+
         back255(back_color)+
         text+
         reset()
    );
};
/*
 * @prototype
 */
const color255Base = function(){
    this.test = function (){
        process.stdout.write(
            test()
        );
    }
    const test = function (){
        let out = '\n';
        let a = 0;
        for(let i = 0 ; 16 > i ; i++)
            out += text255(i,'0',0);
        out += "\n";
        for(let i = 16 ; 232 > i ; i++){
            out += text255(i,'0',0);
            if(a === 35){
                out += "\n";
                a = 0;
            }else 
                a++
        }
        out += "\n";
        for(let i = 232 ; 256 > i ; i++)
            out += text255(i,'0',0);
        out += "\n";
        for(let i = 0 ; 16 > i ; i++)
            out += text255(0,'0',i);
        out += "\n";
        for(let i = 16 ; 232 > i ; i++){
            out += text255(0,'0',i);
            if(a === 35){
                out += "\n";
                a = 0;
            }else 
                a++
        }
        out += "\n";
        for(let i = 232 ; 256 > i ; i++)
            out += text255(0,'0',i);
        out += "\n";
        return out;
    }
}

exports.base = color255Base;


