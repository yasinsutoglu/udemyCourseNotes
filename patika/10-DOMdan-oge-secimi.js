/*DOM içinde oge secimi;
1. getElementById; document objesinin getElementById() metodu ile sayfada bulunan html elementlerinin ID'leri referans alarak seçme işlemi yapabiliyoruz.

2.querySelector; yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir. Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir.

3.getElementsByTagName; Elemanları etiket isimlerine göre seçmek için getElementsByTagName() metodu kullanılır. Birden çok elemente ulaşmak amacı ile kullanılır. Girdi olarak bir html elementi alır ve buna uygun bir HTMLCollection döndürür.
    document.getElementsByTagName('*')--> sayfadaki tüm elementleri getirir.

4.getElementsByName; Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır. Elemanların name değerlerine göre bir NodeList objesi döndürür.Unutmayın ki name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.'

5.getElementsByClassName; DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız. Bu metot bize bir HTMLCollection döndürür. Ve kullanırken class isminin başına nokta "." koymamanız gerekir. Ayrıca bu metotla birden fazla class name belirtip daha detaylı bir seçim yapabilirsiniz.

6.querySelectorAll() metodu;  QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.

kullanılarak yapılmaktadır. */

// let h2 = document.getElementsByTagName('h2')
// console.log(h2.title.innerHTML)

//1.YONTEM
let title = document.getElementById('title') //burada title ıd'si olan elemente ulastık
title.innerHTML = "degisen bilgi"
console.log(title.innerHTML)

//2.YONTEM
let link = document.querySelector("ul#list>li>a") //burada direk emmetteki gibi yazılınca a tag'ine ulastık
link.innerHTML += " degisti" //yazının iceriğine ekleme yaptık

//bir üsttekini farklı query ile yaptık
let link2 = document.querySelector("#kodluyoruzLink")
link2.innerHTML = " a tag'ine ulastık"

//linkimize style vererek rengini degistirdik
link2.style.color ="red"
//linkimize class ekledik
link2.classList.add("btn")

//Metotları bir arada kullanabilirsiniz. Yukarda öğrendiğimiz metotları bir arada kullanabiliyoruz. Önce tek bir elemanı seçerek ardından içinde ikinci bir sorguyu yapabiliyoruz.
// let link3 = document.getElementById('list').getElementsByTagName('a')
