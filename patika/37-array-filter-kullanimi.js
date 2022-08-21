// ARRAY FILTER KULLANIMI --> Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır. Yani sonucu dizi olarak doner geri.

//5 harften fazla (6) olanlar??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop", "Server", "Mouse", "Keyboard"]

const newProducts = PRODUCTS.filter(item => item.length > 5)
console.log(newProducts)

//Aktif Kullanıcılar ??
const USERS = [
    {fullname: "Ayse Sumer", isActive: false},
    {fullname: "Ahmet Urgan", isActive: true},
    {fullname: "Asya Basar", isActive: true},
    {fullname: "Aksel Durmaz", isActive: false},
]

//1.yontem
//const activeUsers = USERS.filter(item => item.isActive === true)
//2.yontem --> burada, "item.isActive" direkt true'yu sorguladıgından 1.yontemdeki gibi yazmadik
const activeUsers = USERS.filter(item => item.isActive)
console.log(activeUsers)//Bu satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.

