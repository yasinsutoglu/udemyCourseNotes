//Object: Key-Value
/* 
Bir obje(object), {…} süslü parantezleri ile, isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.

Obje örneği:

let car = {		
  brand: "BMW", 	// key(anahtar) "brand" "BMW" value(değerini) tutar 
  year: 2020,  		// key(anahtar) "year" 2020 value(değerini) tutar 
};

Property değerlerine noktalı yazım(dot notation) kullanarak erişilebilir:

console.log(car.brand); // "BMW"

İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz. Mevcut bir property'yi eklemek veya değiştirmek için şu şekilde yazabiliriz:

car.model = "320i"; // objeye model isminde bir key ekler ve value olarak string atar

Bir propertyy’i kaldırmak için silme(delete) operatörünü kullanabiliriz:

            delete car.year;

Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (" ") içinde kullanılmalıdır:

let car = {
  brand: "BMW",  
  year: 2020,  		
 "is manual" : true,
};
----------------------------
Square brackets kullanımı;
Birden fazla kelime içeren property'ler için dot notation kullanamayız. Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır:

let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru) doner
delete person["likes sea"];         // delete (sil)

-----------------

let person = {
  name: "Jack",
  age: 20,
};
let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)

**Dot notation'ı benzer şekilde kullanamayız.
-------------------------------------------
Computed property kullanımı;
Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış özellikler(computed properties) denir.

Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

function objectify (key, value) {
   return {
[key]: value
  }
}
objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer
* Key, square brackets [ ] içine alındığı sürece herhangi bir ifade olabilir.
-----------------------------------------------------

KOMPLEKS OBJECTLER KULLANIMI
Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır. Kompleks bir obje örneği de

let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}
Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. "settings" property'sinde ise obje içinde obje tutulmakta. "banList" property'sinde ise basit bir array tutulmakta.

"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.

alert(state.banList[2])
"settings"lerdeki "website" değerine ulaşmak istersek şu şekilde ulaşabiliriz.

alert(state.settings.website)
"user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.

alert(state.users[2].favoriteColor)

-------------------------------------------
Obje Metodları
Plain objects için aşağıdaki metotlar(method) kullanılabilir:

Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
Tüm bu Object.* metotları array veri tipinde değer döner.

let person = {
  name: “Jack”,
  age: 20
};

Object.keys(person) = ["name", "age"]
Object.values(person) = ["Jack", 20]
Object.entries(person) = [ ["name","Jack"], ["age",20] ]
----------------------------------------------
**JSON Veri Tipini Obje Olarak Kullanmak:

Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz. Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. Bu işlem çok basit bir şekilde yapılabilir.

const veri = require("./dosyanizin/dizini/veri.json") // Bu işlemde require fonksiyonu ile dosyanızı import etmektesiniz

// Bu işlemden sonra veri bileşenini obje şeklinde kullanabilirsiniz. 

**JSON METODLARI:

Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.

let person = {
  name: "Jack",
  age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 

*/

let laptop1 = {
    brand : "Apple",
    model : "Macbook Pro",
    "2agirlik" : 2, //normalde key'in en basına rakam gelmez ancak bu sekilde tanımlanabilir
    modelName : "Macbook X", //en dogru tanımlama camelCase
    //model-name: "Macbook" --> hatali tanimlama
    model_name : "MACBook PRO"
}

console.log(laptop1)

//Dogru Anahtar bilgisi olusturmak

console.log(laptop1.brand, laptop1["brand"]) //brand property'sine iki türlü de ulastık
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2agirlik"]) // tek tip halinde tanimlanir

//Anahtar bilgisine yeni deger eklemek
laptop1.brand = "MAC"
laptop1["brand"] =  "MAC1"
console.log(laptop1)

//Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//Anahtar Bilgilerine Ulasmak (keys) -> Object.keys (item)
let keys = Object.keys(laptop1)
console.log(keys)
//yada
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => { //dongu ile key degerlerinde gezinmek
    console.log("key: ", keyInfo)
    console.log(laptop1[keyInfo])
} )

//Deger Bilgilerine Ulasmak (values) --> Object.values(item)
console.log(Object.values(laptop1))

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: " , value)
})