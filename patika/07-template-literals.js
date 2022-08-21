/* TEMPLATE LITERALS --> Onceki adıyla Template Strings, kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir. 

  `IFADELER` seklinde backtick(``) arasina yazilir. Windows için → "Alt Gr + ,"   Mac için → "option + , "
  Normalde + operatoru ile string birlestirme yapıyorduk ama fazla uzun olacak ifadelerde bu kulfetli olacagı icin template literals kullanimi avantajlidir ve büyük rahatlık sağlar.

  Template Literals;
    Kod okunabilirliğini kolaylaştırır,
    Stringler içerisinde değişken yazma kolaylığını sağlar,
    Şablon etiketlerini daha az karmaşık hale getirir.

  Dahası, template literals icerisinde ${ifadeler} kullanılarak degisken,fonksiyon cagırma vb. bircok sey yazilabilir.
*/

let username = "yasin"
const DOMAIN = "kodluyoruz.org"

//string birlestirme
let email = username + "@" + DOMAIN
console.log("MErhaba", username, "sitemize hosgeldin, mail adresin: ", email)

//template literals kullanımı
let info = `Merhaba ${username} sitemize hosgeldin.. 
            kısa isminiz: ${username[0]}.sutoglu
            mail adresin: ${email}
            mail adresinin uzunlugu: ${email.length}
            borcunuz: ${(2+3)*10} TL
            gunun saat bilgisi: ${new Date().getHours()}
            `

console.log(info)

//JS ile HTML eski usul yazıdrmak
const book = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+book.ad+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+book.yazar+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+book.tarih+"</td>"+
      "</tr>"+
   " </tbody>"+
    
  "</table>" 
        
  document.body.innerHTML = bookTable

  //JS ile template literal ile HTML yazdırmak
  const kitap = {
      ad:"Mobydick",
      yazar:"Jules Verne", 
      tarih: 1845
  }

  const kitapTablo = `
<table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
      <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
      <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
    </tbody>
</table>
  `
  document.body.innerHTML = kitapTablo