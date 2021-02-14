/*
 *  @Soldy\consoletestrc\2021.02.07\GPL3
 */
'use strict';

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
            out += "\u001b[38;5;"+i.toString()+"mO";
        out += "\n";
        for(let i = 16 ; 232 > i ; i++){
            out += "\u001b[38;5;"+i.toString()+"mO";
            if(a === 35){
                out += "\n";
                a = 0;
            }else 
                a++
        }
        out += "\u001b[0m \n";
        for(let i = 232 ; 256 > i ; i++)
            out += "\u001b[38;5;"+i.toString()+"mO";
        out += "\u001b[0m \n\n";
        for(let i = 0 ; 16 > i ; i++)
            out += "\u001b[48;5;"+i.toString()+"m ";
        out += "\u001b[0m \n\n";
        for(let i = 16 ; 232 > i ; i++){
            out += "\u001b[48;5;"+i.toString()+"m ";
            if(a === 35){
                out += "\n";
                a = 0;
            }else 
                a++
        }
        out += "\u001b[0m \n";
        for(let i = 232 ; 256 > i ; i++)
            out += "\u001b[48;5;"+i.toString()+"m ";
        out += "\u001b[0m \n\n";
        return out;
    }
}

exports.base = color255Base;


