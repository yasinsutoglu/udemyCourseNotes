'use strict'

//arguments keyword:  sadece function expression/declaration'da olur. Arrow function'da yok!!!
const addExpr = function (a,b){
    console.log(arguments); //parametre olarak girilen tüm argument'leri gosterir
    return a + b;
};

addExpr(2,5);
addExpr(2,5,8,12); //2 parametre olmasına ragmen 4 tane argument girdik ve "arguments" keywordunde gorduk.

//arrow function "arguments" denemesi
var addArrow = (a,b) => {
    console.log(arguments);//hata verir burada, cunku arguments arrow function'da kullanılmaz
    return a + b;
};

addArrow(2,5,8)