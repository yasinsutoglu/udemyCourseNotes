
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

 


function formSubmit( event ){
    event.preventDefault() 
    console.log('islem oldu')

    //bu sayfada yeni eklenen kısım asagıdakilerdir.

    //Form'dan veriyi almak icin once DOM üzerindeki id'sinden ulastık degiskene atadık ve artık kullanabiliriz
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    //mesela localStorage'a atmak istemiş olalım
    localStorage.setItem('score', scoreInputDOM.value)

}