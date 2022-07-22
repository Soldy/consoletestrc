/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';

const reset = (require('./reset.js')).reset;

const ansi24bit = (red, green, blue) => {
    return (
        "\u001b[38;2;"+
        red.toString()+
        ";"+
        green.toString()+
        ";"+
        blue.toString()+
        "m"
    );
};
const back24bit = (red, green, blue) => {
    return  (
        "\u001b[48;2;"+
        red.toString()+
        ";"+
        green.toString()+
        ";"+
        blue.toString()+
        "m"
    );

};
const text24bit = (red, green, blue, text, back_red, back_green, back_blue) => {
    return (
         ansi24bit(red,green,blue)+
         back24bit(back_red,back_green,back_blue)+
         text+
         reset()
    );
};
/*
 * @prototype
 */
const color24BitBase = function(){
    this.test = function (){
        process.stdout.write(
            test()
        );
    }
    const test = function (){
        let out = '\n';
        for(let i = 0 ; 256 > i ; i++)
            out += text24bit(i,0,0,'0',0,0,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i++)
            out += text24bit(0,i,0,'0',0,0,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i++)
            out += text24bit(0,0,i,'0',0,0,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i++)
            out += text24bit(i,i,i,'0',0,0,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i ++)
            out += text24bit(0,0,0,' ',i,0,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i ++)
            out += text24bit(0,0,0,' ',0,i,0);
        out += "\n";
        for(let i = 0 ; 256 > i ; i ++)
            out += text24bit(0,0,0,' ',0,0,i);
        out += "\n";
        for(let i = 0 ; 256 > i ; i++)
            out += text24bit(0,0,0,' ',i,i,i);
        out += "\n";
        return out;
    }
}

exports.base = color24BitBase;


