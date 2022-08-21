/*Kosullarla Calismak*/
/*
If else yapısı içerisinde koşulun sağlandığı kodlar if içerisinde yer alırken, koşulun sağlanmadığı kodlar ise else içerisinde yer alır.

Eğer ilk koşul yanlışsa başka bir koşul belirtmek amacıyla "else if" kullanılır

Else kod blokları arasında tek satırlık bir kod yazılacaksa köşeli parantez { } kullanımına gerek yoktur.
*/

//eger kullanici bilgisi varsa ekrana ismini yazdir

//let userName = prompt("kullanici adini giriniz: ")

if(userName.length>0) 
{
    console.log(`kullanici bilginiz: ${userName}`)
}
else{
    console.log("Bilgi Yok!")
}

