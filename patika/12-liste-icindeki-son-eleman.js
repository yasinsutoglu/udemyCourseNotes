/*Liste icindeki son elemana ulasmak veya eleman eklemek */

//son ogeye ulasıp,degistirdik
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti"

//ilk ogeye ulasıp,degistirdik
let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti"

//en sona oge eklemek
let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement("li")
liDOM.innerHTML = "en sona yapılan ekleme"
ulDOM.append(liDOM) //sona ekleme yaptık

let liDOM2 = document.createElement("li")
liDOM2.innerHTML = "en basa yapılan ekleme"
ulDOM.prepend(liDOM2) //ilk basa ekleme yaptık
