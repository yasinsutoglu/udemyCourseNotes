/*DOM object Event'leri ile calısmak*/


//ornek1 - fonksiyon parametresi icerde
let text = document.querySelector("#greeting")
text.addEventListener("click", function(){
    console.log("tiklandi")
    console.log(this.innerHTML = "tıklanınca bilgi degisti")
} )


//Ornek 2 - fonksiyon parametresi dısarda
let infoText = document.querySelector("#info")
infoText.addEventListener("mouseover" , domMouseOver);

function domMouseOver(){
    console.log("mouse over")
    this.style.color == "red" ? this.style.color="black" : this.style.color = "red"
}
