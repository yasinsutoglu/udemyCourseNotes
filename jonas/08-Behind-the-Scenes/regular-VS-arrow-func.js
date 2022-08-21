'use strict'

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this) //jonas object'i doner
        console.log(2037-this.year)
    },

    greet: () => {
        console.log(this); //window doner
        console.log(`Hey ${this.firstName}`); //burada this => global scope'ta window'u ifade eder ve firstName'i bulamaz.
    },
}

jonas.greet();

console.log(this) //window doner
console.log(this.firstName) //undefined doner

//Yukarıda arrow function'da this kullanımı sıkıntı cıkardıgından method tanımlarken function expression kullanmak dogru olur.Ama asagıda tanımlanan methodun icinde de function tanımlayacaksak durum farklılasır.Alttaki ornegi inceleyelim.

const jonasım = {

    firstName: 'Jonas',
    year: 1991,
    //tanımlanan method
    calcAge: function(){
        console.log(this)
        console.log(2037-this.year)

        //SOLUTION 1
        const self = this; //alltaki sorun cozumu icin self veya that kullanilabilir. Cunku asagıda this kullandıgımızda hata veriyor.
        //allta method icinde regular func. tanımladık ve icinde this kullanınca yine undefined deger alıyor.
        const isMillenial = function(){
            console.log(self)
            console.log(self.year >= 1981 && self.year <=1996)
            //console.log(this.year >= 1981 && this.year <=1996);
        };

        isMillenial();

        //SOLUTION 2
        //this sorununu asmak icin arrow function kullandık.Cunku arrow func. icinde this kapsayıcı fonksiyonun this keywordu oluyor.
        const millenium = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <=1996);
        }        
        
        millenium();
    },
    
};