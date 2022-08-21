//FORM BOLUM SONU EGZERSİZ
//Formu Sec --> Input bilgisini Ul içine ekle --> form icindeki bilgiyi sıfırla --> eger forma bilgi girilmemisse kullaniciyi uyar

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit' , formHandler)

//burada alert gosterme hatali giris olayı için yapıldı
const alertDOM = document.querySelector('#alert')

const alertFunction = (title , message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


function formHandler(event){
    event.preventDefault() //submit anında sayfa yenilenmesi engelleniyor
    const USERNAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USERNAME.value && SCORE.value){
        addItem(USERNAME.value , SCORE.value) //asagıdaki addItem fonksiyonunu ekleme yapmk için cagırdık
        USERNAME.value=""  //içerikleri sıfırladık
        SCORE.value=""
    }
    else{
        alertDOM.innerHTML = alertFunction('Baslik Bilgisi!','Eksik Bilgi Girdiniz', 'danger')
    }
    
}


let userListDOM = document.querySelector('#userList') //DOM'da ul'ye ulastık userListDOM'a atadık

//arrow function
const addItem = (userName, score) => {
    let liDOM = document.createElement('li') // yeni li olusturduk
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>` //li icerisine bilgi eklemeleri yaptık

    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')    
    userListDOM.append(liDOM)  //ul'ye yeni li'yi eklemis olduk
}

