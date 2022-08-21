// Css class eklemek veya cikarmak 

// JavaScrip’te CSS class'larını manipüle etmenin en iyi yollarından biri classList kullanmaktır. classList bir öğenin sınıf isimlerini DOMTokenList olarak döndürür. classList özelliği tüm modern browserlarda çalışır.

//add() : HTML öğesine bir veya daha fazla class ekler.

//remove() : HTML öğesinden bir veya daha fazla class'ı siler.

//item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.

//contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.

//Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.Bu metodu kullanmadan önce contains() metodu ile sınıfın var olup olmadığını manuel olarak kontrol etmek gerekir.

//replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
//length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.

let heading = document.querySelector("#greeting")

heading.classList.add("text-primary")
heading.classList.add("title") //bir tane class eklemek

heading.classList.add("new-info", "second-class" , "third-class") // birden fazla class eklemek

heading.classList.remove("title", "second-class" , "third-class") // birden fazla class silmek

heading.classList.toggle("third-class") //third-class yokken tekrar ekledi

heading.classList.replace("new-info", "info") //new-info'yu info ile degistirdi

console.log(heading.classList.item(0)) // greeting id'li ögenin ilk class'ı çağırdık.

console.log(heading.classList.contains("second-class")) // false doner