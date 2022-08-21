'use strict'


//JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE, JUST ONLY PASSING BY VALUE!!

// How Passing Argument Works: Value vs Reference
const flight = 'LH234';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 2343252332443,
}

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 2343252332443){
        alert('Check In')
    }else{
        alert('wrong passport!!')
    }
}   

checkIn(flight, jonas) // 'check In' alert'i gosterdi.
console.log(flight) // burada flight yine LH234 gosterdi
console.log(jonas)  //burada jonas'ın name'ine Mr eklendigi goruldu
//Buradaki flight, primitive type oldugu icin parametre gecerken kopyalanıp fonksiyon icinde baska deger atansa  da asıl degisken icerigini etkilemez/degistirmez. AMA jonas objecti kopyalanırken reference adresi memory heap'de aynı kaldıgından fonksiyon icinde objede yapılan bir degisiklik asıl obje'de de degisime/etkilenmeye neden oluyor. Bunu obje'ler konusunda onceden gormustuk.
//Yani fonksiyona parametre gecerken primitive variable ve object'in kopyalandıgını unutma ve kopyalanırkenki durumlarını hatırla. Bunlar uzun yazılan kodlarda hataya sebebiyet verebilir.

//Bu altta obje'yi baska bir fonksiyonla manipule ettik. Yani bir property'sinde degisklik yaptık
const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas); // jonas objesinin passport property'si degisti.
checkIn(flight, jonas)//ikinci fonksiyonla manipule olan jonas objesi ilk fonksyionla isleme girdi. Burada 'wrong passport' donusu aldık ve istedigimiz sonucu elde edemedik. Biz jonas objesinin baska fonksiyonla etkilenmemesini isterdik.Bu tip hataları alabliriz iste dikkatli kullanmazsak.