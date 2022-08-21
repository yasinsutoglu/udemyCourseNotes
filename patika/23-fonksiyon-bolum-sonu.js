//Fonksiyon bolum sonu egzersizi

let counter =  localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 // burada local storage'dan aldıgım counter bilgisi var mı, varsa string halden number'a cevir onu degiskene ata, yoksa degiskene 0 ata 

let counterDOM = document.querySelector("#counter")

counterDOM.innerHTML = counter

let incDOM = document.querySelector("#increase")
let decDOM = document.querySelector("#decrease")

incDOM.addEventListener("click", btnClick)
decDOM.addEventListener("click", btnClick)

function btnClick(){
    //console.log(this.id) // this bize "bu fonksiyon içinde" butonu getiriyor. Burada butonun id'sine ulastık.
    

    //this.id == "increase" ? counter+=1 : counter-=1 //alternatif ternary code
    if(this.id == "increase"){
        counter += 1
    }
    else if(this.id == "decrease"){
        counter -= 1
    }    
    localStorage.setItem('counter', counter) // her arttır azalt içinn butona basılınca counter bilgisi local storage'a atıldı
    counterDOM.innerHTML = counter
}