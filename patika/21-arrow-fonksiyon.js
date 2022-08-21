//ARROW FUNCTION --> FAT ARROW'da denilir

//Normal Fonksiyon yazımı
function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}

hello("javascript")


//Yukarıdakinin Arrow Fonksiyon Hali
const hello2 = (firstName) => { 
    console.log(`Merhaba ${firstName}`) 
}

hello2("React")

//Bir parametre ve bir satır kod blogu varken yazım hali
const hello3 = firstName => console.log(`Merhaba ${firstName}`)

hello3("CSS")

//Birden fazla parametre ve tek satır kod blogu olan hali
const hello4 = (firstName,lastName) => console.log(`merhaba ${firstName} ${lastName}`)

hello4("yasin","sutoglu")

//birden fazla parametre ve birden fazla kod satırı olan kod blogu hali - () ve {} kullanimi dikkat!
const hello5 =  (firstName,lastName) => {
    let info = `merhaba ${firstName} ${lastName}`
    console.log(info)
}

hello5("hakan","yalcinkaya")