//FOR YAZIMI
/* for (baslangicAtamasi; kosulIfadesi ; arttırımIfadesi){
    YAPILACAK ISLEMLER
}
*/

let users = ["lorem", "ipsum" , "dolor"]

//Yontem 1
// for(let index=0; index<10; index++){
//     console.log(index)
// }

//Yontem 2
// let index = 0
// for(; index<10 ; index++ ){
//     console.log(index)
// }

//DOM'daki ul'ye li olarak eklemek
const userListDOM = document.querySelector('#userList')

for(index = 0 ; index <= users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}