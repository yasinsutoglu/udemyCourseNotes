//ARRAY MAP Kullanimi --> Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

/*
Öncelikle Array Map metodunun kullanımına bir göz atalım.

dizi.map( function(value, index, array), this)

Gönderilen parametreleri inceleyelim;
dizi : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
value : Üzerinde işlem yapılan dizi değerini belirtir.
array : Üzerinde işlem yapılan diziye erişimi sağlar
this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.
*/

//ORNEK.1
//Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000]
const yeniMaaslar  = maaslar.map( e =>{
    if(e>3000)
        return e*1.15
    else
        return e*1.25
})

console.log(yeniMaaslar)



//ORNEK.2
const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

//yeni objecte olusturulacak;
//userName icinde orjinal isim kalsin
//shorName icinde ilk harf buyuk -> (A.) seklinde
// newName icinde ilk harf buyuk olsun

//1.yazim sekli --> burada, return ile object donecegimiz icin {} parantez icinde yazdık. 
// const USERS_OBJ = USERS.map( item => {
//     return {
//     userName: item , shortName: `${item[0]}.` , newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })

//console.log(USERS_OBJ)


//2.yazim sekli --> burada,  "item=>" sonrası normal parantez kullandik, return anahtar kelimesini kullanmasak da  {} icerisinde yazdik
const USERS_OBJ2 = USERS.map( item => (
     {
    userName: item , shortName: `${item[0]}.` , newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
}
    )
)

console.log(USERS_OBJ2)