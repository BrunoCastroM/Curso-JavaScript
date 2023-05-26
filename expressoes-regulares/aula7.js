/* 
Começa com e termina com:
    ^ -> Começa com não confundir com "[^]", esse é negação
    $ -> Termina com
    m -> Multiline, vai checar cada linha da string 

*/ 

const { cpfs2 } = require('./base')

const cfpRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm

console.log(cpfs2.match(cfpRegExp))
