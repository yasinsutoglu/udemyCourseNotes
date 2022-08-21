//RECURSION FONKSIYON --> Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

//Ornek
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert(pow(2, 3)); // 8

  //alternatif yazim
  function power(x, n) {
    return n == 1 ? x : x * power(x, n - 1);
  }

  /*
  Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.  */

  function programDetayi(bootcamp, organizasyon) {

    const tumProgram = () => bootcamp + ' ' + organizasyon; // nested yardımcı fonk
  
    console.log('Basladi, ' + tumProgram());
    consol.log('Bitti, ' + tumProgram());
  }
  //tumProgram fonksiyonu dış değişkene ulaşabilir ve gerekli bilgileri return eder. Daha ilginç olarak da bir fonksiyon nested fonksiyonu da return edebilir.Bir sayaç üzerinde bunu anlayabiliriz.
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2