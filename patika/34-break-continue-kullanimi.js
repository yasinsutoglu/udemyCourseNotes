//Break & Continue

/*
Break:
break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

Etiketli Break:
Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

Continue :
Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

Etiketli Continue:
Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.
*/

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
]

//ILK ORNEK
for(let counter=0; counter<10; counter++){
    console.log(counter)
    if(counter===5){break}
}

console.log("----")

for(let index=0; index<10; index++){
    if(index===5){continue}
    console.log(index)
}

//BASKA ORNEK
const UL_DOM = document.querySelector("#userList")

// for(let i=0; i<LOREM_LIST.length; i++){

//     if(LOREM_LIST[i]=="dolor"){break}

//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[i]
//     UL_DOM.append(LI_DOM)
// }

// for(let i=0; i<LOREM_LIST.length; i++){

//     if(LOREM_LIST[i]=="dolor"){continue}

//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[i]
//     UL_DOM.append(LI_DOM)
// }

//İçiçe Döngü Örnek

//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
for (var k = 0; k <= 10; k++) {
    console.log("dış döngü: " + k);
    for (var j = 0; j <= 5; j++) {
      if (j == 3) {
        break;
      }
      console.log("iç döngü" + j);
    }
}

//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var m = 0; m <= 5; m++) {
    for (var n = 0; n <= 50; n++) {
      if (n == 9) {
        break cikis_etiketi;
      }
      console.log("iç döngüden n :" + n);
    }
   }
   
   //Etiketli Continue Örneği
   
   gec_etiketi: for (var o = 0; o <=5; o++) {
    for (var p = 0; p <= 4; p++) {
      if (p == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden p :" + p);
     }
   }