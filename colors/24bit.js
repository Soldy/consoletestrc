/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';

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
            out += (
               "\u001b[38;2;"+
               i.toString()+
               ";0;0mO"
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i++)
            out += (
                "\u001b[38;2;0;"+
                i.toString()+
                ";0mO"
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i++)
            out += (
                "\u001b[38;2;0;0;"+
                i.toString()+
                "mO"
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i++)
            out += (
                "\u001b[38;2;"+
                i.toString()+
                ";"+
                i.toString()+
                ";"+
                i.toString()+
                "mO"
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i ++)
            out += (
                "\u001b[48;2;"+
                i.toString()+
                ";0;0m "
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i ++)
            out += (
                "\u001b[48;2;0;"+
                i.toString()+
                ";0m "
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i ++)
            out += (
                "\u001b[48;2;0;0;"+
                i.toString()+
                "m "
            );
        out += "\u001b[0m \n";
        for(let i = 0 ; 256 > i ; i++)
            out += (
                "\u001b[48;2;"+
                i.toString()+
                ";"+
                i.toString()+
                ";"+
                i.toString()+
                "m "
            );
        out += "\u001b[0m \n\n\n";
        return out;
    }
}

exports.base = color24BitBase;


