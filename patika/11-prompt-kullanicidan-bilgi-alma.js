/*Prompt ile kullanıcıdan bilgi almak*/
//Prompt() kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir window metodudur. alert() gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog penceresi şeklinde çıkar.

//Prompt ile acilan pencerede,kullanıcı Tamam düğmesini tıkladığında, giriş alanına girilen metin döndürülür. Kullanıcı herhangi bir metin girmeden Tamam'ı tıklarsa, boş bir dize döndürülür. Kullanıcı İptal düğmesini tıklarsa, bu işlev boş döndürür.

let fullName = prompt("Lutfen adınızı giriniz: ", "ingilizce karakter olarak giriniz")
// console.log(fullName)

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`