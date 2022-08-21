//ARRAYLER İLE CALİSMAK --> JavaScript'te array(dizi) tanımı birden çok value(değer) saklamamızı sağlar. Bu diziler içinde string, number, boolean, object, tipinde veriler saklanabilir. Diziler de object(nesne) tipindedir. Bir dizi oluşturmak için yapmamız gereken dizi ismini verip eşittir dedikten sonra köşeli parantezler içinde dizi elemanlarını yazmak. Her eleman arasında bir virgül koymamız gereklidir.

//Programlamanın temel amaçlarından birisi verileri saklamak ve manipüle edebilmektir. Arrays (diziler) bu işe yaramaktadır. Array'lerde bir değişken (variable) tanımlayarak birden fazla değeri (value) saklayabilir ve onları daha sonra çeşitli metotlarla kullanabiliriz. Array oluşturmak için köşeli parantez kullanırız. Oluşturulan array'de her bir değere 'element' (eleman) denir.Bir array'in içine yazabileceğimiz elemanların veri tipi (data type) önemli değildir. Örneğin aynı array'de bir string ile number değer olarak atanabilir.

//NOT : "Const" ile deklare ettiğimiz bir array'i yeniden tayin(sıfırdan tanımlama) edemeyeceğimizi bilmeliyiz. "const" ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır.


//Array Olusturmak
let arr = [1, 2, "bir string ifade", false, {title:"kodluyoruz"}] //object dahil dizi içinde olabiliyor
let emptyArray = [] //bos liste


let domain =  "kodluyoruz"
let isActive = false
let items = [15, 25, 35 ,isActive, domain]
console.log(items)

//tüm dizi elemanlarını gostermek/erismek
for (let i=0; i<items.length; i++){
    console.log(items[i])
}

//foreach ile dizi elemanlarına erisim-->Burada arrow function şeklinde yazılmış forEach metodu her bir dizi elemanı için çalıştırılır. item değeri dizinin o anki elamanını tutar ve index değeri ise o anki elemanın index değeridir. Bu kodu çalıştırdığımızda dizinin her elemanının aynı for döngüsünde olduğu gibi çıktısını görebiliriz.
items.forEach((item,index)=>{
    console.log("foreach:", item,index)
}) 

let array = [1, 2, 3,["dort", "bes", "altı"], 7, 8]  //Bir dizi içinde farklı bir dizi(diziler) tanımlayabiliriz.
//dizi icindeki dizinin elemanlarına ulasmak --> once icerdeki dizinin buyuk dızıdeki index numarası sonra eleman ındek numarası
console.log("dizi icindeki dizi elemani: ", array[3][1] ) // "bes" doner

//Array icindeki eleman/oge sayisini ogrenmek
console.log( items.length ) 

document.querySelector("#info").innerHTML = items.length //sayfamıza yazdirdik

//Array icindeki ilk elemanın cagirilmasi
console.log("ilk eleman: ", items[0] )

//Yukaridaki Array icindeki orta elemanın cagrilmasi -- normalde eleman sayisi tek/cift olmasına gore degisir
console.log("ortadaki eleman: ", items[ Math.floor(items.length/2)])

//Array icindeki son elemanın cagrilmasi
console.log("son eleman: ",  items[items.length-1] )
console.log(items[-1]) //undefined donuyor

//degisken icindeki bilginin Array olup olmadiginin kontol edilmesi
console.log( typeof(items) ) //object olarak cikti veriyor

console.log(
    Array.isArray(items) //true donduruyor
)

//Hangileri isArray --> True??
console.log ("[]: ", Array.isArray( [] ))  //true
console.log ("1: ", Array.isArray( 1 ))     //false
console.log ("true: ", Array.isArray( true ))     //false