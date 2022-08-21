//'use strict' kullanınca hata verdi

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
//Bazen bazı fonksyionlara tek seferlik ihtiyac duyulur sonra bir daha duyulmaz. Async/await konusunda kullanılan/ihtiyac duyulan bir kavramdır IIFE.
//IIFE, data privacy'ye ihtiyac duyuldugu icin icat edilmistir.Modern JS'te pek kullanılmaz cunku data privacy icin scope isi yeterli ama tek seferlik function kullanılmak istenirse yine de degerlendirilebilir.

//Nasıl Yazılır?
//Burada function(){} definition bir kez daha paranteze() alınarak function expression haline getiriliyor ve en dısa fonskyionu hemen cagırmak icin  bos parantez ac-kapa() yapıyoruz. 
/*
----------1.yontem--------
(function(){
    //CODE BLOCKS
})()
-------2.yontem---------
(() => console.log('this will ALSO never run again'))()
*/

(function(){
    console.log('this will never run again')
    const isPrivate = 23;  //bu degisken bu fonksiyon icerisinde encapsulated olmus olur.(data encapsulation/data privacy)
})()


{
    const myPrivate = 22;
    var notPrivate = 17;//ES6'dan once kullanılıyordu.Buna scope olayı gecerli olmuyor
}

console.log(notPrivate) //17'yi basar, hata vermez
console.log(myPrivate) //hata verir cunku scope dısında kullanıldı
