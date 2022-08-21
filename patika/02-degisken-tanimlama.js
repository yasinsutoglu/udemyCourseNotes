// 1. "var" (eski bir değisken tanımlama yöntemi; artık kullanılmıyor) ile değişken tanımlama

// var serverName="api.kodluyoruz";
// console.log(serverName)

// 2. "let" ile değişken tanımlama
/* "let" değişkeni aynı isimle tekrardan aynı blokta tanımlanamaz.Farklı bloklarda aynı isimle tanımlanabilir. "let" ile deklare edilen her değişken bulunduğu blokta tanımlıdır.*/

// A) let serverName;
//    serverName="htttps://kodluyoruz.org"
//    console.log(serverName)

// B) let password="asdalska123";
//    password= 1234              --> "let"de tanımlanan değişken içeriğini defalarca değiştirilebiliyoruz.
//    console.log(password)


// BİRLESTİRME ve EKLEME
// let fullName="yasin sut"
// fullName+=" yeni bilgi"      --> fullName = fullName + "yeni bilgi"
// console.log(fullName + " Surname")
// console.log(fullName)
//  fullName="sifirlandi"
//  fullName="ön bilgi" + fullName

// 3. "const" ile değişken tanımlama  --> "const"da tanımlanan degisken icerigi sonradan degistirilemez.
// const ile değişken tanımlarken aynı zamanda içerik ataması da yapılmalıdır.
/*Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.*/
const SERVER_PASSWORD ="asdasfaf214";
console.log(SERVER_PASSWORD)
