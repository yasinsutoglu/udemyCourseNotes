// FETCH API ile Calismak
/*
Fetch API, kaynakların (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar. Promise tabanlı olduğu için async bir yapıdır. Promise ES6 ile gelen bir özelliktir. Callback fonksiyonlarının yerine kullanabiliyoruz. Fetch API'da promise yapısını kullanarak bizim Ajax'ın yerine kullanabileceğimiz bir yapı sunuyor. Ayrıca Fetch API window objesi ile birlikte geliyor. Eğer window objesini konsolda yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.
Fetch API ile yapabildiğimiz şey; bir veri sunucudan geldikten sonra işlem yapabilmektir. 
*/

/*
Fetch Interfaces
*fetch(), bu yöntem bir kaynak almak için kullanılır.

*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.

*Request , bir kaynak talebini temsil eder.

*Response, bir isteğe verilen yanıtı temsil eder.
-----------------------
***Temel Fetch Kullanımı***

Fetch API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.
fetch(url);

fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:
.then(function() {
})

------------------
// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json()) //parse json data
	.then(function (todos) {
		todos.forEach((todo) => {
			console.log(todo.title); //Başlıkları console' a yazdırma
		});
	}).catch(err => console.log(err));

KODU ACIKLAYALIM:
fetch("https://jsonplaceholder.typicode.com/todos");

Fetch isteği yaptığımızda then fonksiyonunu çağırır.

.then((response) => response.json())

Her şey yolunda giderse gelen veri, then içerisinde bize response olarak gelir. Ve response’u parametre olarak alırız, json içeriğini elde etmek için .json() metodunu kullanırız.

.then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})

Bu kez then() metodu içerisinde, önceki metottan gelen sonucu alarak console’da gösterecek bir fonksiyon yazdık. Bu fonksiyon, todos adında bir parametre alıyor ve her todos ’dan forEach metodu yardımıyla todos.title değerini alıp console’a yazdırıyoruz.

.catch((err) => console.log(err))
Ve en sonunda catch() metoduyla herhangi bir aşamada hata oluşursa, bu hatayı parametre olarak alıp console’a yazdırıyoruz.
-------------------------------------
//POST isteği ile verimizi servera gönderelim

let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
*/


//Localimizdeki Json dosyadan veri cektik
fetch("data/settings.json").then( response => {
    return response.json()
} ).then( responseJson => {
    console.log(responseJson) //Json Bilgilerine ulastık
    console.log(responseJson.userName) //fakeUser'a ulastık
} )

//API üzerinden veri cektik

//Console.log() ile gosterdik
// fetch("https://jsonplaceholder.typicode.com/posts").then( response => {
//     return response.json()
// } ).then( json => {
//     console.log(json[0]) // API'de posts ile gelen verilerden ilkine ulastık, yazdırdık
// } )


//Api üzerinden cekilen verileri(postları) DOM üzerinde ul'ye li'ler halinde ekledik
let userListDOM = document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts").then( response => {
    return response.json()
} ).then( json => {
    json.forEach(item => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.append(liDOM)
    });
} )

//BASKA ORNEK
 
fetch("https://jsonplaceholder.typicode.com/comments").then( (response) => response.json()).then( (json) => {
    json.forEach((item) => {
        console.log(item.email)
    })
}).catch( (err) => console.log(err) )